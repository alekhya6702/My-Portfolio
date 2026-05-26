function Certificates() {
  const certificates = [
    {
      title: "Introduction to Data Science",
      provider: "Cisco Networking Academy",
      date: "Jun 29, 2025",
      desc: "Completed student-level credential covering data analytics, AI, machine learning, and career options in data analytics.",
    },
    {
      title: "AI Advanced",
      provider: "Li2 Edu / HCCI",
      date: "Jul 28, 2025",
      desc: "Completed training in Machine Learning, Deep Learning, AI Robotics, and hands-on AI projects.",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      provider: "Oracle University",
      date: "Aug 01, 2025",
      desc: "Certified in AI foundations through Oracle Cloud Infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 py-16 px-20">
      <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-4">
        My Certificates
      </h1>

      <p className="text-center text-gray-600 text-lg mb-14">
        Certifications related to Data Science, AI, Machine Learning, and Cloud AI.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-8 border-purple-200"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-3xl mb-6">
              🏆
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              {cert.title}
            </h2>

            <p className="text-purple-700 font-semibold mb-2">
              {cert.provider}
            </p>

            <p className="text-sm text-gray-500 mb-5">
              Issued: {cert.date}
            </p>

            <p className="text-gray-700 leading-7">
              {cert.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;