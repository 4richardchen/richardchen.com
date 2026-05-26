import Layout from '../components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout title="404 — Page Not Found">
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-extrabold mb-2">404</h1>
        <Link href="/" className="inline-block px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-700">
          Go home
        </Link>
      </div>
    </Layout>
  )
}