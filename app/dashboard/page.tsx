'use client'

const ENROLLED_COURSES = [
  { id: 1, title: 'Data Science Mastery', progress: 65, icon: '📊', nextLesson: 'Advanced Statistics' },
  { id: 2, title: 'Full Stack Web Dev', progress: 32, icon: '🌐', nextLesson: 'React Hooks Deep Dive' },
  { id: 3, title: 'AI & Machine Learning', progress: 8, icon: '🤖', nextLesson: 'Neural Networks Intro' },
]

const RECENT_ACTIVITY = [
  { action: 'Completed Lesson', course: 'Data Science Mastery', time: '2 hours ago' },
  { action: 'Earned Certificate', course: 'Python Fundamentals', time: '1 day ago' },
  { action: 'Started Course', course: 'Cloud & DevOps', time: '3 days ago' },
  { action: 'Completed Quiz', course: 'Full Stack Web Dev', time: '5 days ago' },
]

export default function DashboardPage() {
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
            <a href="/courses" style={{
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
              Browse Courses
            </a>
            <button style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(226, 232, 240, 0.1)',
              color: 'white',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              👤
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-1px' }}>
            Welcome back, Admin
          </h1>
          <p style={{ fontSize: '16px', color: '#94a3b8' }}>
            Continue your learning journey with personalized recommendations
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}>
          {[
            { label: 'Hours Learned', value: '142', icon: '⏱️' },
            { label: 'Courses Enrolled', value: '3', icon: '📚' },
            { label: 'Certifications', value: '2', icon: '🏆' },
            { label: 'Streak Days', value: '12', icon: '🔥' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(226, 232, 240, 0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '28px', fontWeight: '800', background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '28px' }}>
          {/* Enrolled Courses */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.5px' }}>
              Your Courses
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {ENROLLED_COURSES.map(course => (
                <div
                  key={course.id}
                  style={{
                    padding: '20px',
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                    border: '1px solid rgba(226, 232, 240, 0.1)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(20px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{course.icon}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
                        {course.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#94a3b8' }}>
                        Next: {course.nextLesson}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={{
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    marginBottom: '8px',
                  }}>
                    <div
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)',
                        width: `${course.progress}%`,
                        transition: 'width 0.3s',
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>
                    {course.progress}% Complete
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/courses"
              style={{
                display: 'inline-block',
                marginTop: '24px',
                padding: '12px 24px',
                background: 'rgba(14, 165, 233, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '8px',
                color: '#06b6d4',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              Browse More Courses →
            </a>
          </div>

          {/* Sidebar */}
          <div>
            {/* Recent Activity */}
            <div style={{
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
              border: '1px solid rgba(226, 232, 240, 0.1)',
              borderRadius: '12px',
              backdropFilter: 'blur(20px)',
              marginBottom: '20px',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                Recent Activity
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {RECENT_ACTIVITY.map((activity, i) => (
                  <div key={i} style={{ paddingBottom: i !== RECENT_ACTIVITY.length - 1 ? '12px', borderBottom: '1px solid rgba(226, 232, 240, 0.05)' : '0', fontSize: '13px' }}>
                    <p style={{ color: '#e2e8f0', marginBottom: '2px', fontWeight: '600' }}>
                      {activity.action}
                    </p>
                    <p style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '2px' }}>
                      {activity.course}
                    </p>
                    <p style={{ color: '#64748b', fontSize: '11px' }}>
                      {activity.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation */}
            <div style={{
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '12px',
              backdropFilter: 'blur(20px)',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', letterSpacing: '-0.5px' }}>
                💡 Recommended
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px', lineHeight: '1.6' }}>
                Based on your interests in Web Development, we recommend starting our Cloud & DevOps course.
              </p>
              <button style={{
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}>
                View Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}