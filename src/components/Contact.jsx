import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 my-text-gradient">
          Get In Touch
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="text-gray-600 mb-8">
              I'm currently available for freelance work or full-time positions. 
              Feel free to reach out if you have any questions or just want to say hi!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pr rounded-full flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">alamin.coder284@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pr rounded-full flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+8801714994157</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pr rounded-full flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Chuadanga, Bangladesh.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:red-300 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:red-300 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:red-300 focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg my-bg-gradient border shadow transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;