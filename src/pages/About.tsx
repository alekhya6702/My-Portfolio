function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-20">

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-14">

        {/* Photo */}
        <img
          src="/Profile.jpeg"
          alt="Alekhya"
          className="w-56 h-56 rounded-full border-4 border-black shadow-2xl object-cover hover:scale-105 transition duration-300"
        />

        {/* Name */}
        <h1 className="text-5xl font-extrabold text-slate-900 mt-6">
          Alekhya Akireddy
        </h1>

        {/* Role */}
        <p className="text-2xl text-purple-700 font-semibold mt-3">
          Data Science Student | Web Developer
        </p>

        {/* Small Intro */}
        <p className="text-gray-600 text-lg mt-4 text-center max-w-2xl leading-8 ">
          Passionate about Data Science, Machine Learning, Python, and building
          beautiful responsive web applications using React and Tailwind CSS.
        </p>
      </div>

      {/* About Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-5xl mx-auto hover:shadow-xl">

       

        <p className="text-lg leading-9 text-gray-700 ">
          I am a Data Science student interested in Python, data analysis,
          machine learning, SQL, and visualization. I also enjoy building clean
          and responsive websites using React, TypeScript, JavaScript, HTML,
          CSS, and Tailwind CSS.
        </p>

        <p className="mt-6 text-lg leading-9 text-gray-700">
          My goal is to combine data science and web development to create smart
          applications that are useful, beautiful, and easy to use.
        </p>

        <div className="mt-8 bg-purple-100 p-6 rounded-2xl">
          <p className="text-lg">
            🚀 <b>Currently learning:</b> Machine Learning, Python libraries,
            SQL, Power BI, and React projects.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;