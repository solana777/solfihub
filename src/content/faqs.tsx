import { Box, Link, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

export const CREATE_TOKEN_FAQs = [
  {
    question: 'What is Solana Token Creator?',
    answer: (
      <Typography>
        Parachute&apos;s <strong>Solana Token Creator</strong> is a user-friendly tool that lets you
        easily create and manage SPL tokens on the Solana blockchain without needing any coding
        skills.
      </Typography>
    ),
  },
  {
    question: 'How much does it cost to create a Solana token with Parachute?',
    answer: (
      <Typography>
        Creating a Solana token on Parachute costs 0.125 SOL, making it an affordable option for
        launching your token.
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
        <strong> Solana Token Creator</strong> on Parachute.
        <Link href={paths.createToken} sx={{ mx: 0.5 }}>
          Start creating.
        </Link>
      </Typography>
    ),
  },

  {
    question: 'What Solana wallets are supported by Parachute?',
    answer: (
      <Typography>
        Parachute supports wallets such as Phantom, Solflare, and Sollet, ensuring seamless
        integration with the Solana blockchain.
      </Typography>
    ),
  },
  {
    question: 'What is revoke mint authority on a Solana token?',
    answer: (
      <Typography>
        <Link href={paths.tools.revokeMint} sx={{ mr: 0.5 }}>
          Revoking mint authority
        </Link>
        means that no additional tokens can be minted after the initial creation, effectively fixing
        the total supply of your token. Learn more here.
      </Typography>
    ),
  },
  {
    question: 'What is revoke freeze authority for a Solana token?',
    answer: (
      <Typography>
        <Link href={paths.tools.revokeFreeze} sx={{ mr: 0.5 }}>
          Revoking freeze authority
        </Link>
        means that your tokens cannot be frozen by anyone, allowing them to remain transferable and
        in circulation. It’s crucial to build community trust. Learn more here.
      </Typography>
    ),
  },
  {
    question: 'What does it mean to make a Solana token immutable?',
    answer: (
      <Typography>
        Making a token immutable locks its metadata and settings permanently, ensuring they cannot
        be changed in the future. It’s crucial to build community trust. Learn more
        <Link sx={{ mx: 0.5 }} href={paths.tools.immutable}>
          here.
        </Link>
      </Typography>
    ),
  },
  {
    question: 'What is a profile page for a Solana token?',
    answer: (
      <Typography>
        On Parachute, a profile page for a Solana token shows important information about your token
        such its name, symbol, and transaction history. Create one by just copying and pasting your
        token address into Parachute; the profile page will then be created automatically. It&apos;s
        free to use and always accessible, offering a professional and quick way to display your
        token after you launch it. Create yours here.
        <Link href={paths.tools.createTokenPage} sx={{ mx: 0.5 }}>
          Create yours here.
        </Link>
      </Typography>
    ),
  },
  {
    question: 'Is Parachute responsible for tokens created on the platform?',
    answer: (
      <Typography>
        Parachute is a decentralized app that offers tools for creating and managing tokens on
        Solana. While we provide the necessary infrastructure, we are not responsible for the
        actions taken with the tokens created on our platform. You are entirely responsible for the
        creation, management, and legal compliance of your tokens.
      </Typography>
    ),
  },
];

export const SOLANA_SNAPSHOT_FAQS = [
  {
    question: 'What is the Solana Snapshot Tool?',
    answer: (
      <Typography>
        The <strong> Solana Snapshot Tool</strong> by Parachute is designed to capture real-time
        data on <strong>SPL token</strong> holders, essential for making airdrops, managing
        governance, and analyzing token distribution on the <strong>Solana blockchain.</strong>
      </Typography>
    ),
  },
  {
    question: 'How do I use the Solana Snapshot Tool?',
    answer: (
      <Typography>
        Simply connect your Solana wallet, select the token, and take the snapshot. The data will be
        available instantly for download in formats like CSV or JSON.
      </Typography>
    ),
  },
  {
    question: 'Can I use this tool for Solana airdrops?',
    answer: (
      <Typography>
        Yes, the Solana Snapshot Tool is perfect for identifying eligible participants for airdrops,
        ensuring accurate distribution based on up-to-date holder data.
      </Typography>
    ),
  },
  {
    question: 'Why do I need a snapshot tool for Solana?',
    answer: (
      <Typography>
        It helps you track token holders, organize airdrops, and manage governance efficiently by
        capturing real-time data from the blockchain.
      </Typography>
    ),
  },
  {
    question: 'How much does it cost to use the Solana Snapshot Tool?',
    answer: (
      <Typography>
        Using the Solana Snapshot Tool is affordable, with a fee of <strong>0.3 SOL</strong> per
        snapshot, making it accessible for projects of any size.
      </Typography>
    ),
  },
  {
    question: 'How can I get a list of token holders on Solana by using Parachute’s Snapshot Tool?',
    answer: (
      <Typography>
        By using the <strong> Snapshot Tool</strong> , paste any token address to retrieve accurate
        holder data on the
        <strong> Solana blockchain.</strong>
      </Typography>
    ),
  },

  {
    question: 'What wallets can I use with the Solana Snapshot Tool?',
    answer: (
      <Typography>
        You can use wallets such as Phantom, Solflare, and Sollet with the
        <strong> Snapshot Tool</strong> to efficiently manage your token snapshots.
      </Typography>
    ),
  },
  {
    question: 'What is the best way to snapshot token holders on Solana?',
    answer: (
      <Typography>
        The best way to snapshot token holders on Solana is by using the
        <strong>
          <Link href={paths.tools.snapshot} sx={{ mx: 0.5 }}>
            Solana Snapshot Tool
          </Link>
        </strong>
        . This tool allows you to capture real-time data of any <strong>SPL token</strong> address
        efficiently, without the need for coding. It’s perfect for governance, airdrops, and
        analyzing token distribution.
      </Typography>
    ),
  },
  {
    question: 'How do I check the holders of a token on Solana?',
    answer: (
      <Typography>
        You can check the holders of a token on Solana by pasting the token address into the
        <Link href={paths.tools.snapshot} sx={{ mx: 0.5 }}>
          <strong>Solana Snapshot Tool.</strong>
        </Link>
        The tool will provide a detailed snapshot of all token holders, which you can export for
        further analysis.
      </Typography>
    ),
  },
  {
    question: 'How do I track my token holders on Solana?',
    answer: (
      <Typography>
        To track your token holders on Solana, regularly use the
        <Link href={paths.tools.snapshot} sx={{ mx: 0.5 }}>
          <strong>Solana Snapshot Tool</strong>
        </Link>
        to capture and monitor the latest data on your token’s distribution. This ensures you stay
        informed about the status and engagement of your community.
      </Typography>
    ),
  },
];

export const MULTISENDER_FAQS = [
  {
    question: 'What is the Solana Multisender Tool, and how does it work?',
    answer: (
      <Typography>
        The
        <Link href="#" sx={{ mx: 0.5 }}>
          <strong>Solana Multisender Tool</strong>
        </Link>
        by Parachute allows you to efficiently distribute SPL tokens to multiple addresses in a
        single transaction. It’s perfect for airdrops, bulk token distributions, and other mass
        token transfers. Simply connect your wallet, upload the list of recipient addresses, and
        send your tokens—all in just a few clicks.
      </Typography>
    ),
  },
  {
    question: 'How can I use the Multisender App by Parachute?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li>
          Connect Your Wallet: Link your Solana-compatible wallet like Phantom, Solflare, or Sollet.
        </li>
        <li>
          Upload Recipient Addresses: Provide a list of wallet addresses you want to send tokens to.
        </li>
        <li>Set Token Amounts: Specify the amount of SPL tokens to be sent to each address.</li>
        <li>Execute the Transaction: Confirm and send the tokens in a single bulk transaction.</li>
        <Typography sx={{ mt: 2 }}>
          The Multisender tool simplifies the distribution process, making it ideal for airdrops and
          bulk transfers.
        </Typography>
      </Box>
    ),
  },
  {
    question: 'What is an Airdrop?',
    answer: (
      <Typography>
        An Airdrop is a method used to distribute tokens to multiple wallet addresses, usually for
        promotional purposes, community rewards, or to incentivize participation in a blockchain
        project.
      </Typography>
    ),
  },
  {
    question: 'How to make an Airdrop on Solana?',
    answer: (
      <Typography>
        To execute an Airdrop on Solana, use the <strong> Solana Multisender Tool,</strong> connect
        your wallet, upload the recipient addresses, set the token amounts, and initiate the airdrop
        in a single transaction.
      </Typography>
    ),
  },

  {
    question: 'How can I send SPL tokens to multiple addresses on Solana?',
    answer: (
      <Typography>
        With the <strong>Solana Multisender Tool</strong> , you can easily send SPL tokens to
        multiple addresses by connecting your wallet, uploading a list of recipient addresses,
        setting token amounts, and sending them all in one transaction.
      </Typography>
    ),
  },
  {
    question: 'How much does it cost to use the Solana Multisender Tool?',
    answer: (
      <Typography>
        The cost to use the <strong>Solana Multisender Tool</strong> is <strong>0.01 SOL </strong>
        per transaction. This includes the transaction fee and access to the multisender service.
      </Typography>
    ),
  },
  {
    question: 'Can I use the Solana Multisender Tool for airdrops?',
    answer: (
      <Typography>
        Yes, the <strong>Solana Multisender</strong> is specifically designed to make airdrops,
        allowing you to efficiently distribute tokens to large groups of recipients.
      </Typography>
    ),
  },
  {
    question: 'Which wallets are compatible with the Solana Multisender Tool?',
    answer: (
      <Typography>
        The <strong>Solana Multisender Tool</strong> supports popular Solana wallets like Phantom,
        Solflare, and Sollet, making it easy to connect and distribute tokens.
      </Typography>
    ),
  },
  {
    question: 'What types of tokens can I send with the Solana Multisender Tool?',
    answer: (
      <Typography>
        The <strong>Solana Multisender Tool </strong> supports sending any SPL tokens, making it
        versatile for various token distribution needs on the Solana blockchain.
      </Typography>
    ),
  },
  {
    question: `What are the key features of Parachute's Bulk Sender?`,
    answer: (
      <Typography>
        Parachute&apos;s Bulk Sender allows you to distribute SPL tokens to multiple recipients
        simultaneously, offers compatibility with popular Solana wallets like Phantom, and provides
        detailed transaction tracking on the blockchain.
      </Typography>
    ),
  },
  {
    question: `How to execute a Solana Airdrop?`,
    answer: (
      <Typography>
        Execute a Solana Airdrop by leveraging Parachute&apos;s Multisender Tool. It allows you to
        send tokens to multiple addresses quickly, ensuring a smooth and efficient distribution
        process.
      </Typography>
    ),
  },
];

export const BURN_TOKEN_FAQS = [
  {
    question: 'What does it mean to burn SPL tokens on Solana?',
    answer: (
      <Typography>
        Burning SPL tokens on Solana involves permanently removing unwanted tokens from circulation,
        reducing the total supply. This can be done easily using the
        <Link sx={{ mx: 0.5 }} href="#">
          <strong>Solana Token Burn Tool</strong>
        </Link>
        by Parachute, which helps manage inflation and potentially increase the value of remaining
        tokens.
      </Typography>
    ),
  },
  {
    question: 'How can I burn SPL tokens on Solana?',
    answer: (
      <Typography>
        To burn unwanted tokens on Solana, connect your wallet to the Parachute Burn Tool, select
        the SPL token you wish to burn, and specify the amount. This action permanently reduces the
        token supply.
      </Typography>
    ),
  },
  {
    question: 'Why should I burn SPL tokens on Solana?',
    answer: (
      <Typography>
        Burning tokens can help control supply, increase scarcity, and potentially boost the value
        of remaining tokens.
      </Typography>
    ),
  },
  {
    question: 'How to burn SPL tokens on Solana?',
    answer: (
      <Typography>
        To burn Solana tokens on, use Parachute’s Solana Token Burn Tool. Just connect your wallet,
        select the tokens you want to burn, and confirm the transaction. This process is
        irreversible and helps manage your token’s supply.
      </Typography>
    ),
  },
  {
    question: 'What are the benefits of burning tokens?',
    answer: (
      <Typography>
        Burning tokens can help reduce supply, potentially increasing the value of remaining tokens.
        The Solana Token Burn Tool allows you to easily burn SPL tokens on Solana, contributing to a
        more controlled and valuable token ecosystem.
      </Typography>
    ),
  },
  {
    question: 'Can I reverse the burning of tokens on Solana?',
    answer: <Typography>No, once tokens are burned, the process is irreversible.</Typography>,
  },
  {
    question: "Does burning tokens affect my project's market cap?",
    answer: (
      <Typography>
        Burning tokens reduces the circulating supply, which can impact the market cap depending on
        the token&apos;s price.
      </Typography>
    ),
  },
  {
    question: 'Is Parachute responsible for the tokens I burn using their tool?',
    answer: (
      <Typography>
        No, Parachute provides the platform to burn SPL tokens on Solana, but the decision and
        responsibility to burn tokens lie entirely with the user.
      </Typography>
    ),
  },
];
export const MINT_TOKEN_FAQS = [
  {
    question: 'How can I increase the token supply on Solana with Parachute?',
    answer: (
      <Typography>
        Use Parachute’s Solana Mint Tool to easily increase the supply of your SPL tokens by minting
        additional tokens directly on the Solana blockchain.
      </Typography>
    ),
  },
  {
    question: 'What is the Solana Mint Tool by Parachute?',
    answer: (
      <Typography>
        Parachute’s Solana Mint Tool lets you easily mint new SPL tokens, increasing the supply of
        your existing tokens without coding.
      </Typography>
    ),
  },
  {
    question: 'Why should I increase my token supply on Solana?',
    answer: (
      <Typography>
        Increasing your token supply can support project growth and reward users, but it may also
        dilute the value of existing tokens, potentially affecting their market price.
      </Typography>
    ),
  },
  {
    question: 'Can I mint new tokens on Solana without coding?',
    answer: (
      <Typography>
        Yes, Parachute’s user-friendly Mint Tool allows you to mint additional SPL tokens on Solana
        without any coding experience.
      </Typography>
    ),
  },
  {
    question: 'How much does it cost to mint tokens on Solana using Parachute?',
    answer: (
      <Typography>
        Minting tokens on Solana with Parachute costs just 0.025 SOL, offering a cost-effective
        solution for increasing your token supply.
      </Typography>
    ),
  },
  {
    question: 'What are the potential effects of minting new tokens on Solana?',
    answer: (
      <Typography>
        Minting new tokens can help grow your project, but it may also lead to dilution of token
        value, affecting the overall market price. It&apos;s important to consider these effects
        before increasing supply.
      </Typography>
    ),
  },
  {
    question: 'How do I manage my token supply using Parachute?',
    answer: (
      <Typography>
        With Parachute, you can mint, burn, and manage your SPL token supply, giving you full
        control over your project and its market dynamics.
      </Typography>
    ),
  },
  {
    question: 'Can I mint new tokens for an existing project on Solana?',
    answer: (
      <Typography>
        Yes, Parachute’s Mint Tool allows you to mint additional tokens for your existing SPL
        projects, helping you scale your token ecosystem.
      </Typography>
    ),
  },
  {
    question: 'Is Parachute responsible for the tokens I mint?',
    answer: (
      <Typography>
        Parachute provides the tools to mint SPL tokens, but the responsibility for managing and
        using these tokens rests with the user.
      </Typography>
    ),
  },
];

export const FREEZE_ACCOUNT_FAQS = [
  {
    question: 'What does it mean to freeze a wallet address on Solana?',
    answer: (
      <Typography>
        Freezing a wallet address on Solana stops it from sending or receiving SPL tokens, adding an
        extra layer of security.
      </Typography>
    ),
  },
  {
    question: 'Why should I freeze a wallet address?',
    answer: (
      <Typography>
        Freezing is crucial for maintaining control over your token distribution, especially during
        high-risk periods.
      </Typography>
    ),
  },
  {
    question: 'How do I freeze and unfreeze a wallet address on Solana?',
    answer: (
      <Typography>
        Connect your wallet to Parachute, select your token, and freeze or unfreeze the desired
        wallet address.
      </Typography>
    ),
  },
  {
    question: 'Can freezing a wallet address be misused?',
    answer: (
      <Typography>
        While freezing adds security, misuse by malicious actors can damage trust. Always act
        responsibly and transparently when freezing accounts.
      </Typography>
    ),
  },
  {
    question: 'Does freezing a wallet affect the balance?',
    answer: (
      <Typography>
        Freezing doesn&apos;t change the token balance; it only restricts transfers.
      </Typography>
    ),
  },
];

export const THAW_TOKEN_FAQS = [
  {
    question: 'What does it mean to thaw tokens on Solana?',
    answer: (
      <Typography>
        Thawing a token account on Solana means restoring its ability to send and receive SPL tokens
        after it has been frozen.
      </Typography>
    ),
  },
  {
    question: 'How can I thaw tokens on Solana using Parachute?',
    answer: (
      <Typography>
        To thaw SPL tokens, connect your wallet to Parachute, select the frozen account, and use the
        thaw feature to restore its functionality.
      </Typography>
    ),
  },
  {
    question: 'Why might I need to thaw a frozen Solana token account?',
    answer: (
      <Typography>
        Thawing is necessary when you need to re-enable a token account’s ability to participate in
        transfers after being frozen for security or strategic reasons.
      </Typography>
    ),
  },
  {
    question: 'What happens when a Solana token account is thawed?',
    answer: (
      <Typography>
        Once thawed, the account can resume normal activities, such as sending and receiving SPL
        tokens.
      </Typography>
    ),
  },
  {
    question: 'How does thawing affect the token supply on Solana?',
    answer: (
      <Typography>
        Thawing your SPL token does not impact the token supply; it only restores the account’s
        ability to transfer tokens.
      </Typography>
    ),
  },
];

export const FREEZE_TOKEN_FAQS = [
  {
    question: 'What does it mean to freeze a wallet address on Solana?',
    answer: (
      <Typography>
        Freezing a wallet address on Solana stops it from sending or receiving SPL tokens, adding an
        extra layer of security.
      </Typography>
    ),
  },
  {
    question: 'Why should I freeze a wallet address?',
    answer: (
      <Typography>
        Freezing is crucial for maintaining control over your token distribution, especially during
        high-risk periods.
      </Typography>
    ),
  },
  {
    question: 'How do I freeze and unfreeze a wallet address on Solana?',
    answer: (
      <Typography>
        Connect your wallet to Parachute, select your token, and freeze or unfreeze the desired
        wallet address.
      </Typography>
    ),
  },
  {
    question: 'Can freezing a wallet address be misused?',
    answer: (
      <Typography>
        While freezing adds security, misuse by malicious actors can damage trust. Always act
        responsibly and transparently when freezing accounts.
      </Typography>
    ),
  },
  {
    question: 'Does freezing a wallet affect the balance?',
    answer: (
      <Typography>
        Freezing doesn&apos;s change the token balance; it only restricts transfers.
      </Typography>
    ),
  },
];

export const REVOKE_FREEZE_FAQS = [
  {
    question: 'What is Freeze Authority on Solana?',
    answer: (
      <Typography>
        Revoking freeze authority ensures that no one, including the token creator, can freeze the
        SPL tokens in the future, protecting against potential risks like rug pulls and ensuring
        secure and unrestricted token transfers.
      </Typography>
    ),
  },
  {
    question: 'Why should I revoke freeze authority for my token?',
    answer: (
      <Typography>
        Revoke freeze authority to build community trust by preventing any possibility of rug pulls
        or unauthorized freezes, reassuring your community that their tokens are safe and
        decentralized.
      </Typography>
    ),
  },
  {
    question: 'How do I revoke freeze authority on Solana?',
    answer: (
      <Typography>
        Connect your wallet, select your token, and use Parachute’s tool to revoke freeze authority
        permanently. This straightforward process can be completed in just a few clicks.
      </Typography>
    ),
  },
  {
    question: 'Is revoking freeze authority permanent?',
    answer: (
      <Typography>
        Yes, once revoked, freeze authority cannot be reinstated. This provides long-term security
        and prevents any future tampering with the token’s ability to be transferred.
      </Typography>
    ),
  },
  {
    question: 'What are the risks of not revoking freeze authority?',
    answer: (
      <Typography>
        If freeze authority is not revoked, there is a risk that the tokens could be frozen by
        someone with that authority, leading to potential community distrust and the possibility of
        a rug pull.
      </Typography>
    ),
  },
  {
    question: 'Does revoking freeze authority affect token functionality?',
    answer: (
      <Typography>
        No, revoking freeze authority does not affect the functionality of your tokens. It simply
        ensures that the tokens cannot be frozen by anyone in the future.
      </Typography>
    ),
  },
  {
    question: 'Can I revoke freeze authority after my token has been launched?',
    answer: (
      <Typography>
        Yes, you can revoke freeze authority at any time using Parachute&apos;s platform, ensuring
        the security of your tokens even after launch.
      </Typography>
    ),
  },
  {
    question: 'How does revoking freeze authority build community trust?',
    answer: (
      <Typography>
        By revoking freeze authority, you eliminate concerns about rug pulls and centralized
        control, reinforcing your commitment to decentralization and token security.
      </Typography>
    ),
  },
  {
    question: "What happens if I don't revoke freeze authority?",
    answer: (
      <Typography>
        Not revoking freeze authority leaves your tokens vulnerable to being frozen, which can lead
        to rug pulls and loss of trust among your community.
      </Typography>
    ),
  },
  {
    question: 'Is Parachute responsible for revoking freeze authority?',
    answer: (
      <Typography>
        Parachute provides the tool for you to revoke freeze authority, but you are responsible for
        the decision and action of revoking it. Parachute, as a decentralized app, does not hold
        responsibility for your tokens or their management.
      </Typography>
    ),
  },
];

export const REVOKE_MINT_FAQS = [
  {
    question: 'What is Mint Authority on Solana?',
    answer: (
      <Typography>
        Mint authority allows the token creator to mint new tokens, increasing the total supply.
      </Typography>
    ),
  },
  {
    question: 'Why should I revoke Mint Authority?',
    answer: (
      <Typography>
        Revoking mint authority protects your token&apos;s supply from being increased, which helps
        maintain its value and prevent potential rug pulls.
      </Typography>
    ),
  },
  {
    question: 'How do I revoke Mint Authority on Solana?',
    answer: (
      <Typography>
        Simply connect your wallet to Parachute, select the token, and follow the guided steps to
        revoke mint authority securely.
      </Typography>
    ),
  },
  {
    question: 'Is revoking Mint Authority permanent?',
    answer: (
      <Typography>
        Yes, once you revoke mint authority, the action is irreversible, ensuring long-term
        security.
      </Typography>
    ),
  },
  {
    question: 'What are the risks of not revoking freeze authority?',
    answer: (
      <Typography>
        If freeze authority is not revoked, there is a risk that the tokens could be frozen by
        someone with that authority, leading to potential community distrust and the possibility of
        a rug pull.
      </Typography>
    ),
  },
  {
    question: 'What are the benefits of revoking Mint Authority?',
    answer: (
      <Typography>
        It builds trust with your community, protects your token&apos;s value, and prevents any
        unauthorized minting of new tokens.
      </Typography>
    ),
  },
  {
    question: 'What happens if I don’t revoke Mint Authority?',
    answer: (
      <Typography>
        Failing to revoke mint authority leaves your project vulnerable to the risk of additional
        tokens being minted, which could dilute the value of existing tokens.
      </Typography>
    ),
  },
  {
    question: 'Does revoking Mint Authority affect my token’s functionality?',
    answer: (
      <Typography>
        No, revoking mint authority only prevents new tokens from being created; all other functions
        of your token remain unaffected.
      </Typography>
    ),
  },
  {
    question: 'Can I restore Mint Authority after revoking it?',
    answer: (
      <Typography>
        No, once mint authority is revoked, it cannot be restored. This ensures the integrity of
        your token supply.
      </Typography>
    ),
  },
  {
    question: 'What are the risks of not revoking Mint Authority?',
    answer: (
      <Typography>
        Not revoking mint authority could lead to over-minting, reducing your token&apos;s value and
        potentially leading to loss of investor confidence.
      </Typography>
    ),
  },
  {
    question: 'How does revoking Mint Authority prevent rug pulls?',
    answer: (
      <Typography>
        By ensuring no additional tokens can be minted, you eliminate the possibility of a rug pull,
        where the token supply is suddenly inflated, devaluing all existing tokens.
      </Typography>
    ),
  },
];

export const IMMUTABLE_FAQS = [
  {
    question: 'What does it mean to make token immutable on Solana?',
    answer: (
      <Typography>
        Making a token immutable means that its metadata and permissions are locked permanently,
        preventing any future changes.
      </Typography>
    ),
  },
  {
    question: 'Why should I make my token immutable on Solana?',
    answer: (
      <Typography>
        Making your token immutable on Solana protects it from unauthorized changes, builds
        community trust, and ensures long-term stability.
      </Typography>
    ),
  },
  {
    question: 'How do I make a token immutable on Solana?',
    answer: (
      <Typography>
        Connect your wallet to Parachute, select your token, and follow the guided steps to securely
        make it immutable on the Solana blockchain.
      </Typography>
    ),
  },
  {
    question: 'Is making a token immutable on Solana permanent?',
    answer: (
      <Typography>
        Yes, once a token is made immutable on Solana, it cannot be altered and changed, making the
        action irreversible.
      </Typography>
    ),
  },
  {
    question: 'What are the risks of not revoking freeze authority?',
    answer: (
      <Typography>
        If freeze authority is not revoked, there is a risk that the tokens could be frozen by
        someone with that authority, leading to potential community distrust and the possibility of
        a rug pull.
      </Typography>
    ),
  },
  {
    question: 'What are the benefits of making a token immutable on Solana?',
    answer: (
      <Typography>
        It secures your SPL token against future changes, builds trust with your community, and
        supports a decentralized project.
      </Typography>
    ),
  },
  {
    question: 'What happens if I don’t make my token immutable on Solana?',
    answer: (
      <Typography>
        Without making your token immutable on Solana, it remains vulnerable to unauthorized
        modifications, which could impact its security and stability.
      </Typography>
    ),
  },
  {
    question:
      'Can I still revoke mint or freeze authority after making a token immutable on Solana?',
    answer: (
      <Typography>
        No, once a token is made immutable on Solana, all its settings, including mint and freeze
        authority, are permanently locked.
      </Typography>
    ),
  },
  {
    question: 'How does making a token immutable enhance security on Solana?',
    answer: (
      <Typography>
        By locking the token’s configuration, you eliminate the risk of future changes, ensuring
        your token remains secure and unchangeable on Solana.
      </Typography>
    ),
  },
  {
    question: 'Does making a token immutable on Solana affect its functionality?',
    answer: (
      <Typography>
        No, making a token immutable on Solana does not affect its core functionality; it only locks
        the configuration to prevent changes.
      </Typography>
    ),
  },
  {
    question: 'Is there a risk in not making my token immutable on Solana?',
    answer: (
      <Typography>
        Without immutability, your Solana token remains vulnerable to potential unauthorized
        modifications like rug pulls, which could harm your project’s reputation and stability.
      </Typography>
    ),
  },
];
export const CREATE_TOKEN_PAGE_FAQS = [
  {
    question: 'What is a Solana token profile page on Parachute?',
    answer: (
      <Typography>
        A Solana token profile page is a dedicated space where users can find comprehensive
        information about your SPL token, including its stats, market data, and more.
      </Typography>
    ),
  },
  {
    question: 'How do I create a profile page for my Solana token?',
    answer: (
      <Typography>
        Simply enter your token’s address on Parachute, and a profile page will be automatically
        generated for you.
      </Typography>
    ),
  },
  {
    question: 'Can I create a profile page for my Solana meme coin on Parachute?',
    answer: (
      <Typography>
        Yes, you can easily create a profile page for your <strong> Solana meme coin</strong> on
        Parachute. Just enter your token&apos;s address, and a profile page will be automatically
        generated.
      </Typography>
    ),
  },
  {
    question: 'Is creating a token profile page free on Parachute?',
    answer: (
      <Typography>
        Yes, creating and maintaining a token profile page on Parachute is completely free forever.
      </Typography>
    ),
  },
  {
    question: 'Why should I create a profile page for my token?',
    answer: (
      <Typography>
        A profile page helps increase your token’s visibility, provides important information to
        users, and builds community engagement.
      </Typography>
    ),
  },
  {
    question: 'Is it safe to create a token profile page on Parachute?',
    answer: (
      <Typography>
        Yes, Parachute ensures the safety and security of your token’s profile page, with all data
        sourced directly from the Solana blockchain.
      </Typography>
    ),
  },
  {
    question: 'How does a profile page benefit my Solana token project?',
    answer: (
      <Typography>
        A profile page centralizes key information, making it easier for potential investors and
        community members to access everything they need in one place.
      </Typography>
    ),
  },
  {
    question: 'What happens if I need to change my token’s information?',
    answer: (
      <Typography>
        The profile page is continuously updated with data from the blockchain, so any changes to
        your token’s metadata will be automatically reflected.
      </Typography>
    ),
  },
];
