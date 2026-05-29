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
      setTimeout(() => router.push('/dashboard'), 500)
    }
  }

  const styles = {
    hero: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1419 50%, #0a0e1a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      textAlign: 'center' as const,
    },
    heroContent: {
      maxWidth: '800px',
    },
    logo: {
      width: '64px',
      height: '64px',
      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px',
      fontWeight: '700',
      color: 'white',
      margin: '0 auto 24px',
    },
    heroTitle: {
      fontSize: '64px',
      fontWeight: '800',
      lineHeight: '1.1',
      marginBottom: '24px',
      color: 'white',
    },
    gradient: {
      background: 'linear-gradient(90deg, #60a5fa 0%, #06b6d4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroDesc: {
      fontSize: '20px',
      color: '#a0aec0',
      marginBottom: '40px',
      lineHeight: '1.6',
    },
    ctaButton: {
      padding: '16px 40px',
      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    section: {
      padding: '80px 40px',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: '800',
      marginBottom: '60px',
      textAlign: 'center' as const,
      color: 'white',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      marginBottom: '80px',
    },
    featureCard: {
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(26, 31, 46, 0.6), rgba(37, 45, 61, 0.3))',
      borderRadius: '16px',
      border: '1px solid #2d3748',
      textAlign: 'center' as const,
    },
    featureIcon: {
      fontSize: '48px',
      marginBottom: '16px',
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '12px',
      color: 'white',
    },
    featureDesc: {
      fontSize: '16px',
      color: '#a0aec0',
      lineHeight: '1.6',
    },
    coursesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    },
    courseCard: {
      padding: '24px',
      background: 'linear-gradient(135deg, rgba(26, 31, 46, 0.6), rgba(37, 45, 61, 0.3))',
      borderRadius: '16px',
      border: '1px solid #2d3748',
    },
    courseIcon: {
      fontSize: '40px',
      marginBottom: '16px',
    },
    courseTitle: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '8px',
      color: 'white',
    },
    courseDesc: {
      fontSize: '14px',
      color: '#a0aec0',
      marginBottom: '16px',
    },
    statsSection: {
      background: 'linear-gradient(135deg, rgba(26, 31, 46, 0.8), rgba(37, 45, 61, 0.5))',
      padding: '60px 40px',
      borderRadius: '20px',
      border: '1px solid #2d3748',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      textAlign: 'center' as const,
    },
    stat: {
      fontSize: '24px',
      fontWeight: '700',
      color: 'white',
    },
    statValue: {
      fontSize: '48px',
      fontWeight: '800',
      background: 'linear-gradient(90deg, #60a5fa 0%, #06b6d4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '8px',
    },
    cta: {
      textAlign: 'center' as const,
      padding: '80px 40px',
    },
    ctaTitle: {
      fontSize: '48px',
      fontWeight: '800',
      marginBottom: '24px',
      color: 'white',
    },
    ctaDesc: {
      fontSize: '18px',
      color: '#a0aec0',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px',
    },
    modal: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '24px',
    },
    modalContent: {
      background: 'linear-gradient(135deg, rgba(26, 31, 46, 0.95), rgba(37, 45, 61, 0.7))',
      borderRadius: '20px',
      padding: '40px',
      maxWidth: '400px',
      width: '100%',
      border: '1px solid #2d3748',
      backdropFilter: 'blur(10px)',
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      background: '#1a1f2e',
      border: '1px solid #2d3748',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      marginBottom: '16px',
      fontFamily: 'inherit',
    },
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1419 50%, #0a0e1a 100%)' }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 14, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #2d3748',
        padding: '16px 24px',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '16px',
              color: 'white',
            }}>i</div>
            <span style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>iLEARN</span>
          </div>
          <button onClick={() => setShowLogin(true)} style={{ ...styles.ctaButton, padding: '8px 24px', fontSize: '14px' }}>
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.logo}>i</div>
          <h1 style={styles.heroTitle}>
            Learn, Grow, <br />
            <span style={styles.gradient}>Achieve More</span>
          </h1>
          <p style={styles.heroDesc}>
            Master technology at your own pace with professional-grade e-learning designed for ambitious learners. Start your journey today.
          </p>
          <button onClick={() => setShowLogin(true)} style={styles.ctaButton}>
            Get Started Now
          </button>
        </div>
      </div>

      {/* Features */}
      <div style={{ ...styles.section, background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1419 50%)' }}>
        <h2 style={styles.sectionTitle}>
          Why Choose <span style={styles.gradient}>iLEARN?</span>
        </h2>
        <div style={styles.featureGrid}>
          {[
            { icon: '🎓', title: 'Expert Instruction', desc: 'Learn from industry professionals with years of experience' },
            { icon: '⚡', title: 'Learn at Your Pace', desc: 'Study whenever and wherever it works best for you' },
            { icon: '🏆', title: 'Recognized Certificates', desc: 'Earn verifiable credentials that boost your career' },
            { icon: '💬', title: '24/7 Support', desc: 'Get help whenever you need it from our support team' },
            { icon: '🌍', title: 'Global Community', desc: 'Connect with learners from around the world' },
            { icon: '📈', title: 'Track Progress', desc: 'Monitor your learning journey with detailed analytics' },
          ].map((feature, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Preview */}
      <div style={{ ...styles.section, background: 'linear-gradient(135deg, #0f1419 0%, #0a0e1a 50%)' }}>
        <h2 style={styles.sectionTitle}>
          Our Popular <span style={styles.gradient}>Courses</span>
        </h2>
        <div style={styles.coursesGrid}>
          {[
            { icon: '📊', title: 'Data Analysis', desc: 'Master data visualization and statistical insights' },
            { icon: '🌐', title: 'Web Development', desc: 'Build modern, responsive websites from scratch' },
            { icon: '🤖', title: 'AI Fundamentals', desc: 'Learn machine learning and artificial intelligence' },
            { icon: '💻', title: 'Digital Skills', desc: 'Master workplace tools and communication' },
            { icon: '🚀', title: 'Career Paths', desc: 'Navigate your tech career with expert guidance' },
            { icon: '🐍', title: 'Python Programming', desc: 'From basics to advanced real-world projects' },
          ].map((course, i) => (
            <div key={i} style={styles.courseCard}>
              <div style={styles.courseIcon}>{course.icon}</div>
              <h3 style={styles.courseTitle}>{course.title}</h3>
              <p style={styles.courseDesc}>{course.desc}</p>
              <div style={{ fontSize: '14px', color: '#60a5fa', fontWeight: '600', cursor: 'pointer' }}>
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ ...styles.section, background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1419 50%)' }}>
        <div style={styles.statsSection}>
          <div>
            <div style={styles.statValue}>1000+</div>
            <div style={styles.stat}>Active Learners</div>
          </div>
          <div>
            <div style={styles.statValue}>95%</div>
            <div style={styles.stat}>Completion Rate</div>
          </div>
          <div>
            <div style={styles.statValue}>50+</div>
            <div style={styles.stat}>Expert Courses</div>
          </div>
          <div>
            <div style={styles.statValue}>4.9⭐</div>
            <div style={styles.stat}>Average Rating</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={styles.cta}>
        <h2 style={styles.ctaTitle}>
          Ready to <span style={styles.gradient}>Transform Your Career?</span>
        </h2>
        <p style={styles.ctaDesc}>
          Join thousands of learners who have already started their journey with iLEARN. Sign up today and get instant access to all our courses.
        </p>
        <button onClick={() => setShowLogin(true)} style={styles.ctaButton}>
          Start Learning Now
        </button>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div style={styles.modal} onClick={() => setShowLogin(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: 'white', marginBottom: '24px', fontSize: '24px', fontWeight: '700' }}>
              Welcome Back
            </h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  marginBottom: '16px',
                }}
              >
                Sign In
              </button>
            </form>
            <p style={{ textAlign: 'center', color: '#a0aec0', fontSize: '14px' }}>
              Demo: <strong>admin / admin123</strong>
            </p>
            <button
              onClick={() => setShowLogin(false)}
              style={{
                width: '100%',
                padding: '8px',
                background: 'transparent',
                color: '#a0aec0',
                border: '1px solid #2d3748',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '12px',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}