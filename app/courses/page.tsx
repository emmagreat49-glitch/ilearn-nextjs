'use client'
import { useState } from 'react'

const COURSES = [
  { id: 1, title: 'Data Analysis', desc: 'Master data visualization and insights.', icon: '📊', level: 'Intermediate', duration: '4 weeks', students: '2.4K', rating: 4.9 },
  { id: 2, title: 'Web Development', desc: 'Build modern websites with HTML, CSS, JS.', icon: '🌐', level: 'Beginner', duration: '6 weeks', students: '3.1K', rating: 4.8 },
  { id: 3, title: 'AI Fundamentals', desc: 'Learn machine learning and AI basics.', icon: '🤖', level: 'Advanced', duration: '8 weeks', students: '1.8K', rating: 4.7 },
  { id: 4, title: 'Digital Skills', desc: 'Master workplace tools and communication.', icon: '💻', level: 'Beginner', duration: '3 weeks', students: '4.2K', rating: 4.9 },
  { id: 5, title: 'Career Paths', desc: 'Navigate your tech career with guidance.', icon: '🚀', level: 'Intermediate', duration: '2 weeks', students: '1.5K', rating: 4.8 },
]

export default function CoursesPage() {
  const [level, setLevel] = useState('All')
  const filtered = level === 'All' ? COURSES : COURSES.filter(c => c.level === level)

  const styles = {
    container: { maxWidth: '1280px', margin: '0 auto', padding: '24px' },
    header: { fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' },
    gradient: { background: 'linear-gradient(90deg, #60a5fa, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    filterBtn: (active: boolean) => ({ padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: '600', background: active ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' : '#1a1f2e', color: 'white', marginRight: '12px', marginBottom: '12px' }),
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' },
    card: { borderRadius: '16px', border: '1px solid #2d3748', background: 'linear-gradient(135deg, rgba(26, 31, 46, 0.6), rgba(37, 45, 61, 0.3))', padding: '24px', backdropFilter: 'blur(10px)', transition: 'all 0.3s', cursor: 'pointer' },
    icon: { fontSize: '48px', marginBottom: '16px' },
    title: { fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: '#fff' },
    desc: { fontSize: '14px', color: '#a0aec0', marginBottom: '16px' },
    stats: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', paddingTop: '16px', paddingBottom: '16px', borderTop: '1px solid #2d3748', borderBottom: '1px solid #2d3748', marginBottom: '16px' },
    stat: { textAlign: 'center' as const },
    statLabel: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' },
    statValue: { fontSize: '16px', fontWeight: '600', color: '#fff' },
    btn: { width: '100%', padding: '12px', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' },
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0e1a, #0f1419)' }}>
      {/* Nav */}
      <div style={{ position: 'sticky', top: 0, borderBottom: '1px solid #2d3748', backdropFilter: 'blur(10px)', background: 'rgba(10, 14, 26, 0.8)', zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', color: 'white' }}>i</div>
            <span style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>iLEARN</span>
          </div>
          <button style={{ padding: '8px 16px', borderRadius: '8px', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: 'white', border: 'none', fontWeight: '600', cursor: 'pointer' }}>Dashboard</button>
        </div>
      </div>

      {/* Main */}
      <div style={styles.container}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={styles.header}>
            Explore Our <br />
            <span style={styles.gradient}>Courses</span>
          </h1>
          <p style={{ color: '#a0aec0', fontSize: '16px', maxWidth: '600px', marginTop: '16px' }}>
            Choose from our hand-picked professional courses designed to accelerate your learning.
          </p>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: '40px' }}>
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map(l => (
            <button key={l} onClick={() => setLevel(l)} style={styles.filterBtn(level === l)}>
              {l}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {filtered.map(course => (
            <div key={course.id} style={styles.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={styles.icon}>{course.icon}</div>
                <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
                  {course.level}
                </span>
              </div>
              <h3 style={styles.title}>{course.title}</h3>
              <p style={styles.desc}>{course.desc}</p>
              <div style={styles.stats}>
                <div style={styles.stat}>
                  <div style={styles.statLabel}>DURATION</div>
                  <div style={styles.statValue}>{course.duration}</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statLabel}>STUDENTS</div>
                  <div style={styles.statValue}>{course.students}</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statLabel}>RATING</div>
                  <div style={styles.statValue}>⭐ {course.rating}</div>
                </div>
              </div>
              <button style={styles.btn}>Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}