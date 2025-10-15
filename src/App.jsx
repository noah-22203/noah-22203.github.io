function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <nav className="p-6 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="mb-32">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h2>
          <p className="text-xl text-gray-300 mb-8">Full Stack Developer | UI/UX Enthusiast</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
            View My Work
          </button>
        </section>

        <section id="about" className="mb-32">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            Add your bio here. Talk about your skills, experience, and what drives you as a developer.
          </p>
        </section>

        <section id="projects" className="mb-32">
          <h3 className="text-3xl font-bold mb-6">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2">Project 1</h4>
              <p className="text-gray-400 mb-4">Description of your project</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded text-sm">React</span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded text-sm">Tailwind</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2">Project 2</h4>
              <p className="text-gray-400 mb-4">Description of your project</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h3 className="text-3xl font-bold mb-6">Contact</h3>
          <p className="text-gray-300 mb-4">Let's connect!</p>
          <div className="flex gap-4">
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">Email</a>
            <a href="https://github.com/yourusername" className="text-blue-400 hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="text-blue-400 hover:underline">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App