'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const FEATURES = [
  {
    icon: '🎯',
    title: 'Personalized Learning',
    desc: 'AI-powered paths that adapt to your learning style and pace',
  },
  {
    icon: '📊',
    title: 'Progress Analytics',
    desc: 'Detailed insights into your learning journey and achievements',
  },
  {
    icon: '🔗',
    title: 'Career Integration',
    desc: 'Connect your skills directly with job opportunities',
  },
  {
    icon: '👥',
    title: 'Expert Community',
    desc: 'Learn from industry professionals and peer learners',
  },
  {
    icon: '🏆',
    title: 'Verified Credentials',
    desc: 'Earn blockchain-verified certificates employers trust',
  },
  {
    icon: '⚡',
    title: 'Live Sessions',
    desc: 'Interactive classes with real-time feedback and mentorship',
  },
]

const COURSES_PREVIEW = [
  {
    icon: '📊',
    title: 'Data Science',
    subtitle: 'Master analytics & insights',
    students: '2.4K',
    rating: 4.9,
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: '🌐',
    title: 'Web Dev',
    subtitle: 'Modern fullstack development',
    students: '3.1K',
    rating: 4.8,
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: '🤖',
    title: 'AI Engineering',
    subtitle: 'LLMs & machine learning',
    students: '1.8K',
    rating: 4.7,
    color: 'from-green-600 to-emerald-500',
  },
]

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
    <div style={{ background: '#0a0d14', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 13, 20, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '16px 0',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
              letterSpacing: '-1px',
            }}>i</div>
            <span style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.5px' }}>iLEARN</span>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              padding: '10px 24px',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '8px',
              color: '#06b6d4',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(14, 165, 233, 0.2)'
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)'
            }}
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '120px 40px', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '24px',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Learn from the Future
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#94a3b8',
            marginBottom: '48px',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto 48px',
          }}>
            Master in-demand skills with AI-powered personalization. Learn from industry experts in an environment designed for the modern learner.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                padding: '14px 40px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 20px 25px rgba(6, 182, 212, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 25px 35px rgba(6, 182, 212, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 25px rgba(6, 182, 212, 0.15)'
              }}
            >
              Start Learning Now
            </button>
            <a href="/courses" style={{
              padding: '14px 40px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#e2e8f0',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}>
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '60px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        {[
          { value: '50K+', label: 'Active Learners' },
          { value: '200+', label: 'Expert Courses' },
          { value: '95%', label: 'Completion Rate' },
          { value: '4.9★', label: 'Average Rating' },
        ].map((stat, i) => (
          <div key={i}>
            <div style={{
              fontSize: '40px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '8px',
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8', fontWeight: '500' }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section style={{ padding: '120px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-1px' }}>
            Why learners choose iLEARN
          </h2>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Built for the modern learner with AI, community, and real-world outcomes
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              style={{
                padding: '32px',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(226, 232, 240, 0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)'
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Preview */}
      <section style={{ padding: '120px 40px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-1px' }}>
            Featured Courses
          </h2>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Start with our most popular courses, trusted by thousands of learners
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '48px' }}>
          {COURSES_PREVIEW.map((course, i) => (
            <div
              key={i}
              style={{
                padding: '32px',
                background: `linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)`,
                border: '1px solid rgba(226, 232, 240, 0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{course.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px', letterSpacing: '-0.5px' }}>
                {course.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>{course.subtitle}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>{course.students} students</span>
                <span style={{ fontSize: '13px', color: '#fbbf24' }}>⭐ {course.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/courses" style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            color: '#e2e8f0',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}>
            View All Courses →
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px' }}>
          Ready to transform your future?
        </h2>
        <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Join thousands of professionals who are already learning, growing, and advancing their careers
        </p>
        <button
          onClick={() => setShowLogin(true)}
          style={{
            padding: '14px 40px',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 20px 25px rgba(6, 182, 212, 0.15)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 25px 35px rgba(6, 182, 212, 0.25)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 20px 25px rgba(6, 182, 212, 0.15)'
          }}
        >
          Get Started Free
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '14px',
      }}>
        <p>© 2024 iLEARN. Empowering learners worldwide.</p>
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
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
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
              border: '1px solid rgba(226, 232, 240, 0.1)',
              borderRadius: '16px',
              padding: '48px',
              maxWidth: '420px',
              width: '100%',
              backdropFilter: 'blur(20px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>
              Welcome Back
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '14px' }}>
              Sign in to continue your learning journey
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
                  border: '1px solid rgba(226, 232, 240, 0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)'
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
                  border: '1px solid rgba(226, 232, 240, 0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)'
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
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '8px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Sign In
              </button>
            </form>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '13px', marginTop: '16px' }}>
              Demo: <strong>admin / admin123</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}