const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with cart, payments, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/codeIslah.png",
      demo: "https://codeislah.netlify.app/",
      code: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      tech: ["Vue.js", "Express", "Socket.io", "Tailwind"],
      image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Project+2",
      demo: "#",
      code: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Project+3",
      demo: "#",
      code: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 my-text-gradient">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-70 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-sec">{project.title}</h3>
                <p className="text-darkSub mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demo} className="text-purple-600 hover:text-purple-700 font-medium">
                    Live Demo →
                  </a>
                  <a href={project.code} className="text-gray-600 hover:text-gray-700 font-medium">
                    Source Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;