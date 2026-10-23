import Link from 'next/link'
export default function Nav() {
  return (
    <nav>
      <Link href="/" className="brand">📈 FinanceBase</Link>
      <Link href="/investing-basics">Investing Basics</Link>
      <Link href="/stock-market">Stock Market</Link>
      <Link href="/bonds-fixed-income">Bonds</Link>
      <Link href="/mutual-funds-etfs">Funds & ETFs</Link>
      <Link href="/personal-finance">Personal Finance</Link>
      <Link href="/retirement-planning">Retirement</Link>
      <Link href="/tax-strategies">Tax Strategy</Link>
      <Link href="/risk-management">Risk Management</Link>
      <Link href="/cryptocurrency">Cryptocurrency</Link>
      <Link href="/real-estate-investing">Real Estate</Link>
      <Link href="/financial-glossary">Glossary</Link>
    </nav>
  )
}
