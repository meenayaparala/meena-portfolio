import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const certifications = [
  {
    name: 'Introduction to Cyber Security',
    issuer: 'Academor',
    date: '2023',
    logo: 'https://img.icons8.com/ios-filled/100/shield.png',
    link: 'https://drive.google.com/file/d/1Lhc7oYDTY2GxOUmX0LYo9sPoEnHmrp2z/view?usp=sharing',
  },
  {
    name: 'Vulnerability Assessment and Penetration Testing',
    issuer: 'Supraja Technologies',
    date: '2024',
    logo: 'https://img.icons8.com/ios-filled/100/bug.png',
    link: 'https://drive.google.com/file/d/1KHptHZfdkXbe7M1y1MkkiNgfMIYIrPE0/view?usp=sharing',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'AWS',
    date: '2025',
    logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
    link: 'https://drive.google.com/file/d/14j1il2zRp9Q2hKV_CQ0qZphzZe7PuSge/view?usp=sharing',
  },
  {
    name: 'Introduction to Cyber Security',
    issuer: 'CISCO',
    date: '2024',
    logo: 'https://logowik.com/content/uploads/images/cisco-systems9760.jpg',
    link: 'https://drive.google.com/file/d/1XxD0njKeUHlWtCCVCjrx0ZRUVM9uYsgN/view?usp=sharing',
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-800" id="certifications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl group"
            >
              {/* Shining Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="p-6 relative z-10">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {cert.name}
                </h3>
                <div className="text-center">
                  <p className="text-cyan-500">{cert.issuer}</p>
                  <p className="text-gray-400">{cert.date}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    View Certificate
                  </a>
                )}
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500 rounded-lg transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}