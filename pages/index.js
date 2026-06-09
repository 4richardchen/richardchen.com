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
      <p class="mb-4">To those received my email, I enjoyed working with you in particular so I let you know I left the company on my terms. If you're in my boat, use my <a href="//github.com/4richardchen/new-computer/blob/fired/README.md">layoff shell script</a> to exit with emotional and cyber surity. Thank you for your skill, patience, and good hearted work with me. I always love working between departments on technical challenges. I'll work for my own independent agency, where the growth and less fearful innovations are, so message me if you'd like to be alongside.</p>
      <p class="mb-4">Conversely, if you received no such email, ignore.</p>
      <p class="mb-4">
        I'm on LinkedIn as <a href="//linkedin.com/in/4richardchen">4richardchen</a> to talk about anything (life in NYNJ, tech consulting, irreverent humor, pub trivia, AAPI communities). I'll be so happy to be together again, until then, you take care of yourself and your loved ones. Note: I keep all content on my own site and never on LinkedIn and eschew other social media.
      </p>
      <p class="mb-4">Those hiring or wanting to contact me,
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
