function Projects() {
  const projects = [
   {
    title: "Online Examination System",
    desc: "Developed an online examination system using Python for conducting secure exams, managing students, and generating results efficiently.",
    tech: "Python • MySQL ",
  },

  {
    title: "Road Accident Prediction",
    desc: "Built a prediction model using data mining techniques to analyze accident data and predict possible accident risks and patterns.",
    tech: "Python • Data Mining • Machine Learning • Pandas",
  },

  {
    title: "Skin and Hair Care Platform",
    desc: "Designed and developed a web platform for skin and hair care recommendations using Django framework with user-friendly interfaces.",
    tech: "Django • Python • HTML • CSS ",
  },

    {
      title: "Portfolio Website",
      desc: "Built a responsive portfolio website using React, TypeScript, and Tailwind CSS.",
      tech: "React • TypeScript • Tailwind CSS",
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-purple-200 py-16 px-20">

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center text-slate-900 mb-14">
        My Projects
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              {project.title}
            </h2>

            <p className="text-gray-700 text-lg leading-8">
              {project.desc}
            </p>

            <div className="mt-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                {project.tech}
              </span>
            </div>

            <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
              View Project
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Projects;