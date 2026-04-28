export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-white bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-gradient-x">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-purple-700/70 backdrop-blur-md">
        <h1 className="text-2xl font-bold">Rumaan’s Music</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-200 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">Playlists</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">About</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent">
          Welcome to Rumaan’s Music Website
        </h2>
        <p className="text-lg max-w-2xl mb-8">
          Discover tracks, explore playlists, and enjoy the rhythm of creativity.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow hover:scale-105 hover:bg-gray-200 transition-transform duration-300">
          Explore Music
        </button>
      </section>

      {/* Featured Tracks */}
      <section className="px-8 py-12 bg-purple-800/70 backdrop-blur-md">
        <h3 className="text-3xl font-bold mb-6 text-center">Featured Tracks</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
            <h4 className="text-xl font-semibold mb-2">Track One</h4>
            <p className="text-sm">A smooth blend of beats and melody.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
            <h4 className="text-xl font-semibold mb-2">Track Two</h4>
            <p className="text-sm">Energetic vibes to keep you moving.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
            <h4 className="text-xl font-semibold mb-2">Track Three</h4>
            <p className="text-sm">Relaxing tunes for late-night listening.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 bg-purple-700/70 backdrop-blur-md text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Rumaan’s Music Website. All rights reserved.</p>
      </footer>
    </main>
  );
}
