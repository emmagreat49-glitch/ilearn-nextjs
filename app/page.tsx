'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin123')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin123') {
      router.push('/dashboard')
    }
  }

  return (
    <div style={{
      background: '#0a0d14',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `
          radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)
        `,
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 13, 20, 0.5)',
        backdropFilter: 'blur(30px)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
        padding: '16px 20px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '18px',
              boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)',
            }}>i</div>
            <span style={{ fontSize: '16px', fontWeight: '800', letterSpacing: '-0.5px' }}>iLEARN</span>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              padding: '9px 20px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              borderRadius: '8px',
              color: '#06b6d4',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'all 0.3s',
            }}
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(60px, 15vw, 120px) 20px',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '1000px', textAlign: 'center', width: '100%' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '20px',
            marginBottom: 'clamp(20px, 5vw, 32px)',
            fontSize: '12px',
            fontWeight: '600',
            color: '#06b6d4',
            letterSpacing: '0.5px',
          }}>
            ✨ The Future of Learning
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 9vw, 80px)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: 'clamp(16px, 4vw, 24px)',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Master the Skills<br />
            That Define Tomorrow
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 4vw, 22px)',
            color: '#94a3b8',
            marginBottom: 'clamp(32px, 8vw, 48px)',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto clamp(32px, 8vw, 48px)',
          }}>
            AI-powered personalization meets world-class instruction. Learn from industry experts in a platform built for the future.
          </p>

          <div style={{
            display: 'flex',
            gap: 'clamp(12px, 3vw, 16px)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: '700',
                fontSize: 'clamp(14px, 3vw, 16px)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 20px 50px rgba(6, 182, 212, 0.3)',
              }}
            >
              Start Learning
            </button>
            <a href="#features" style={{
              padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#e2e8f0',
              fontWeight: '700',
              fontSize: 'clamp(14px, 3vw, 16px)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}>
              Explore
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
              { value: '50K+', label: 'Learners' },
              { value: '95%', label: 'Completion' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: 'clamp(16px, 4vw, 24px)',
                  background: 'rgba(15, 23, 42, 0.4)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{
                  fontSize: 'clamp(20px, 5vw, 28px)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#94a3b8', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 20vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 15vw, 80px)' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 8vw, 56px)',
            fontWeight: '800',
            marginBottom: 'clamp(12px, 3vw, 16px)',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Your Learning Dashboard
          </h2>
          <p style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Track progress and get personalized recommendations
          </p>
        </div>

        {/* Dashboard Preview */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          borderRadius: '16px',
          padding: 'clamp(20px, 5vw, 40px)',
          backdropFilter: 'blur(30px)',
          overflow: 'hidden',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'clamp(12px, 3vw, 20px)', marginBottom: 'clamp(24px, 6vw, 40px)' }}>
            {[
              { label: 'Hours', value: '142' },
              { label: 'Courses', value: '3' },
              { label: 'Certificates', value: '2' },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: 'clamp(16px, 4vw, 24px)',
                background: 'rgba(6, 182, 212, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(6, 182, 212, 0.2)',
              }}>
                <div style={{ fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: '800', color: '#06b6d4', marginBottom: '6px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#94a3b8' }}>{stat.label}</div>
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
                border: '1px solid rgba(6, 182, 212, 0.2)',
              }}>
                <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: '700', marginBottom: '10px' }}>{course.title}</p>
                <div style={{
                  height: '5px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)',
                    width: `${course.progress}%`,
                  }} />
                </div>
                <p style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#94a3b8', marginTop: '6px' }}>
                  {course.progress}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Bento */}
      <section id="features" style={{
        position: 'relative',
        padding: 'clamp(80px, 20vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 15vw, 80px)' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 8vw, 56px)',
            fontWeight: '800',
            marginBottom: 'clamp(12px, 3vw, 16px)',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Why learners choose iLEARN
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(16px, 4vw, 24px)',
        }}>
          {[
            { icon: '→', title: 'AI-Powered Learning', desc: 'Adaptive paths that learn with you' },
            { icon: '■', title: 'Real-Time Analytics', desc: 'Track every step of your journey' },
            { icon: '●', title: 'Expert Community', desc: 'Learn alongside industry pros' },
            { icon: '▲', title: 'Verified Credentials', desc: 'Earn recognized certifications' },
            { icon: '◆', title: 'Live Mentorship', desc: 'Direct access to instructors' },
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                padding: 'clamp(20px, 5vw, 32px)',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '14px',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ fontSize: 'clamp(24px, 6vw, 32px)', marginBottom: '12px', color: '#06b6d4' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 20px)', fontWeight: '700', marginBottom: '8px' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#94a3b8' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 20vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderTop: '1px solid rgba(6, 182, 212, 0.1)',
        zIndex: 2,
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 15vw, 80px)' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 8vw, 56px)',
            fontWeight: '800',
            marginBottom: 'clamp(12px, 3vw, 16px)',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Premium Courses
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(16px, 4vw, 28px)',
          marginBottom: 'clamp(40px, 10vw, 60px)',
        }}>
          {[
            { icon: '●', title: 'Data Science', students: '2.4K', rating: 4.9 },
            { icon: '■', title: 'Web Dev', students: '3.1K', rating: 4.8 },
            { icon: '▲', title: 'AI & ML', students: '1.8K', rating: 4.7 },
          ].map((course, i) => (
            <div
              key={i}
              style={{
                padding: 'clamp(20px, 5vw, 32px)',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '14px',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ fontSize: 'clamp(28px, 7vw, 48px)', marginBottom: '12px', color: '#06b6d4' }}>
                {course.icon}
              </div>
              <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 20px)', fontWeight: '700', marginBottom: '12px' }}>
                {course.title}
              </h3>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                borderTop: '1px solid rgba(6, 182, 212, 0.2)',
                fontSize: 'clamp(11px, 2.5vw, 13px)',
                color: '#94a3b8',
              }}>
                <span>{course.students}</span>
                <span style={{ color: '#fbbf24' }}>⭐ {course.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/courses" style={{
            display: 'inline-block',
            padding: 'clamp(10px, 2.5vw, 12px) clamp(20px, 5vw, 32px)',
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            borderRadius: '8px',
            color: '#06b6d4',
            fontWeight: '700',
            fontSize: 'clamp(12px, 3vw, 14px)',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}>
            View All Courses →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        position: 'relative',
        padding: 'clamp(60px, 15vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: 2,
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 7vw, 56px)',
          fontWeight: '800',
          marginBottom: 'clamp(16px, 4vw, 24px)',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Ready to transform?
        </h2>
        <p style={{
          fontSize: 'clamp(14px, 3.5vw, 18px)',
          color: '#94a3b8',
          marginBottom: 'clamp(28px, 7vw, 48px)',
          maxWidth: '600px',
          margin: '0 auto clamp(28px, 7vw, 48px)',
        }}>
          Join thousands of professionals advancing their careers with iLEARN.
        </p>
        <button
          onClick={() => setShowLogin(true)}
          style={{
            padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '700',
            fontSize: 'clamp(14px, 3vw, 16px)',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 20px 50px rgba(6, 182, 212, 0.3)',
          }}
        >
          Start Today
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '20px',
        borderTop: '1px solid rgba(6, 182, 212, 0.1)',
        textAlign: 'center',
        color: '#64748b',
        fontSize: 'clamp(11px, 2.5vw, 14px)',
        zIndex: 2,
        position: 'relative',
      }}>
        © 2024 iLEARN. Transforming learning for the future.
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
          }}
          onClick={() => setShowLogin(false)}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.85) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '16px',
              padding: 'clamp(28px, 6vw, 48px)',
              maxWidth: '420px',
              width: '100%',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 20px 60px rgba(6, 182, 212, 0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: '700', marginBottom: '8px' }}>
              Welcome Back
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: 'clamp(12px, 3vw, 14px)' }}>
              Sign in to your dashboard
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
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
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
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  cursor: 'pointer',
                  marginTop: '6px',
                  transition: 'all 0.3s',
                }}
              >
                Sign In
              </button>
            </form>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: 'clamp(11px, 2.5vw, 13px)', marginTop: '16px' }}>
              Demo: <strong>admin / admin123</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}