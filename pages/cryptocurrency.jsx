import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Cryptocurrency() {
  return (
    <>
      <Head><title>Cryptocurrency: Blockchain, Bitcoin, DeFi & Portfolio Role | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Cryptocurrency: Technology, Risks & Portfolio Considerations</h1>
        <p>Cryptocurrency is a class of digital assets that use cryptographic techniques and distributed ledger technology (blockchain) to enable peer-to-peer transactions without requiring a trusted intermediary such as a bank. Bitcoin, launched in 2009 by the pseudonymous Satoshi Nakamoto, was the first. As of 2024, over 20,000 cryptocurrencies exist, with a combined market capitalisation that peaked at approximately $3 trillion in November 2021 before falling ~75% in the 2022 crypto winter, then partially recovering.</p>

        <h2>Blockchain Technology</h2>
        <p>A blockchain is a distributed ledger — a database replicated across thousands of nodes globally with no central authority. Transactions are grouped into blocks, cryptographically linked to the previous block (forming a chain), and validated by consensus mechanisms. Once recorded, altering a block would require recalculating all subsequent blocks and overcoming the computational power of the majority of the network — computationally infeasible in practice for sufficiently large networks.</p>
        <p><strong>Proof of Work (PoW)</strong>, used by Bitcoin, requires validators ("miners") to expend enormous computational power solving arbitrary cryptographic puzzles to add new blocks. This consumes significant electricity (Bitcoin's annual consumption is comparable to that of Poland) but creates robust security. <strong>Proof of Stake (PoS)</strong>, adopted by Ethereum in "The Merge" (September 2022), has validators stake (lock up) cryptocurrency as collateral. PoS uses ~99.95% less energy than PoW while maintaining security through economic penalties for dishonest behaviour.</p>

        <h2>Bitcoin: Digital Gold?</h2>
        <p>Bitcoin's design embeds several properties that proponents compare to gold: fixed supply (hard cap of 21 million BTC, ~19.7 million mined as of 2024), predictable issuance (halving every ~4 years — the next halving was April 2024, reducing block reward from 6.25 to 3.125 BTC), and decentralisation (no single entity controls the network). These properties have led to the "digital gold" narrative — Bitcoin as a store of value and inflation hedge. The empirical evidence for the inflation hedge hypothesis is mixed: Bitcoin fell sharply in 2022 precisely when inflation was highest, suggesting it behaves more as a risk asset correlated with tech stocks than as an independent store of value in recent years.</p>

        <h2>Ethereum & Smart Contracts</h2>
        <p>Ethereum, launched in 2015 by Vitalik Buterin, introduced programmable blockchain via <strong>smart contracts</strong> — self-executing code stored on the blockchain that automatically enforces agreement terms when predefined conditions are met. Smart contracts enable decentralised applications (dApps), Decentralised Finance (DeFi), Non-Fungible Tokens (NFTs), and Decentralised Autonomous Organisations (DAOs). Ethereum's native cryptocurrency Ether (ETH) is used to pay "gas" fees for computing on the network. Post-Merge, validators earn newly issued ETH plus transaction fees — the annualised staking yield is currently approximately 3–4%.</p>

        <h2>Decentralised Finance (DeFi)</h2>
        <p>DeFi refers to financial applications built on blockchain that replicate traditional finance functions — lending, borrowing, trading, insurance, derivatives — without banks or brokers. Total Value Locked (TVL) in DeFi peaked at ~$180 billion in 2021 and stands at approximately $50–100 billion in 2024. Major DeFi protocols include Uniswap (decentralised exchange), Aave (lending), MakerDAO (stablecoin issuance), and Compound (lending). DeFi carries substantial risks: smart contract bugs (the 2016 DAO hack drained $60M), oracle manipulation, liquidity crises (the Terra/LUNA collapse of May 2022 wiped $40B in days), and regulatory uncertainty.</p>

        <h2>Cryptocurrency in India: Regulatory & Tax Framework</h2>
        <p>The Reserve Bank of India (RBI) has historically been cautious about crypto, attempting a banking ban in 2018 (overturned by the Supreme Court in 2020). The regulatory landscape was clarified by the Finance Act 2022:</p>
        <ul>
          <li><strong>30% flat tax</strong> on all cryptocurrency gains (no indexation, no deduction other than cost of acquisition) — among the highest crypto tax rates globally</li>
          <li><strong>1% TDS (Tax Deducted at Source)</strong> on all crypto transactions above ₹10,000 per transaction (or ₹50,000/year for specified persons) — implemented to create a transaction trail</li>
          <li>Losses in one Virtual Digital Asset (VDA) cannot be offset against gains in another VDA, or against any other income — a particularly harsh provision</li>
          <li>Gifts of VDAs are taxable in the hands of the recipient</li>
          <li>India's CBDC (Central Bank Digital Currency) — the Digital Rupee (e₹) — launched in 2022 and is expanding; this is distinct from decentralised cryptocurrencies and carries no investment risk</li>
        </ul>

        <h2>Portfolio Sizing for Cryptocurrency</h2>
        <p>The appropriate allocation to cryptocurrency in a portfolio is a function of risk tolerance, time horizon, and conviction in the technology's long-term value. The high correlation of crypto with risk assets in downturns, extreme volatility (Bitcoin has experienced drawdowns of 70–85% multiple times), regulatory uncertainty, custody risks, and unresolved questions about long-term fundamental valuation suggest treating crypto as a <strong>speculative alternative allocation</strong> rather than a core holding. Most mainstream financial advisers recommend 0–5% of total portfolio for most retail investors. At 5% allocation, a complete loss reduces the portfolio by 5% — painful but not catastrophic — while a 10× gain adds 50% to portfolio value. This asymmetric construction allows meaningful participation in the upside while limiting downside impact.</p>

        <div className="warn-box">
          <strong>⚠️ Custody: Not Your Keys, Not Your Coins</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>Holding cryptocurrency on an exchange (centralised exchange — CEX) exposes you to exchange insolvency risk. The FTX collapse (November 2022) destroyed approximately $8 billion in customer funds. Self-custody via hardware wallets (Ledger, Trezor) eliminates exchange risk but introduces seed phrase loss risk. Never store the seed phrase digitally or share it with anyone. Exchange exposure should be minimised to what is actively being traded.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
