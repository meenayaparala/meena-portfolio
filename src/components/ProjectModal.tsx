import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-gray-300 space-y-4 whitespace-pre-line">
                {project.longDescription}
              </div>

              <div className="flex gap-4 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors inline-flex items-center gap-2"
                  >
                    View on GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}