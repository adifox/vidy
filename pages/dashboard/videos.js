import Link from 'next/link'

export default function Videos() {
  return (
    <div>
      All the Fantastic Videos{' '}
      <Link href='/dashboard'>
        <a>
          <p>Back to the Dashboard</p>
        </a>
      </Link>
    </div>
  )
}
