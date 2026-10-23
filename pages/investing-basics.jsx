import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function InvestingBasics() {
  return (
    <>
      <Head><title>Investing Basics: Foundations of Building Wealth | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Investing Basics: Foundations of Wealth Building</h1>
        <p>Investing is the process of allocating money into assets with the expectation that they will generate a return over time — through capital appreciation, dividends, interest, or rental income. Unlike saving (which preserves purchasing power at most), successful investing grows wealth in real terms, outpacing inflation and compounding across decades.</p>

        <h2>The Time Value of Money</h2>
        <p>The foundational concept in finance: a rupee today is worth more than a rupee in the future, because today's rupee can be invested to earn a return. This principle is formalised as:</p>
        <p><strong>Future Value = Present Value × (1 + r)ⁿ</strong></p>
        <p>Where r = annual return rate and n = number of years. At 12% annual return, ₹1,00,000 invested today becomes:</p>
        <table>
          <thead><tr><th>Years</th><th>Value at 8%</th><th>Value at 12%</th><th>Value at 15%</th></tr></thead>
          <tbody>
            <tr><td>5</td><td>₹1,47,000</td><td>₹1,76,000</td><td>₹2,01,000</td></tr>
            <tr><td>10</td><td>₹2,16,000</td><td>₹3,11,000</td><td>₹4,05,000</td></tr>
            <tr><td>20</td><td>₹4,66,000</td><td>₹9,65,000</td><td>₹16,37,000</td></tr>
            <tr><td>30</td><td>₹10,06,000</td><td>₹29,96,000</td><td>₹66,21,000</td></tr>
          </tbody>
        </table>

        <h2>Compound Interest: The Eighth Wonder</h2>
        <p>Albert Einstein reportedly called compound interest the "eighth wonder of the world." Compounding means earning returns not only on your original principal but on all previously accumulated returns. This creates exponential rather than linear growth, which becomes powerfully apparent only over 15+ year horizons — the first decade builds the base, the second and third decades produce the dramatic multiplication.</p>
        <p>The <strong>Rule of 72</strong> is a quick mental model: divide 72 by the annual return rate to approximate the years required to double your money. At 8%, doubling takes ~9 years. At 12%, ~6 years. At 6%, ~12 years.</p>

        <h2>Risk and Return: The Fundamental Tradeoff</h2>
        <p>In efficient markets, higher expected returns come with higher risk — measured as volatility (standard deviation of returns) or probability of permanent capital loss. This is not a bug; it is the mechanism that incentivises investors to hold risky assets. If equities reliably returned 14% with no risk of loss, everyone would sell bonds and buy equities until prices rose (yields fell) to eliminate the advantage.</p>
        <p>Key risk types:</p>
        <ul>
          <li><strong>Market risk (systematic)</strong>: The risk inherent to the entire market or market segment. Cannot be diversified away. Measured by Beta (sensitivity to market movements).</li>
          <li><strong>Specific risk (unsystematic)</strong>: Company- or sector-specific risk. Can be largely eliminated by holding 20–30 uncorrelated stocks or investing in index funds.</li>
          <li><strong>Inflation risk</strong>: The risk that returns fail to keep pace with inflation, eroding real purchasing power. Particularly relevant for cash and fixed-rate bonds.</li>
          <li><strong>Liquidity risk</strong>: The risk of not being able to sell an asset quickly at fair value. Real estate and small-cap stocks have higher liquidity risk than large-cap shares or government bonds.</li>
          <li><strong>Credit risk</strong>: The risk that a bond issuer defaults on interest or principal payments.</li>
          <li><strong>Currency risk</strong>: When investing in foreign assets, exchange rate movements affect returns in your home currency.</li>
        </ul>

        <h2>Asset Classes Explained</h2>
        <h3>Equities (Stocks)</h3>
        <p>Buying equity represents ownership of a fractional share of a company. Returns come from two sources: <strong>capital gains</strong> (the stock price rising as the company grows earnings) and <strong>dividends</strong> (periodic distributions of profits). Over long periods, equities have delivered the highest real returns of any liquid asset class — approximately 5–7% real (after inflation) globally — but with significant year-to-year volatility. The Nifty 50 has historically fallen 20–50% in market downturns (2008, 2020) before recovering to new highs.</p>

        <h3>Fixed Income (Bonds)</h3>
        <p>Bonds are loans made by an investor to a borrower (government or corporation) that pay a fixed or floating interest rate (coupon) and return the principal at maturity. They are less volatile than equities but provide lower long-term returns. They serve as portfolio stabilisers — especially government bonds, which often rise in price when equities fall sharply (negative correlation), providing the "ballast" in a balanced portfolio.</p>

        <h3>Alternative Assets</h3>
        <p>Real estate (direct or via REITs), gold and commodities, private equity, infrastructure, and hedge funds are alternative assets. They often have low correlation to equity and bond markets, providing diversification benefits. However, they typically have higher fees, lower liquidity, and minimum investment requirements that limit accessibility to retail investors.</p>

        <h2>The Power of Starting Early</h2>
        <p>Consider two investors: Priya starts investing ₹10,000/month at age 25 and stops at 35 (total invested: ₹12 lakh over 10 years). Rahul starts at 35 and invests ₹10,000/month until age 65 (total invested: ₹36 lakh over 30 years). Assuming 12% annual return, at age 65: <strong>Priya has ₹2.35 crore</strong>; <strong>Rahul has ₹3.52 crore</strong> — despite investing three times as much money. This illustrates that Priya's 10-year head start contributed the majority of her wealth through compounding time.</p>

        <div className="tip-box">
          <strong>📌 The Investment Policy Statement</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>Before investing a single rupee, define your Investment Policy Statement (IPS): your investment objective (capital preservation, income, growth), time horizon, risk tolerance (how much you can psychologically tolerate losing in a down year without selling), return requirement, constraints (liquidity needs, ethical restrictions), and target asset allocation. Having this written down prevents panic-driven decisions during market crashes.</p>
        </div>

        <h2>The Cost of Delay</h2>
        <table>
          <thead><tr><th>Start Age</th><th>Monthly SIP (₹)</th><th>Years Investing</th><th>Total Invested</th><th>Value at 60 (12%)</th></tr></thead>
          <tbody>
            <tr><td>25</td><td>5,000</td><td>35</td><td>₹21,00,000</td><td>₹3.24 crore</td></tr>
            <tr><td>30</td><td>5,000</td><td>30</td><td>₹18,00,000</td><td>₹1.76 crore</td></tr>
            <tr><td>35</td><td>5,000</td><td>25</td><td>₹15,00,000</td><td>₹93 lakh</td></tr>
            <tr><td>40</td><td>5,000</td><td>20</td><td>₹12,00,000</td><td>₹49 lakh</td></tr>
            <tr><td>45</td><td>5,000</td><td>15</td><td>₹9,00,000</td><td>₹25 lakh</td></tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}
