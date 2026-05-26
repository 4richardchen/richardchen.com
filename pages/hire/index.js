import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'

const ROTATING_ENTRIES = [
  '19y in career',
  '16y in web tech',
  '10y in agency',
  '6y in healthcare agency',
  '10y as sr dev',
  '4y in management',
  '15y of development experience'
]

const HOLD_MS = 750
const SWIPE_MS = 250
const REVEAL_MS = 250

export default function Home() {
  const [entryIndex, setEntryIndex] = useState(0)
  const [phase, setPhase] = useState('hold')

  useEffect(() => {
    let holdTimer
    let swipeTimer
    let revealTimer
    let active = true

    const runCycle = () => {
      setPhase('hold')

      holdTimer = setTimeout(() => {
        if (!active) return
        setPhase('swipeLeft')

        swipeTimer = setTimeout(() => {
          if (!active) return
          setEntryIndex((prev) => (prev + 1) % ROTATING_ENTRIES.length)
          setPhase('swipeRight')

          revealTimer = setTimeout(() => {
            if (!active) return
            runCycle()
          }, REVEAL_MS)
        }, SWIPE_MS)
      }, HOLD_MS)
    }

    runCycle()

    return () => {
      active = false
      clearTimeout(holdTimer)
      clearTimeout(swipeTimer)
      clearTimeout(revealTimer)
    }
  }, [])

  return (
    <Layout title="Hire Me">
      <section className="grid items-center justify-items-center gap-2 md:gap-8 md:grid-cols-2 md:justify-items-stretch">
        <div className="w-full text-center md:ml-auto md:w-1/2 md:text-right">
          <p className="text-3xl font-bold">Experience</p>
        </div>
        <div className="w-full text-center md:text-left">
          <div className="rotatingViewport mx-auto md:mx-0" aria-live="polite">
            <span className={`rotatingText ${phase}`}>{ROTATING_ENTRIES[entryIndex]}</span>
          </div>
        </div>
      </section>

      <h1 className="text-3xl font-bold">For HR Screeners</h1>
      <ul>
        <li class="mb-4">
          See <a href="//linkedin.com/in/4richardchen">my LinkedIn</a>. It's the same as my resume.
        </li>
      </ul>

      <h1 className="text-3xl font-bold">For Hiring Managers, Their Teams</h1>
      <p>Old code, but done pre-AI, from scratch:</p>
      <ul>
        <li>
          Python: <a href="//bitbucket.org/jayfranco/dev-env">xls2json microservices</a>,{' '}
          <a href="//bitbucket.org/jayfranco/reports/src/master">MWS2SQL service</a>,{' '}
          <a href="//bitbucket.org/jayfranco/python">automated MWS shipping</a>,{' '}
          <a href="//bitbucket.org/jayfranco/data-pull">automate Seller Central report downloads</a>,{' '}
          <a href="//bitbucket.org/richardc020/tracking">bulk tracking status</a>,{' '}
          <a href="//bitbucket.org/richardc020/reports">xls1BI</a>
        </li>
        <li>
          <a href="//github.com/4richardchen/meredith-code-challenge">Docker, node.js, JavaScript (ES6)</a> - code test for hiring
        </li>
        <li>
          <a href="//github.com/4richardchen/allthingsmedia">Docker, PHP, mySQL</a> - code test for hiring
        </li>
        <li>
          <a href="//github.com/4richardchen/everytown">WordPress, AWS (EC2), PHP</a> - code test for hiring
        </li>
        <li>
          <a href="//github.com/4richardchen/gotenna">Docker, nodeJS (express)</a> - code test for hiring
        </li>
        <li>
          <a href="//github.com/4richardchen/new-computer/commits/fired">Docker, sh (bash)</a> - code for personal use
        </li>
      </ul>

      <style jsx>{`
        .rotatingViewport {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          height: 1.5em;
          line-height: 1.5em;
        }

        .rotatingText {
          display: inline-block;
          will-change: transform;
        }

        .rotatingText.hold {
          transform: translateX(0);
        }

        .rotatingText.swipeLeft {
          animation: swipeLeft 0.25s linear forwards;
        }

        .rotatingText.swipeRight {
          animation: swipeRight 0.25s linear forwards;
        }

        @keyframes swipeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes swipeRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </Layout>
  )
}
