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

      {/* Premium Features - Visible Preview + Text First */}
      <PremiumFeaturesSection scrollY={scrollY} />

      {/* Stats with Animated Counters */}
      <section style={{ position: 'relative', padding: '120px 20px', maxWidth: '1200px', margin: '0 auto', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', textAlign: 'center' }}>
          <AnimatedCounter value={50} label="K+ Learners" suffix="K+" scrollY={scrollY} offset={2400} index={0} />
          <AnimatedCounter value={200} label="+ Courses" suffix="+" scrollY={scrollY} offset={2400} index={1} />
          <AnimatedCounter value={95} label="% Completion" suffix="%" scrollY={scrollY} offset={2400} index={2} />
        </div>
      </section>

      {/* Visual Product Showcase - Replace Emoji Cards */}
      <VisualProductShowcase scrollY={scrollY} />

      {/* Footer */}
      <footer style={{ padding: '40px 20px', borderTop: '1px solid rgba(139, 92, 246, 0.1)', textAlign: 'center', color: '#6b7280', fontSize: '14px', zIndex: 2, position: 'relative' }}>© 2024 iLEARN.</footer>

      {/* Login */}
      {showLogin && <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} />}
    </div>
  )
}

// Premium Features with Visible Previews
function PremiumFeaturesSection({ scrollY }: { scrollY: number }) {
  const features = [
    { title: 'AI Study Assistant', desc: 'Instant answers 24/7', preview: <ChatPreview /> },
    { title: 'Learning Analytics', desc: 'Real-time insights', preview: <AnalyticsPreview /> },
    { title: 'Study Planner', desc: 'AI schedules your week', preview: <PlannerPreview /> },
    { title: 'Course Library', desc: 'Browse curated paths', preview: <CoursePreview /> },
    { title: 'Flashcards', desc: 'Spaced repetition', preview: <FlashcardPreview /> },
    { title: 'Mock Exams', desc: 'AI-graded practice', preview: <ExamPreview /> },
  ]

  const progress = Math.min(1, Math.max(0, (scrollY - 800) / 2000))
  const scrollAmount = -progress * (features.length - 1) * 380

  return (
    <section style={{ position: 'relative', height: '400vh', zIndex: 2 }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '28px', width: 'fit-content', transform: `translateX(${scrollAmount}px)`, transition: 'transform 0.05s linear' }}>
          {features.map((f, i) => (
            <VisiblePreviewCard key={i} title={f.title} desc={f.desc} preview={f.preview} progress={progress} index={i} total={features.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Visible Preview Card - Preview clearly visible behind text
function VisiblePreviewCard({ title, desc, preview, progress, index, total }: any) {
  const cardProgress = Math.max(0, Math.min(1, (progress * total - index) * 1.5))
  const isCenter = Math.abs(progress * total - index) < 0.5

  return (
    <div style={{
      minWidth: '380px',
      height: '520px',
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      opacity: Math.max(0.4, 1 - Math.abs(progress * total - index) * 0.3),
      transform: `scale(${Math.max(0.85, 1 - Math.abs(progress * total - index) * 0.15)})`,
      transition: 'all 0.1s ease-out',
    }}>
      {/* Preview - VISIBLE BACKGROUND */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.6,
      }}>
        {preview}
      </div>

      {/* Subtle Overlay - Light gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.55) 0%, rgba(10, 14, 39, 0.45) 100%)',
        backdropFilter: 'blur(2px)',
      }} />

      {/* Border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: `1.5px solid ${isCenter ? 'rgba(139, 92, 246, 0.6)' : 'rgba(139, 92, 246, 0.25)'}`,
        borderRadius: '20px',
        pointerEvents: 'none',
        transition: 'border-color 0.3s',
      }} />

      {/* Content - LARGER TITLE */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '48px 36px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        opacity: cardProgress,
        transform: `translateY(${(1 - cardProgress) * 16}px)`,
        transition: 'all 0.2s ease-out',
      }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: '800',
          marginBottom: '12px',
          color: '#fff',
          lineHeight: '1.2',
          letterSpacing: '-0.5px',
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#d1d5db',
          lineHeight: '1.6',
          margin: '0',
          fontWeight: '500',
        }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

// Animated Counter with Viewport Trigger
function AnimatedCounter({ value, label, suffix, scrollY, offset, index }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset + 200) / 300))
  const displayValue = Math.floor(progress * value)
  const delayedProgress = Math.max(0, progress - index * 0.1)

  return (
    <div style={{
      opacity: delayedProgress,
      transform: `translateY(${(1 - delayedProgress) * 30}px) scale(${0.95 + delayedProgress * 0.05})`,
      transition: 'all 0.15s ease-out',
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
        {displayValue}{suffix}
      </div>
      <div style={{ fontSize: '16px', color: '#9ca3af', fontWeight: '600', letterSpacing: '0.5px' }}>
        {label}
      </div>
    </div>
  )
}

// Visual Product Showcase Section
function VisualProductShowcase({ scrollY }: { scrollY: number }) {
  const products = [
    { title: 'AI Chat', preview: <ChatShowcase /> },
    { title: 'Analytics', preview: <AnalyticsShowcase /> },
    { title: 'Study Plan', preview: <PlanShowcase /> },
    { title: 'Courses', preview: <CoursesShowcase /> },
    { title: 'Cards', preview: <CardsShowcase /> },
    { title: 'Exams', preview: <ExamsShowcase /> },
  ]

  return (
    <section style={{ position: 'relative', padding: '120px 20px', maxWidth: '1400px', margin: '0 auto', zIndex: 2 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
        {products.map((item, i) => (
          <ProductShowcaseCard key={i} title={item.title} preview={item.preview} scrollY={scrollY} offset={3000 + i * 100} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProductShowcaseCard({ title, preview, scrollY, offset, index }: any) {
  const progress = Math.max(0, Math.min(1, (scrollY - offset + 200) / 300))

  return (
    <div style={{
      padding: '20px',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
      border: '1px solid rgba(139, 92, 246, 0.25)',
      borderRadius: '16px',
      minHeight: '380px',
      display: 'flex',
      flexDirection: 'column',
      opacity: progress,
      transform: `translateY(${(1 - progress) * 24}px) scale(${0.95 + progress * 0.05})`,
      transition: 'all 0.2s ease-out',
      backdropFilter: 'blur(10px)',
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#fff' }}>{title}</h3>
      <div style={{ flex: 1, overflow: 'hidden', borderRadius: '8px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
        {preview}
      </div>
    </div>
  )
}

// Preview Components for Features Section
function ChatPreview() {
  return <div style={{ padding: '12px', fontSize: '11px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'flex-end', background: 'rgba(0, 0, 0, 0.4)' }}><div style={{ background: 'rgba(139, 92, 246, 0.4)', padding: '8px 10px', borderRadius: '6px', color: '#e5e7eb', maxWidth: '75%' }}>How do I solve this problem?</div><div style={{ background: 'rgba(59, 130, 246, 0.4)', padding: '8px 10px', borderRadius: '6px', color: '#e5e7eb', alignSelf: 'flex-end', maxWidth: '75%' }}>Here is the solution...</div></div>
}

function AnalyticsPreview() {
  return <div style={{ padding: '16px', height: '100%', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}><div style={{ background: 'rgba(139, 92, 246, 0.3)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}><div style={{ background: '#60a5fa', height: '100%', width: '72%' }} /></div><svg viewBox="0 0 100 40" style={{ height: '40px', width: '100%' }}><polyline points="5,30 15,20 25,25 35,15 45,22 55,18 65,28 75,20 85,25 95,15" stroke="#60a5fa" strokeWidth="2" fill="none" /></svg></div>
}

function PlannerPreview() {
  return <div style={{ padding: '12px', height: '100%', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center' }}>{[{ d: 'Mon', w: 60 }, { d: 'Tue', w: 40 }, { d: 'Wed', w: 75 }].map(x => <div key={x.d} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px' }}><span style={{ color: '#9ca3af', minWidth: '28px' }}>{x.d}</span><div style={{ flex: 1, background: 'rgba(139, 92, 246, 0.3)', height: '4px', borderRadius: '2px', overflow: 'hidden' }}><div style={{ background: '#a78bfa', height: '100%', width: `${x.w}%` }} /></div></div>)}</div>
}

function CoursePreview() {
  return <div style={{ padding: '12px', height: '100%', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>{[{ t: 'Physics 101', c: '#a78bfa' }, { t: 'Python Dev', c: '#60a5fa' }].map(x => <div key={x.t} style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '10px', borderRadius: '6px', borderLeft: `3px solid ${x.c}` }}><div style={{ fontSize: '11px', fontWeight: '700', color: '#fff' }}>{x.t}</div></div>)}</div>
}

function FlashcardPreview() {
  return <div style={{ padding: '20px', height: '100%', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ background: 'rgba(139, 92, 246, 0.3)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}><div style={{ fontSize: '12px', color: '#e5e7eb', fontWeight: '700' }}>What is photosynthesis?</div></div></div>
}

function ExamPreview() {
  return <div style={{ padding: '12px', height: '100%', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}><div style={{ fontSize: '10px', color: '#9ca3af', fontWeight: '700' }}>Biology Exam</div><div style={{ background: 'rgba(139, 92, 246, 0.2)', padding: '10px', borderRadius: '6px' }}><div style={{ fontSize: '11px', fontWeight: '700', color: '#60a5fa', marginBottom: '4px' }}>87/100</div><div style={{ background: 'rgba(0, 0, 0, 0.3)', height: '4px', borderRadius: '2px', overflow: 'hidden' }}><div style={{ background: '#22c55e', height: '100%', width: '87%' }} /></div></div></div>
}

// Visual Showcase Components for Why iLearn Section
function ChatShowcase() {
  return <div style={{ padding: '16px', fontSize: '11px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'flex-end' }}><div style={{ background: 'rgba(139, 92, 246, 0.35)', padding: '8px 10px', borderRadius: '6px', color: '#d1d5db', maxWidth: '80%' }}>Explain quantum computing</div><div style={{ background: 'rgba(59, 130, 246, 0.35)', padding: '8px 10px', borderRadius: '6px', color: '#d1d5db', alignSelf: 'flex-end', maxWidth: '80%' }}>Quantum computing uses qubits...</div></div>
}

function AnalyticsShowcase() {
  return <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#9ca3af', marginBottom: '4px' }}><span>Weekly Progress</span><span style={{ color: '#60a5fa' }}>78%</span></div><div style={{ background: 'rgba(139, 92, 246, 0.25)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}><div style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', height: '100%', width: '78%' }} /></div><svg viewBox="0 0 100 40" style={{ height: '35px', marginTop: '8px' }}><polyline points="5,28 15,18 25,24 35,14 45,20 55,16 65,26 75,18 85,22 95,12" stroke="#60a5fa" strokeWidth="2" fill="none" /></svg></div>
}

function PlanShowcase() {
  return <div style={{ padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>{[{ day: 'Monday', time: '2.5h' }, { day: 'Tuesday', time: '1.5h' }, { day: 'Wednesday', time: '3h' }].map(x => <div key={x.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', padding: '6px 8px', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '4px' }}><span style={{ color: '#9ca3af' }}>{x.day}</span><span style={{ color: '#a78bfa', fontWeight: '700' }}>{x.time}</span></div>)}</div>
}

function CoursesShowcase() {
  return <div style={{ padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>{[{ title: 'Machine Learning', level: 'Advanced' }, { title: 'Web Dev', level: 'Intermediate' }, { title: 'Data Science', level: 'Pro' }].map(x => <div key={x.title} style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '8px', borderRadius: '4px', borderLeft: '2px solid #60a5fa' }}><div style={{ fontSize: '11px', fontWeight: '700', color: '#fff' }}>{x.title}</div><div style={{ fontSize: '9px', color: '#9ca3af' }}>{x.level}</div></div>)}</div>
}

function CardsShowcase() {
  return <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}><div style={{ background: 'rgba(139, 92, 246, 0.3)', padding: '16px', borderRadius: '8px', width: '100%', textAlign: 'center', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ fontSize: '12px', color: '#d1d5db', fontWeight: '700' }}>Define: Mitochondria</div></div><div style={{ display: 'flex', gap: '6px', width: '100%', justifyContent: 'center' }}><button style={{ padding: '4px 10px', background: 'rgba(239, 68, 68, 0.25)', border: 'none', borderRadius: '4px', color: '#ef4444', fontSize: '10px', cursor: 'pointer' }}>✗</button><button style={{ padding: '4px 10px', background: 'rgba(34, 197, 94, 0.25)', border: 'none', borderRadius: '4px', color: '#22c55e', fontSize: '10px', cursor: 'pointer' }}>✓</button></div></div>
}

function ExamsShowcase() {
  return <div style={{ padding: '12px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}><div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '700' }}>Chemistry Quiz</div><div style={{ background: 'rgba(139, 92, 246, 0.2)', padding: '10px', borderRadius: '6px' }}><div style={{ fontSize: '12px', fontWeight: '700', color: '#60a5fa', marginBottom: '6px' }}>92/100 Score</div><div style={{ background: 'rgba(0, 0, 0, 0.3)', height: '5px', borderRadius: '3px', overflow: 'hidden' }}><div style={{ background: '#22c55e', height: '100%', width: '92%' }} /></div></div><div style={{ fontSize: '9px', color: '#9ca3af' }}>↑ 15% from last attempt</div></div>
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