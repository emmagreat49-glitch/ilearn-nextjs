'use client'
import { useState } from 'react'

const COURSES = [
  {
    id: 1,
    title: 'Data Analysis',
    description: 'Master data visualization, statistics, and insights',
    icon: '📊',
    lessons: 4,
    difficulty: 'Intermediate',
    duration: '4 weeks',
    students: '2.4K',
    rating: 4.9,
    color: 'from-blue-500 to-cyan-500',
    topics: ['Excel', 'Python', 'Tableau'],
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Build modern websites with HTML, CSS, and JavaScript',
    icon: '🌐',
    lessons: 6,
    difficulty: 'Beginner',
    duration: '6 weeks',
    students: '3.1K',
    rating: 4.8,
    color: 'from-purple-500 to-pink-500',
    topics: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'AI Fundamentals',
    description: 'Understand machine learning and artificial intelligence',
    icon: '🤖',
    lessons: 5,
    difficulty: 'Advanced',
    duration: '8 weeks',
    students: '1.8K',
    rating: 4.7,
    color: 'from-green-500 to-emerald-500',
    topics: ['ML', 'TensorFlow', 'Python'],
  },
  {
    id: 4,
    title: 'Digital Skills',
    description: 'Essential tools for the modern workplace',
    icon: '💻',
    lessons: 4,
    difficulty: 'Beginner',
    duration: '3 weeks',
    students: '4.2K',
    rating: 4.9,
    color: 'from-orange-500 to-red-500',
    topics: ['Office', 'Communication', 'Tools'],
  },
  {
    id: 5,
    title: 'Career Paths',
    description: 'Navigate your tech career with confidence',
    icon: '🚀',
    lessons: 3,
    difficulty: 'Intermediate',
    duration: '2 weeks',
    students: '1.5K',
    rating: 4.8,
    color: 'from-indigo-500 to-blue-500',
    topics: ['Resume', 'Interview', 'Networking'],
  },
]

export default function CoursesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']
  
  const filteredCourses = selectedDifficulty === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.difficulty === selectedDifficulty)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">i</span>
            </div>
            <h1 className="text-xl font-bold">iLEARN</h1>
          </div>
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition">
            Dashboard
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold mb-4">
            Explore Our
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Choose from our curated collection of professional courses designed to accelerate your learning journey.
          </p>
        </div>

        {/* Difficulty Filter */}
        <div className="mb-12 flex gap-3 flex-wrap">
          {difficulties.map(diff => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                selectedDifficulty === diff
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-slate-800/50 text-gray-300 border border-slate-700/50 hover:border-slate-600'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div className="p-8 relative z-10">
                {/* Icon and Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-gray-200">
                    {course.difficulty}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-y border-slate-700/50">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Lessons</p>
                    <p className="text-lg font-bold">{course.lessons}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Duration</p>
                    <p className="text-lg font-bold">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Students</p>
                    <p className="text-lg font-bold">{course.students}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Rating</p>
                    <p className="text-lg font-bold">⭐ {course.rating}</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-2">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map(topic => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1 bg-slate-700/30 rounded-full text-gray-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${course.color} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all transform group-hover:scale-105 active:scale-95`}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No courses found for this difficulty level.</p>
          </div>
        )}
      </div>
    </div>
  )
}