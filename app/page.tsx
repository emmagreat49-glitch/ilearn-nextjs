'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

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
    <div style={{ background: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Fixed Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10, 14, 39, 0.3)', backdropFilter: 'blur(40px)', borderBottom: '1px solid rgba(139, 92, 246, 0.1)', padding: '16px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '20px' }}>i</div>
            <span style={{ fontSize: '16px', fontWeight: '800' }}>iLEARN</span>
          </div>
          <button onClick={() => setShowLogin(true)} style={{ padding: '10px 24px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '10px', color: 'white', fontWeight: '600', cursor: 'pointer' }}>Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px', zIndex: 2 }}>
        <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(40px, 12vw, 100px)', fontWeight: '900', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-2px', background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: Math.max(0, 1 - scrollY / 500) }}>Learn Smarter. Grow Faster.</h1>
          <p style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#9ca3af', lineHeight: '1.6', maxWidth: '600px', margin: '32px auto 48px' }}>AI-powered learning that adapts to you. Personalized paths, expert instruction, real-time insights.</p>
          <button onClick={() => setShowLogin(true)} style={{ padding: '14px 40px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '10px', color: 'white', fontWeight: '700', cursor: 'pointer', boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)' }}>Start Free</button>
        </div>
      </section>

      {/* Visual Features - Horizontal Scroll */}
      <VisualFeaturesSection scrollY={scrollY} />

      {/* Stats */}
      <section style={{ position: 'relative', padding: '100px 20px', maxWidth: '1000px', margin: '0 auto', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', textAlign: 'center' }}>
          <StatCard value={50} label="K+ Learners" scrollY={scrollY} offset={2500} />
          <StatCard value={200} label="+ Courses" scrollY={scrollY} offset={2500} />
          <StatCard value={95} label="% Completion" scrollY={scrollY} offset={2500} />
        </div>
      </section>

      {/* Benefits */}
      <section style={{ position: 'relative', padding: '100px 20px', maxWidth: '1400px', margin: '0 auto', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: '800', textAlign: 'center', marginBottom: '80px', background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why iLEARN?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { icon: '⚡', title: 'Learn Faster', desc: 'AI adapts to your pace', offset: 3000 },
            { icon: '📈', title: 'Track Progress', desc: 'Real-time analytics', offset: 3100 },
            { icon: '🎯', title: 'Goal Focused', desc: 'Structured paths', offset: 3200 },
            { icon: '👥', title: 'Community', desc: '50K+ active learners', offset: 3300 },
            { icon: '✅', title: 'Certificates', desc: 'Industry-recognized', offset: 3400 },
            { icon: '🔄', title: 'Lifetime Access', desc: 'Learn at your pace', offset: 3500 },
          ].map((item, i) => (
            <BenefitCard key={i} icon={item.icon} title={item.title} desc={item.desc} scrollY={scrollY} offset={item.offset} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', borderTop: '1px solid rgba(139, 92, 246, 0.1)', textAlign: 'center', color: '#6b7280', fontSize: '14px', zIndex: 2, position: 'relative' }}>© 2024 iLEARN.</footer>

      {/* Login */}
      {showLogin && <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} />}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  )
}

function VisualFeaturesSection({ scrollY }: { scrollY: number }) {
  const features = [
    {
      title: 'AI Study Assistant',
      subtitle: 'Get instant answers',
      preview: <ChatPreview />,
    },
    {
      title: 'Learning Analytics',
      subtitle: 'Track your progress',
      preview: <AnalyticsPreview />,
    },
    {
      title: 'Study Planner',
      subtitle: 'AI-powered scheduling',
      preview: <PlannerPreview />,
    },
    {
      title: 'Course Library',
      subtitle: 'Curated learning paths',
      preview: <CoursePreview />,
    },
    {
      title: 'Flashcards',
      subtitle: 'Interactive learning',
      preview: <FlashcardPreview />,
    },
    {
      title: 'Mock Exams',
      subtitle: 'Practice & improve',
      preview: <ExamPreview />,
    },
  ]

  const progress = Math.min(1, Math.max(0, (scrollY - 800) / 2000))
  const scrollAmount = -progress * (features.length - 1) * 360

  return (
    <section style={{ position: 'relative', height: '400vh', zIndex: 2 }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '24px', width: 'fit-content', transform: `translateX(${scrollAmount}px)`, transition: 'transform 0.05s linear' }}>
          {features.map((f, i) => (
            <FeaturePreviewCard key={i} {...f} progress={progress} index={i} total={features.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturePreviewCard({ title, subtitle, preview, progress, index, total }: any) {
  const cardProgress = Math.max(0, Math.min(1, (progress * total - index) * 1.5))

  return (
    <div style={{
      minWidth: '360px',
      height: '480px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: '20px',
      backdropFilter: 'blur(20px)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      opacity: Math.max(0.4, 1 - Math.abs(progress * total - index) * 0.3),
      transform: `scale(${Math.max(0.9, 1 - Math.abs(progress * total - index) * 0.1)})`,
      transition: 'all 0.1s ease-out',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px', color: '#fff' }}>{title}</h3>
        <p style={{ fontSize: '13px', color: '#9ca3af' }}>{subtitle}</p>
      </div>

      {/* Preview */}
      <div style={{
        flex: 1,
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        opacity: cardProgress,
        transform: `translateY(${(1 - cardProgress) * 10}px)`,
      }}>
        {preview}
      </div>
    </div>
  )
}

// AI Chat Preview
function ChatPreview() {
  return (
    <div style={{ padding: '12px', fontSize: '11px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ background: 'rgba(139, 92, 246, 0.3)', padding: '8px 10px', borderRadius: '6px', color: '#9ca3af', maxWidth: '85%' }}>How do I solve quantum mechanics?</div>
      <div style={{ background: 'rgba(59, 130, 246, 0.3)', padding: '8px 10px', borderRadius: '6px', color: '#9ca3af', alignSelf: 'flex-end', maxWidth: '85%' }}>Quantum mechanics involves... (AI-generated answer)</div>
      <div style={{ background: 'rgba(139, 92, 246, 0.3)', padding: '8px 10px', borderRadius: '6px', color: '#9ca3af', maxWidth: '85%' }}>Can you explain superposition?</div>
      <div style={{ marginTop: 'auto', padding: '8px', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '4px', borderTop: '1px solid rgba(139, 92, 246, 0.3)', fontSize: '10px', color: '#6b7280' }}>Type your question...</div>
    </div>
  )
}

// Learning Analytics Preview
function AnalyticsPreview() {
  return (
    <div style={{ padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ fontSize: '11px', color: '#9ca3af', display: 'flex', justifyContent: 'space-between' }}>
        <span>Today's Progress</span>
        <span style={{ color: '#60a5fa', fontWeight: '700' }}>75%</span>
      </div>
      <div style={{ background: 'rgba(139, 92, 246, 0.2)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', height: '100%', width: '75%' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
        <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '8px', borderRadius: '6px', fontSize: '10px', textAlign: 'center' }}>
          <div style={{ color: '#60a5fa', fontWeight: '700' }}>24h</div>
          <div style={{ color: '#6b7280', fontSize: '9px' }}>Streak</div>
        </div>
        <div style={{ background: 'rgba(139, 92, 246, 0.2)', padding: '8px', borderRadius: '6px', fontSize: '10px', textAlign: 'center' }}>
          <div style={{ color: '#a78bfa', fontWeight: '700' }}>1.2h</div>
          <div style={{ color: '#6b7280', fontSize: '9px' }}>Today</div>
        </div>
      </div>
      <svg viewBox="0 0 100 40" style={{ marginTop: '8px', height: '30px', width: '100%' }}>
        <polyline points="5,25 15,15 25,20 35,10 45,18 55,12 65,22 75,16 85,20 95,10" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
        <polyline points="5,25 15,15 25,20 35,10 45,18 55,12 65,22 75,16 85,20 95,10" stroke="url(#grad)" strokeWidth="0.5" fill="url(#grad)" opacity="0.2" />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// Study Planner Preview
function PlannerPreview() {
  return (
    <div style={{ padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '700' }}>This Week</div>
      {[
        { day: 'Mon', time: '2h', color: '#a78bfa' },
        { day: 'Tue', time: '1.5h', color: '#60a5fa' },
        { day: 'Wed', time: '2.5h', color: '#a78bfa' },
      ].map((item) => (
        <div key={item.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', padding: '6px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '4px' }}>
          <span style={{ color: item.color, fontWeight: '700' }}>{item.day}</span>
          <div style={{ background: item.color, height: '3px', width: '40px', borderRadius: '2px' }} />
          <span style={{ color: '#9ca3af' }}>{item.time}</span>
        </div>
      ))}
    </div>
  )
}

// Course Library Preview
function CoursePreview() {
  return (
    <div style={{ padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        { title: 'Advanced Physics', level: 'Pro', color: '#a78bfa' },
        { title: 'Python Basics', level: 'Beginner', color: '#60a5fa' },
      ].map((course) => (
        <div key={course.title} style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '8px', borderRadius: '6px', borderLeft: `3px solid ${course.color}` }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>{course.title}</div>
          <div style={{ fontSize: '9px', color: course.color }}>{course.level}</div>
        </div>
      ))}
    </div>
  )
}

// Flashcard Preview
function FlashcardPreview() {
  return (
    <div style={{ padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2))',
        border: '1px solid rgba(139, 92, 246, 0.4)',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        width: '100%',
        minHeight: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '700' }}>What is DNA?</div>
      </div>
      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', width: '100%' }}>
        <div style={{ background: 'rgba(239, 68, 68, 0.3)', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', color: '#ef4444' }}>✗</div>
        <div style={{ background: 'rgba(34, 197, 94, 0.3)', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', color: '#22c55e' }}>✓</div>
      </div>
    </div>
  )
}

// Exam Preview
function ExamPreview() {
  return (
    <div style={{ padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '700' }}>Physics Exam 2024</div>
      <div style={{ background: 'rgba(139, 92, 246, 0.2)', padding: '8px', borderRadius: '6px', fontSize: '10px' }}>
        <div style={{ color: '#9ca3af', marginBottom: '4px' }}>Score: 87/100</div>
        <div style={{ background: 'rgba(0, 0, 0, 0.3)', height: '4px', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ background: '#22c55e', height: '100%', width: '87%' }} />
        </div>
      </div>
      <div style={{ fontSize: '9px', color: '#9ca3af', padding: '6px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '4px' }}>
        ✓ 35/40 Correct<br/>✗ 5 Need Review
      </div>
    </div>
  )
}

function StatCard({ value, label, scrollY, offset }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset + 200) / 200))
  return (
    <div style={{ opacity: progress, transform: `translateY(${(1 - progress) * 20}px)` }}>
      <div style={{ fontSize: 'clamp(40px, 8vw, 60px)', fontWeight: '800', background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>{Math.floor(progress * value)}{value === 95 ? '%' : '+'}</div>
      <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '600' }}>{label}</div>
    </div>
  )
}

function BenefitCard({ icon, title, desc, scrollY, offset }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset + 200) / 200))
  return (
    <div style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '16px', opacity: progress, transform: `translateY(${(1 - progress) * 20}px)`, cursor: 'pointer' }}>
      <div style={{ fontSize: '40px', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#9ca3af' }}>{desc}</p>
    </div>
  )
}

function LoginModal({ showLogin, setShowLogin, username, setUsername, password, setPassword, handleLogin }: any) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setShowLogin(false)}>
      <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px', padding: '48px', maxWidth: '420px', width: '100%', backdropFilter: 'blur(30px)' }} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px' }}>Welcome</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ padding: '10px 14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '8px', color: 'white', fontSize: '14px' }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px 14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '8px', color: 'white', fontSize: '14px' }} />
          <button type="submit" style={{ padding: '10px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '8px', color: 'white', fontWeight: '700', cursor: 'pointer', marginTop: '12px' }}>Sign In</button>
        </form>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '13px', marginTop: '16px' }}>Demo: <strong>admin / admin123</strong></p>
      </div>
    </div>
  )
}