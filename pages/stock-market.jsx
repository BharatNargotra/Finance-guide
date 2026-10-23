import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function StockMarket() {
  return (
    <>
      <Head><title>Stock Market Guide: How to Analyse & Invest in Equities | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Stock Market: How Equities Work & How to Analyse Them</h1>
        <p>Stock markets are mechanisms that allow companies to raise capital from the public in exchange for fractional ownership (equity), and enable investors to buy and sell those ownership stakes. India's primary equity exchanges — the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) — together list over 7,000 companies with a combined market capitalisation exceeding $4 trillion, making India the world's fourth-largest equity market by capitalisation.</p>

        <h2>How Stock Markets Work</h2>
        <p>Companies access the stock market through an <strong>Initial Public Offering (IPO)</strong>, selling newly issued shares to institutional and retail investors at a determined price. After listing, shares trade on the secondary market between investors — the company receives no proceeds from these secondary transactions. Price discovery is continuous during trading hours, driven by supply and demand which in turn reflect investors' collective beliefs about a company's future cash flows.</p>
        <p>The NSE's benchmark <strong>Nifty 50</strong> index tracks the 50 largest companies by free-float market capitalisation across 13 sectors. The BSE's <strong>Sensex</strong> tracks 30 companies. Both are value-weighted indices — a 1% price change in a larger company affects the index more than the same change in a smaller company. Index funds and ETFs replicate these indices mechanically.</p>

        <h2>Fundamental Analysis</h2>
        <p>Fundamental analysis attempts to determine the intrinsic value of a stock based on financial performance, business model, competitive position, management quality, and macroeconomic environment. The goal is to buy stocks trading below intrinsic value and sell those trading above it.</p>

        <h3>Key Valuation Metrics</h3>
        <table>
          <thead><tr><th>Metric</th><th>Formula</th><th>Interpretation</th><th>Caveats</th></tr></thead>
          <tbody>
            <tr><td><strong>P/E Ratio</strong></td><td>Market Price ÷ Earnings Per Share</td><td>How much the market pays per rupee of earnings. Lower may indicate undervaluation or low growth prospects.</td><td>Meaningless for loss-making companies; distorted by one-time items</td></tr>
            <tr><td><strong>Price-to-Book (P/B)</strong></td><td>Market Cap ÷ Book Value of Equity</td><td>Useful for financial companies (banks, NBFCs). P/B &lt;1 may indicate deep value or poor ROE.</td><td>Book value irrelevant for asset-light businesses</td></tr>
            <tr><td><strong>EV/EBITDA</strong></td><td>(Market Cap + Debt – Cash) ÷ EBITDA</td><td>Capital-structure neutral valuation. Better than P/E for comparing companies with different debt levels.</td><td>Ignores capex requirements; can flatter capital-intensive businesses</td></tr>
            <tr><td><strong>Price/Sales (P/S)</strong></td><td>Market Cap ÷ Annual Revenue</td><td>Useful for early-stage or loss-making growth companies. High P/S requires high future margin assumptions.</td><td>Ignores profitability; a company losing money on every sale has infinite P/E</td></tr>
            <tr><td><strong>Dividend Yield</strong></td><td>Annual Dividend ÷ Share Price</td><td>Income-focused metric. High yield may indicate value or dividend trap (unsustainable payout).</td><td>Check dividend payout ratio and free cash flow coverage</td></tr>
            <tr><td><strong>ROCE</strong></td><td>EBIT ÷ Capital Employed</td><td>How efficiently a company generates profit from total invested capital. ROCE &gt; WACC creates shareholder value.</td><td>Industry-specific norms vary widely</td></tr>
          </tbody>
        </table>

        <h3>Discounted Cash Flow (DCF) Analysis</h3>
        <p>The DCF model is the theoretically correct method for valuing any asset: it calculates the present value of all future cash flows the asset will generate, discounted at a rate reflecting their risk. The formula is:</p>
        <p><strong>Intrinsic Value = Σ (FCFₜ ÷ (1 + WACC)ᵗ) + Terminal Value ÷ (1 + WACC)ⁿ</strong></p>
        <p>Where FCFₜ = Free Cash Flow in year t, WACC = Weighted Average Cost of Capital (the appropriate discount rate), and Terminal Value accounts for cash flows beyond the explicit forecast period. DCF is highly sensitive to its assumptions — a 1% change in the long-term growth rate or discount rate can change the intrinsic value by 30–50%. This is why DCF is best used as one of several valuation frameworks rather than a sole determinant.</p>

        <h2>Technical Analysis</h2>
        <p>Technical analysis (TA) studies historical price and volume data to forecast future price direction. Unlike fundamental analysis, it does not concern itself with a company's financial health or intrinsic value — only with what price and volume action tells us about market sentiment and supply/demand dynamics. Commonly used tools include:</p>
        <ul>
          <li><strong>Moving Averages</strong>: Simple (SMA) or Exponential (EMA) averages of closing prices over a defined period (20-day, 50-day, 200-day). The "golden cross" (50-day MA crossing above 200-day MA) is traditionally bullish; the "death cross" is bearish.</li>
          <li><strong>Relative Strength Index (RSI)</strong>: A 0–100 momentum oscillator. Above 70 is conventionally "overbought" (potential reversal signal), below 30 is "oversold." However, in strong trends, RSI can remain overbought/oversold for extended periods.</li>
          <li><strong>Support and Resistance</strong>: Price levels where buying (support) or selling (resistance) pressure historically emerges. These are self-fulfilling at major levels because enough traders watch them.</li>
          <li><strong>Volume Analysis</strong>: Volume confirms price moves. A breakout on high volume is more significant than one on low volume. Volume divergence (price rising, volume falling) often precedes reversals.</li>
        </ul>
        <p>Academic evidence for technical analysis is mixed. Most studies find that commonly known patterns are either statistically weak or arbitraged away. However, TA is widely used by institutional traders for timing entries/exits after fundamentals determine stock selection, and market microstructure evidence suggests certain momentum effects are real.</p>

        <h2>Market Cycles & Sector Rotation</h2>
        <p>Economic cycles — expansion, peak, contraction, and trough — tend to favour different sectors at different stages. Understanding this provides a framework for tilting sector exposure, though timing cycles precisely is notoriously difficult even for professionals:</p>
        <table>
          <thead><tr><th>Economic Phase</th><th>Typically Outperforming Sectors</th><th>Typically Underperforming</th></tr></thead>
          <tbody>
            <tr><td>Early Recovery</td><td>Financials, Consumer Discretionary, Industrials</td><td>Utilities, Staples</td></tr>
            <tr><td>Mid-Expansion</td><td>Technology, Healthcare, Industrials</td><td>Energy, Materials</td></tr>
            <tr><td>Late Cycle</td><td>Energy, Materials, Commodities</td><td>Technology, Consumer Discretionary</td></tr>
            <tr><td>Recession</td><td>Utilities, Consumer Staples, Healthcare</td><td>Financials, Industrials, Materials</td></tr>
          </tbody>
        </table>

        <div className="warn-box">
          <strong>⚠️ The Myth of Market Timing</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>Missing just the 10 best trading days in the last 20 years typically halves an investor's total return. These best days frequently cluster around the worst days — during crashes, when investors are most likely to be out of the market. Research consistently shows that time <em>in</em> the market beats time<em>ing</em> the market for the vast majority of retail investors.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
