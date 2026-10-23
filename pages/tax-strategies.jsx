import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function TaxStrategies() {
  return (
    <>
      <Head><title>Tax Strategies for Investors: Capital Gains, Deductions & Planning | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Tax Strategies for Investors</h1>
        <p>Tax planning is the legal process of arranging finances to minimise tax liability within the bounds of law. Efficient tax planning can meaningfully improve after-tax returns — for a high-income investor in the 30% bracket, every ₹100 in tax saved is equivalent to earning an additional ₹143 in gross income. The distinction between <em>tax avoidance</em> (legal — using provisions of tax law to reduce liability) and <em>tax evasion</em> (illegal — concealing income or fraudulently reducing tax) is fundamental.</p>

        <h2>Capital Gains Tax in India (Post-Budget 2024)</h2>
        <p>The Union Budget 2024 brought significant changes to capital gains taxation, effective for transactions from 23 July 2024:</p>
        <table>
          <thead><tr><th>Asset Type</th><th>Holding Period (LTCG)</th><th>STCG Rate</th><th>LTCG Rate</th><th>Exemption</th></tr></thead>
          <tbody>
            <tr><td>Listed Equity Shares / Equity MFs</td><td>&gt; 12 months</td><td>20% (earlier 15%)</td><td>12.5% (earlier 10%)</td><td>₹1.25 lakh LTCG exempt (earlier ₹1 lakh)</td></tr>
            <tr><td>Debt Mutual Funds (post Apr 2023)</td><td>No LTCG treatment</td><td>As per income tax slab rate</td><td>As per income tax slab rate (post-2023 investments)</td><td>None</td></tr>
            <tr><td>Gold / Gold ETFs</td><td>&gt; 24 months</td><td>Slab rate</td><td>12.5% without indexation</td><td>None</td></tr>
            <tr><td>Real Estate</td><td>&gt; 24 months</td><td>Slab rate</td><td>12.5% without indexation (earlier 20% with indexation)</td><td>54/54F exemption if reinvested in residential property</td></tr>
            <tr><td>Sovereign Gold Bonds (SGBs)</td><td>8 years (at maturity)</td><td>Slab rate (if sold before maturity on exchange)</td><td>Fully exempt at maturity</td><td>Full CGT exemption on maturity is a significant advantage</td></tr>
            <tr><td>Unlisted Shares / Private Equity</td><td>&gt; 24 months</td><td>Slab rate</td><td>12.5%</td><td>None</td></tr>
          </tbody>
        </table>

        <h2>Tax-Loss Harvesting</h2>
        <p>Tax-loss harvesting is the practice of selling an investment that has declined below its purchase price to realise a capital loss, which can then offset capital gains, reducing the overall tax liability. Key rules in India:</p>
        <ul>
          <li>Short-term capital losses (STCL) can be set off against both STCG and LTCG in the same year</li>
          <li>Long-term capital losses (LTCL) can only be set off against LTCG</li>
          <li>Unadjusted losses can be carried forward for 8 assessment years</li>
          <li>Losses from specified business (F&amp;O trading counted as business income) can be set off against business income</li>
        </ul>
        <p>Practical application: In March (before the financial year ends), review your portfolio for unrealised losses. Sell losing positions to realise the loss, offset your gains, and reduce the tax bill. You may immediately re-purchase the same securities if you believe they will recover — India does not have a "wash sale rule" (unlike the US, which prohibits repurchasing within 30 days).</p>

        <h2>Old Tax Regime vs New Tax Regime</h2>
        <p>India offers two income tax regimes. The <strong>New Tax Regime</strong> (default from FY2023–24) has lower slab rates but eliminates most deductions. The <strong>Old Tax Regime</strong> retains deductions under 80C, 80D, HRA, LTA, home loan interest, etc.</p>
        <table>
          <thead><tr><th>Taxable Income Slab</th><th>Old Regime Rate</th><th>New Regime Rate (FY2024–25)</th></tr></thead>
          <tbody>
            <tr><td>Up to ₹2.5 lakh</td><td>Nil</td><td>Nil</td></tr>
            <tr><td>₹2.5 lakh – ₹5 lakh</td><td>5%</td><td>5%</td></tr>
            <tr><td>₹5 lakh – ₹7 lakh</td><td>20%</td><td>10% (new: rebate u/s 87A up to ₹25,000 makes &lt;₹7L zero tax)</td></tr>
            <tr><td>₹7 lakh – ₹10 lakh</td><td>20%</td><td>15%</td></tr>
            <tr><td>₹10 lakh – ₹12 lakh</td><td>30%</td><td>20%</td></tr>
            <tr><td>₹12 lakh – ₹15 lakh</td><td>30%</td><td>25%</td></tr>
            <tr><td>Above ₹15 lakh</td><td>30%</td><td>30%</td></tr>
          </tbody>
        </table>
        <p>The old regime remains beneficial for individuals claiming substantial deductions: those maximising 80C (₹1.5L), having home loan interest (₹2L cap), 80D health insurance premiums (₹25,000–₹75,000 depending on age), 80CCD(1B) NPS (₹50,000), and HRA. Those without these deductions or with low deduction amounts typically benefit from the new regime. Run the calculation for your specific situation — break-even differs based on income level and deduction amounts.</p>

        <h2>Key Tax-Saving Instruments (Old Regime)</h2>
        <table>
          <thead><tr><th>Section</th><th>Instrument</th><th>Maximum Deduction</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>80C</td><td>EPF, PPF, ELSS, Life Insurance premium, NSC, SSY, home loan principal</td><td>₹1,50,000</td><td>Combined limit for all 80C instruments</td></tr>
            <tr><td>80CCD(1B)</td><td>NPS Tier I (additional, over 80C)</td><td>₹50,000</td><td>Exclusive to NPS; applies in both regimes for some</td></tr>
            <tr><td>80D</td><td>Health insurance premiums</td><td>₹25,000 self+family; ₹50,000 if senior citizens; ₹75,000 if parents also senior</td><td>Preventive health checkup ₹5,000 within limit</td></tr>
            <tr><td>24(b)</td><td>Home loan interest (self-occupied)</td><td>₹2,00,000</td><td>No limit for let-out properties (set off rules apply)</td></tr>
            <tr><td>80TTA/TTB</td><td>Savings account interest (80TTA) / Senior citizen interest (80TTB)</td><td>₹10,000 (80TTA) / ₹50,000 (80TTB)</td><td>80TTB is only for senior citizens (60+)</td></tr>
            <tr><td>80G</td><td>Donations to eligible charitable organisations</td><td>50–100% of donation, subject to limits</td><td>Verify organisation's 80G certification and category</td></tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}
