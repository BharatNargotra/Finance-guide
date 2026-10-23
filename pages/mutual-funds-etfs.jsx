import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Funds() {
  return (
    <>
      <Head><title>Mutual Funds & ETFs: Active vs Passive Investing | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Mutual Funds & ETFs: Collective Investment Vehicles</h1>
        <p>Mutual funds and Exchange-Traded Funds (ETFs) pool money from many investors to purchase a diversified portfolio of securities. They are the primary investment vehicle for most retail investors globally, offering instant diversification, professional management (or index replication), and lower costs than building equivalent portfolios of individual securities. India's mutual fund industry, regulated by SEBI, manages over ₹55 lakh crore (approximately $660 billion) in assets under management as of 2024.</p>

        <h2>Mutual Funds vs ETFs: Key Differences</h2>
        <table>
          <thead><tr><th>Feature</th><th>Mutual Fund</th><th>ETF (Exchange-Traded Fund)</th></tr></thead>
          <tbody>
            <tr><td>Trading</td><td>Bought/sold once daily at end-of-day NAV</td><td>Traded on exchange throughout the day at market prices</td></tr>
            <tr><td>Minimum Investment</td><td>₹500 (most SIP minimums); ₹5,000–10,000 lumpsum</td><td>~1 unit (price of one unit, typically ₹50–500)</td></tr>
            <tr><td>Expense Ratio (Index)</td><td>0.1–0.5% (direct plans)</td><td>0.05–0.2% (typically lower than MF index funds)</td></tr>
            <tr><td>Expense Ratio (Active)</td><td>0.5–2.5% (direct plans)</td><td>N/A (active ETFs rare in India)</td></tr>
            <tr><td>SIP Facility</td><td>Yes, easy setup</td><td>Manual SIP possible via broker; less seamless</td></tr>
            <tr><td>Tracking Error</td><td>Can be higher for index funds due to cash drag</td><td>Lower for large, liquid ETFs</td></tr>
            <tr><td>Liquidity Risk</td><td>AMC provides daily liquidity</td><td>Depends on exchange liquidity (can be poor for sector ETFs)</td></tr>
            <tr><td>IDCW/Dividend</td><td>Regular and Growth options</td><td>All returns re-invested (in India) or paid as dividend</td></tr>
          </tbody>
        </table>

        <h2>Active vs Passive Management: The Evidence</h2>
        <p>The central debate in investing is whether professional fund managers can consistently beat their benchmark index after fees. The S&P SPIVA (S&P Indices Versus Active) scorecard is the most comprehensive ongoing study. Key findings for India (2023 SPIVA India Year-End Report):</p>
        <ul>
          <li>Over 5 years, <strong>~75% of Indian large-cap active funds underperformed</strong> the S&P BSE 100 benchmark</li>
          <li>Over 10 years, <strong>~85% underperformed</strong></li>
          <li>Mid-cap and small-cap active funds show better relative performance in India compared to developed markets, where information efficiency is greater</li>
          <li>Year-to-year outperformance is not persistent — funds in the top quartile one year show no statistically significant tendency to remain in the top quartile the following year</li>
        </ul>
        <p>The primary reasons for active underperformance are mathematical: in aggregate, all investors hold the market portfolio; before costs, average active returns equal the index; after costs (expense ratios of 1–2.5% for regular plans), the majority must underperform. Higher expense ratios are the single strongest predictor of underperformance.</p>

        <h2>SEBI's Mutual Fund Categorisation</h2>
        <p>SEBI's 2017 circular standardised mutual fund categories to improve comparability. Key equity categories:</p>
        <ul>
          <li><strong>Large Cap Funds</strong>: Minimum 80% in top 100 companies by market cap. Lower volatility; most difficult for active managers to beat Nifty 50/100 index.</li>
          <li><strong>Mid Cap Funds</strong>: Minimum 65% in 101st–250th ranked companies. Higher growth potential and volatility. Active management has historically added more value here vs large caps.</li>
          <li><strong>Small Cap Funds</strong>: Minimum 65% in companies ranked 251st and below. Highest growth potential; highest volatility and liquidity risk. Very long time horizon required (minimum 7–10 years).</li>
          <li><strong>Flexi Cap Funds</strong>: Minimum 65% in equities, no market-cap restriction. Fund manager discretion; often large-cap heavy in practice.</li>
          <li><strong>ELSS (Equity Linked Savings Scheme)</strong>: Tax-saving fund with 3-year lock-in. Deduction under Section 80C up to ₹1.5 lakh/year under old tax regime.</li>
        </ul>

        <h2>How to Evaluate a Fund</h2>
        <ul>
          <li><strong>Expense Ratio</strong>: The single most reliable predictor of future performance. For index funds/ETFs, choose the lowest expense ratio. Always use Direct plans (no distributor commission) via AMC websites or MF platforms.</li>
          <li><strong>Tracking Error</strong> (for index funds/ETFs): The annualised standard deviation of the difference between fund returns and index returns. Lower is better; caused by cash drag, corporate actions, and rebalancing costs.</li>
          <li><strong>Risk-Adjusted Returns</strong>: Sharpe ratio (return above risk-free rate per unit of volatility), Sortino ratio (same, using only downside deviation), and Alpha (excess return above benchmark after controlling for Beta).</li>
          <li><strong>AUM (Assets Under Management)</strong>: Very small AUMs in illiquid securities can cause adverse impact costs. Very large AUMs in small/mid-cap funds make it hard to enter/exit positions without moving prices.</li>
          <li><strong>Fund Manager Track Record</strong>: Look at performance over at least one full market cycle (typically 7–10 years). Check manager tenure — a fund's record belongs to the manager, not the fund label.</li>
          <li><strong>Portfolio Overlap</strong>: If holding multiple funds, check their top holdings to avoid inadvertent concentration in the same stocks.</li>
        </ul>

        <div className="tip-box">
          <strong>💡 The Simple Three-Fund Portfolio</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>Many personal finance experts advocate a "three-fund portfolio" for India: (1) a Nifty 50 or Nifty 100 index fund/ETF for domestic large-cap equity, (2) a Nifty Midcap 150 index fund for growth exposure, and (3) a short-duration debt fund or liquid fund for stability. This provides broad market exposure, diversification across market caps, debt allocation for rebalancing, and negligible costs — all without picking individual stocks or active fund managers. Add an international index fund for global diversification.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
