import { Link, Typography } from '@mui/material';


export const CREATE_TOKEN_FAQs = [
  {
    question: 'What is Solana Token Creator?',
    answer: (
      <Typography>
        Solfihub.com&apos;s <strong>Solana Token Creator</strong> is a powerful and intuitive platform that enables you to
        create and manage SPL tokens on the Solana blockchain with zero coding experience required.
      </Typography>
    ),
  },
  {
    question: 'How much does it cost to create a Solana token with Solfihub.com?',
    answer: (
      <Typography>
        Creating a Solana token on Solfihub.com costs 0.125 SOL, providing an economical solution for
        launching your token on the Solana blockchain.
      </Typography>
    ),
  },
  {
    question: 'What is an SPL token on the Solana blockchain?',
    answer: (
      <Typography>
        SPL tokens are Solana Program Library (SPL) tokens, the standard for fungible and
        non-fungible tokens on the Solana blockchain, similar to ERC-20 token standart on Ethereum.
      </Typography>
    ),
  },
  {
    question: 'Can I create a meme coin on Solana using your tool?',
    answer: (
      <Typography>
        Yes, you can easily <strong>create a meme coin</strong> on Solana using the
        <strong> Solana Token Creator</strong> on Solfihub.com.
        <Link href="#" sx={{ mx: 0.5 }}>
          Start creating.
        </Link>
      </Typography>
    ),
  },
  {
    question: 'What Solana wallets are supported by Solfihub.com?',
    answer: (
      <Typography>
        Solfihub.com supports wallets such as Phantom, Solflare, and Sollet, ensuring seamless
        integration with the Solana blockchain.
      </Typography>
    ),
  },
  {
    question: 'What is a profile page for a Solana token?',
    answer: (
      <Typography>
        On Solfihub.com, a profile page for a Solana token shows important information about your token
        such its name, symbol, and transaction history. Create one by just copying and pasting your
        token address into Solfihub.com; the profile page will then be created automatically. It&apos;s
        free to use and always accessible, offering a professional and quick way to display your
        token after you launch it.
        <Link href="#" sx={{ mx: 0.5 }}>
          Create yours here.
        </Link>
      </Typography>
    ),
  },
  {
    question: 'Is Solfihub.com responsible for tokens created on the platform?',
    answer: (
      <Typography>
        Solfihub.com is a decentralized app that offers tools for creating and managing tokens on
        Solana. While we provide the necessary infrastructure, we are not responsible for the
        actions taken with the tokens created on our platform. You are entirely responsible for the
        creation, management, and legal compliance of your tokens.
      </Typography>
    ),
  },
];


