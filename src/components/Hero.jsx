const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-darkSub">
              Hi, I'm{' '}
              <span className="my-text-gradient">                           
    Md Alamin        
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-sec">
              A Passionate Web Developer
            </p>
            <p className="text-darkSub mb-8 max-w-lg mx-auto md:mx-0">
              I build beautiful, responsive, and user-friendly web applications with modern technologies.
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              <a
                href="#contact"
                className="text-white px-6 py-3 rounded-lg transition-colors font-medium block my-bg-gradient border-2 shadow"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="my-border-gradient  rounded-lg transition-colors font-medium"
              >
              <p className="px-6 py-3 text-darkSub">
                View Project
                </p>
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r my-bg-gradient rounded-full flex border-2 shadow items-center justify-center">
              <span className="text-6xl">
              <img
              className="w-20 opacity-8"
              src="/showcase.svg" alt="Showcase" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;