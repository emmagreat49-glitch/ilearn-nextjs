'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin123')
  const [scrollY, setScrollY] = useState(0)
  const [counterStarted, setCounterStarted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (scrollY >= 3600 && !counterStarted) {
      setCounterStarted(true)
    }
  }, [scrollY, counterStarted])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin123') {
      router.push('/dashboard')
    }
  }

  return (
    <div style={{ background: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10, 14, 39, 0.5)', backdropFilter: 'blur(50px)', borderBottom: '1px solid rgba(139, 92, 246, 0.15)', padding: '20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '22px', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>i</div>
            <span style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.5px' }}>iLEARN</span>
          </div>
          <button onClick={() => setShowLogin(true)} style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: '600', cursor: 'pointer', fontSize: '15px', boxShadow: '0 8px 24px rgba(139, 92, 246, 0.35)' }}>Get Started</button>
        </div>
      </nav>

      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(48px, 13vw, 110px)', fontWeight: '950', lineHeight: '1.08', marginBottom: '28px', letterSpacing: '-2.5px', background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: Math.max(0, 1 - scrollY / 500) }}>Learn Smarter. Grow Faster.</h1>
          <p style={{ fontSize: 'clamp(17px, 4.2vw, 22px)', color: '#cbd5e1', lineHeight: '1.7', maxWidth: '750px', margin: '28px auto 24px', fontWeight: '500' }}>Experience the future of personalized learning. AI-powered study paths, real-time insights, and adaptive lessons designed to unlock your full potential.</p>
          <p style={{ fontSize: 'clamp(15px, 3.8vw, 18px)', color: '#94a3b8', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto 56px', fontWeight: '400' }}>8 premium features. Zero compromise. From intelligent tutoring to performance analytics—everything you need to excel is right here.</p>
          <button onClick={() => setShowLogin(true)} style={{ padding: '16px 48px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: '700', cursor: 'pointer', boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)', fontSize: '16px', transition: 'all 0.3s ease', letterSpacing: '-0.3px' }}>Start Learning Free</button>
        </div>
      </section>

      <section style={{ position: 'relative', padding: '80px 20px 60px', maxWidth: '1300px', margin: '0 auto', zIndex: 2, textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: '900', marginBottom: '18px', color: '#fff', letterSpacing: '-1px' }}>Premium Features That Matter</h2>
        <p style={{ fontSize: '18px', color: '#cbd5e1', maxWidth: '680px', margin: '0 auto 60px', lineHeight: '1.7', fontWeight: '500' }}>Unlock a comprehensive learning platform designed for students who demand excellence. Every feature is crafted to elevate your academic performance.</p>
      </section>

      <HorizontalFeaturesSection scrollY={scrollY} />

      <section style={{ position: 'relative', padding: '160px 20px 120px', maxWidth: '1300px', margin: '0 auto', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '70px', textAlign: 'center' }}>
          <AnimatedCounter value={50} label="Active Learners Worldwide" suffix="K+" counterStarted={counterStarted} index={0} />
          <AnimatedCounter value={200} label="Expert-Curated Courses" suffix="+" counterStarted={counterStarted} index={1} />
          <AnimatedCounter value={95} label="Student Success Rate" suffix="%" counterStarted={counterStarted} index={2} />
        </div>
      </section>

      <section style={{ position: 'relative', padding: '140px 20px 100px', maxWidth: '1300px', margin: '0 auto', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: '900', marginBottom: '24px', color: '#fff', letterSpacing: '-1px' }}>Trusted by Leading Institutions</h2>
          <p style={{ fontSize: '18px', color: '#cbd5e1', maxWidth: '680px', margin: '0 auto', lineHeight: '1.7', fontWeight: '500' }}>Thousands of students across top universities worldwide rely on iLEARN to accelerate their learning.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto', marginBottom: '60px' }}>
          <div style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', border: '1.5px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '900', color: '#60a5fa', marginBottom: '8px' }}>200+</div>
            <div style={{ fontSize: '15px', color: '#cbd5e1', fontWeight: '600' }}>Universities & Colleges</div>
          </div>
          <div style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', border: '1.5px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '900', color: '#a78bfa', marginBottom: '8px' }}>ISO 27001</div>
            <div style={{ fontSize: '15px', color: '#cbd5e1', fontWeight: '600' }}>Security Certified</div>
          </div>
          <div style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', border: '1.5px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '900', color: '#34d399', marginBottom: '8px' }}>GDPR</div>
            <div style={{ fontSize: '15px', color: '#cbd5e1', fontWeight: '600' }}>Compliant</div>
          </div>
        </div>
      </section>

      <FAQSection />

      <section style={{ position: 'relative', padding: '120px 20px 100px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(36px, 8vw, 60px)', fontWeight: '900', marginBottom: '24px', background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1px' }}>Start Your Learning Transformation Today</h2>
        <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '56px', maxWidth: '700px', margin: '0 auto 56px', lineHeight: '1.8', fontWeight: '500' }}>Join thousands of top-performing students accelerating their academic growth. Your personalized learning journey awaits.</p>
        <button onClick={() => setShowLogin(true)} style={{ padding: '16px 52px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: '700', fontSize: '16px', cursor: 'pointer', boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)', transition: 'all 0.3s ease', letterSpacing: '-0.3px' }}>Start My Journey</button>
      </section>

      <footer style={{ padding: '60px 20px 40px', borderTop: '1px solid rgba(139, 92, 246, 0.2)', textAlign: 'center', color: '#64748b', fontSize: '15px', zIndex: 2, position: 'relative', background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)' }}>
        <p style={{ margin: '0 0 16px 0', fontWeight: '600', color: '#e2e8f0' }}>© 2024 iLEARN. Empowering the Next Generation of Learners.</p>
        <p style={{ margin: '0', color: '#475569' }}>Premium education technology built for excellence.</p>
      </footer>

      {showLogin && <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} />}
    </div>
  )
}

function HorizontalFeaturesSection({ scrollY }: { scrollY: number }) {
  const features = [
    {
      title: 'Ask Sage',
      desc: 'Your premium AI learning companion. Get instant explanations, solve complex problems, and master concepts in real-time.'
    },
    {
      title: 'Learning Analytics',
      desc: 'Track every milestone with precision. Real-time insights into your progress, performance trends, and areas for improvement.'
    },
    {
      title: 'Smart Study Planner',
      desc: 'Personalized schedules that adapt to you. Get daily study recommendations optimized for your unique learning style.'
    },
    {
      title: 'Curated Course Library',
      desc: 'Browse 200+ expert-designed courses. From fundamentals to advanced topics, all vetted and structured for success.'
    },
    {
      title: 'Intelligent Flashcards',
      desc: 'Spaced repetition perfected. Smart recall system that maximizes retention and reduces study time significantly.'
    },
    {
      title: 'Mock Exams',
      desc: 'Practice like the real thing. Instant feedback, detailed performance analysis, and personalized improvement plans.'
    },
    {
      title: 'Study Reminders',
      desc: 'Never miss a study session. Smart notifications, scheduled reminders, and adaptive study schedule recommendations.'
    },
    {
      title: 'Certifications',
      desc: 'Earn verified digital credentials. Showcase your achievements with blockchain-verified certificates employers recognize.'
    },
  ]

  const progress = Math.min(1, Math.max(0, (scrollY - 800) / 3200))
  const scrollAmount = -progress * (features.length - 1) * 420

  return (
    <section style={{ position: 'relative', height: '600vh', zIndex: 2 }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: '28px', width: 'fit-content', transform: `translateX(${scrollAmount}px)`, transition: 'transform 0.05s linear' }}>
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} desc={f.desc} preview={getPreview(i)} progress={progress} index={i} total={features.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function getPreview(index: number) {
  const previews = [
    <SageAIPreview />,
    <AnalyticsPreview />,
    <PlannerPreview />,
    <CoursePreview />,
    <FlashcardPreview />,
    <ExamPreview />,
    <ReminderPreview />,
    <CertificationPreview />
  ]
  return previews[index]
}

function FeatureCard({ title, desc, preview, progress, index, total }: any) {
  const cardProgress = Math.max(0, Math.min(1, (progress * total - index) * 1.5))
  const isCenter = Math.abs(progress * total - index) < 0.5

  return (
    <div style={{
      minWidth: '420px',
      height: '600px',
      position: 'relative',
      borderRadius: '32px',
      overflow: 'hidden',
      opacity: Math.max(0.35, 1 - Math.abs(progress * total - index) * 0.35),
      transform: `scale(${Math.max(0.82, 1 - Math.abs(progress * total - index) * 0.18)})`,
      transition: 'all 0.1s ease-out',
      boxShadow: isCenter ? '0 40px 80px rgba(139, 92, 246, 0.35)' : '0 20px 50px rgba(139, 92, 246, 0.15)',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.45,
      }}>
        {preview}
      </div>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.52) 0%, rgba(10, 14, 39, 0.48) 100%)',
        backdropFilter: 'blur(14px)',
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: `2.5px solid ${isCenter ? 'rgba(139, 92, 246, 0.85)' : 'rgba(139, 92, 246, 0.35)'}`,
        borderRadius: '32px',
        pointerEvents: 'none',
        transition: 'border-color 0.3s',
        boxShadow: isCenter ? 'inset 0 0 40px rgba(139, 92, 246, 0.2)' : 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '64px 52px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        opacity: cardProgress,
        transform: `translateY(${(1 - cardProgress) * 28}px)`,
        transition: 'all 0.25s ease-out',
      }}>
        <h3 style={{
          fontSize: '56px',
          fontWeight: '950',
          color: '#fff',
          lineHeight: '1.12',
          letterSpacing: '-1.2px',
          margin: '0 0 24px 0',
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#cbd5e1',
          lineHeight: '1.7',
          margin: '0',
          fontWeight: '500',
          maxWidth: '380px',
        }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

function AnimatedCounter({ value, label, suffix, counterStarted, index }: any) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!counterStarted) return

    let current = 0
    const increment = value / 40
    const interval = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(interval)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(interval)
  }, [counterStarted, value])

  const baseDelay = index * 0.15
  const opacity = counterStarted ? 1 : 0
  const transform = counterStarted ? 'translateY(0px) scale(1)' : 'translateY(40px) scale(0.93)'

  return (
    <div style={{
      opacity,
      transform,
      transition: `all 0.5s ease-out ${baseDelay}s`,
    }}>
      <div style={{
        fontSize: 'clamp(56px, 12vw, 84px)',
        fontWeight: '950',
        background: 'linear-gradient(135deg, #c084fc 0%, #60a5fa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '16px',
        letterSpacing: '-1.5px',
      }}>
        {displayValue}{suffix}
      </div>
      <div style={{ fontSize: '17px', color: '#cbd5e1', fontWeight: '600', letterSpacing: '-0.3px' }}>
        {label}
      </div>
    </div>
  )
}

function SageAIPreview() { return <div style={{ padding: '20px', fontSize: '13px', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'flex-end' }}><div style={{ background: 'rgba(139, 92, 246, 0.35)', padding: '12px 14px', borderRadius: '10px', color: '#e0e7ff', fontSize: '14px' }}>Explain quantum mechanics</div><div style={{ background: 'rgba(59, 130, 246, 0.35)', padding: '12px 14px', borderRadius: '10px', color: '#e0e7ff', alignSelf: 'flex-end', fontSize: '14px' }}>Quantum mechanics explores...</div></div> }
function AnalyticsPreview() { return <div style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}><div style={{ background: 'rgba(139, 92, 246, 0.3)', height: '11px', borderRadius: '6px', overflow: 'hidden' }}><div style={{ background: '#60a5fa', height: '100%', width: '76%' }} /></div><svg viewBox="0 0 100 40" style={{ height: '60px' }}><polyline points="5,30 15,18 25,24 35,12 45,20 55,14 65,28 75,16 85,22 95,10" stroke="#60a5fa" strokeWidth="2.5" fill="none" /></svg></div> }
function PlannerPreview() { return <div style={{ padding: '22px', height: '100%', display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>{[{ d: 'Mon', w: 68 }, { d: 'Tue', w: 48 }, { d: 'Wed', w: 78 }].map(x => <div key={x.d} style={{ display: 'flex', alignItems: 'center', gap: '11px', fontSize: '14px', color: '#cbd5e1' }}><span style={{ minWidth: '38px', fontWeight: '600' }}>{x.d}</span><div style={{ flex: 1, background: 'rgba(139, 92, 246, 0.3)', height: '8px', borderRadius: '5px', overflow: 'hidden' }}><div style={{ background: '#c084fc', height: '100%', width: `${x.w}%` }} /></div></div>)}</div> }
function CoursePreview() { return <div style={{ padding: '22px', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>{[{ t: 'Advanced Physics', c: '#a78bfa' }, { t: 'Full-Stack Dev', c: '#60a5fa' }, { t: 'Data Science', c: '#34d399' }].map(x => <div key={x.t} style={{ background: 'rgba(59, 130, 246, 0.25)', padding: '14px', borderRadius: '11px', fontSize: '14px', fontWeight: '700', color: '#e0e7ff', borderLeft: `5px solid ${x.c}` }}>{x.t}</div>)}</div> }
function FlashcardPreview() { return <div style={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><div style={{ background: 'rgba(139, 92, 246, 0.3)', padding: '32px 24px', borderRadius: '16px', textAlign: 'center', minHeight: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ fontSize: '18px', color: '#e0e7ff', fontWeight: '750' }}>What is photosynthesis?</div></div></div> }
function ExamPreview() { return <div style={{ padding: '26px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '18px' }}><div style={{ fontSize: '15px', color: '#e0e7ff', fontWeight: '750' }}>Practice Physics Exam</div><div style={{ background: 'rgba(139, 92, 246, 0.32)', padding: '18px', borderRadius: '12px' }}><div style={{ fontSize: '28px', fontWeight: '950', color: '#60a5fa', marginBottom: '12px' }}>92/100</div><div style={{ background: 'rgba(0, 0, 0, 0.4)', height: '8px', borderRadius: '5px', overflow: 'hidden' }}><div style={{ background: '#34d399', height: '100%', width: '92%' }} /></div></div><div style={{ fontSize: '14px', color: '#cbd5e1', padding: '12px', background: 'rgba(59, 130, 246, 0.18)', borderRadius: '8px', fontWeight: '600' }}>37/40 Correct • +18% from last</div></div> }
function ReminderPreview() { return <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}><div style={{ fontSize: '14px', color: '#e0e7ff', fontWeight: '700' }}>Study Schedule</div><div style={{ background: 'rgba(139, 92, 246, 0.3)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.5)' }}><div style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '8px' }}>📅 Today at 3:00 PM</div><div style={{ fontSize: '12px', color: '#94a3b8' }}>Physics - 1.5 hours</div></div><div style={{ background: 'rgba(59, 130, 246, 0.25)', padding: '14px', borderRadius: '10px', borderLeft: '3px solid #60a5fa' }}><div style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '4px' }}>🔔 Tomorrow 9:00 AM</div><div style={{ fontSize: '12px', color: '#94a3b8' }}>Math - 1 hour</div></div></div> }
function CertificationPreview() { return <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '14px' }}><div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)', padding: '16px 20px', borderRadius: '12px', border: '1.5px solid rgba(139, 92, 246, 0.4)', textAlign: 'center' }}><div style={{ fontSize: '12px', color: '#a78bfa', fontWeight: '700', marginBottom: '6px' }}>✓ VERIFIED</div><div style={{ fontSize: '14px', color: '#e0e7ff', fontWeight: '800', marginBottom: '4px' }}>AI & Machine Learning</div><div style={{ fontSize: '11px', color: '#94a3b8' }}>Issued by iLEARN</div></div><div style={{ fontSize: '13px', color: '#cbd5e1', padding: '12px', background: 'rgba(59, 130, 246, 0.15)', borderRadius: '8px', textAlign: 'center' }}>Achievement unlocked</div></div> }

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "What is iLEARN?",
      a: "iLEARN is a premium AI-powered learning platform designed for students who want personalized, adaptive education. It combines intelligent tutoring, analytics, and study tools to help you excel academically."
    },
    {
      q: "How does Sage AI work?",
      a: "Sage is your personal AI tutor powered by advanced language models. Ask any question, get instant explanations, solve complex problems, and learn concepts in real-time. Sage adapts to your learning style."
    },
    {
      q: "Is there a free trial?",
      a: "Yes! We offer a 14-day free trial with full access to all premium features. No credit card required. Cancel anytime if you're not satisfied."
    },
    {
      q: "What's included in Premium?",
      a: "Premium includes: Sage AI unlimited, Learning Analytics, Smart Study Planner, 200+ Curated Courses, Intelligent Flashcards, Mock Exams, Study Reminders, and Digital Certifications."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Absolutely. You can cancel your subscription anytime from your account settings. We won't charge you after your current billing cycle ends. No questions asked."
    },
    {
      q: "Is my data secure and private?",
      a: "Yes. iLEARN is ISO 27001 certified and fully GDPR compliant. Your study data is encrypted, never sold, and protected by industry-leading security standards."
    },
    {
      q: "Is iLEARN mobile-friendly?",
      a: "Yes! iLEARN works seamlessly on desktop, tablet, and mobile devices. Study on the go with our responsive design."
    },
    {
      q: "Do you offer group or institution plans?",
      a: "Yes. We offer special pricing for schools, universities, and study groups. Contact our sales team at enterprise@ilearn.com for custom quotes."
    }
  ]

  return (
    <section style={{ position: 'relative', padding: '100px 20px 100px', maxWidth: '900px', margin: '0 auto', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h2 style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: '900', marginBottom: '18px', color: '#fff', letterSpacing: '-1px' }}>Frequently Asked Questions</h2>
        <p style={{ fontSize: '18px', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7', fontWeight: '500' }}>Got questions? We've got answers. Find everything you need to know about iLEARN.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)',
              border: '1.5px solid rgba(139, 92, 246, 0.25)',
              borderRadius: '14px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: openIndex === index ? '0 20px 60px rgba(139, 92, 246, 0.2)' : 'none',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                width: '100%',
                padding: '20px 28px',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '16px',
                fontWeight: '700',
                color: '#e0e7ff',
                transition: 'all 0.3s ease',
              }}
            >
              <span>{faq.q}</span>
              <span style={{
                fontSize: '20px',
                color: '#a78bfa',
                transition: 'transform 0.3s ease',
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
              }}>
                ▼
              </span>
            </button>

            {openIndex === index && (
              <div style={{
                padding: '0 28px 24px 28px',
                borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                fontSize: '15px',
                color: '#cbd5e1',
                lineHeight: '1.7',
                fontWeight: '500',
                animation: 'fadeIn 0.3s ease',
              }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function LoginModal({ showLogin, setShowLogin, username, setUsername, password, setPassword, handleLogin }: any) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setShowLogin(false)}>
      <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(59, 130, 246, 0.12) 100%)', border: '1.5px solid rgba(139, 92, 246, 0.4)', borderRadius: '20px', padding: '56px', maxWidth: '460px', width: '100%', backdropFilter: 'blur(40px)', boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)' }} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '28px', background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Welcome Back</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.08)', border: '1.5px solid rgba(139, 92, 246, 0.35)', borderRadius: '10px', color: 'white', fontSize: '15px', fontWeight: '500', outline: 'none' }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.08)', border: '1.5px solid rgba(139, 92, 246, 0.35)', borderRadius: '10px', color: 'white', fontSize: '15px', fontWeight: '500', outline: 'none' }} />
          <button type="submit" style={{ padding: '12px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '10px', color: 'white', fontWeight: '700', cursor: 'pointer', marginTop: '16px', fontSize: '15px', boxShadow: '0 12px 32px rgba(139, 92, 246, 0.4)' }}>Sign In</button>
        </form>
        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '14px', marginTop: '20px', fontWeight: '500' }}>Demo: <span style={{ color: '#e0e7ff', fontWeight: '600' }}>admin / admin123</span></p>
      </div>
    </div>
  )
}