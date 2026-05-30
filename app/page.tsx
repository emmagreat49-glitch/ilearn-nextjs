'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const Icons = {
  Brain: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v12M9 9h6M9 15h6"/></svg>,
  Sparkles: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>,
  Zap: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  TrendingUp: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  BookOpen: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Target: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9"/></svg>,
}

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin123')
  const [scrollY, setScrollY] = useState(0)
  const [horizontalScroll, setHorizontalScroll] = useState(0)
  const router = useRouter()
  const featureScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin123') {
      router.push('/dashboard')
    }
  }

  const features = [
    { Icon: Icons.Brain, title: 'AI Study Assistant', description: 'Get instant help anytime' },
    { Icon: Icons.BookOpen, title: 'Course Library', description: '200+ premium courses' },
    { Icon: Icons.TrendingUp, title: 'Progress Tracking', description: 'See your growth in real-time' },
    { Icon: Icons.Target, title: 'Study Planner', description: 'AI-generated study schedules' },
    { Icon: Icons.Sparkles, title: 'Learning Analytics', description: 'Deep insights into your performance' },
    { Icon: Icons.Zap, title: 'Flashcards', description: 'Spaced repetition learning' },
  ]

  return (
    <div style={{
      background: '#0a0e27',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)
        `,
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 14, 39, 0.4)',
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
          <button onClick={() => setShowLogin(true)} style={{
            padding: '10px 24px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section - Pinned */}
      <section style={{
        position: 'relative',
        height: '120vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        zIndex: 2,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '900px',
            opacity: Math.max(0, 1 - scrollY / 800),
            transform: `translateY(${scrollY * 0.2}px) scale(${Math.max(0.8, 1 - scrollY / 2000)})`,
            transition: 'all 0.1s linear',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '20px',
              marginBottom: '32px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#a78bfa',
              animation: 'fadeInUp 0.8s ease-out',
            }}>
              ✨ Interactive Learning Experience
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 10vw, 90px)',
              fontWeight: '900',
              lineHeight: '1',
              marginBottom: '24px',
              letterSpacing: '-2px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 0.8s ease-out 0.1s both',
            }}>
              Learn Smarter.
            </h1>

            <p style={{
              fontSize: 'clamp(16px, 4vw, 22px)',
              color: '#9ca3af',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 48px',
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
            }}>
              AI-powered learning that adapts to you. Premium courses, interactive tools, and real-time insights.
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.8s ease-out 0.3s both',
            }}>
              <button onClick={() => setShowLogin(true)} style={{
                padding: '16px 48px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: '700',
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}>
                Start Free
              </button>
              <a href="#features" style={{
                padding: '16px 48px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: '#e5e7eb',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}>
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Features */}
      <section id="features" style={{
        position: 'relative',
        height: '300vh',
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        padding: '80px 20px',
      }}>
        <HorizontalScrollShowcase features={features} />
      </section>

      {/* Feature Benefits Grid */}
      <section style={{
        position: 'relative',
        padding: '120px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <ScrollReveal delay={0}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 8vw, 56px)',
              fontWeight: '800',
              marginBottom: '16px',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Why iLEARN?
            </h2>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(16px, 4vw, 24px)',
        }}>
          {[
            { icon: '⚡', title: 'Learn Faster', desc: 'AI adapts to your pace' },
            { icon: '📈', title: 'Track Growth', desc: 'Real-time analytics' },
            { icon: '🎯', title: 'Goal Focused', desc: 'Structured learning paths' },
            { icon: '👥', title: 'Community', desc: '50K+ active learners' },
            { icon: '✅', title: 'Certificates', desc: 'Industry-recognized' },
            { icon: '🔄', title: 'Lifetime Access', desc: 'Learn at your pace' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div style={{
                padding: '32px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>{item.desc}</p>
              </div>
            </ScrollReveal>
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
        <ScrollReveal delay={0}>
          <h2 style={{
            fontSize: 'clamp(32px, 8vw, 56px)',
            fontWeight: '800',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Ready to level up?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#9ca3af',
            marginBottom: '48px',
          }}>
            Join thousands of learners transforming their future.
          </p>
          <button onClick={() => setShowLogin(true)} style={{
            padding: '16px 48px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '700',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}>
            Start Learning Free
          </button>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '20px',
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
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

// Horizontal Scroll Component
function HorizontalScrollShowcase({ features }: { features: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const handleScroll = () => {
            const rect = containerRef.current?.getBoundingClientRect()
            if (rect) {
              const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
              setScrollProgress(progress)
            }
          }
          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
        }
      },
      { threshold: 0 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
        borderRadius: '20px',
        border: '1px solid rgba(139, 92, 246, 0.2)',
      }}
    >
      <div style={{
        display: 'flex',
        gap: '24px',
        padding: '40px',
        transform: `translateX(calc(-${scrollProgress * 100 * (features.length - 2)}%))`,
        transition: 'transform 0.1s linear',
        width: 'fit-content',
      }}>
        {features.map((feature, i) => (
          <div
            key={i}
            style={{
              minWidth: '350px',
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
              opacity: Math.max(0.5, 1 - Math.abs(scrollProgress * features.length - i) * 0.5),
              transform: `scale(${Math.max(0.9, 1 - Math.abs(scrollProgress * features.length - i) * 0.1)})`,
              transition: 'all 0.2s ease-out',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '20px', color: '#a78bfa' }}>
              <feature.Icon />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: '16px', color: '#9ca3af' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
      }}>
        {features.map((_, i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: scrollProgress * features.length >= i ? '#a78bfa' : 'rgba(139, 92, 246, 0.3)',
              transition: 'all 0.3s ease-out',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Scroll Reveal Component
function ScrollReveal({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}