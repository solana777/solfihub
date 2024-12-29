import type { MetaDataJson } from 'src/types/metadata';
import type { Inputs } from 'src/schema/create-token-schema';

import { useForm } from 'react-hook-form';
import { useState, useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Keypair, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import {
  PROGRAM_ID,
  createCreateMetadataAccountV3Instruction,
} from '@metaplex-foundation/mpl-token-metadata';
import {
  MINT_SIZE,
  AuthorityType,
  TOKEN_PROGRAM_ID,
  createMintToInstruction,
  getAssociatedTokenAddress,
  createSetAuthorityInstruction,
  createInitializeMintInstruction,
  getMinimumBalanceForRentExemptMint,
  createAssociatedTokenAccountInstruction,
} from '@solana/spl-token';

import { LoadingButton } from '@mui/lab';
import { Chip, Stack, Typography } from '@mui/material';

import axiosInstance from 'src/utils/axios';
import { baseFee, serviceFEE, creatorInfoFee } from 'src/utils/fees';

import { addComputeBudget } from 'src/actions/priorityFeesIx';
import { FormDataSchema } from 'src/schema/create-token-schema';
import UploadFileToBlockChain from 'src/actions/uploadToArweave';
import { tags } from 'src/helpers/common';

import { Form, Field } from 'src/components/hook-form';
import CustomCardHeader from 'src/components/custom-card-header/customer-card-header';

import { fNumber } from 'src/utils/format-number';
import { toast } from 'src/components/snackbar';

const defaultValues = {
  tokenName: '',
  tokenSymbol: '',
  description: '',
  singleSelect: 'Token Program',
  totalSupply: 0,
  decimals: 9,
  immutable: false,
  freezeAddress: false,
  mintAuthority: false,
  tags: [],
  coverUrl: '',
  transactionPriority: 'standard',
  createTokenPage: false, // Switch başlangıçta kapalı
};

// ----------------------------------------------------------------------

export default function SolanaTokenCreateForm() {
  const [file, setFile] = useState(null);
  const { connection } = useConnection();
  const { publicKey, connected, signTransaction } = useWallet();
  const { setVisible: setModalVisible } = useWalletModal();
  // const router = useRouter();

  const methods = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues,
  });

  const {
    formState: { isSubmitting },
    watch,
    handleSubmit,
    reset,
    setValue,
  } = methods;

  const handleDrop = useCallback(
    (acceptedFiles: any[]) => {
      const innerFile = acceptedFiles[0];
      setFile(innerFile);
      const fileUrl = URL.createObjectURL(innerFile);
      setValue('coverUrl', fileUrl, { shouldValidate: true });
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('coverUrl', '');
    setFile(null);
  }, [setValue]);

  const onSubmit = handleSubmit(async (data) => {
    if (!connected) {
      setModalVisible(true); // Show wallet modal if not connected
      return;
    }

    // Check wallet balance
    // const hasSufficientBalance = await checkWalletBalance(publicKey!, connection, LAMPORTS_PER_SOL * 0.125);
    // if (!hasSufficientBalance) {
    //   return;
    // }

    if (file) {
      const arweaveUrl = await UploadFileToBlockChain(file);
      data.coverUrl = arweaveUrl;
    }

    let PRIORITY_RATE;

    // Set PRIORITY_RATE based on user preference and dynamic priority fees
    switch (data.transactionPriority) {
      case 'high':
        PRIORITY_RATE = 100_000;
        break;
      case 'extreme':
        PRIORITY_RATE = 150_000;
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        PRIORITY_RATE = 50_000;
    }

    try {
      // Initialize metaDataJson with basic fields
      const metaDataJson: MetaDataJson = {
        name: data.tokenName,
        symbol: data.tokenSymbol,
        description: data.description,
        image: data.coverUrl,
        extensions: {
          website: data.createTokenPageFields?.website || undefined,
          twitter: data.createTokenPageFields?.twitter || undefined,
          discord: data.createTokenPageFields?.discord || undefined,
          telegram: data.createTokenPageFields?.telegram || undefined,
        },
        tags: data.tags?.filter((tag): tag is string => tag !== undefined),
        sellerFeeBasisPoints: 0,
      };

      // Conditionally add creator if creatorInfo is true and fields are provided
      if (
        data.creatorInfo &&
        data.createorInfoFields?.creatorName &&
        data.createorInfoFields?.creatorContact
      ) {
        metaDataJson.creator = {
          name: data.createorInfoFields.creatorName,
          site: data.createorInfoFields.creatorContact,
        };
      }

      // if the vales.singleSelect is basic then send the data to the backend if it's token2022 then send the data to the backend
      if (data.singleSelect === 'Token Program') {
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const arweaveUrl = await UploadFileToBlockChain(
          new File([JSON.stringify(metaDataJson)], 'metadata.json', { type: 'application/json' })
        );
        const serviceFee = LAMPORTS_PER_SOL * 0.125;
        const mintKeypair = Keypair.generate();
        const tokenATA = await getAssociatedTokenAddress(mintKeypair.publicKey, publicKey!);

        const featuresSelected = [
          data.mintAuthority,
          data.freezeAddress,
          data.immutable,
          data.creatorInfo,
        ].filter((v) => v).length;
        const additionalServiceFeeLamports = featuresSelected * serviceFEE * LAMPORTS_PER_SOL;
        const totalServiceFeeLamports = serviceFee + additionalServiceFeeLamports;

        const transferInstruction = SystemProgram.transfer({
          fromPubkey: publicKey!,
          toPubkey: new PublicKey('Pcht7ptpQ79fbE7yuiDMFaW8JW7cxXniumqjSbVdZDp'), // your wallet address
          lamports: totalServiceFeeLamports,
        });

        const createMetadataInstruction = createCreateMetadataAccountV3Instruction(
          {
            metadata: PublicKey.findProgramAddressSync(
              [Buffer.from('metadata'), PROGRAM_ID.toBuffer(), mintKeypair.publicKey.toBuffer()],
              PROGRAM_ID
            )[0],
            mint: mintKeypair.publicKey,
            mintAuthority: publicKey!,
            payer: publicKey!,
            updateAuthority: publicKey!,
          },
          {
            createMetadataAccountArgsV3: {
              data: {
                name: data.tokenName,
                symbol: data.tokenSymbol,
                uri: arweaveUrl!,
                creators: null,
                sellerFeeBasisPoints: 0,
                collection: null,
                uses: null,
              },
              isMutable: !data.immutable,
              collectionDetails: null,
            },
          }
        );

        let createNewTokenTransaction = new Transaction().add(
          transferInstruction,
          SystemProgram.createAccount({
            fromPubkey: publicKey!,
            newAccountPubkey: mintKeypair.publicKey,
            space: MINT_SIZE,
            lamports,
            programId: TOKEN_PROGRAM_ID,
          }),
          createInitializeMintInstruction(
            mintKeypair.publicKey,
            data.decimals,
            publicKey!,
            publicKey!,
            TOKEN_PROGRAM_ID
          ),
          createAssociatedTokenAccountInstruction(
            publicKey!,
            tokenATA,
            publicKey!,
            mintKeypair.publicKey
          ),
          createMintToInstruction(
            mintKeypair.publicKey,
            tokenATA,
            publicKey!,
            data.totalSupply * 10 ** data.decimals
          ),
          createMetadataInstruction
        );

        if (data.mintAuthority) {
          const mintAuthorityAuthorityInstruction = createSetAuthorityInstruction(
            mintKeypair.publicKey,
            publicKey!,
            AuthorityType.MintTokens,
            null,
            [],
            TOKEN_PROGRAM_ID
          );

          createNewTokenTransaction.add(mintAuthorityAuthorityInstruction);
        }
        if (data.freezeAddress) {
          const freezeAuthorityInstruction = createSetAuthorityInstruction(
            mintKeypair.publicKey,
            publicKey!,
            AuthorityType.FreezeAccount,
            null,
            [],
            TOKEN_PROGRAM_ID
          );

          createNewTokenTransaction.add(freezeAuthorityInstruction);
        }

        const { blockhash } = await connection.getLatestBlockhash();
        createNewTokenTransaction.recentBlockhash = blockhash;
        createNewTokenTransaction.feePayer = publicKey!;

        // to do : improve tx confirtmation and by improving this and implementing jitoLabs
        createNewTokenTransaction = addComputeBudget(createNewTokenTransaction);

        if (signTransaction) {
          createNewTokenTransaction.partialSign(mintKeypair);
          const signedTransaction = await signTransaction(createNewTokenTransaction);
          await connection
            .sendRawTransaction(signedTransaction.serialize())
            .then((signature: any) => signature)
            .then((signature: any) =>
              axiosInstance
                .post(`${process.env.NEXT_PUBLIC_HOST_API_V2}/tokenOrder`, {
                  program: 1,
                  tokenName: data.tokenName,
                  tokenSymbol: data.tokenSymbol,
                  description: data.description,
                  // websiteUrl: data.createTokenPageFields?.website,
                  // twitterUrl: data.createTokenPageFields?.twitter,
                  // discordUrl: data.createTokenPageFields?.discord,
                  // telegram: data.createTokenPageFields?.telegram,
                  programName: data.singleSelect,
                  tokenSupply: data.totalSupply,
                  decimals: data.decimals,
                  orderValue: lamports,
                  tags: data.tags,
                  tokenPictureUrl: data.coverUrl,
                  tokenAddress: mintKeypair.publicKey.toBase58(),
                  metadata: {
                    name: data.tokenName,
                    symbol: data.tokenSymbol,
                    uri: arweaveUrl,
                  },
                  freezeAddress: data.freezeAddress,
                  mintAuthority: data.mintAuthority,
                  immutable: data.immutable,
                  signature,
                  links: data.createTokenPageFields,
                })
                .then((response: any) => ({ response, signature }))
            )
            .then(({ response, signature }: { response: any; signature: string }) => {
              toast.success('Token created successfully');

              // to do : redirect to the completed page
              // router.push(`/dashboard/token/create-token/completed/${mintKeypair.publicKey}`);

              return axiosInstance.post(`${process.env.NEXT_PUBLIC_HOST_API_V2}/verifyPayment`, {
                signature,
                orderId: response.data._id,
              });
            })
            .then(() => {
              toast.success('Order verified successfully');
              reset();
            })
            .catch((error) => {
              console.error('An error occurred:', error);
              toast.error('An error occurred while creating the token');
            });
        }
      }
      // Add the rest of the logic for 'Tax Payer (Token 2022)' here as needed...
    } catch (error) {
      console.error('Failed to send transaction:', error);
      toast.error('An error occurred while creating the token!');
    }
  });

  // Watch relevant fields
  const immutable = watch('immutable');
  const freezeAddress = watch('freezeAddress');
  const mintAuthority = watch('mintAuthority');
  const creatorInfo = watch('creatorInfo');

  // Calculate the total service fee
  const totalServiceFee =
    baseFee +
    (immutable ? serviceFEE : 0) +
    (freezeAddress ? serviceFEE : 0) +
    (mintAuthority ? serviceFEE : 0) +
    (creatorInfo ? creatorInfoFee : 0);

  const showCreatorInfoFields = watch('creatorInfo');
  const showCreateTokenPageFields = watch('createTokenPage');

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack direction="column" alignItems="center">
        <CustomCardHeader
          title="Solana Token Creator"
          icon="iconoir:flash"
          description="Easily mint and create your own Solana token without coding."
        >
          <Stack>
            <Stack spacing={3} direction="row">
              <Stack width={1} direction="column" spacing={1}>
                <Typography variant="subtitle2">Token Name (Max 30)*</Typography>
                <Field.Text name="tokenName" placeholder="Parachute Token" />
              </Stack>
              <Stack width={1} direction="column" spacing={1}>
                <Typography variant="subtitle2">Token Symbol (Max 10)*</Typography>
                <Field.Text name="tokenSymbol" placeholder="PCHT" />
              </Stack>
            </Stack>
            <Stack sx={{ my: 1 }} width={1} direction="column" spacing={1}>
              <Typography variant="subtitle2">Decimals*</Typography>
              <Field.Text type="number" name="decimals" placeholder="Decimals" />
            </Stack>
            <Stack sx={{ my: 1 }} width={1} direction="column" spacing={1}>
              <Typography variant="subtitle2">Total Supply*</Typography>
              <Field.Text type="number" name="totalSupply" placeholder="1 000 000 000" />
            </Stack>
            <Stack sx={{ my: 1 }} width={1} direction="column" spacing={1}>
              <Typography variant="subtitle2">Token Logo*</Typography>
              <Field.Upload
                onDrop={handleDrop}
                onDelete={handleRemoveFile}
                name="coverUrl"
                maxSize={3145728}
              />
            </Stack>
            <Stack sx={{ my: 1 }} width={1} direction="column" spacing={1}>
              <Typography variant="subtitle2">Description*</Typography>
              <Field.Text multiline rows={3} name="description" placeholder="Token Description" />
            </Stack>
            <Stack sx={{ my: 1 }} width={1} direction="column" spacing={1}>
              <Typography variant="subtitle2">Tags(optional)</Typography>
              <Field.Autocomplete
                helperText="Select tags that are most associated with your project - max 3 tags"
                name="tags"
                placeholder="+ Tags"
                multiple
                freeSolo
                options={tags.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="primary"
                      variant="soft"
                    />
                  ))
                }
                onChange={(_event, newValue) => {
                  if (newValue.length <= 3) {
                    methods.setValue('tags', newValue); // Replace `setValue` with your form's method to update the field value
                  } else {
                    // Show some error or warning to the user, if necessary
                  }
                }}
              />
            </Stack>
            <Stack sx={{ my: 1 }} width={1} direction="column" spacing={1}>
              <Field.Switch name="immutable" label="Immutable (Fee: 0.025 SOL)" />
              <Field.Switch name="freezeAddress" label="Revoke Freeze Authority (Fee: 0.025 SOL)" />
              <Field.Switch name="mintAuthority" label="Revoke Mint Authority (Fee: 0.025 SOL)" />
              <Field.Switch name="creatorInfo" label="Custom Creator Information (Fee: 0.05 SOL)" />
            </Stack>

            <Stack direction="column" spacing={1.5}>
              <LoadingButton
                loading={isSubmitting}
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 3 }}
              >
                Create Token
              </LoadingButton>

              <Typography color="primary.light" variant="h6">
                <Stack spacing={0.5} alignItems="center" justifyContent="center" direction="row">
                  Service Fee:
                  <Typography variant="h6" sx={{ textDecoration: 'line-through' }}>
                    {Number(fNumber(totalServiceFee)) * 2} SOL
                  </Typography>
                  <Typography variant="h6">{fNumber(totalServiceFee)} SOL</Typography>
                </Stack>
              </Typography>
            </Stack>
          </Stack>
        </CustomCardHeader>
      </Stack>
    </Form>
  );
}
