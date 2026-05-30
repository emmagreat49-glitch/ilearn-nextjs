'use client'
import { useState, useEffect, useRef } from 'react'

const Icons = {
  BarChart: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5H17"/></svg>,
  BookOpen: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Award: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>,
  Zap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
}

export default function DashboardPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div style={{
      background: '#0a0e27',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, sans-serif',
    }}>
      {/* Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
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
        padding: '14px 20px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '18px',
            }}>i</div>
            <span style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: '800' }}>iLEARN</span>
          </a>
          <a href="/courses" style={{
            padding: '8px 18px',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '8px',
            color: '#a78bfa',
            fontWeight: '600',
            fontSize: 'clamp(12px, 3vw, 13px)',
            textDecoration: 'none',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap',
          }}>
            Courses
          </a>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        padding: 'clamp(40px, 10vw, 60px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
        position: 'relative',
        zIndex: 1,
      }}>
        <h1 style={{
          fontSize: 'clamp(28px, 7vw, 48px)',
          fontWeight: '800',
          marginBottom: '8px',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}>
          Welcome Back
        </h1>
        <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: '#9ca3af' }}>
          Keep pushing towards your goals
        </p>
      </div>

      {/* Stats */}
      <div style={{ padding: 'clamp(40px, 10vw, 60px) 20px', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 'clamp(12px, 3vw, 16px)',
          marginBottom: 'clamp(40px, 10vw, 60px)',
        }}>
          {[
            { label: 'Hours Learned', value: '142', Icon: Icons.Zap, delay: 0.1 },
            { label: 'Courses', value: '3', Icon: Icons.BookOpen, delay: 0.2 },
            { label: 'Certificates', value: '2', Icon: Icons.Award, delay: 0.3 },
            { label: 'Streak', value: '12 days', Icon: Icons.BarChart, delay: 0.4 },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: 'clamp(16px, 4vw, 24px)',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${stat.delay}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '18px', color: '#a78bfa', marginBottom: '8px' }}>
                <stat.Icon />
              </div>
              <div style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase', marginBottom: '6px' }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: 'clamp(18px, 5vw, 24px)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Courses */}
        <h2 style={{
          fontSize: 'clamp(18px, 4.5vw, 24px)',
          fontWeight: '800',
          marginBottom: 'clamp(16px, 4vw, 24px)',
          letterSpacing: '-0.5px',
        }}>
          Active Learning
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(12px, 3vw, 16px)', marginBottom: 'clamp(40px, 10vw, 60px)' }}>
          {[
            { title: 'Data Science Mastery', progress: 65, lessons: '32/48', delay: 0.1 },
            { title: 'Full Stack Web Dev', progress: 32, lessons: '18/56', delay: 0.2 },
            { title: 'AI & Machine Learning', progress: 8, lessons: '5/64', delay: 0.3 },
            { title: 'Cloud & DevOps', progress: 0, lessons: '0/40', delay: 0.4 },
          ].map((course, i) => (
            <div
              key={i}
              style={{
                padding: 'clamp(16px, 4vw, 20px)',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${course.delay}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: '700' }}>
                  {course.title}
                </h3>
                <span style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#6b7280' }}>
                  {course.lessons}
                </span>
              </div>

              <div style={{
                height: '5px',
                background: 'rgba(139, 92, 246, 0.1)',
                borderRadius: '3px',
                overflow: 'hidden',
                marginBottom: '8px',
              }}>
                <div
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)',
                    width: `${course.progress}%`,
                    transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transitionDelay: `${course.delay + 0.5}s`,
                  }}
                />
              </div>

              <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', fontWeight: '700', color: '#a78bfa' }}>
                {course.progress}% Complete
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="/courses" style={{
            display: 'inline-block',
            padding: 'clamp(11px, 2.5vw, 14px) clamp(20px, 5vw, 40px)',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '700',
            fontSize: 'clamp(12px, 3vw, 14px)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: '0 8px 24px rgba(139, 92, 246, 0.2)',
          }}>
            Explore More Courses
          </a>
        </div>
      </div>

      <style>{`
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