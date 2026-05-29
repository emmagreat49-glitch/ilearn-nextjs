'use client'
import { useState } from 'react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

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
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="/courses" style={{
              padding: '10px 24px',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '10px',
              color: '#06b6d4',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}>
              Browse Courses
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        padding: '60px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
      }}>
        <h1 style={{
          fontSize: '56px',
          fontWeight: '800',
          marginBottom: '8px',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Welcome Back, Admin
        </h1>
        <p style={{ fontSize: '16px', color: '#94a3b8' }}>
          Continue your learning journey with personalized insights
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}>
          {[
            { label: 'Total Hours', value: '142', icon: '⏱️', color: '#0ea5e9' },
            { label: 'Courses Enrolled', value: '3', icon: '📚', color: '#06b6d4' },
            { label: 'Certificates Earned', value: '2', icon: '🏆', color: '#fbbf24' },
            { label: 'Current Streak', value: '12 days', icon: '🔥', color: '#f97316' },
          ].map((stat, i) => (
            <div
              key={i}
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
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{stat.icon}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '32px',
                fontWeight: '800',
                background: `linear-gradient(135deg, ${stat.color} 0%, #06b6d4 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Enrolled Courses */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '800',
            marginBottom: '24px',
            letterSpacing: '-0.5px',
          }}>
            Your Active Courses
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[
              { title: 'Data Science Mastery', progress: 65, lessons: '32/48', nextLesson: 'Advanced Statistics' },
              { title: 'Full Stack Web Dev', progress: 32, lessons: '18/56', nextLesson: 'React Hooks Deep Dive' },
              { title: 'AI & Machine Learning', progress: 8, lessons: '5/64', nextLesson: 'Neural Networks Intro' },
              { title: 'Cloud & DevOps', progress: 0, lessons: '0/40', nextLesson: 'AWS Fundamentals' },
            ].map((course, i) => (
              <div
                key={i}
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
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.2)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
                  Next: {course.nextLesson}
                </p>

                {/* Progress */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    fontSize: '12px',
                    color: '#64748b',
                  }}>
                    <span>Progress</span>
                    <span>{course.lessons}</span>
                  </div>
                  <div style={{
                    height: '6px',
                    background: 'rgba(6, 182, 212, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <div
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)',
                        width: `${course.progress}%`,
                        transition: 'width 0.5s',
                      }}
                    />
                  </div>
                </div>

                <div style={{ fontSize: '13px', fontWeight: '700', color: '#06b6d4' }}>
                  {course.progress}% Complete
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="/courses" style={{
            display: 'inline-block',
            padding: '14px 40px',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '700',
            fontSize: '14px',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 20px 50px rgba(6, 182, 212, 0.2)',
          }}>
            Explore More Courses
          </a>
        </div>
      </div>
    </div>
  )
}