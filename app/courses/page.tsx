'use client'
import { useState } from 'react'

const COURSES = [
  {
    id: 1,
    title: 'Data Science Mastery',
    subtitle: 'Analytics & ML',
    icon: '📊',
    level: 'Intermediate',
    students: '2.4K',
    rating: 4.9,
    lessons: 48,
    badge: 'Popular',
  },
  {
    id: 2,
    title: 'Full Stack Web Dev',
    subtitle: 'React & Node.js',
    icon: '🌐',
    level: 'Beginner',
    students: '3.1K',
    rating: 4.8,
    lessons: 56,
    badge: 'Trending',
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    subtitle: 'Deep Learning',
    icon: '🤖',
    level: 'Advanced',
    students: '1.8K',
    rating: 4.7,
    lessons: 64,
    badge: 'Advanced',
  },
  {
    id: 4,
    title: 'Cloud & DevOps',
    subtitle: 'AWS & Docker',
    icon: '☁️',
    level: 'Intermediate',
    students: '1.2K',
    rating: 4.8,
    lessons: 40,
    badge: 'New',
  },
  {
    id: 5,
    title: 'Digital Marketing',
    subtitle: 'SEO & Growth',
    icon: '📱',
    level: 'Beginner',
    students: '4.2K',
    rating: 4.9,
    lessons: 32,
    badge: null,
  },
  {
    id: 6,
    title: 'Career Accelerator',
    subtitle: 'Interview & Negotiation',
    icon: '🚀',
    level: 'All Levels',
    students: '1.5K',
    rating: 4.8,
    lessons: 24,
    badge: 'Popular',
  },
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
        padding: '16px 0',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '20px',
            }}>i</div>
            <span style={{ fontSize: '18px', fontWeight: '800' }}>iLEARN</span>
          </a>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        padding: '60px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <h1 style={{
          fontSize: '56px',
          fontWeight: '800',
          marginBottom: '16px',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          All Courses
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px' }}>
          Discover industry-leading courses taught by experts
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '12px 16px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '10px',
            color: 'white',
            fontSize: '14px',
            fontFamily: 'inherit',
            marginBottom: '32px',
            transition: 'all 0.3s',
            outline: 'none',
          }}
          onFocus={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
            e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.6)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
            e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)'
          }}
        />

        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'].map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              style={{
                padding: '10px 20px',
                background: selectedLevel === level ? 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)' : 'rgba(255, 255, 255, 0.05)',
                border: selectedLevel === level ? 'none' : '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '10px',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(6, 182, 212, 0.1)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {filtered.map(course => (
            <div
              key={course.id}
              style={{
                padding: '28px',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                e.currentTarget.style.transform = 'translateY(-8px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ fontSize: '40px' }}>{course.icon}</div>
                {course.badge && (
                  <span style={{
                    padding: '6px 12px',
                    background: 'rgba(6, 182, 212, 0.2)',
                    border: '1px solid rgba(6, 182, 212, 0.4)',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#06b6d4',
                    textTransform: 'uppercase',
                  }}>
                    {course.badge}
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                {course.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#06b6d4', fontWeight: '600', marginBottom: '16px' }}>
                {course.subtitle}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                paddingTop: '16px',
                paddingBottom: '16px',
                borderTop: '1px solid rgba(6, 182, 212, 0.2)',
                borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
                marginBottom: '16px',
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Lessons
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>{course.lessons}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Students
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '700' }}>{course.students}</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
              }}>
                <span style={{
                  padding: '4px 10px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#06b6d4',
                }}>
                  {course.level}
                </span>
                <span style={{ fontSize: '13px', color: '#fbbf24', fontWeight: '600' }}>
                  ⭐ {course.rating}
                </span>
              </div>

              <button style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s',
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
          ))}
        </div>
      </div>
    </div>
  )
}