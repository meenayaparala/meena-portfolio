import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent('Portfolio Contact Form');
    const body = encodeURIComponent(`
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Message: ${formData.get('message')}
    `);
    window.location.href = `mailto:meenayaparala@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="text-gray-300 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Connect With Me</h3>
              <p className="mb-6">
                Feel free to reach out for collaborations or just a friendly chat about cybersecurity!
              </p>
              <div className="space-y-4">
                <a href="mailto:meenayaparala@gmail.com" className="flex items-center gap-3 text-cyan-500 hover:text-cyan-400">
                  <Mail className="w-5 h-5" />
                  meenayaparala@gmail.com
                </a>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/meenakumari-yaparala/" className="text-gray-300 hover:text-cyan-500 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/meenayaparala" className="text-gray-300 hover:text-cyan-500 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}