const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 my-text-gradient">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="./dp.jpg"
              alt="About me illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-sec">
              I'm a Developer passionate about creating amazing digital experiences
            </h3>
            <p className="text-darkSub mb-4 leading-relaxed">
              I’m a self-taught full-stack developer specializing in the MERN stack. I focus on building real-world applications that solve business problems and deliver smooth user experiences.
            </p>
            <p className="text-darkSub mb-6 leading-relaxed">
              I enjoy working on scalable systems, improving performance, and turning ideas into production-ready products.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold"> Email</p>
                <p className="text-gray-600">alaminkhan284@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">📍 Location</p>
                <p className="text-gray-600">Chuadanga, Bangladesh</p>
              </div>
              <div>
                <p className="font-semibold">🎂 Birthday</p>
                <p className="text-gray-600">January 5, 1997</p>
              </div>
              <div>
                <p className="font-semibold">💼 Freelance</p>
                <p className="text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;