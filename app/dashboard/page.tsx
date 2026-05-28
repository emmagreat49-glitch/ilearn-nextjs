'use client'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400">5</div>
            <div className="text-sm text-gray-400 mt-2">Courses</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400">20+</div>
            <div className="text-sm text-gray-400 mt-2">Lessons</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-gray-400 mt-2">Quizzes</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400">0%</div>
            <div className="text-sm text-gray-400 mt-2">Completed</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h2 className="text-xl font-bold mb-4">Welcome</h2>
          <p className="text-gray-400">Courses and content coming soon...</p>
        </div>
      </div>
    </div>
  )
}
