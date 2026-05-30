// Force rebuild: 1780129587
'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin123')
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin123') {
      router.push('/dashboard')
    }
  }

  return (
    <div style={{
      background: '#0a0e27',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, sans-serif',
    }}>
      {/* Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
        `,
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 14, 39, 0.3)',
        backdropFilter: 'blur(40px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
        padding: '16px 20px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              fontSize: '20px',
            }}>i</div>
            <span style={{ fontSize: '16px', fontWeight: '800' }}>iLEARN</span>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              padding: '10px 24px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        zIndex: 2,
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 3 }}>
          <div style={{
            opacity: Math.max(0, 1 - scrollY / 500),
            transform: `translateY(${scrollY * 0.1}px)`,
          }}>
            <h1 style={{
              fontSize: 'clamp(40px, 12vw, 100px)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-2px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Learn Smarter. Grow Faster.
            </h1>

            <p style={{
              fontSize: 'clamp(16px, 4vw, 20px)',
              color: '#9ca3af',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '32px auto 48px',
            }}>
              AI-powered learning that adapts to you. Personalized paths, expert instruction, real-time insights.
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <button
                onClick={() => setShowLogin(true)}
                style={{
                  padding: '14px 40px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)',
                  transition: 'all 0.3s',
                }}
              >
                Start Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Features - LIKE DOBERMAN */}
      <HorizontalFeatures scrollY={scrollY} />

      {/* Stats Section */}
      <section style={{
        position: 'relative',
        padding: '100px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          textAlign: 'center',
        }}>
          <StatItem value={50} label="K+ Learners" scrollY={scrollY} offset={2500} />
          <StatItem value={200} label="+ Courses" scrollY={scrollY} offset={2500} />
          <StatItem value={95} label="% Completion" scrollY={scrollY} offset={2500} />
        </div>
      </section>

      {/* Why Choose */}
      <section style={{
        position: 'relative',
        padding: '100px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 8vw, 56px)',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '80px',
          background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Why iLEARN?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}>
          {[
            { icon: '⚡', title: 'Learn Faster', desc: 'AI adapts to your pace', offset: 3000 },
            { icon: '📈', title: 'Track Progress', desc: 'Real-time analytics', offset: 3100 },
            { icon: '🎯', title: 'Goal Focused', desc: 'Structured paths', offset: 3200 },
            { icon: '👥', title: 'Community', desc: '50K+ active learners', offset: 3300 },
            { icon: '✅', title: 'Certificates', desc: 'Industry-recognized', offset: 3400 },
            { icon: '🔄', title: 'Lifetime Access', desc: 'Learn at your pace', offset: 3500 },
          ].map((item, i) => (
            <BenefitItem key={i} {...item} scrollY={scrollY} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        position: 'relative',
        padding: '100px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: 2,
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 8vw, 56px)',
          fontWeight: '800',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Ready to transform?
        </h2>
        <p style={{ fontSize: '18px', color: '#9ca3af', marginBottom: '48px' }}>
          Join thousands of learners achieving their goals.
        </p>
        <button
          onClick={() => setShowLogin(true)}
          style={{
            padding: '14px 40px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '700',
            fontSize: '15px',
            cursor: 'pointer',
            boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)',
            transition: 'all 0.3s',
          }}
        >
          Start Learning Free
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        borderTop: '1px solid rgba(139, 92, 246, 0.1)',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '14px',
        zIndex: 2,
        position: 'relative',
      }}>
        © 2024 iLEARN. Learn smarter, grow faster.
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  )
}

// Horizontal Features - LIKE DOBERMAN
function HorizontalFeatures({ scrollY }: { scrollY: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerTop, setContainerTop] = useState(0)

  useEffect(() => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) setContainerTop(window.scrollY + rect.top)
  }, [])

  const scrollInContainer = Math.max(0, scrollY - containerTop + window.innerHeight)
  const maxScroll = 3000
  const progress = Math.min(1, scrollInContainer / maxScroll)

  const features = [
    { title: 'AI Study Assistant', desc: 'Instant answers 24/7' },
    { title: 'Smart Learning Paths', desc: 'Personalized courses' },
    { title: 'Progress Analytics', desc: 'Real-time insights' },
    { title: 'Study Planner', desc: 'AI schedules' },
    { title: 'Study Reminder', desc: 'Never miss a session' },
    { title: 'Mock Exams', desc: 'Practice with AI feedback' },
  ]

  return (
    <section ref={containerRef} style={{
      position: 'relative',
      height: '400vh',
      zIndex: 2,
    }}>
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
      }}>
        <div style={{
          display: 'flex',
          gap: '20px',
          width: 'fit-content',
          transform: `translateX(${-progress * (features.length - 1) * 320}px)`,
          transition: 'transform 0.05s linear',
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              style={{
                minWidth: '320px',
                height: '400px',
                padding: '40px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '20px',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                opacity: Math.max(0.6, 1 - Math.abs(progress * features.length - i) * 0.3),
                transform: `scale(${Math.max(0.9, 1 - Math.abs(progress * features.length - i) * 0.1)})`,
                transition: 'all 0.1s ease-out',
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '16px', color: '#9ca3af' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stat Item with early fade-in
function StatItem({ value, label, scrollY, offset }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset + 200) / 200))

  return (
    <div style={{
      opacity: progress,
      transform: `translateY(${(1 - progress) * 20}px)`,
      transition: 'all 0.1s linear',
    }}>
      <div style={{
        fontSize: 'clamp(40px, 8vw, 60px)',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '8px',
      }}>
        {Math.floor(progress * value)}{value === 95 ? '%' : '+'}
      </div>
      <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '600' }}>
        {label}
      </div>
    </div>
  )
}

// Benefit Item with early fade-in
function BenefitItem({ icon, title, desc, offset, scrollY }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset + 200) / 200))

  return (
    <div style={{
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      borderRadius: '16px',
      opacity: progress,
      transform: `translateY(${(1 - progress) * 20}px)`,
      transition: 'all 0.1s linear, border-color 0.3s',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
      e.currentTarget.style.transform = `translateY(${(1 - progress) * 20 - 8}px)`
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
      e.currentTarget.style.transform = `translateY(${(1 - progress) * 20}px)`
    }}>
      <div style={{ fontSize: '40px', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#9ca3af' }}>
        {desc}
      </p>
    </div>
  )
}

// Login Modal
function LoginModal({ showLogin, setShowLogin, username, setUsername, password, setPassword, handleLogin }: any) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
        animation: 'fadeIn 0.3s ease-out',
      }}
      onClick={() => setShowLogin(false)}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '16px',
          padding: '48px',
          maxWidth: '420px',
          width: '100%',
          backdropFilter: 'blur(30px)',
          animation: 'slideUp 0.3s ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>
          Welcome
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: '24px', fontSize: '14px' }}>
          Sign in to start learning
        </p>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: '10px 14px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontFamily: 'inherit',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px 14px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontFamily: 'inherit',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '6px',
            }}
          >
            Sign In
          </button>
        </form>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '13px', marginTop: '16px' }}>
          Demo: <strong>admin / admin123</strong>
        </p>
      </div>
    </div>
  )
}