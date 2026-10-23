import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Bonds() {
  return (
    <>
      <Head><title>Bonds & Fixed Income: Complete Investor Guide | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Bonds & Fixed Income: The Ballast in Your Portfolio</h1>
        <p>Fixed income securities — bonds, debentures, notes, and money market instruments — represent a loan made by an investor to a borrower (government, municipality, or corporation) in exchange for regular interest payments and the return of principal at maturity. While often considered "boring" compared to equities, fixed income markets are the backbone of the global financial system, with total outstanding debt exceeding $100 trillion — larger than global equity markets.</p>

        <h2>How Bonds Work</h2>
        <p>A bond is characterised by its <strong>face value</strong> (par value, typically ₹1,000 or ₹100 for government bonds), <strong>coupon rate</strong> (annual interest expressed as a percentage of face value), <strong>maturity date</strong> (when principal is repaid), and <strong>issuer</strong>. A 7.26% Government of India (GOI) bond maturing in 2033 would pay ₹72.60 per year per ₹1,000 face value and return ₹1,000 in 2033.</p>
        <p>Bonds are priced by the market and trade above or below par based on prevailing interest rates. This is encapsulated in the <strong>price-yield inverse relationship</strong>: when market interest rates rise, existing bonds' fixed coupons become less attractive, so their prices fall to push their yield up to match the market. When rates fall, existing bonds' coupons become more attractive, so prices rise. This is the source of <strong>interest rate risk</strong> or <strong>duration risk</strong>.</p>

        <h2>Duration: Measuring Interest Rate Sensitivity</h2>
        <p>Duration (specifically Modified Duration) measures the percentage change in a bond's price for a 1% change in yield. A bond with a Modified Duration of 7 will lose approximately 7% of its price if yields rise by 1%, and gain 7% if yields fall 1%. Long-term bonds have higher duration (more sensitive to rate changes) than short-term bonds. This is why long-term bond funds suffered significant losses in 2022 when central banks globally raised interest rates rapidly. Duration risk is the primary risk in government bonds from creditworthy issuers.</p>

        <h2>Types of Fixed Income Instruments in India</h2>
        <table>
          <thead><tr><th>Instrument</th><th>Issuer</th><th>Current Typical Yield</th><th>Tax Treatment</th><th>Liquidity</th></tr></thead>
          <tbody>
            <tr><td>Government Securities (G-Secs)</td><td>Central Government</td><td>6.8–7.3%</td><td>Taxable (interest + LTCG/STCG on price gains)</td><td>High (listed on NSE)</td></tr>
            <tr><td>State Development Loans (SDLs)</td><td>State Governments</td><td>7.1–7.6%</td><td>Taxable</td><td>Medium</td></tr>
            <tr><td>RBI Floating Rate Savings Bonds</td><td>Reserve Bank of India</td><td>8.05% (reset semi-annually)</td><td>Taxable (interest, no TDS if ₹10k+ demat)</td><td>No secondary market; 7-year lock-in</td></tr>
            <tr><td>AAA Corporate Bonds</td><td>Top-rated corporations</td><td>7.5–8.5%</td><td>Taxable</td><td>Medium (bond market thin for retail)</td></tr>
            <tr><td>Tax-Free Bonds (NHAI, REC)</td><td>PSU Infrastructure</td><td>5.5–6.5% (but tax-equivalent yield 8–9% for 30% bracket)</td><td>Tax-free interest</td><td>Listed, but illiquid</td></tr>
            <tr><td>Sovereign Gold Bonds (SGBs)</td><td>RBI on behalf of Government</td><td>2.5% + Gold price appreciation</td><td>Capital gain on maturity (8 years) exempt from tax</td><td>Listed; moderate</td></tr>
            <tr><td>Fixed Deposits (Bank)</td><td>Scheduled commercial banks</td><td>6.5–7.5%</td><td>TDS at source if interest &gt;₹40k/year; fully taxable</td><td>Premature withdrawal with penalty</td></tr>
            <tr><td>PPF (Public Provident Fund)</td><td>Government of India</td><td>7.1% (Q1 FY25)</td><td>EEE (tax-free contribution, growth, and withdrawal)</td><td>15-year lock-in; partial withdrawal from year 7</td></tr>
          </tbody>
        </table>

        <h2>The Yield Curve</h2>
        <p>The yield curve plots yields of bonds of the same credit quality but different maturities. A <strong>normal (upward-sloping) yield curve</strong> has short-term yields below long-term yields — investors demand more compensation for tying up money longer. A <strong>flat yield curve</strong> signals economic uncertainty. An <strong>inverted yield curve</strong> (short-term yields exceeding long-term yields) is a historically reliable recession predictor — it has preceded every US recession in the past 50 years and reflects market expectations that the central bank will cut rates in the future (typically in response to an economic slowdown). India's yield curve inverted briefly in 2023–24 due to RBI's tightening cycle.</p>

        <h2>Credit Ratings</h2>
        <p>Credit rating agencies (CRISIL, ICRA, CARE in India; S&amp;P, Moody's, Fitch globally) assess the probability that a bond issuer will default on payments. Ratings range from AAA (highest quality, lowest risk) through AA, A, BBB (investment grade) to BB, B, CCC, D (speculative grade/junk). The yield spread between corporate bonds and government bonds of the same maturity — the credit spread — represents the additional return demanded for bearing credit risk. During financial crises, credit spreads widen dramatically as investors flee to the safety of government bonds.</p>

        <div className="tip-box">
          <strong>💡 Bond Funds vs Direct Bonds</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>Most retail investors access fixed income via debt mutual funds rather than buying bonds directly, because direct bond markets have high minimum investments (₹1 lakh for G-Secs via RBI Retail Direct, ₹10 lakh+ for most corporate bonds) and limited liquidity. Debt mutual funds provide diversification, professional management, and better liquidity — but add a management cost (expense ratio). Target Maturity Funds are an excellent middle ground: index-based debt funds with a defined maturity date that eliminate interest rate risk if held to maturity, with lower costs than actively managed debt funds.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
