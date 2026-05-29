'use client'
import { useState } from 'react'

const COURSES = [
  {
    id: 1,
    title: 'Data Science Mastery',
    subtitle: 'Analytics, ML & Visualization',
    description: 'Learn data science from fundamentals to advanced machine learning. Build real-world projects and master industry tools.',
    icon: '📊',
    level: 'Intermediate',
    duration: '12 weeks',
    students: '2.4K',
    rating: 4.9,
    lessons: 48,
    projects: 6,
    badge: 'Popular',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 2,
    title: 'Full Stack Web Dev',
    subtitle: 'React, Node & Modern Stack',
    description: 'Master modern web development with React, Node.js, databases. Build production-ready applications from scratch.',
    icon: '🌐',
    level: 'Beginner',
    duration: '14 weeks',
    students: '3.1K',
    rating: 4.8,
    lessons: 56,
    projects: 8,
    badge: 'Best for Beginners',
    color: 'from-purple-600 to-pink-500',
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    subtitle: 'Deep Learning & LLMs',
    description: 'Deep dive into artificial intelligence, neural networks, and large language models. Build cutting-edge AI applications.',
    icon: '🤖',
    level: 'Advanced',
    duration: '16 weeks',
    students: '1.8K',
    rating: 4.7,
    lessons: 64,
    projects: 10,
    badge: 'Advanced',
    color: 'from-green-600 to-emerald-500',
  },
  {
    id: 4,
    title: 'Digital Marketing Pro',
    subtitle: 'SEO, Analytics & Growth',
    description: 'Learn modern digital marketing strategies, SEO, analytics, and growth hacking from industry experts.',
    icon: '📱',
    level: 'Beginner',
    duration: '8 weeks',
    students: '4.2K',
    rating: 4.9,
    lessons: 32,
    projects: 4,
    badge: 'New',
    color: 'from-orange-600 to-red-500',
  },
  {
    id: 5,
    title: 'Career Accelerator',
    subtitle: 'Resume, Interview & Networking',
    description: 'Strategic career development program. Land your dream job with expert guidance on interviews and negotiation.',
    icon: '🚀',
    level: 'All Levels',
    duration: '6 weeks',
    students: '1.5K',
    rating: 4.8,
    lessons: 24,
    projects: 3,
    badge: 'Popular',
    color: 'from-indigo-600 to-blue-500',
  },
  {
    id: 6,
    title: 'Cloud & DevOps',
    subtitle: 'AWS, Docker & Kubernetes',
    description: 'Master cloud infrastructure and DevOps practices. Deploy and manage applications at scale.',
    icon: '☁️',
    level: 'Intermediate',
    duration: '10 weeks',
    students: '1.2K',
    rating: 4.8,
    lessons: 40,
    projects: 5,
    badge: 'In-Demand',
    color: 'from-yellow-600 to-orange-500',
  },
]

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels']

  const filtered = COURSES.filter(course => {
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel
    const searchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       course.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    return levelMatch && searchMatch
  })

  return (
    <div style={{ background: '#0a0d14', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 13, 20, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '16px 0',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
            <span style={{ fontSize: '18px', fontWeight: '700' }}>iLEARN</span>
          </a>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="/dashboard" style={{
              padding: '10px 24px',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '8px',
              color: '#06b6d4',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}>
              Dashboard
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <h1 style={{ fontSize: '52px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-1px' }}>
          Explore Courses
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px', maxWidth: '600px' }}>
          Discover high-quality, industry-relevant courses taught by experts. Choose your path and start learning today.
        </p>

        {/* Search */}
        <div style={{
          position: 'relative',
          maxWidth: '500px',
          marginBottom: '32px',
        }}>
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(226, 232, 240, 0.1)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontFamily: 'inherit',
              transition: 'all 0.3s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)'
            }}
          />
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              style={{
                padding: '10px 20px',
                background: selectedLevel === level ? 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)' : 'rgba(255, 255, 255, 0.05)',
                border: selectedLevel === level ? 'none' : '1px solid rgba(226, 232, 240, 0.1)',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                if (selectedLevel !== level) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedLevel !== level) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                }
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        {filtered.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '28px',
          }}>
            {filtered.map(course => (
              <div
                key={course.id}
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                  border: '1px solid rgba(226, 232, 240, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(20px)',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Header */}
                <div style={{
                  padding: '28px',
                  background: `linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)`,
                  borderBottom: '1px solid rgba(226, 232, 240, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ fontSize: '40px' }}>{course.icon}</div>
                  {course.badge && (
                    <span style={{
                      padding: '6px 12px',
                      background: 'rgba(14, 165, 233, 0.2)',
                      border: '1px solid rgba(6, 182, 212, 0.4)',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#06b6d4',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px', letterSpacing: '-0.5px' }}>
                    {course.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#06b6d4', fontWeight: '600', marginBottom: '12px' }}>
                    {course.subtitle}
                  </p>
                  <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>
                    {course.description}
                  </p>

                  {/* Stats Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    borderTop: '1px solid rgba(226, 232, 240, 0.05)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.05)',
                  }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase' }}>
                        Lessons
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '700' }}>{course.lessons}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase' }}>
                        Projects
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '700' }}>{course.projects}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase' }}>
                        Duration
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '600' }}>{course.duration}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase' }}>
                        Rating
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '600' }}>⭐ {course.rating}</div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                    paddingBottom: '20px',
                  }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{course.students} enrolled</span>
                    <span style={{
                      padding: '4px 10px',
                      background: 'rgba(14, 165, 233, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#06b6d4',
                    }}>
                      {course.level}
                    </span>
                  </div>

                  {/* Button */}
                  <button
                    style={{
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
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    Explore Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 40px' }}>
            <p style={{ fontSize: '16px', color: '#94a3b8' }}>No courses found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}