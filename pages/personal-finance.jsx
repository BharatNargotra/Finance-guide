import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function PersonalFinance() {
  return (
    <>
      <Head><title>Personal Finance: Budgeting, Debt & Building Wealth | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Personal Finance: From Paycheck to Wealth</h1>
        <p>Personal finance is the management of an individual's or household's financial resources — income, expenses, savings, investment, and debt. Mastering personal finance does not require a high income; it requires sound habits applied consistently over time. Research shows that high earners can retire poor while modest earners who save systematically retire wealthy.</p>

        <h2>The Financial Order of Operations</h2>
        <p>Before investing, ensure you've completed the foundational steps in order:</p>
        <ol>
          <li><strong>Build a ₹10,000–₹15,000 starter emergency fund</strong> — enough to handle most minor emergencies without going into debt.</li>
          <li><strong>Get adequate insurance</strong> — term life insurance (if dependants exist; cover 10–15× annual income), health insurance (at least ₹5–10 lakh family floater; ₹20–25 lakh if in Tier 1 city with private hospital preference), and own-damage vehicle insurance.</li>
          <li><strong>Pay off high-interest debt</strong> — credit card debt at 36–42% APR is financially equivalent to losing 36–42% guaranteed per year. No investment reliably beats this.</li>
          <li><strong>Maximise tax-advantaged contributions</strong> — EPF (if employed), PPF (₹1.5 lakh/year), NPS (additional ₹50,000 deduction under 80CCD(1B)).</li>
          <li><strong>Build 3–6 month emergency fund</strong> — in a liquid fund or high-yield savings account.</li>
          <li><strong>Invest for goals</strong> — medium-term goals (3–7 years) in balanced/hybrid funds; long-term goals (&gt;7 years) in equity index funds via SIP.</li>
        </ol>

        <h2>Budgeting Frameworks</h2>
        <h3>50/30/20 Rule</h3>
        <p>Popularised by Senator Elizabeth Warren in "All Your Worth": allocate 50% of after-tax income to <strong>needs</strong> (housing, food, utilities, minimum debt payments, insurance), 30% to <strong>wants</strong> (dining out, entertainment, subscriptions, non-essential clothing), and 20% to <strong>savings and debt repayment</strong>. This framework is a starting point — in high-cost cities (Mumbai, Delhi NCR) the needs bucket easily exceeds 60%, requiring reduction in wants or increased income.</p>
        <h3>Zero-Based Budgeting</h3>
        <p>Every rupee of income is assigned a job (expense category, savings, or debt payment) until the budget reaches zero. More disciplined than percentage-based methods; best for people who benefit from deliberate expense tracking. YNAB (You Need A Budget) and similar apps facilitate this approach. Requires 1–2 hours per month to maintain.</p>
        <h3>Pay Yourself First</h3>
        <p>Automate savings and investments on payday before expenses — set up standing instructions to transfer 20% of salary to a savings/investment account the day salary is credited. This eliminates the decision to save and ensures investment happens in every month, including months when willpower is low. Research by Thaler and Benartzi (the "Save More Tomorrow" program) found automatic escalation of savings rates to be dramatically more effective than asking people to voluntarily increase savings.</p>

        <h2>Understanding and Managing Debt</h2>
        <h3>Good Debt vs Bad Debt</h3>
        <p>Not all debt is equal. <strong>Good debt</strong> is low-interest debt used to acquire appreciating assets or generate income (home loan at 8.5% for a property that appreciates and generates rent; education loan that increases lifetime income). <strong>Bad debt</strong> is high-interest debt for depreciating assets or consumption (car loan at 12%, credit card at 36–42%, personal loans at 15–24% for discretionary spending). The distinction lies in whether the underlying asset or investment generates a return exceeding the interest cost.</p>
        <h3>Debt Repayment Strategies</h3>
        <p>Two primary strategies: <strong>Avalanche method</strong> (pay minimum on all debts, throw maximum extra money at the highest-interest debt first) minimises total interest paid and is mathematically optimal. <strong>Snowball method</strong> (pay off the smallest-balance debt first regardless of interest rate) provides faster psychological wins and has been shown in behavioural research to improve completion rates for people who struggle with motivation. The best strategy is the one you'll actually follow.</p>

        <h2>Credit Scores in India</h2>
        <p>India's primary credit bureaus are CIBIL (TransUnion CIBIL), Experian, Equifax, and CRIF High Mark. The CIBIL score ranges 300–900; a score above 750 is generally considered good and qualifies for the best loan interest rates. Scores below 650 may result in loan rejection or significantly higher interest rates (0.5–2% per annum premium, worth lakhs over a home loan tenure).</p>
        <p>Key CIBIL score factors (CIBIL does not disclose exact weights, but the model is similar to FICO):</p>
        <ul>
          <li><strong>Payment history (~35%)</strong>: Single most important factor. Even one missed EMI or credit card payment can drop the score by 50–100 points. Set up auto-pay for minimum payments.</li>
          <li><strong>Credit utilisation (~30%)</strong>: The ratio of your outstanding credit card balance to your total credit limit. Keep below 30% (ideally &lt;10%) to maintain a high score. Never close a credit card with no annual fee — it reduces your total limit.</li>
          <li><strong>Credit history length (~15%)</strong>: Longer history is better. This is why keeping an old credit card active (with small monthly purchases) is beneficial.</li>
          <li><strong>Credit mix (~10%)</strong>: Having both instalment credit (home loan, car loan) and revolving credit (credit card) is considered positive.</li>
          <li><strong>New credit enquiries (~10%)</strong>: Each hard enquiry (when you apply for credit) can temporarily reduce your score by 5–10 points. Multiple enquiries in a short period signal financial stress.</li>
        </ul>

        <h2>Insurance: The Foundation of Financial Security</h2>
        <table>
          <thead><tr><th>Insurance Type</th><th>Why You Need It</th><th>Recommended Coverage</th><th>Cost Guideline</th></tr></thead>
          <tbody>
            <tr><td>Term Life</td><td>Income replacement for dependants; pay off debts</td><td>10–15× annual gross income; at least until youngest dependant is financially independent</td><td>₹50 lakh cover: ~₹6,000–12,000/year at age 30</td></tr>
            <tr><td>Health (Mediclaim)</td><td>Healthcare costs can be financially devastating; hospital bills for serious illness routinely exceed ₹10–20 lakh</td><td>₹10–25 lakh family floater; top up with super top-up plan for lower premium</td><td>₹10 lakh family floater: ~₹15,000–25,000/year</td></tr>
            <tr><td>Critical Illness</td><td>Lump-sum payment on diagnosis of covered conditions (cancer, heart attack, etc.) for income replacement during treatment</td><td>₹25–50 lakh; as standalone policy or rider</td><td>₹25 lakh cover: ~₹8,000–15,000/year at age 35</td></tr>
            <tr><td>Accident Disability</td><td>Permanent disability eliminates earning capacity — often more financially devastating than death</td><td>2× annual income minimum</td><td>Very affordable (₹1,000–3,000/year for substantial cover)</td></tr>
          </tbody>
        </table>
        <div className="warn-box">
          <strong>❌ Avoid ULIPs and Endowment Plans for Most People</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>Unit Linked Insurance Plans (ULIPs) and traditional endowment/money-back policies bundle insurance and investment in a single product. They are consistently among the worst financial products: high charges (allocation charges, fund management charges, mortality charges, administration charges) severely erode returns. The principle of "buy term, invest the rest" — using cheap term insurance for protection and low-cost mutual funds for investment — almost always produces better outcomes.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
