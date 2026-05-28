export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">iLEARN</h1>
        <p className="text-gray-400">Redirecting...</p>
        <script>{`window.location.href = '/login'`}</script>
      </div>
    </div>
  )
}
