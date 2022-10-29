import Link from 'next/link'

export default function VideoRecorder() {
  return (
    <div>
      <p>{"VIDEO RECORDER IN IT'S OWN PAGE:"}</p>
      <Link href='/dashboard'>
        <a>Back to Dashboard</a>
      </Link>
    </div>
  )
}
