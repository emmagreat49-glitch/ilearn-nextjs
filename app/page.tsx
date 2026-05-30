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

      {/* Premium Features - Text First, Preview Background */}
      <PremiumFeaturesSection scrollY={scrollY} />

      {/* Stats with Animated Counters */}
      <section style={{ position: 'relative', padding: '120px 20px', maxWidth: '1200px', margin: '0 auto', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', textAlign: 'center' }}>
          <AnimatedStatCard value={50} label="K+ Learners" scrollY={scrollY} offset={2400} />
          <AnimatedStatCard value={200} label="+ Courses" scrollY={scrollY} offset={2400} />
          <AnimatedStatCard value={95} label="% Completion" scrollY={scrollY} offset={2400} />
        </div>
      </section>

      {/* Benefits */}
      <section style={{ position: 'relative', padding: '120px 20px', maxWidth: '1400px', margin: '0 auto', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: '800', textAlign: 'center', marginBottom: '80px', background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why iLEARN?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { icon: '⚡', title: 'Learn Faster', desc: 'AI adapts to your pace', offset: 3100 },
            { icon: '📈', title: 'Track Progress', desc: 'Real-time analytics', offset: 3200 },
            { icon: '🎯', title: 'Goal Focused', desc: 'Structured paths', offset: 3300 },
            { icon: '👥', title: 'Community', desc: '50K+ active learners', offset: 3400 },
            { icon: '✅', title: 'Certificates', desc: 'Industry-recognized', offset: 3500 },
            { icon: '🔄', title: 'Lifetime Access', desc: 'Learn at your pace', offset: 3600 },
          ].map((item, i) => (
            <BenefitCard key={i} icon={item.icon} title={item.title} desc={item.desc} scrollY={scrollY} offset={item.offset} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', borderTop: '1px solid rgba(139, 92, 246, 0.1)', textAlign: 'center', color: '#6b7280', fontSize: '14px', zIndex: 2, position: 'relative' }}>© 2024 iLEARN.</footer>

      {/* Login */}
      {showLogin && <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} />}
    </div>
  )
}

// Premium Text-First Features Section
function PremiumFeaturesSection({ scrollY }: { scrollY: number }) {
  const features = [
    { title: 'AI Study Assistant', desc: 'Get instant answers to any question', preview: <ChatPreview /> },
    { title: 'Learning Analytics', desc: 'Track progress with real-time insights', preview: <AnalyticsPreview /> },
    { title: 'Study Planner', desc: 'AI creates your perfect schedule', preview: <PlannerPreview /> },
    { title: 'Course Library', desc: 'Browse curated learning paths', preview: <CoursePreview /> },
    { title: 'Flashcards', desc: 'Interactive spaced repetition', preview: <FlashcardPreview /> },
    { title: 'Mock Exams', desc: 'Practice with AI-graded tests', preview: <ExamPreview /> },
  ]

  const progress = Math.min(1, Math.max(0, (scrollY - 800) / 2000))
  const scrollAmount = -progress * (features.length - 1) * 380

  return (
    <section style={{ position: 'relative', height: '400vh', zIndex: 2 }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '28px', width: 'fit-content', transform: `translateX(${scrollAmount}px)`, transition: 'transform 0.05s linear' }}>
          {features.map((f, i) => (
            <TextFirstCard key={i} {...f} progress={progress} index={i} total={features.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Text-First Card with Background Preview
function TextFirstCard({ title, desc, preview, progress, index, total }: any) {
  const cardProgress = Math.max(0, Math.min(1, (progress * total - index) * 1.5))
  const isCenter = Math.abs(progress * total - index) < 0.5

  return (
    <div style={{
      minWidth: '380px',
      height: '500px',
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      opacity: Math.max(0.4, 1 - Math.abs(progress * total - index) * 0.3),
      transform: `scale(${Math.max(0.85, 1 - Math.abs(progress * total - index) * 0.15)})`,
      transition: 'all 0.1s ease-out',
    }}>
      {/* Background Preview Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.35,
        filter: 'blur(1px)',
      }}>
        {preview}
      </div>

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.85) 0%, rgba(10, 14, 39, 0.75) 100%)',
        backdropFilter: 'blur(10px)',
      }} />

      {/* Border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: `1px solid ${isCenter ? 'rgba(139, 92, 246, 0.6)' : 'rgba(139, 92, 246, 0.2)'}`,
        borderRadius: '20px',
        pointerEvents: 'none',
        transition: 'border-color 0.3s',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '40px 32px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        opacity: cardProgress,
        transform: `translateY(${(1 - cardProgress) * 16}px)`,
        transition: 'all 0.2s ease-out',
      }}>
        <h3 style={{
          fontSize: '26px',
          fontWeight: '800',
          marginBottom: '12px',
          color: '#fff',
          lineHeight: '1.2',
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#d1d5db',
          lineHeight: '1.6',
          marginBottom: '0',
          fontWeight: '500',
        }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

// Animated Counter for Stats
function AnimatedStatCard({ value, label, scrollY, offset }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset + 200) / 300))
  const displayValue = Math.floor(progress * value)

  return (
    <div style={{
      opacity: progress,
      transform: `translateY(${(1 - progress) * 24}px) scale(${0.95 + progress * 0.05})`,
      transition: 'all 0.1s ease-out',
    }}>
      <div style={{
        fontSize: 'clamp(48px, 10vw, 72px)',
        fontWeight: '900',
        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '12px',
        letterSpacing: '-1px',
      }}>
        {displayValue}{value === 95 ? '%' : '+'}
      </div>
      <div style={{ fontSize: '16px', color: '#9ca3af', fontWeight: '600', letterSpacing: '0.5px' }}>
        {label}
      </div>
    </div>
  )
}

function BenefitCard({ icon, title, desc, scrollY, offset, index }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset + 200) / 300))

  return (
    <div style={{
      padding: '40px 32px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 100%)',
      border: `1px solid rgba(139, 92, 246, 0.2)`,
      borderRadius: '16px',
      opacity: progress,
      transform: `translateY(${(1 - progress) * 24}px) scale(${0.95 + progress * 0.05})`,
      transition: 'all 0.2s ease-out',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ fontSize: '44px', marginBottom: '16px' }}>{icon}</div>
      <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>
        {title}
      </h3>
      <p style={{ fontSize: '15px', color: '#9ca3af', lineHeight: '1.5', margin: '0' }}>
        {desc}
      </p>
    </div>
  )
}

// Preview Components
function ChatPreview() {
  return (
    <div style={{ padding: '16px', fontSize: '12px', height: '100%', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'flex-end' }}>
      <div style={{ background: 'rgba(139, 92, 246, 0.4)', padding: '10px 12px', borderRadius: '8px', color: '#e5e7eb', maxWidth: '75%' }}>How do I master quantum mechanics?</div>
      <div style={{ background: 'rgba(59, 130, 246, 0.4)', padding: '10px 12px', borderRadius: '8px', color: '#e5e7eb', alignSelf: 'flex-end', maxWidth: '75%' }}>Quantum mechanics is fundamentally about...</div>
    </div>
  )
}

function AnalyticsPreview() {
  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
      <div><div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '6px' }}>Progress Today</div><div style={{ background: 'rgba(139, 92, 246, 0.2)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}><div style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', height: '100%', width: '75%' }} /></div></div>
      <svg viewBox="0 0 100 40" style={{ height: '40px', width: '100%' }}><polyline points="5,30 15,20 25,25 35,15 45,22 55,18 65,28 75,20 85,25 95,15" stroke="#60a5fa" strokeWidth="2" fill="none" /></svg>
    </div>
  )
}

function PlannerPreview() {
  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
      {[{ d: 'Mon', c: '#a78bfa' }, { d: 'Tue', c: '#60a5fa' }, { d: 'Wed', c: '#a78bfa' }].map(x => <div key={x.d} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', padding: '8px', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '6px' }}><span style={{ color: x.c, fontWeight: '700' }}>{x.d}</span><div style={{ background: x.c, height: '4px', width: '50px', borderRadius: '2px' }} /></div>)}
    </div>
  )
}

function CoursePreview() {
  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
      {[{ t: 'Advanced Physics', c: '#a78bfa' }, { t: 'Python Basics', c: '#60a5fa' }].map(x => <div key={x.t} style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '12px', borderRadius: '8px', borderLeft: `4px solid ${x.c}` }}><div style={{ fontSize: '12px', fontWeight: '700', color: '#fff' }}>{x.t}</div></div>)}
    </div>
  )
}

function FlashcardPreview() {
  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
      <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2))', border: '1px solid rgba(139, 92, 246, 0.4)', borderRadius: '10px', padding: '20px', minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ fontSize: '14px', color: '#e5e7eb', fontWeight: '700' }}>What is cellular respiration?</div></div>
    </div>
  )
}

function ExamPreview() {
  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
      <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '700' }}>Biology Exam</div>
      <div style={{ background: 'rgba(139, 92, 246, 0.2)', padding: '12px', borderRadius: '8px', fontSize: '12px' }}><div style={{ color: '#60a5fa', fontWeight: '700', marginBottom: '6px' }}>Score: 87/100</div><div style={{ background: 'rgba(0, 0, 0, 0.3)', height: '5px', borderRadius: '3px', overflow: 'hidden' }}><div style={{ background: '#22c55e', height: '100%', width: '87%' }} /></div></div>
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