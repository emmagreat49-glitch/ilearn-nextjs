'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

// Icon Components
const Icons = {
  Brain: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v12M9 9h6M9 15h6"/></svg>,
  Sparkles: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>,
  Zap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  TrendingUp: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  BookOpen: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Target: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9"/></svg>,
  CheckCircle: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  Users: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
}

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
    <div style={{
      background: '#0a0e27',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)
        `,
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 14, 39, 0.4)',
        backdropFilter: 'blur(40px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
        padding: '16px 20px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              fontSize: '20px',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
            }}>i</div>
            <span style={{ fontSize: 'clamp(16px, 3.5vw, 18px)', fontWeight: '800', letterSpacing: '-0.5px' }}>iLEARN</span>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              padding: '10px 24px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: '600',
              fontSize: 'clamp(12px, 3vw, 14px)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
            }}
          >
            Get Started
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
        padding: 'clamp(60px, 15vw, 120px) 20px',
        zIndex: 1,
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          textAlign: 'center', 
          width: '100%',
          opacity: 1 - scrollY / 500,
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'all 0.1s linear',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '20px',
            marginBottom: 'clamp(20px, 5vw, 32px)',
            fontSize: 'clamp(12px, 3vw, 13px)',
            fontWeight: '600',
            color: '#a78bfa',
            letterSpacing: '0.5px',
            animation: 'fadeInUp 0.8s ease-out',
          }}>
            ✨ AI-Powered Learning Platform
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 9vw, 80px)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: 'clamp(16px, 4vw, 24px)',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 0.8s ease-out 0.1s both',
          }}>
            Learn Smarter.<br />
            Master Faster.
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 4vw, 20px)',
            color: '#9ca3af',
            marginBottom: 'clamp(32px, 8vw, 48px)',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto clamp(32px, 8vw, 48px)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}>
            AI-powered learning paths, personalized study plans, and real-time progress tracking. Everything you need to achieve your goals.
          </p>

          <div style={{
            display: 'flex',
            gap: 'clamp(12px, 3vw, 16px)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out 0.3s both',
          }}>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: '700',
                fontSize: 'clamp(14px, 3vw, 16px)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)',
              }}
            >
              Start Free Today
            </button>
            <a href="#features" style={{
              padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#e5e7eb',
              fontWeight: '700',
              fontSize: 'clamp(14px, 3vw, 16px)',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}>
              Explore Features
            </a>
          </div>

          {/* Social Proof */}
          <div style={{
            marginTop: 'clamp(60px, 15vw, 80px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 'clamp(16px, 4vw, 24px)',
            maxWidth: '800px',
            margin: 'clamp(60px, 15vw, 80px) auto 0',
          }}>
            {[
              { value: '50K+', label: 'Active Learners' },
              { value: '200+', label: 'Courses' },
              { value: '95%', label: 'Completion Rate' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: 'clamp(16px, 4vw, 24px)',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{
                  fontSize: 'clamp(20px, 5vw, 28px)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#9ca3af', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 20vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 15vw, 80px)' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 8vw, 56px)',
              fontWeight: '800',
              marginBottom: 'clamp(12px, 3vw, 16px)',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Supercharged by AI
            </h2>
            <p style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', color: '#9ca3af' }}>
              Intelligent features designed to accelerate your learning
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(16px, 4vw, 24px)',
          }}>
            {[
              { Icon: Icons.Brain, title: 'AI Study Assistant', desc: 'Get instant answers, explanations, and personalized help' },
              { Icon: Icons.Sparkles, title: 'Smart Learning Paths', desc: 'Adaptive courses that adjust to your pace and style' },
              { Icon: Icons.TrendingUp, title: 'Progress Analytics', desc: 'Real-time insights into your learning performance' },
              { Icon: Icons.Target, title: 'Personalized Goals', desc: 'Set targets and get AI-powered recommendations' },
              { Icon: Icons.CheckCircle, title: 'Smart Quizzes', desc: 'Adaptive assessments that focus on your weak areas' },
              { Icon: Icons.Zap, title: 'Rapid Revision', desc: 'Flashcards and spaced repetition for retention' },
            ].map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Learning Tools Section */}
      <section id="features" style={{
        position: 'relative',
        padding: 'clamp(80px, 20vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 15vw, 80px)' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 8vw, 56px)',
              fontWeight: '800',
              marginBottom: 'clamp(12px, 3vw, 16px)',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Complete Learning Toolkit
            </h2>
            <p style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', color: '#9ca3af' }}>
              Everything you need to master any subject
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(16px, 4vw, 24px)',
          }}>
            {[
              {
                title: '200+ Premium Courses',
                desc: 'From programming to business, data science to creative skills',
                categories: ['Programming', 'Data Science', 'Design', 'Business'],
              },
              {
                title: 'Interactive Lessons',
                desc: 'Learn by doing with hands-on projects and coding exercises',
                categories: ['Video Lessons', 'Live Code', 'Challenges', 'Assignments'],
              },
              {
                title: 'Study Planning Tools',
                desc: 'AI-generated study schedules customized to your goals and timeline',
                categories: ['Calendar', 'Milestones', 'Time Blocking', 'Reminders'],
              },
              {
                title: 'Comprehensive Notes',
                desc: 'Auto-generated notes, highlights, and summaries for every lesson',
                categories: ['Auto-Notes', 'Highlighting', 'Annotations', 'Export'],
              },
              {
                title: 'Mock Exams',
                desc: 'Practice tests that simulate real exams with detailed feedback',
                categories: ['Full Tests', 'Timed Mode', 'Analysis', 'Retake'],
              },
              {
                title: 'Community Support',
                desc: 'Connect with learners, ask questions, and grow together',
                categories: ['Forums', 'Study Groups', 'Mentors', 'Network'],
              },
            ].map((tool, i) => (
              <ToolCard key={i} {...tool} delay={i * 0.08} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Why Choose iLEARN */}
      <section style={{
        position: 'relative',
        padding: 'clamp(80px, 20vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2,
      }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 15vw, 80px)' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 8vw, 56px)',
              fontWeight: '800',
              marginBottom: 'clamp(12px, 3vw, 16px)',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Why Choose iLEARN?
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(16px, 4vw, 24px)',
          }}>
            {[
              { icon: '⚡', title: 'Learn Faster', desc: 'AI adapts to your pace and learning style' },
              { icon: '📈', title: 'Track Progress', desc: 'See real-time analytics and growth metrics' },
              { icon: '🎯', title: 'Goal Focused', desc: 'Structured paths to achieve your objectives' },
              { icon: '👥', title: 'Community', desc: 'Learn alongside 50K+ motivated learners' },
              { icon: '✅', title: 'Certificates', desc: 'Earn recognized credentials' },
              { icon: '🔄', title: 'Lifetime Access', desc: 'Study on your schedule, whenever you want' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: 'clamp(20px, 5vw, 32px)',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '14px',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animation: `slideInLeft 0.6s ease-out ${i * 0.08}s both`,
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#9ca3af' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section style={{
        position: 'relative',
        padding: 'clamp(60px, 15vw, 120px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: 2,
      }}>
        <ScrollReveal>
          <h2 style={{
            fontSize: 'clamp(28px, 7vw, 56px)',
            fontWeight: '800',
            marginBottom: 'clamp(16px, 4vw, 24px)',
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Ready to transform your learning?
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#9ca3af',
            marginBottom: 'clamp(28px, 7vw, 48px)',
          }}>
            Join 50K+ learners already achieving their goals with iLEARN.
          </p>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: '700',
              fontSize: 'clamp(14px, 3vw, 16px)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 20px 50px rgba(139, 92, 246, 0.3)',
            }}
          >
            Start Learning Free
          </button>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '20px',
        borderTop: '1px solid rgba(139, 92, 246, 0.1)',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: 'clamp(11px, 2.5vw, 14px)',
        zIndex: 2,
        position: 'relative',
      }}>
        © 2024 iLEARN. Learn smarter, grow faster.
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
            animation: 'fadeIn 0.3s ease-out',
          }}
          onClick={() => setShowLogin(false)}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '16px',
              padding: 'clamp(28px, 6vw, 48px)',
              maxWidth: '420px',
              width: '100%',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)',
              animation: 'slideUp 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: '700', marginBottom: '8px' }}>
              Welcome
            </h2>
            <p style={{ color: '#9ca3af', marginBottom: '24px', fontSize: 'clamp(12px, 3vw, 14px)' }}>
              Sign in to start learning
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
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  fontFamily: 'inherit',
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
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  cursor: 'pointer',
                  marginTop: '6px',
                }}
              >
                Sign In
              </button>
            </form>
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 'clamp(11px, 2.5vw, 13px)', marginTop: '16px' }}>
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

// Scroll Reveal Component
function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {children}
    </div>
  )
}

// Feature Card
function FeatureCard({ Icon, title, desc, delay }: any) {
  return (
    <div
      style={{
        padding: 'clamp(20px, 5vw, 32px)',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: '14px',
        backdropFilter: 'blur(20px)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `slideInLeft 0.6s ease-out ${delay}s both`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
      }}
    >
      <div style={{ fontSize: '24px', marginBottom: '12px', color: '#a78bfa' }}>
        <Icon />
      </div>
      <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#9ca3af' }}>{desc}</p>
    </div>
  )
}

// Tool Card
function ToolCard({ title, desc, categories, delay }: any) {
  return (
    <div
      style={{
        padding: 'clamp(20px, 5vw, 32px)',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: '14px',
        backdropFilter: 'blur(20px)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `slideInLeft 0.6s ease-out ${delay}s both`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
      }}
    >
      <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#9ca3af', marginBottom: '16px' }}>
        {desc}
      </p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {categories.map((cat: string, i: number) => (
          <span key={i} style={{
            padding: '4px 10px',
            background: 'rgba(139, 92, 246, 0.2)',
            borderRadius: '6px',
            fontSize: 'clamp(10px, 2.5vw, 11px)',
            fontWeight: '600',
            color: '#a78bfa',
          }}>
            {cat}
          </span>
        ))}
      </div>
    </div>
  )
}