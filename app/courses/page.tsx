'use client'
import { useState, useEffect } from 'react'

const COURSES = [
  { id: 1, title: 'Data Science', subtitle: 'Analytics & ML', icon: '●', level: 'Intermediate', students: '2.4K', rating: 4.9, lessons: 48, badge: 'Popular' },
  { id: 2, title: 'Web Development', subtitle: 'React & Node.js', icon: '■', level: 'Beginner', students: '3.1K', rating: 4.8, lessons: 56, badge: 'Trending' },
  { id: 3, title: 'AI & ML', subtitle: 'Deep Learning', icon: '▲', level: 'Advanced', students: '1.8K', rating: 4.7, lessons: 64, badge: 'Advanced' },
  { id: 4, title: 'Cloud & DevOps', subtitle: 'AWS & Docker', icon: '◆', level: 'Intermediate', students: '1.2K', rating: 4.8, lessons: 40, badge: 'New' },
  { id: 5, title: 'Digital Marketing', subtitle: 'SEO & Growth', icon: '◇', level: 'Beginner', students: '4.2K', rating: 4.9, lessons: 32, badge: null },
  { id: 6, title: 'Career Accelerator', subtitle: 'Interview & Negotiation', icon: '★', level: 'All Levels', students: '1.5K', rating: 4.8, lessons: 24, badge: 'Popular' },
]

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filtered = COURSES.filter(c => {
    const levelMatch = selectedLevel === 'All' || c.level === selectedLevel
    const searchMatch = c.title.toLowerCase().includes(searchQuery.toLowerCase())
    return levelMatch && searchMatch
  })

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
        </div>
      </nav>

      {/* Header */}
      <div style={{
        padding: 'clamp(40px, 10vw, 60px) 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <h1 style={{
          fontSize: 'clamp(28px, 7vw, 48px)',
          fontWeight: '800',
          marginBottom: 'clamp(12px, 3vw, 16px)',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}>
          All Courses
        </h1>
        <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: '#9ca3af', marginBottom: 'clamp(28px, 7vw, 40px)' }}>
          Master industry-leading skills from expert instructors
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '100%',
            padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '8px',
            color: 'white',
            fontSize: 'clamp(13px, 3vw, 14px)',
            fontFamily: 'inherit',
            marginBottom: 'clamp(20px, 5vw, 32px)',
            transition: 'all 0.3s',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />

        {/* Filters */}
        <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 12px)', flexWrap: 'wrap' }}>
          {['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'].map((level, i) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              style={{
                padding: 'clamp(8px, 2vw, 10px) clamp(14px, 3vw, 20px)',
                background: selectedLevel === level ? 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)' : 'rgba(139, 92, 246, 0.1)',
                border: selectedLevel === level ? 'none' : '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                fontSize: 'clamp(12px, 3vw, 13px)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                whiteSpace: 'nowrap',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: `${0.2 + i * 0.05}s`,
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ padding: 'clamp(40px, 10vw, 60px) 20px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(139, 92, 246, 0.1)', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(12px, 3vw, 16px)',
        }}>
          {filtered.map((course, i) => (
            <div
              key={course.id}
              style={{
                padding: 'clamp(16px, 4vw, 20px)',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${0.1 + (i * 0.05)}s`,
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'clamp(10px, 2.5vw, 12px)' }}>
                <div>
                  <div style={{ fontSize: 'clamp(18px, 5vw, 24px)', color: '#a78bfa', marginBottom: '6px' }}>
                    {course.icon}
                  </div>
                  <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: '700', marginBottom: '2px' }}>
                    {course.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#a78bfa', fontWeight: '600' }}>
                    {course.subtitle}
                  </p>
                </div>
                {course.badge && (
                  <span style={{
                    padding: '4px 10px',
                    background: 'rgba(139, 92, 246, 0.2)',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    borderRadius: '6px',
                    fontSize: '10px',
                    fontWeight: '700',
                    color: '#a78bfa',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>
                    {course.badge}
                  </span>
                )}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '8px',
                paddingTop: '10px',
                paddingBottom: '10px',
                borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
                marginBottom: '10px',
              }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '3px' }}>
                    Lessons
                  </div>
                  <div style={{ fontSize: 'clamp(13px, 3vw, 14px)', fontWeight: '700' }}>{course.lessons}</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '3px' }}>
                    Students
                  </div>
                  <div style={{ fontSize: 'clamp(13px, 3vw, 14px)', fontWeight: '700' }}>{course.students}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '3px' }}>
                    Rating
                  </div>
                  <div style={{ fontSize: 'clamp(13px, 3vw, 14px)', fontWeight: '700', color: '#fbbf24' }}>⭐ {course.rating}</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{
                  padding: '4px 10px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  borderRadius: '6px',
                  fontSize: 'clamp(11px, 2.5vw, 12px)',
                  fontWeight: '600',
                  color: '#a78bfa',
                }}>
                  {course.level}
                </span>
                <button style={{
                  flex: 1,
                  padding: 'clamp(10px, 2.5vw, 12px)',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: 'clamp(12px, 3vw, 13px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}