// src/components/About.jsx
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiCanva,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiNotion,
} from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";

export default function About() {
  const skills = [
    { icon: <SiReact size={38} className="text-sky-500" />, name: "React" },
    { icon: <SiTailwindcss size={38} className="text-cyan-400" />, name: "Tailwind" },
    { icon: <SiJavascript size={38} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiHtml5 size={38} className="text-orange-500" />, name: "HTML" },
    { icon: <SiCss3 size={38} className="text-blue-400" />, name: "CSS" },
    { icon: <SiFigma size={38} className="text-pink-500" />, name: "Figma" },
    { icon: <SiCanva size={38} className="text-sky-400" />, name: "Canva" },
    { icon: <SiNotion size={38} className="text-gray-700" />, name: "Notion" },
  ];

  const educations = [
    {
      year: "2024 - Present",
      title: "Information Systems & Technology",
      place: "Cakrawala University",
      desc: "Learning about software engineering, database management, and system design.",
    },
    {
      year: "2022 - 2024",
      title: "Arabic Language & Islamic Studies",
      place: "Islamic School",
      desc: "Teaching Arabic and Islamic studies while handling online learning programs.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#FFFAF5] py-20 flex flex-col items-center justify-center"
    >
      {/* TITLE & DESCRIPTION */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-[#FB923C]">Me</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I’m a passionate developer who loves creating digital products that combine
          clean design and powerful functionality. I enjoy turning ideas into interactive
          experiences through code and creativity.
        </motion.p>
      </div>

      {/* SKILLS SECTION */}
      <motion.div
        className="max-w-4xl w-full mx-auto mb-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-[#1F2937] mb-8 text-center">
          Skills
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-gray-700 hover:scale-110 transition-transform"
            >
              {skill.icon}
              <span className="text-sm mt-2 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* EDUCATION TIMELINE */}
      <motion.div
        className="max-w-3xl w-full mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h3 className="text-2xl font-semibold text-[#1F2937] mb-8 text-center">
          <FaGraduationCap className="inline mr-2 text-[#FB923C]" />
          Education
        </h3>

        <div className="relative border-l-2 border-[#FB923C]/50 ml-4 pl-6 space-y-10">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute -left-14px top-1 w-4 h-4 bg-[#FB923C] rounded-full border-2 border-white shadow-sm"></div>
              <div className="bg-white rounded-xl shadow-sm p-5 border border-orange-50 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-[#1F2937]">{edu.title}</h4>
                  <p className="text-sm text-[#FB923C] font-medium">{edu.year}</p>
                </div>
                <p className="text-gray-700 font-medium">{edu.place}</p>
                <p className="text-gray-500 text-sm mt-1">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
