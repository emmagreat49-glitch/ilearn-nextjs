'use client'

export default function DashboardPage() {
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
          <a href="/courses" style={{
            padding: '8px 18px',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '8px',
            color: '#06b6d4',
            fontWeight: '600',
            cursor: 'pointer',
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
        borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
      }}>
        <h1 style={{
          fontSize: 'clamp(28px, 7vw, 48px)',
          fontWeight: '800',
          marginBottom: '8px',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Welcome Back
        </h1>
        <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: '#94a3b8' }}>
          Continue your learning journey
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: 'clamp(40px, 10vw, 60px) 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 'clamp(12px, 3vw, 16px)',
          marginBottom: 'clamp(40px, 10vw, 60px)',
        }}>
          {[
            { label: 'Hours', value: '142', icon: '▪' },
            { label: 'Courses', value: '3', icon: '▫' },
            { label: 'Certificates', value: '2', icon: '▬' },
            { label: 'Streak', value: '12', icon: '▭' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: 'clamp(16px, 4vw, 24px)',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#06b6d4', marginBottom: '8px', fontWeight: '600' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', marginBottom: '6px' }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: 'clamp(18px, 5vw, 24px)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <h2 style={{
          fontSize: 'clamp(18px, 4.5vw, 24px)',
          fontWeight: '800',
          marginBottom: 'clamp(16px, 4vw, 24px)',
          letterSpacing: '-0.5px',
        }}>
          Your Courses
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(12px, 3vw, 16px)', marginBottom: 'clamp(40px, 10vw, 60px)' }}>
          {[
            { title: 'Data Science', progress: 65, lessons: '32/48' },
            { title: 'Web Development', progress: 32, lessons: '18/56' },
            { title: 'AI & ML', progress: 8, lessons: '5/64' },
            { title: 'Cloud & DevOps', progress: 0, lessons: '0/40' },
          ].map((course, i) => (
            <div
              key={i}
              style={{
                padding: 'clamp(16px, 4vw, 20px)',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <h3 style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: '700' }}>
                  {course.title}
                </h3>
                <span style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#64748b' }}>
                  {course.lessons}
                </span>
              </div>

              <div style={{
                height: '5px',
                background: 'rgba(6, 182, 212, 0.1)',
                borderRadius: '3px',
                overflow: 'hidden',
                marginBottom: '8px',
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

              <div style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', fontWeight: '700', color: '#06b6d4' }}>
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
            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '700',
            fontSize: 'clamp(12px, 3vw, 14px)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}>
            Explore More Courses
          </a>
        </div>
      </div>
    </div>
  )
}