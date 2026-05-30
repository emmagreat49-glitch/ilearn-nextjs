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

      {/* Features - Horizontal Scroll */}
      <HorizontalScroll scrollY={scrollY} />

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

function HorizontalScroll({ scrollY }: { scrollY: number }) {
  const features = [
    { title: 'AI Study Assistant', desc: 'Instant answers 24/7' },
    { title: 'Smart Learning Paths', desc: 'Personalized courses' },
    { title: 'Progress Analytics', desc: 'Real-time insights' },
    { title: 'Study Planner', desc: 'AI schedules' },
    { title: 'Study Reminder', desc: 'Never miss a session' },
    { title: 'Mock Exams', desc: 'Practice with AI feedback' },
  ]

  const progress = Math.min(1, Math.max(0, (scrollY - 800) / 2000))
  const scrollAmount = -progress * (features.length - 1) * 320

  return (
    <section style={{ position: 'relative', height: '400vh', zIndex: 2 }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '20px', width: 'fit-content', transform: `translateX(${scrollAmount}px)`, transition: 'transform 0.05s linear' }}>
          {features.map((f, i) => (
            <div key={i} style={{ minWidth: '320px', height: '400px', padding: '40px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '20px', backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', opacity: Math.max(0.6, 1 - Math.abs(progress * features.length - i) * 0.3), transform: `scale(${Math.max(0.9, 1 - Math.abs(progress * features.length - i) * 0.1)})` }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>{f.title}</h3>
              <p style={{ fontSize: '16px', color: '#9ca3af' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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