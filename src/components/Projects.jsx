import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/projectsData.jsx";


export default function Projects() {

  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-20 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-16">
        {/* TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-[#FB923C]">Projects</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#FFFAF5] rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-orange-50"
            >
              {/* IMAGE */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">

                <div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

                  {/* TECH ICONS */}
                  <div className="flex flex-wrap gap-3 mt-3">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-[#FB923C]/10 px-3 py-1 rounded-full text-xs font-medium text-[#1F2937]"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={project.demo}
                    className="flex items-center text-sm font-medium text-[#FB923C] hover:underline"
                  >
                    Live Demo <FaExternalLinkAlt className="ml-1" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-[#FB923C] transition"
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
