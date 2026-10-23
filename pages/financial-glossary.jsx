import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function FinancialGlossary() {
  const terms = [
    { term: 'Alpha', def: 'The excess return of an investment relative to its benchmark index, after adjusting for risk (Beta). Positive alpha indicates the manager or strategy has added value beyond what market exposure explains.' },
    { term: 'Amortisation', def: 'The process of gradually paying off a debt (like a home loan) through regular payments that cover both interest and principal, reducing the outstanding balance over time.' },
    { term: 'Annuity', def: 'A financial product that provides a regular income stream in exchange for a lump sum investment. Used primarily for retirement income. Can be immediate or deferred, and fixed or variable.' },
    { term: 'Asset Allocation', def: 'The distribution of a portfolio across asset classes (equities, bonds, cash, real estate, gold) to balance risk and return objectives based on investment horizon and risk tolerance.' },
    { term: 'Beta', def: 'A measure of a security\'s systematic risk — its sensitivity to market movements. A Beta of 1.2 means the stock historically moves 1.2% for every 1% market move.' },
    { term: 'Bond Duration', def: 'A measure of a bond\'s sensitivity to interest rate changes. Modified Duration indicates the approximate percentage price change for a 1% change in yield. Higher duration = more interest rate risk.' },
    { term: 'Capital Gains', def: 'The profit from selling an asset (stock, property, mutual fund) for more than its purchase price. Can be short-term (STCG) or long-term (LTCG) depending on the holding period.' },
    { term: 'CAGR (Compound Annual Growth Rate)', def: 'The mean annual growth rate of an investment over a specified period longer than one year. Represents the smooth annual rate that would produce the same end value. Formula: (End Value / Start Value)^(1/Years) – 1.' },
    { term: 'CIBIL Score', def: 'A credit score ranging 300–900 issued by TransUnion CIBIL that represents an individual\'s creditworthiness. Score above 750 is considered good; enables access to credit at best rates.' },
    { term: 'Commodity', def: 'A basic good used in commerce that is interchangeable with other commodities of the same type — crude oil, natural gas, gold, silver, copper, wheat, cotton. Traded on commodity exchanges (MCX, NCDEX in India).' },
    { term: 'Correlation', def: 'A statistical measure (-1 to +1) of how two assets move in relation to each other. Negative correlation provides diversification benefits; positive correlation means assets tend to rise and fall together.' },
    { term: 'CPI (Consumer Price Index)', def: 'A measure of changes in the price level of a representative basket of consumer goods and services. India\'s retail inflation target is 4% ± 2% for RBI\'s monetary policy.' },
    { term: 'DCF (Discounted Cash Flow)', def: 'A valuation method that estimates the value of an investment based on its expected future cash flows, discounted to present value at an appropriate risk-adjusted rate (WACC).' },
    { term: 'Debt-to-Equity (D/E) Ratio', def: 'Total liabilities divided by shareholders\' equity. Measures financial leverage. Higher D/E means more debt financing; desirable levels vary significantly by industry.' },
    { term: 'Diversification', def: 'The practice of spreading investments across assets, sectors, geographies, and asset classes to reduce unsystematic risk without proportionally reducing expected returns.' },
    { term: 'Dividend', def: 'A distribution of a portion of a company\'s earnings to shareholders, decided by the board. Expressed as ₹ per share or dividend yield (annual dividend ÷ share price).' },
    { term: 'EBITDA', def: 'Earnings Before Interest, Taxes, Depreciation, and Amortisation. A proxy for operating cash flow that allows comparison across companies with different capital structures and tax situations.' },
    { term: 'EPS (Earnings Per Share)', def: 'Net profit divided by the number of outstanding shares. A fundamental metric of profitability on a per-share basis. Used in calculating the P/E ratio.' },
    { term: 'EPF (Employees\' Provident Fund)', def: 'A mandatory retirement savings scheme for Indian salaried employees. Both employee and employer contribute 12% of basic salary + DA. Managed by EPFO; current interest rate 8.25% (FY2023-24).' },
    { term: 'ETF (Exchange-Traded Fund)', def: 'A fund that tracks an index, sector, commodity, or other asset and trades on a stock exchange like a regular stock. Combines the diversification of mutual funds with intraday trading flexibility.' },
    { term: 'Expense Ratio', def: 'The annual fee charged by a mutual fund or ETF, expressed as a percentage of AUM. Directly deducted from fund returns. The most reliable predictor of future fund underperformance.' },
    { term: 'FD (Fixed Deposit)', def: 'A financial instrument offering a higher interest rate than regular savings accounts, with a fixed tenure. DICGC-insured up to ₹5 lakh per bank per depositor. Interest fully taxable.' },
    { term: 'Free Cash Flow (FCF)', def: 'Cash generated by a company\'s operations after capital expenditures. FCF = Operating Cash Flow – Capital Expenditure. More reliable indicator of financial health than reported earnings.' },
    { term: 'Gilt', def: 'Government securities (G-Secs) — bonds issued by the central or state governments. "Gilt-edged" refers to their highest credit quality (zero default risk in domestic currency terms).' },
    { term: 'Hedge', def: 'An investment made to reduce the risk of adverse price movements in an asset. Common hedging instruments include options (protective puts), futures, and inverse ETFs.' },
    { term: 'Home Loan (Mortgage)', def: 'A loan secured against property for its purchase or construction. Interest rate can be fixed or floating (linked to EBLR/MCLR). Offers tax deductions (Section 24b for interest, 80C for principal).' },
    { term: 'Inflation', def: 'The rate at which the general level of prices for goods and services rises, eroding purchasing power. Measured by CPI in India. The RBI targets 4% ± 2% CPI inflation.' },
    { term: 'IPO (Initial Public Offering)', def: 'The first sale of stock by a private company to the public. Allows the company to raise capital from public investors. Requires SEBI approval and disclosure via DRHP (Draft Red Herring Prospectus).' },
    { term: 'LTCG (Long-Term Capital Gains)', def: 'Gains from assets held beyond the specified long-term holding period. For listed equities/equity MFs, LTCG above ₹1.25 lakh is taxed at 12.5% (post Budget 2024); for real estate, 24 months is the threshold.' },
    { term: 'Liquidity', def: 'The ease with which an asset can be converted to cash without significantly affecting its market price. Cash is most liquid; real estate and private equity are least liquid.' },
    { term: 'Market Capitalisation', def: 'Total market value of a company\'s outstanding shares: Share Price × Number of Shares Outstanding. Basis for classifying companies as large-cap (top 100), mid-cap (101–250), and small-cap (251+) by SEBI.' },
    { term: 'NAV (Net Asset Value)', def: 'The per-unit value of a mutual fund or ETF, calculated as (Total Assets – Total Liabilities) ÷ Number of Outstanding Units. Mutual funds transact at end-of-day NAV; ETFs trade at market price.' },
    { term: 'NPS (National Pension System)', def: 'A market-linked, defined contribution pension scheme regulated by PFRDA. Available to all Indian citizens. Offers additional ₹50,000 tax deduction under 80CCD(1B) and lowest fund management charges among investment products.' },
    { term: 'P/E Ratio (Price-to-Earnings)', def: 'Market price per share divided by earnings per share. Indicates how much the market pays for each rupee of earnings. Nifty 50 historically trades at 20–25× earnings; higher in bull markets.' },
    { term: 'Portfolio Rebalancing', def: 'Resetting the asset allocation of a portfolio to its target weights by selling outperformers and buying underperformers. Systematic buy-low/sell-high that maintains risk profile.' },
    { term: 'PPF (Public Provident Fund)', def: 'A government-backed savings instrument with 15-year lock-in. Current rate 7.1% per annum. Tax treatment EEE — exempt on investment (80C), growth, and withdrawal. Maximum ₹1.5 lakh/year.' },
    { term: 'REIT (Real Estate Investment Trust)', def: 'A listed entity owning income-generating real estate, required to distribute ≥90% of net distributable cash flows. In India, currently focused on Grade A office space and retail malls. Provides retail access to institutional-quality real estate.' },
    { term: 'Risk-Adjusted Return', def: 'Return on investment relative to the risk taken to generate it. Key metrics: Sharpe Ratio (excess return per unit of total volatility), Sortino Ratio (excess return per unit of downside volatility).' },
    { term: 'SIP (Systematic Investment Plan)', def: 'A method of investing a fixed amount in mutual funds at regular intervals (monthly, weekly). Rupee-cost averaging reduces timing risk. India\'s monthly SIP inflows exceeded ₹20,000 crore in 2024.' },
    { term: 'STCG (Short-Term Capital Gains)', def: 'Gains from assets sold within the short-term holding period. For listed equities/equity MFs, STCG is taxed at 20% (post Budget 2024, earlier 15%); for debt MFs/FDs, taxed at slab rate.' },
    { term: 'ULIP (Unit Linked Insurance Plan)', def: 'An insurance product that bundles investment and life insurance. Historically associated with high charges and poor transparency. Generally inferior to "buy term, invest the rest" strategy for most investors.' },
    { term: 'Volatility', def: 'The degree of variation in an asset\'s price over time, measured by standard deviation of returns. The Nifty 50\'s annualised volatility is typically 15–20%. Higher volatility = higher potential return and risk.' },
    { term: 'WACC (Weighted Average Cost of Capital)', def: 'The average rate a company pays to finance its assets, weighted by the proportion of equity and debt. Used as the discount rate in DCF valuation. WACC = (E/V × Re) + (D/V × Rd × (1–T)).' },
    { term: 'Yield', def: 'The income return on an investment, expressed as a percentage of the investment\'s cost or current market value. Bond yield = coupon ÷ bond price (inversely related). Dividend yield = dividend ÷ share price.' },
    { term: 'Zero-Based Budget', def: 'A budgeting method where every rupee of income is allocated to specific categories (expenses, savings, debt) until the budget equals zero. Encourages deliberate spending decisions for every expenditure.' },
  ]
  return (
    <>
      <Head><title>Financial Glossary: A–Z Investment & Finance Terms | FinanceBase</title></Head>
      <Nav />
      <div className="container">
        <h1>Financial Glossary</h1>
        <p>Definitions for key terms in personal finance, investing, and financial markets — written for clarity without unnecessary jargon.</p>
        {terms.map(({ term, def }) => (
          <div key={term} style={{ borderBottom: '1px solid #e2e8f0', padding: '0.75rem 0' }}>
            <strong style={{ color: '#0f172a' }}>{term}</strong>
            <p style={{ marginBottom: 0, marginTop: '0.25rem' }}>{def}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
