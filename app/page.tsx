'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

// Icon Components (Clean SVG style)
const Icons = {
  Brain: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v12M9 9h6M9 15h6"/></svg>,
  TrendingUp: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Users: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Award: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>,
  Zap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Target: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9"/></svg>,
  BookOpen: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Sparkles: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>,
}

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin123')
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()

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

  return (
    <div style={{
      background: '#0a0e27',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Animated Background Gradients */}
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
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
            }}>i</div>
            <span style={{ fontSize: 'clamp(16px, 3.5vw, 18px)', fontWeight: '800', letterSpacing: '-0.5px' }}>iLEARN</span>
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
              fontSize: 'clamp(12px, 3vw, 14px)',
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
        padding: 'clamp(60px, 15vw, 120px) 20px',
        zIndex: 1,
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          textAlign: 'center', 
          width: '100%',
          opacity: 1 - scrollY / 500,
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'all 0.1s linear',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '20px',
            marginBottom: 'clamp(20px, 5vw, 32px)',
            fontSize: 'clamp(12px, 3vw, 13px)',
            fontWeight: '600',
            color: '#a78bfa',
            letterSpacing: '0.5px',
            animation: 'fadeInUp 0.8s ease-out',
          }}>
            ✨ AI-Powered Learning Platform
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 9vw, 80px)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: 'clamp(16px, 4vw, 24px)',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 0.8s ease-out 0.1s both',
          }}>
            Master Any Skill.<br />
            Powered by AI.
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 4vw, 20px)',
            color: '#9ca3af',
            marginBottom: 'clamp(32px, 8vw, 48px)',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto clamp(32px, 8vw, 48px)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}>
            Personalized learning paths, expert instruction, and AI mentorship. Learn at your pace, achieve your goals.
          </p>

          <div style={{
            display: 'flex',
            gap: 'clamp(12px, 3vw, 16px)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out 0.3s both',
          }}>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: '700',
                fontSize: 'clamp(14px, 3vw, 16px)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 30px 70px rgba(139, 92, 246, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(139, 92, 246, 0.3)'
              }}
            >
              Start Learning Free
            </button>
            <a href="#features" style={{
              padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#e5e7eb',
              fontWeight: '700',
              fontSize: 'clamp(14px, 3vw, 16px)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}>
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div style={{
            marginTop: 'clamp(60px, 15vw, 80px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 'clamp(16px, 4vw, 24px)',
            maxWidth: '800px',
            margin: 'clamp(60px, 15vw, 80px) auto 0',
          }}>
            {[
              { value: '50K+', label: 'Active Learners' },
              { value: '95%', label: 'Completion Rate' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: 'clamp(16px, 4vw, 24px)',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{
                  fontSize: 'clamp(20px, 5vw, 28px)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#9ca3af', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        position: 'relative',
        padding: 'clamp(80px, 20vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 15vw, 80px)' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 8vw, 56px)',
              fontWeight: '800',
              marginBottom: 'clamp(12px, 3vw, 16px)',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Everything You Need to Learn
            </h2>
            <p style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', color: '#9ca3af' }}>
              Powerful features designed for your success
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(16px, 4vw, 24px)',
          }}>
            {[
              { Icon: Icons.Brain, title: 'AI Learning', desc: 'Personalized paths that adapt to you' },
              { Icon: Icons.TrendingUp, title: 'Progress Tracking', desc: 'Real-time analytics & insights' },
              { Icon: Icons.Users, title: 'Community', desc: 'Learn alongside experts' },
              { Icon: Icons.Award, title: 'Certifications', desc: 'Industry-recognized credentials' },
              { Icon: Icons.Zap, title: 'Live Mentorship', desc: 'Direct access to instructors' },
              { Icon: Icons.Target, title: 'Structured Path', desc: 'Clear learning objectives' },
            ].map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Dashboard Preview */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 20vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 15vw, 80px)' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 8vw, 56px)',
              fontWeight: '800',
              marginBottom: 'clamp(12px, 3vw, 16px)',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Your Learning Dashboard
            </h2>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '20px',
            padding: 'clamp(20px, 5vw, 40px)',
            backdropFilter: 'blur(30px)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'clamp(12px, 3vw, 20px)', marginBottom: 'clamp(24px, 6vw, 40px)' }}>
              {[
                { label: 'Hours', value: '142' },
                { label: 'Courses', value: '3' },
                { label: 'Certificates', value: '2' },
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: 'clamp(16px, 4vw, 24px)',
                  background: 'rgba(139, 92, 246, 0.15)',
                  borderRadius: '10px',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                }}>
                  <div style={{ fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: '800', background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '6px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#9ca3af' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px, 3vw, 20px)' }}>
              {[
                { title: 'Data Science', progress: 65 },
                { title: 'Web Dev', progress: 32 },
              ].map((course, i) => (
                <div key={i} style={{
                  padding: 'clamp(14px, 3vw, 20px)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                }}>
                  <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: '700', marginBottom: '10px' }}>{course.title}</p>
                  <div style={{ height: '5px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)', width: `${course.progress}%` }} />
                  </div>
                  <p style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#9ca3af', marginTop: '6px' }}>{course.progress}%</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section style={{
        position: 'relative',
        padding: 'clamp(60px, 15vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: 2,
      }}>
        <ScrollReveal>
          <h2 style={{
            fontSize: 'clamp(28px, 7vw, 56px)',
            fontWeight: '800',
            marginBottom: 'clamp(16px, 4vw, 24px)',
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Ready to transform?
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#9ca3af',
            marginBottom: 'clamp(28px, 7vw, 48px)',
          }}>
            Join thousands of learners advancing their careers today.
          </p>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: '700',
              fontSize: 'clamp(14px, 3vw, 16px)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)',
            }}
          >
            Start Today
          </button>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '20px',
        borderTop: '1px solid rgba(139, 92, 246, 0.1)',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: 'clamp(11px, 2.5vw, 14px)',
        zIndex: 2,
        position: 'relative',
      }}>
        © 2024 iLEARN. The future of learning is here.
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
              padding: 'clamp(28px, 6vw, 48px)',
              maxWidth: '420px',
              width: '100%',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)',
              animation: 'slideUp 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: '700', marginBottom: '8px' }}>
              Welcome Back
            </h2>
            <p style={{ color: '#9ca3af', marginBottom: '24px', fontSize: 'clamp(12px, 3vw, 14px)' }}>
              Sign in to continue learning
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
                  fontSize: 'clamp(12px, 3vw, 14px)',
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
                  fontSize: 'clamp(12px, 3vw, 14px)',
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
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  cursor: 'pointer',
                  marginTop: '6px',
                }}
              >
                Sign In
              </button>
            </form>
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 'clamp(11px, 2.5vw, 13px)', marginTop: '16px' }}>
              Demo: <strong>admin / admin123</strong>
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

// Scroll Reveal Component
function ScrollReveal({ children }: { children: React.ReactNode }) {
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
      }}
    >
      {children}
    </div>
  )
}

// Feature Card with Hover Animation
function FeatureCard({ Icon, title, desc, delay }: any) {
  return (
    <div
      style={{
        padding: 'clamp(20px, 5vw, 32px)',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: '14px',
        backdropFilter: 'blur(20px)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: `slideInLeft 0.6s ease-out ${delay}s both`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
      }}
    >
      <div style={{ fontSize: '24px', marginBottom: '12px', color: '#a78bfa' }}>
        <Icon />
      </div>
      <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#9ca3af' }}>{desc}</p>
    </div>
  )
}