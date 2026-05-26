import { useState } from 'react'
import Layout from '../components/Layout'

export default function Home() {
  const [showEmail, setShowEmail] = useState(false)
  const [copied, setCopied] = useState(false)

  const emailCodes = [
    114, 105, 99, 104, 97, 114, 100, 64, 114, 105, 99, 104, 97, 114, 100, 99, 104, 101, 110, 46, 99, 111, 109
  ]
  const email = String.fromCharCode(...emailCodes)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Layout title="Richard Chen">
      <h1 className="text-3xl font-bold">Richard Chen</h1>
      <p class="mb-4">To those who got this site by email in the past week, you're receiving this because I enjoyed working with you in particular so I let you know I left the company on my terms and I wrote a guide on <a href="/layoff">how to handle layoffs</a> if you're in the same boat. Thank you for your skill, patience, and good hearted work with me. I always love working between departments on technical challenges. I'll be working for my own independent agency, so message me if you'd like to be alongside.</p>
      <p class="mb-4">
        I'm also on LinkedIn as <a href="//linkedin.com/in/4richardchen">4richardchen</a> for fun talk about anything (life in NYNJ, tech consulting, irreverent humor, pub trivia, AAPI communities). I'll be so happy to be together again, until then, you take care of yourself and your loved ones.
      </p>
      <p class="mb-4">Those hiring, <a href="/hire">hire me</a>! Start by contacting me at
        {' '}
        {showEmail ? (
          <>
            <a href={`mailto:${email}`} style={{ textDecoration: 'underline' }}>{email}</a>
            {copied ? ' (copied)' : ''}
          </>
        ) : (
          <button
            onClick={() => {
              setShowEmail(true)
              copyEmail()
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#0066cc',
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'underline'
            }}
          >
            click to show and copy email
          </button>
        )}
        {'.'}
        </p>
    </Layout>
  )
}