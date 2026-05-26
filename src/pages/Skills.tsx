function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-100 via-cyan-100 to-blue-200 py-16 px-20">
      <h1 className="text-5xl font-extrabold text-center text-black mb-12">
        My Skills
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="bg-white text-white p-8 rounded-3xl shadow-xl border border-white/20 space-y-4">
          <h2 className="text-3xl font-bold text-black mb-6">
            Coding Languages
          </h2>
          <div className="bg-cyan-50 text-slate-900 p-4 rounded-xl font-semibold hover:shadow-xl">
            ☕ C
          </div>
          <div className="bg-emerald-50 text-slate-900 p-4 rounded-xl font-semibold hover:shadow-xl">
            ☕ Python
          </div>

          <div className="bg-cyan-50 text-slate-900 p-4 rounded-xl font-semibold hover:shadow-xl">
            ☕ Java
          </div>
           <div className="bg-emerald-50 text-slate-900 p-4 rounded-xl font-semibold hover:shadow-xl">
            ☕ My SQL
          </div>
        </div>

        <div className="bg-white backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-black mb-6">
            Web Development
          </h2>

          <div className="space-y-4">
            <p className="bg-emerald-50 text-black p-4 rounded-xl font-semibold hover:shadow-xl">
              🌐 HTML
            </p>
            <p className="bg-cyan-50 text-black p-4 rounded-xl font-semibold hover:shadow-xl">
              🎨 Tailwind CSS
            </p>
            <p className="bg-emerald-50 text-black p-4 rounded-xl font-semibold hover:shadow-xl">
              ⚡ JavaScript
            </p>
            <p className="bg-cyan-50 text-black p-4 rounded-xl font-semibold hover:shadow-xl">
              🔷 TypeScript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;