import { motion } from "framer-motion";
import { experiences } from "../data/experienceData.jsx";

// 🌿 VARIASI ANIMASI LEMBUT (fade-in)
const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#FFF7ED] text-[#1F2937] flex flex-col items-center px-6"
    >
      {/* Section title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My <span className="text-[#F97316]">Professional</span> Journey
      </motion.h2>

      {/* Timeline container */}
      <div className="relative max-w-4xl w-full">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#FDBA74] transform -translate-x-1/2 hidden md:block"></div>
        {/* Mobile timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#FDBA74] md:hidden"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="relative flex md:items-center"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 w-6 h-6 rounded-full bg-[#F97316] border-4 border-[#FFF7ED] z-10 shadow-lg shadow-[#FDBA74]/50 ${
                    isLeft
                      ? "md:left-1/2 md:translate-x-[calc(-50% - 2px)]"
                      : "md:left-1/2 md:translate-x-[calc(50% + 2px)]"
                  }`}
                ></div>

                {/* Experience card */}
                <motion.div
                  className={`bg-white rounded-xl p-6 shadow-xl border border-gray-100/80 max-w-md w-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ml-10 md:ml-0 ${
                    isLeft
                      ? "md:mr-auto md:ml-6"
                      : "md:ml-auto md:mr-6 md:order-first"
                  }`}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-[#F97316] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#4B5563] font-medium text-base">
                    {exp.company} •{" "}
                    <span className="italic font-normal text-sm text-gray-500">
                      {exp.period}
                    </span>
                  </p>
                  <p className="mt-3 text-[#4B5563] text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
