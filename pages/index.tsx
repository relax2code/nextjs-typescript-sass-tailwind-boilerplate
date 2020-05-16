import Head from 'next/head'
import "../styles/style.scss"
export default function Home() {
  return (
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-green-300 leading-normal">Next.jsx</h1>
      <p className="text-gray-500">with Tailwind CSS</p>
      <div className="btn">NEXT</div>
    </div>
  )
}
