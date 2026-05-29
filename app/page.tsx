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
      {/* Animated Background Elements */}
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
        padding: '16px 0',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '20px',
              boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)',
            }}>i</div>
            <span style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.5px' }}>iLEARN</span>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              padding: '10px 24px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              borderRadius: '10px',
              color: '#06b6d4',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.3s',
              boxShadow: '0 4px 16px rgba(6, 182, 212, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.25)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(6, 182, 212, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(6, 182, 212, 0.1)'
            }}
          >
            Sign In
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
        padding: '80px 40px',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '20px',
            marginBottom: '32px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#06b6d4',
            letterSpacing: '0.5px',
          }}>
            ✨ The Future of Learning
          </div>

          <h1 style={{
            fontSize: '80px',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '24px',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 0.8s ease-out',
          }}>
            Master the Skills<br />
            That Define Tomorrow
          </h1>

          <p style={{
            fontSize: '22px',
            color: '#94a3b8',
            marginBottom: '48px',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto 48px',
            animation: 'fadeInUp 0.8s ease-out 0.1s both',
          }}>
            AI-powered personalization meets world-class instruction. Learn from industry experts in a platform built for the future.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                padding: '16px 48px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontWeight: '700',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 20px 50px rgba(6, 182, 212, 0.3)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 30px 70px rgba(6, 182, 212, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.3)'
              }}
            >
              Start Learning Now
            </button>
            <a href="#features" style={{
              padding: '16px 48px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: '#e2e8f0',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
            }}>
              Explore Platform
            </a>
          </div>

          {/* Floating Stats */}
          <div style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            maxWidth: '800px',
            margin: '80px auto 0',
          }}>
            {[
              { value: '50K+', label: 'Active Learners' },
              { value: '95%', label: 'Completion Rate' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '24px',
                  background: 'rgba(15, 23, 42, 0.4)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section style={{
        position: 'relative',
        padding: '120px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
        }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: '800',
            marginBottom: '16px',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Your Learning Dashboard
          </h2>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Track progress, access courses, and get personalized recommendations all in one place
          </p>
        </div>

        {/* Dashboard Preview */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          borderRadius: '20px',
          padding: '40px',
          backdropFilter: 'blur(30px)',
          boxShadow: '0 40px 80px rgba(6, 182, 212, 0.1)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Fake Dashboard Content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            {[
              { label: 'Hours Learned', value: '142' },
              { label: 'Courses Enrolled', value: '3' },
              { label: 'Certifications', value: '2' },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: '24px',
                background: 'rgba(6, 182, 212, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(6, 182, 212, 0.2)',
              }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#06b6d4', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Course Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { title: 'Data Science Mastery', progress: 65 },
              { title: 'Full Stack Web Dev', progress: 32 },
            ].map((course, i) => (
              <div key={i} style={{
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(6, 182, 212, 0.2)',
              }}>
                <p style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>{course.title}</p>
                <div style={{
                  height: '6px',
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
                <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '8px' }}>
                  {course.progress}% Complete
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" style={{
        position: 'relative',
        padding: '120px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: '800',
            marginBottom: '16px',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Why learners choose iLEARN
          </h2>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Built with AI, designed for humans, powered by industry experts
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          gridAutoRows: '280px',
        }}>
          {[
            { icon: '🎯', title: 'AI-Powered Learning', desc: 'Adaptive paths that learn with you', span: 1 },
            { icon: '📊', title: 'Real-Time Analytics', desc: 'Track every step of your journey', span: 1 },
            { icon: '👥', title: 'Expert Community', desc: 'Learn alongside industry pros', span: 1 },
            { icon: '🏆', title: 'Verified Credentials', desc: 'Earn recognized certifications', span: 2 },
            { icon: '⚡', title: 'Live Mentorship', desc: 'Direct access to instructors', span: 1 },
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                gridColumn: `span ${feature.span}`,
                padding: '32px',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{feature.title}</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#94a3b8' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Preview */}
      <section style={{
        position: 'relative',
        padding: '120px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
        borderTop: '1px solid rgba(6, 182, 212, 0.1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: '800',
            marginBottom: '16px',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Premium Courses
          </h2>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Explore our hand-picked collection of industry-leading courses
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }}>
          {[
            { icon: '📊', title: 'Data Science', students: '2.4K', rating: 4.9 },
            { icon: '🌐', title: 'Web Dev', students: '3.1K', rating: 4.8 },
            { icon: '🤖', title: 'AI & ML', students: '1.8K', rating: 4.7 },
          ].map((course, i) => (
            <div
              key={i}
              style={{
                padding: '32px',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                e.currentTarget.style.transform = 'translateY(-8px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{course.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>{course.title}</h3>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '16px',
                borderTop: '1px solid rgba(6, 182, 212, 0.2)',
              }}>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>{course.students} students</span>
                <span style={{ fontSize: '13px', color: '#fbbf24', fontWeight: '600' }}>⭐ {course.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a href="/courses" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            borderRadius: '10px',
            color: '#06b6d4',
            fontWeight: '700',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}>
            View All Courses →
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        position: 'relative',
        padding: '120px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: 2,
      }}>
        <h2 style={{
          fontSize: '56px',
          fontWeight: '800',
          marginBottom: '24px',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Ready to transform your future?
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#94a3b8',
          marginBottom: '48px',
          maxWidth: '600px',
          margin: '0 auto 48px',
        }}>
          Join thousands of professionals who are already learning, growing, and advancing their careers with iLEARN.
        </p>
        <button
          onClick={() => setShowLogin(true)}
          style={{
            padding: '16px 48px',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            fontWeight: '700',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 20px 50px rgba(6, 182, 212, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 30px 70px rgba(6, 182, 212, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.3)'
          }}
        >
          Start Free Today
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        borderTop: '1px solid rgba(6, 182, 212, 0.1)',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '14px',
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
              borderRadius: '20px',
              padding: '48px',
              maxWidth: '420px',
              width: '100%',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 20px 60px rgba(6, 182, 212, 0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>
              Welcome Back
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '14px' }}>
              Sign in to your learning dashboard
            </p>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)'
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: '700',
                  cursor: 'pointer',
                  marginTop: '8px',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Sign In
              </button>
            </form>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '13px', marginTop: '20px' }}>
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
      `}</style>
    </div>
  )
}