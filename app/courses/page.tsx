'use client'
import { useState } from 'react'

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

  const filtered = COURSES.filter(c => {
    const levelMatch = selectedLevel === 'All' || c.level === selectedLevel
    const searchMatch = c.title.toLowerCase().includes(searchQuery.toLowerCase())
    return levelMatch && searchMatch
  })

  return (
    <div style={{
      background: '#0a0d14',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: '"Inter", -apple-system, sans-serif',
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 13, 20, 0.5)',
        backdropFilter: 'blur(30px)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
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
              background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
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
      }}>
        <h1 style={{
          fontSize: 'clamp(28px, 7vw, 48px)',
          fontWeight: '800',
          marginBottom: 'clamp(12px, 3vw, 16px)',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          All Courses
        </h1>
        <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: '#94a3b8', marginBottom: 'clamp(28px, 7vw, 40px)' }}>
          Industry-leading courses taught by experts
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
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
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
          {['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'].map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              style={{
                padding: 'clamp(8px, 2vw, 10px) clamp(14px, 3vw, 20px)',
                background: selectedLevel === level ? 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)' : 'rgba(255, 255, 255, 0.05)',
                border: selectedLevel === level ? 'none' : '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                fontSize: 'clamp(12px, 3vw, 13px)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ padding: 'clamp(40px, 10vw, 60px) 20px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(6, 182, 212, 0.1)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(12px, 3vw, 16px)',
        }}>
          {filtered.map(course => (
            <div
              key={course.id}
              style={{
                padding: 'clamp(16px, 4vw, 20px)',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'clamp(10px, 2.5vw, 12px)' }}>
                <div>
                  <div style={{ fontSize: 'clamp(18px, 5vw, 24px)', color: '#06b6d4', marginBottom: '6px' }}>
                    {course.icon}
                  </div>
                  <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: '700', marginBottom: '2px' }}>
                    {course.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#06b6d4', fontWeight: '600' }}>
                    {course.subtitle}
                  </p>
                </div>
                {course.badge && (
                  <span style={{
                    padding: '4px 10px',
                    background: 'rgba(6, 182, 212, 0.2)',
                    border: '1px solid rgba(6, 182, 212, 0.4)',
                    borderRadius: '6px',
                    fontSize: '10px',
                    fontWeight: '700',
                    color: '#06b6d4',
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
                borderTop: '1px solid rgba(6, 182, 212, 0.2)',
                borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
                marginBottom: '10px',
              }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', marginBottom: '3px' }}>
                    Lessons
                  </div>
                  <div style={{ fontSize: 'clamp(13px, 3vw, 14px)', fontWeight: '700' }}>{course.lessons}</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', marginBottom: '3px' }}>
                    Students
                  </div>
                  <div style={{ fontSize: 'clamp(13px, 3vw, 14px)', fontWeight: '700' }}>{course.students}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', marginBottom: '3px' }}>
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
                  background: 'rgba(6, 182, 212, 0.15)',
                  borderRadius: '6px',
                  fontSize: 'clamp(11px, 2.5vw, 12px)',
                  fontWeight: '600',
                  color: '#06b6d4',
                }}>
                  {course.level}
                </span>
                <button style={{
                  flex: 1,
                  padding: 'clamp(10px, 2.5vw, 12px)',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: 'clamp(12px, 3vw, 13px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}>
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}