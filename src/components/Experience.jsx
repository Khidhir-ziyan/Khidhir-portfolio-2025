import { motion } from "framer-motion";
import { experiences } from "../data/experienceData.jsx";

// 🎨 DEFINISI ANIMASI FRAMER MOTION
const cardVariants = (isLeft) => ({
  initial: { opacity: 0, x: isLeft ? -100 : 100 }, // Dimulai dari kiri/kanan
  animate: { opacity: 1, x: 0 },                  // Bergerak ke posisi 0
});

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
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="text-[#F97316]">Professional</span> Journey
      </motion.h2>

      {/* Timeline container */}
      <div className="relative max-w-4xl w-full">

        <div className="absolute left-4 top-0 bottom-0 w-4px bg-[#FDBA74] md:left-1/2 md:-translate-x-1/2 rounded-full"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isLeft = isEven; // Kartu kiri untuk index genap

            return (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
                // Menggunakan variants untuk animasi slide
                variants={cardVariants(isLeft)}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }} // Transisi yang lebih halus
                viewport={{ once: true, amount: 0.4 }} // Muncul saat 40% kartu terlihat
              >
                {/* Dot (Lebih besar, warna solid, shadow lebih baik) */}
                <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#F97316] border-4 border-[#FFF7ED] z-10 shadow-lg shadow-[#FDBA74]/50"></div>

                {/* Card (Lebih tebal, shadow terangkat, hover effect) */}
                <motion.div
                  className={`bg-white rounded-xl p-6 shadow-xl border border-gray-100/80 max-w-md w-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                    isLeft ? "md:mr-auto md:ml-12" : "md:ml-auto md:mr-12" // Penyesuaian margin
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-[#F97316] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#4B5563] font-medium text-base">
                    {exp.company} • <span className="italic font-normal text-sm text-gray-500">{exp.period}</span>
                  </p>
                  <p className="mt-3 text-[#4B5563] text-sm">{exp.description}</p>
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
