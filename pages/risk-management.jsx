import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function RiskManagement() {
  return (
    <>
      <Head><title>Investment Risk Management: Diversification, MPT & Behavioural Biases | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Risk Management: Protecting and Growing Your Portfolio</h1>
        <p>Risk management in investing is not about eliminating risk — that would eliminate return as well. It is about understanding the risks you are taking, ensuring they are commensurate with your return objectives, and structuring your portfolio to avoid catastrophic, unrecoverable outcomes. The goal is not to maximise expected return but to maximise expected risk-adjusted return subject to constraints on maximum acceptable loss.</p>

        <h2>Modern Portfolio Theory (MPT)</h2>
        <p>Harry Markowitz's Modern Portfolio Theory (1952 Nobel Prize) formalised the intuition that diversification reduces portfolio risk without proportionally reducing return. The key insight: what matters is not individual asset risk (volatility) but how assets move in relation to each other — their <strong>correlation</strong>. Assets with low or negative correlation reduce total portfolio volatility when combined, enabling the investor to achieve a higher expected return for any given level of risk — or equivalently, to achieve the same expected return with lower risk. This set of optimal portfolios is the <strong>Efficient Frontier</strong>.</p>
        <p><strong>Key correlation observations</strong>: Indian equities and US equities show moderate positive correlation (~0.6); equities and gold have historically low correlation (~0.1–0.2), making gold a useful portfolio diversifier; equities and government bonds show negative correlation in deflationary environments but positive correlation in inflationary ones — a critical distinction that 2022 revealed painfully to the "60/40" portfolio paradigm when both fell sharply as central banks raised rates aggressively.</p>

        <h2>Systematic vs Unsystematic Risk</h2>
        <p><strong>Systematic risk</strong> (also called market risk, non-diversifiable risk, or beta risk) is the risk inherent to the entire market — interest rate changes, inflation, recessions, geopolitical events, pandemics. Every asset in the market is exposed to this. You cannot diversify away systematic risk by adding more stocks; you can only manage it by adjusting total market exposure or using hedging instruments.</p>
        <p><strong>Unsystematic risk</strong> (idiosyncratic risk, company-specific risk, alpha risk) is the risk specific to an individual company or sector — a CEO scandal, a product recall, a regulatory action against a specific company. This can be largely eliminated by diversification: holding 25–30 randomly selected stocks from different sectors eliminates approximately 90% of unsystematic risk; beyond ~50 stocks, the marginal benefit of additional diversification is minimal. This is the theoretical basis for preferring index funds over concentrated individual stock portfolios for most investors.</p>

        <h2>Value at Risk (VaR)</h2>
        <p>Value at Risk (VaR) is a statistical measure of the maximum expected loss at a given confidence level over a specified time horizon. A 1-day 95% VaR of ₹1 lakh means there is a 95% probability that the portfolio will not lose more than ₹1 lakh in a single day. VaR is widely used by institutional risk managers but has significant limitations — it says nothing about losses in the 5% tail (which are the catastrophic outcomes of greatest concern) and assumes normal return distributions, when equity returns exhibit fat tails (extreme events occur much more frequently than normal distributions predict).</p>

        <h2>Behavioural Finance: The Biases That Destroy Returns</h2>
        <p>Behavioural finance documents systematic, predictable ways in which investors deviate from rationality. DALBAR's annual "Quantitative Analysis of Investor Behaviour" consistently finds that the average equity fund investor significantly underperforms the fund they invest in — the gap attributable to emotional buy-high/sell-low decisions.</p>
        <ul>
          <li><strong>Loss Aversion</strong>: Losses feel approximately twice as painful as equivalent gains feel pleasurable (Kahneman &amp; Tversky's Prospect Theory). This causes investors to hold losing positions too long (hoping to "break even") and sell winning positions too soon.</li>
          <li><strong>Recency Bias</strong>: Overweighting recent events and projecting them into the future. At market peaks, investors pour money in expecting continued gains; at troughs, they sell expecting further losses — the exact opposite of rational behaviour.</li>
          <li><strong>Overconfidence</strong>: Particularly prevalent among male investors; manifests as excessive trading (trading costs erode returns), under-diversification (concentration in "sure things"), and failure to acknowledge the role of luck in past successes.</li>
          <li><strong>Herd Behaviour</strong>: Following the crowd — the FOMO (fear of missing out) that drives investors into hot sectors (dot-com stocks in 1999, crypto in 2021) at peak valuations.</li>
          <li><strong>Home Bias</strong>: The tendency to overweight domestic assets despite the mathematical advantages of global diversification. Indian investors typically hold ~95% domestic assets despite India representing only ~3–4% of global market capitalisation.</li>
          <li><strong>Anchoring</strong>: Fixating on an arbitrary reference point (usually the purchase price) in making decisions. "I'll sell when it gets back to my buying price" ignores the current value and opportunity cost.</li>
          <li><strong>Mental Accounting</strong>: Treating money differently depending on its source or intended use ("gambling money" vs "retirement money"), leading to inconsistent risk decisions across different accounts.</li>
        </ul>

        <h2>Portfolio Rebalancing</h2>
        <p>Over time, outperforming assets grow to represent a larger fraction of the portfolio than intended, increasing risk. Rebalancing restores the target allocation by selling outperformers and buying underperformers — which amounts to systematic buy-low/sell-high. Research shows that annual or threshold-based rebalancing (when any asset class deviates more than 5% from target) slightly improves risk-adjusted returns compared to never rebalancing. New investments or SIPs can be directed to underweight asset classes to minimise transaction costs. In tax-advantaged accounts, rebalance freely; in taxable accounts, weigh rebalancing benefits against the capital gains tax triggered.</p>
      </div>
      <Footer />
    </>
  )
}
