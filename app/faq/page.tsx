'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const router = useRouter()

  const faqs = [
    { q: "What is iLEARN?", a: "iLEARN is a premium AI-powered learning platform designed for students who want personalized, adaptive education. It combines intelligent tutoring, analytics, and study tools to help you excel academically." },
    { q: "How does Sage AI work?", a: "Sage is your personal AI tutor powered by advanced language models. Ask any question, get instant explanations, solve complex problems, and learn concepts in real-time. Sage adapts to your learning style." },
    { q: "Is there a free trial?", a: "Yes! We offer a 14-day free trial with full access to all premium features. No credit card required. Cancel anytime if you're not satisfied." },
    { q: "What's included in Premium?", a: "Premium includes: Sage AI unlimited, Learning Analytics, Smart Study Planner, 200+ Curated Courses, Intelligent Flashcards, Mock Exams, Study Reminders, and Digital Certifications." },
    { q: "Can I cancel my subscription anytime?", a: "Absolutely. You can cancel your subscription anytime from your account settings. We won't charge you after your current billing cycle ends. No questions asked." },
    { q: "Is my data secure and private?", a: "Yes. iLEARN is ISO 27001 certified and fully GDPR compliant. Your study data is encrypted, never sold, and protected by industry-leading security standards." },
    { q: "Is iLEARN mobile-friendly?", a: "Yes! iLEARN works seamlessly on desktop, tablet, and mobile devices. Study on the go with our responsive design." },
    { q: "Do you offer group or institution plans?", a: "Yes. We offer special pricing for schools, universities, and study groups. Contact our sales team at enterprise@ilearn.com for custom quotes." }
  ]

  return (
    <div style={{ background: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10, 14, 39, 0.5)', backdropFilter: 'blur(50px)', borderBottom: '1px solid rgba(139, 92, 246, 0.15)', padding: '20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <button onClick={() => router.push('/')} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '12px', padding: '6px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>
              <defs>
                <linearGradient id="iFaqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Dot */}
              <circle cx="22" cy="10" r="2.5" fill="url(#iFaqGrad)"/>
              {/* Rounded bar */}
              <rect x="18" y="16" width="8" height="22" rx="4" fill="url(#iFaqGrad)"/>
            </svg>
            <span style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.5px', color: '#fff' }}>iLEARN</span>
          </button>
          <button onClick={() => router.push('/')} style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: '600', cursor: 'pointer', fontSize: '15px', boxShadow: '0 8px 24px rgba(139, 92, 246, 0.35)' }}>Back to Home</button>
        </div>
      </nav>

      <section style={{ position: 'relative', padding: '80px 20px', maxWidth: '900px', margin: '0 auto', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: 'clamp(40px, 10vw, 80px)', fontWeight: '950', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-2px', background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7', fontWeight: '500' }}>Find answers to common questions about iLEARN, Sage AI, pricing, and more.</p>
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
                  transition: 'all 0.3s ease'
                }}
              >
                <span>{faq.q}</span>
                <span style={{ 
                  fontSize: '20px', 
                  color: '#a78bfa', 
                  transition: 'transform 0.3s ease', 
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' 
                }}>▼</span>
              </button>
              {openIndex === index && (
                <div style={{ 
                  padding: '0 28px 24px 28px', 
                  borderTop: '1px solid rgba(139, 92, 246, 0.2)', 
                  fontSize: '15px', 
                  color: '#cbd5e1', 
                  lineHeight: '1.7', 
                  fontWeight: '500' 
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ position: 'relative', padding: '100px 20px 80px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: '900', marginBottom: '24px', background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Still have questions?</h2>
        <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7', fontWeight: '500' }}>Contact our support team for more help.</p>
        <button onClick={() => router.push('/')} style={{ padding: '16px 48px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: '700', fontSize: '16px', cursor: 'pointer', boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)' }}>Back to Home</button>
      </section>

      <footer style={{ padding: '60px 20px 40px', borderTop: '1px solid rgba(139, 92, 246, 0.2)', textAlign: 'center', color: '#64748b', fontSize: '15px', zIndex: 2, position: 'relative', background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)' }}>
        <p style={{ margin: '0 0 16px 0', fontWeight: '600', color: '#e2e8f0' }}>© 2024 iLEARN. Empowering the Next Generation of Learners.</p>
        <p style={{ margin: '0', color: '#475569' }}>Premium education technology built for excellence.</p>
      </footer>
    </div>
  )
}