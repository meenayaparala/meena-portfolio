import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60meen"
              alt="Cybersecurity Professional"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300"
          >
            <p className="mb-6">
              As a Computer Science Engineering student specializing in cybersecurity,
              I am passionate about protecting digital assets and creating secure systems.
              With a strong foundation in both theoretical concepts and practical applications,
              I strive to stay ahead of emerging threats and contribute to the field of information security.
            </p>
            <p className="mb-6">
              My expertise includes network security, penetration testing, and secure software development.
              I am constantly learning and adapting to new technologies and security challenges.
            </p>
            <div className="flex gap-4">
              <a
                href="https://drive.google.com/drive/folders/1xSUVUVAT66FgDNYtJCftTf1oJasTNN31?usp=sharing" // Replace with your actual Google Drive link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Download CV
              </a>
              <button className="border border-cyan-500 text-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}