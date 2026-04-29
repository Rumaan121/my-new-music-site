// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
          Rumaan’s Music
        </h1>
        <p className="text-lg max-w-xl mb-6">
          Discover tracks, explore playlists, and enjoy the rhythm of creativity.
        </p>
        <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold transition">
          Explore Music
        </button>
      </section>

      {/* Featured Playlists */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Playlists</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Chill Vibes</h3>
            <p className="text-gray-300">Smooth beats for late-night listening.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Workout Energy</h3>
            <p className="text-gray-300">High-energy tracks to keep you moving.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Indie Discoveries</h3>
            <p className="text-gray-300">Fresh sounds from emerging artists.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-6 mt-12">
        © 2026 Rumaan’s Music Website. All rights reserved.
      </footer>
    </main>
  );
}
