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
      overflow: 'hidden',
    }}>
      {/* Animated Background Layers */}
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
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
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
              boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(139, 92, 246, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 92, 246, 0.3)'
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
        <div style={{
          maxWidth: '1000px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 3,
        }}>
          {/* Reveal Text on Scroll */}
          <TextReveal text="Learn Smarter." delay={0} scrollY={scrollY} />
          <TextReveal text="Grow Faster." delay={100} scrollY={scrollY} />
          
          <p style={{
            fontSize: 'clamp(16px, 4vw, 20px)',
            color: '#9ca3af',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '32px auto 48px',
            opacity: Math.max(0, 1 - scrollY / 600),
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'all 0.1s linear',
          }}>
            AI-powered learning that adapts to you. Personalized paths, expert instruction, real-time insights.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: Math.max(0, 1 - scrollY / 600),
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
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Start Free
            </button>
            <button
              style={{
                padding: '14px 40px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#e5e7eb',
                fontWeight: '700',
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Parallax Elements */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.3), transparent)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          transform: `translateY(${scrollY * 0.5}px)`,
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          transform: `translateY(${scrollY * 0.3}px)`,
          zIndex: 1,
        }} />
      </section>

      {/* Features Section */}
      <section style={{
        position: 'relative',
        padding: '120px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <SectionHeading scrollY={scrollY} offset={800}>
          Powerful Features
        </SectionHeading>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '80px',
        }}>
          {[
            { title: 'AI Study Assistant', desc: 'Instant help whenever you need it', delay: 0 },
            { title: 'Smart Learning Paths', desc: 'Personalized to your goals', delay: 100 },
            { title: 'Progress Analytics', desc: 'Real-time insights into your performance', delay: 200 },
            { title: 'Mock Exams', desc: 'Practice with AI-graded assessments', delay: 300 },
            { title: 'Study Planner', desc: 'AI generates your perfect schedule', delay: 400 },
            { title: 'Community', desc: 'Learn with 50K+ motivated learners', delay: 500 },
          ].map((feature, i) => (
            <FeatureCard key={i} {...feature} scrollY={scrollY} offset={1000 + i * 100} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        position: 'relative',
        padding: '120px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          textAlign: 'center',
        }}>
          {[
            { end: 50, label: 'K+ Learners', offset: 2000 },
            { end: 200, label: '+ Courses', offset: 2100 },
            { end: 95, label: '% Completion', offset: 2200 },
          ].map((stat, i) => (
            <AnimatedCounter key={i} {...stat} scrollY={scrollY} />
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{
        position: 'relative',
        padding: '120px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <SectionHeading scrollY={scrollY} offset={2400}>
          Why iLEARN?
        </SectionHeading>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginTop: '80px',
        }}>
          {[
            { icon: '⚡', title: 'Learn Faster', desc: 'AI adapts to your pace', delay: 0 },
            { icon: '📈', title: 'Track Progress', desc: 'Real-time analytics', delay: 100 },
            { icon: '🎯', title: 'Goal Focused', desc: 'Structured paths', delay: 200 },
            { icon: '👥', title: 'Community', desc: '50K+ active learners', delay: 300 },
            { icon: '✅', title: 'Certificates', desc: 'Industry-recognized', delay: 400 },
            { icon: '🔄', title: 'Lifetime Access', desc: 'Learn at your pace', delay: 500 },
          ].map((item, i) => (
            <BenefitCard key={i} {...item} scrollY={scrollY} offset={2600 + i * 80} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        position: 'relative',
        padding: '120px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: 2,
      }}>
        <SectionHeading scrollY={scrollY} offset={3400}>
          Ready to transform your learning?
        </SectionHeading>

        <p style={{
          fontSize: '18px',
          color: '#9ca3af',
          marginTop: '24px',
          marginBottom: '48px',
        }}>
          Join thousands of learners achieving their goals with iLEARN.
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
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

// Text Reveal Component
function TextReveal({ text, delay, scrollY }: { text: string; delay: number; scrollY: number }) {
  const words = text.split(' ')
  const baseOpacity = Math.max(0, 1 - scrollY / 800)

  return (
    <h1 style={{
      fontSize: 'clamp(40px, 12vw, 100px)',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '24px',
      letterSpacing: '-2px',
      background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      opacity: baseOpacity,
      transform: `translateY(${scrollY * 0.1}px)`,
      transition: 'all 0.1s linear',
    }}>
      {words.map((word, i) => (
        <span key={i} style={{
          display: 'inline-block',
          marginRight: '0.2em',
          opacity: Math.max(0, 1 - Math.max(0, scrollY - 200 - i * delay) / 300),
          transform: `translateY(${Math.min(0, 30 - Math.max(0, scrollY - 200 - i * delay) / 10)}px)`,
          transition: 'all 0.1s linear',
        }}>
          {word}
        </span>
      ))}
    </h1>
  )
}

// Section Heading Component
function SectionHeading({ children, scrollY, offset }: { children: string; scrollY: number; offset: number }) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset) / 300))

  return (
    <h2 style={{
      fontSize: 'clamp(32px, 8vw, 56px)',
      fontWeight: '800',
      letterSpacing: '-1px',
      background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      opacity: progress,
      transform: `translateY(${(1 - progress) * 20}px)`,
      transition: 'all 0.1s linear',
    }}>
      {children}
    </h2>
  )
}

// Feature Card Component
function FeatureCard({ title, desc, delay, scrollY, offset }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset) / 300))

  return (
    <div style={{
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      borderRadius: '16px',
      backdropFilter: 'blur(20px)',
      opacity: progress,
      transform: `translateY(${(1 - progress) * 30}px)`,
      transition: 'all 0.1s linear, border-color 0.3s',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
      e.currentTarget.style.transform = `translateY(${(1 - progress) * 30 - 8}px)`
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
      e.currentTarget.style.transform = `translateY(${(1 - progress) * 30}px)`
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#9ca3af' }}>
        {desc}
      </p>
    </div>
  )
}

// Benefit Card Component
function BenefitCard({ icon, title, desc, scrollY, offset }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset) / 300))

  return (
    <div style={{
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      borderRadius: '16px',
      opacity: progress,
      transform: `translateY(${(1 - progress) * 30}px) scale(${0.95 + progress * 0.05})`,
      transition: 'all 0.1s linear',
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

// Animated Counter Component
function AnimatedCounter({ end, label, offset, scrollY }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset) / 400))
  const value = Math.floor(progress * end)

  return (
    <div style={{
      opacity: progress,
      transform: `translateY(${(1 - progress) * 20}px)`,
      transition: 'all 0.1s linear',
    }}>
      <div style={{
        fontSize: 'clamp(36px, 8vw, 60px)',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '8px',
      }}>
        {value}{end === 95 ? '%' : '+'}
      </div>
      <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '600' }}>
        {label}
      </div>
    </div>
  )
}

// Login Modal Component
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
              outline: 'none',
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
              outline: 'none',
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