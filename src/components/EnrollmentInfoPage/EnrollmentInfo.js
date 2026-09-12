import { useEffect, useState } from 'react'
import '../SchedulePage/SchedulePage.css'
import '../HomeworkPage/homework.css'
import './enrollment.css'

const styles = {
  backLink: {
    borderBottom: '1px solid #3e9ec3',
    color: '#3e9ec3',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  heading: {
    color: '#3e9ec3',
    fontSize: '2.5em',
    fontWeight: 'bold',
  },
  intro: {
    color: '#3e9ec3',
    fontWeight: '500',
    letterSpacing: '-0.01em',
    textAlign: 'center',
  },
  stepRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  stepRowTop: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  stepTitle: {
    color: '#3e9ec3',
    marginRight: '10px',
    minWidth: '82px',
  },
  stepText: {
    marginTop: '19px',
  },
  stepTextBlock: {
    marginTop: '19px',
  },
  stepLead: {
    margin: '0 0 10px',
  },
  codeList: {
    background: 'rgba(62, 158, 195, 0.08)',
    border: '1px solid rgba(62, 158, 195, 0.25)',
    borderRadius: '10px',
    boxSizing: 'border-box',
    maxWidth: '100%',
    padding: '10px 12px',
    width: '260px',
  },
  stepCard: {
    background: 'rgba(62, 158, 195, 0.08)',
    border: '1px solid rgba(62, 158, 195, 0.25)',
    borderRadius: '10px',
    boxSizing: 'border-box',
    maxWidth: '100%',
    padding: '10px 12px',
    width: '260px',
  },
  codeLine: {
    alignItems: 'center',
    display: 'flex',
    gap: '8px',
    margin: '4px 0',
  },
  codeLabel: {
    color: '#2f89ab',
    fontSize: '0.92em',
    fontWeight: '700',
    minWidth: '42px',
  },
  stepRowLabel: {
    color: '#2f89ab',
    fontSize: '0.92em',
    fontWeight: '700',
    minWidth: '42px',
  },
  codeValue: {
    color: '#2e7f9e',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.93em',
    fontWeight: '700',
    letterSpacing: '0.04em',
    padding: 0,
  },
  codeChip: {
    alignItems: 'center',
    background: '#ffffff',
    border: '1px solid rgba(62, 158, 195, 0.32)',
    borderRadius: '6px',
    display: 'inline-flex',
    gap: '6px',
    padding: '2px 7px',
  },
  copyButton: {
    background: 'transparent',
    border: 'none',
    color: '#2f89ab',
    cursor: 'pointer',
    fontSize: '1em',
    lineHeight: 1,
    padding: '2px 4px',
  },
  copiedText: {
    color: '#2f89ab',
    fontSize: '0.8em',
    fontWeight: '600',
  },
  linkLine: {
    margin: '6px 0',
  },
  externalLink: {
    borderBottom: '1px solid #3e9ec3',
    cursor: 'pointer',
    fontWeight: '600',
  },
  contactLink: {
    color: '#3e9ec3',
    fontWeight: '600',
    letterSpacing: '0em',
  },
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} style={styles.externalLink} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function EnrollmentInfoPage() {
  const [, setContent] = useState('')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    fetch('content/course-info.md')
      .then((res) => res.text())
      .then((text) => setContent(text))

    document.querySelector('body').scrollTo(0, 0)
  }, [])

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(''), 1200)
    } catch (error) {
      setCopiedCode('')
    }
  }

  return (
    <div>
      <div className="text-wrapper">
        <div className="header">
          <a href="/" style={styles.backLink}>
            Back to Home Page
          </a>
          <h1 style={styles.heading}>How do I Enroll?</h1>
        </div>

        <p style={styles.intro}>Enroll in Cubstart through these 4 easy steps!</p>

        <br />

        <div style={styles.stepRowTop}>
          <h3 className="enrollment_header" style={styles.stepTitle}>
            Step 1:
          </h3>
          <div style={styles.stepTextBlock}>
            <p style={styles.stepLead}>
              Search for your desired track's class number in the{' '}
              <ExternalLink href="https://calcentral.berkeley.edu">CalCentral Enrollment Center</ExternalLink>:
            </p>
            <div style={styles.codeList}>
              <p style={styles.codeLine}>
                <span style={styles.codeLabel}>iOS</span>
                <span style={styles.codeChip}>
                  <button
                    type="button"
                    aria-label="Copy iOS class number"
                    style={styles.copyButton}
                    onClick={() => copyCode('30272')}
                  >
                    📎
                  </button>
                  <code style={styles.codeValue}>30272</code>
                </span>
                {copiedCode === '30272' && <span style={styles.copiedText}>Copied</span>}
              </p>
              <p style={styles.codeLine}>
                <span style={styles.codeLabel}>Web</span>
                <span style={styles.codeChip}>
                  <button
                    type="button"
                    aria-label="Copy Web class number"
                    style={styles.copyButton}
                    onClick={() => copyCode('30273')}
                  >
                    📎
                  </button>
                  <code style={styles.codeValue}>30273</code>
                </span>
                {copiedCode === '30273' && <span style={styles.copiedText}>Copied</span>}
              </p>
            </div>
            <p style={{ ...styles.stepLead, marginTop: '10px' }}>
              <strong>iOS note:</strong> CalCentral can be misleading. The Friday
              11:30–12:29 p.m. slot is an <strong>optional hybrid office hour</strong>, not lecture.
            </p>
          </div>
        </div>

        <div style={styles.stepRowTop}>
          <h3 className="enrollment_header" style={styles.stepTitle}>
            Step 2:
          </h3>
          <div style={styles.stepTextBlock}>
            <p style={styles.stepLead}>
              Join <ExternalLink href="https://www.gradescope.com">Gradescope</ExternalLink>{' '}
              using your platform code:
            </p>
            <div style={styles.codeList}>
              <p style={styles.codeLine}>
                <span style={styles.codeLabel}>iOS</span>
                <span style={styles.codeChip}>
                  <button
                    type="button"
                    aria-label="Copy iOS code"
                    style={styles.copyButton}
                    onClick={() => copyCode('YGDXBX')}
                  >
                    📎
                  </button>
                  <code style={styles.codeValue}>YGDXBX</code>
                </span>
                {copiedCode === 'YGDXBX' && <span style={styles.copiedText}>Copied</span>}
              </p>
              <p style={styles.codeLine}>
                <span style={styles.codeLabel}>Web</span>
                <span style={styles.codeChip}>
                  <button
                    type="button"
                    aria-label="Copy Web code"
                    style={styles.copyButton}
                    onClick={() => copyCode('K8YBE5')}
                  >
                    📎
                  </button>
                  <code style={styles.codeValue}>K8YBE5</code>
                </span>
                {copiedCode === 'K8YBE5' && <span style={styles.copiedText}>Copied</span>}
              </p>
            </div>
          </div>
        </div>

        <div style={styles.stepRowTop}>
          <h3 className="enrollment_header" style={styles.stepTitle}>
            Step 3:
          </h3>
          <div style={styles.stepTextBlock}>
            <p style={styles.stepLead}>Join Our EdStem.</p>
            <div style={styles.stepCard}>
              <p style={styles.codeLine}>
                <span style={styles.stepRowLabel}>iOS</span>
                <ExternalLink href="https://edstem.org/us/join/Wsfes4">EdStem</ExternalLink>
              </p>
              <p style={styles.codeLine}>
                <span style={styles.stepRowLabel}>Web</span>
                <ExternalLink href="https://edstem.org/us/join/GhtVyd">EdStem</ExternalLink>
              </p>
            </div>
          </div>
        </div>

        <div style={styles.stepRowTop}>
          <h3 className="enrollment_header" style={styles.stepTitle}>
            Step 4:
          </h3>
          <div style={styles.stepTextBlock}>
            <p style={styles.stepLead}>
              Wait for an email from us for further instructions. Questions should go on Ed.
            </p>
            <p style={styles.stepLead}>
              <strong>iOS:</strong> First class is September 21 at 6:30 p.m. in Physics Building 3.
            </p>
            <p style={styles.stepLead}>
              <strong>Web:</strong> First class is September 23 at 6:30 p.m. in Physics Building 3.
            </p>
          </div>
        </div>

        <p>
          Got stuck? Ask us anything at{' '}
          <a href="mailto:team@cubstart.com" style={styles.contactLink}>
            team@cubstart.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default EnrollmentInfoPage
