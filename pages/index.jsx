import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head><title>FinanceBase — Comprehensive Financial Education & Investment Guides</title></Head>
      <Nav />
      <div className="hero">
        <h1>Master Your Financial Future</h1>
        <p>In-depth, jargon-free guides to investing, personal finance, retirement planning, tax strategy, and building lasting wealth — grounded in evidence and economic research.</p>
      </div>
      <div className="container">
        <h2>Financial Education Library</h2>
        <div className="card-grid">
          <div className="card">
            <span className="tag">Beginner</span>
            <h3><Link href="/investing-basics">Investing Basics</Link></h3>
            <p>The fundamental principles of investing: compound interest, time value of money, risk vs return, asset classes, and building your first portfolio.</p>
          </div>
          <div className="card">
            <span className="tag">Equities</span>
            <h3><Link href="/stock-market">Stock Market Guide</Link></h3>
            <p>How equity markets work, valuation methods (P/E, DCF, EV/EBITDA), fundamental and technical analysis, IPOs, and market cycles.</p>
          </div>
          <div className="card">
            <span className="tag">Fixed Income</span>
            <h3><Link href="/bonds-fixed-income">Bonds & Fixed Income</Link></h3>
            <p>Government bonds, corporate bonds, duration risk, yield curves, credit ratings, and the role of fixed income in portfolio construction.</p>
          </div>
          <div className="card">
            <span className="tag">Funds</span>
            <h3><Link href="/mutual-funds-etfs">Mutual Funds & ETFs</Link></h3>
            <p>Active vs passive management, expense ratios, index funds, ETF mechanics, sector ETFs, and how to evaluate and select funds.</p>
          </div>
          <div className="card">
            <span className="tag">Personal Finance</span>
            <h3><Link href="/personal-finance">Personal Finance</Link></h3>
            <p>Budgeting frameworks, emergency funds, debt management strategies, credit scores, insurance basics, and the path from debt to wealth.</p>
          </div>
          <div className="card">
            <span className="tag">Long-Term</span>
            <h3><Link href="/retirement-planning">Retirement Planning</Link></h3>
            <p>NPS, EPF, PPF, and international equivalents. Safe withdrawal rates, asset allocation glide paths, and how much you actually need to retire.</p>
          </div>
          <div className="card">
            <span className="tag">Tax</span>
            <h3><Link href="/tax-strategies">Tax Strategies</Link></h3>
            <p>Tax-efficient investing, capital gains treatment, loss harvesting, tax-advantaged accounts, and strategies for high-income individuals.</p>
          </div>
          <div className="card">
            <span className="tag">Risk</span>
            <h3><Link href="/risk-management">Risk Management</Link></h3>
            <p>Systematic vs unsystematic risk, Modern Portfolio Theory, diversification, hedging strategies, and behavioural biases that destroy returns.</p>
          </div>
          <div className="card">
            <span className="tag">Digital Assets</span>
            <h3><Link href="/cryptocurrency">Cryptocurrency</Link></h3>
            <p>Blockchain fundamentals, Bitcoin and Ethereum, DeFi, stablecoins, custody risks, regulatory landscape, and sizing crypto in a portfolio.</p>
          </div>
          <div className="card">
            <span className="tag">Real Assets</span>
            <h3><Link href="/real-estate-investing">Real Estate Investing</Link></h3>
            <p>Direct property investment, REITs, rental yield calculation, leverage risk, tax treatment of property income, and the rent-vs-buy decision.</p>
          </div>
        </div>

        <h2>Core Investing Principles</h2>
        <p>Three principles underlie virtually all successful long-term investment strategies. First, <strong>compound growth is the most powerful force in personal finance</strong> — ₹1 lakh invested at 12% per annum becomes ₹3.1 lakh in 10 years, ₹9.6 lakh in 20 years, and ₹29.9 lakh in 30 years. Starting 10 years earlier can triple the final outcome. Second, <strong>cost minimisation is the only guaranteed return enhancement</strong> — every 1% in annual fees costs approximately 20% of final portfolio value over 30 years. Third, <strong>behavioural discipline — avoiding panic selling and performance-chasing</strong> — is responsible for more wealth destruction than poor asset selection. DALBAR research consistently finds that the average investor earns significantly less than the funds they invest in due to buying high and selling low.</p>

        <div className="tip-box">
          <strong>💡 The Most Important Financial Rule</strong>
          <p style={{marginTop:'0.5rem', marginBottom:0}}>Spend less than you earn, invest the difference consistently, minimise fees and taxes, and let time do the work. This simple framework outperforms the strategies of most professional fund managers over 15+ year horizons — not because the strategy is complex, but because it removes the emotional decisions that destroy returns.</p>
        </div>

        <h2>Key Benchmark Data</h2>
        <table>
          <thead><tr><th>Asset Class / Index</th><th>~Historical Annual Return (Nominal)</th><th>Risk Level</th><th>Typical Role</th></tr></thead>
          <tbody>
            <tr><td>Nifty 50 (India Large Cap)</td><td>12–15% (long-term CAGR)</td><td>High</td><td>Core equity growth</td></tr>
            <tr><td>S&P 500 (US Large Cap)</td><td>~10.5% (100-year average)</td><td>High</td><td>Global equity exposure</td></tr>
            <tr><td>Gold</td><td>~7–8% (long-term nominal)</td><td>Medium</td><td>Inflation hedge, safe haven</td></tr>
            <tr><td>India 10-Year Govt Bond</td><td>6.5–7.5% (current yields)</td><td>Low</td><td>Capital preservation, income</td></tr>
            <tr><td>Fixed Deposits (SBI)</td><td>6.5–7.0% (2024 rates)</td><td>Very Low</td><td>Emergency fund, capital safety</td></tr>
            <tr><td>Real Estate (Tier 1 Indian cities)</td><td>8–12% (metro, long-term)</td><td>Medium-High</td><td>Inflation hedge, income</td></tr>
            <tr><td>Bitcoin</td><td>Extremely volatile; 100%+ and -70% in single years</td><td>Very High</td><td>Speculative; 1–5% max allocation</td></tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}
