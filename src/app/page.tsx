"use client";

import { useState } from "react";
import playlists from "../../playlists.json";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className={dark ? "dark min-h-screen" : "min-h-screen"}>
      {/* Dark Mode Toggle */}
      <div className="p-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-black dark:text-white"
        >
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-gray-900 to-black text-white dark:from-white dark:to-gray-200 dark:text-black">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          Rumaan’s Music
        </h1>
        <p className="text-lg max-w-xl mb-6">
          Discover tracks, explore playlists, and enjoy the rhythm.
        </p>
        <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full text-white font-semibold">
          Start Listening
        </button>
      </section>

      {/* All Playlists */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Tracks</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-100 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-white dark:text-black">
                {playlist.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-700 mb-4">
                {playlist.description}
              </p>
              <AudioPlayer
                src={playlist.url}
                showJumpControls={false}
                layout="stacked"
                customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                customVolumeControls={[RHAP_UI.VOLUME]}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        {submitted ? (
          <p className="text-green-600 font-semibold">
            ✅ Thanks, your message was sent!
          </p>
        ) : (
          <form
            action="https://formspree.io/f/xrejqjlj"
            method="POST"
            className="space-y-4 max-w-md"
            onSubmit={() => setSubmitted(true)}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 rounded border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded border"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 rounded border"
              rows={5}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full text-white font-semibold"
            >
              Send
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
