import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const badges = [
  {
    name: "TryHackMe Profile Badge",
    description: "View my Try hack me profile from here",
    image: "https://tryhackme-badges.s3.amazonaws.com/meenayaparala.png",
    link: "https://tryhackme.com/p/meenayaparala",
    date: "2025",
  },
  {
    name: "Introduction to Cyber Security",
    description: "View my Introduction to Cyber Security certificate from here",
    image: "https://logowik.com/content/uploads/images/cisco-systems9760.jpg",
    link: "https://drive.google.com/file/d/1XxD0njKeUHlWtCCVCjrx0ZRUVM9uYsgN/view?usp=sharing",
    date: "2024",
  },
  {
    name: "Webbed Badge",
    description: "TryHackMe Webbed badge earned for completing web challenges.",
    image: "https://assets.tryhackme.com/img/badges/webbed.svg",
    link: "https://assets.tryhackme.com/room-badges/f7b15c79b82bdd0dfe1d12596f0571f0.png", // Update this link to your badge page if needed
    date: "2025",
  },
  {
    name: "How the Web Works",
    description: "TryHackMe badge for completing the How the Web Works room.",
    image: "https://assets.tryhackme.com/img/badges/howthewebworks.svg",
    link: "https://assets.tryhackme.com/room-badges/137860006731b929e237f47b2ecee464.png", // Use the same or your actual badge PNG link",
    date: "2025",
  },
  // Add more badges here in the future
];

export default function Badges() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-800" id="badges">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Badges
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl group"
            >
              {/* Shining Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="p-6 relative z-10">
                <img
                  src={badge.image}
                  alt={badge.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {badge.name}
                </h3>
                <div className="text-center">
                  {badge.date && (
                    <p className="text-gray-400">{badge.date}</p>
                  )}
                </div>
                {badge.link && (
                  <a
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    View Badge
                  </a>
                )}
                {badge.description && (
                  <p className="text-gray-300 text-center mt-2">
                    {badge.description}
                  </p>
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