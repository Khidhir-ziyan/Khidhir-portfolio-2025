import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "../data/certificatesData.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Certificates() {


  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  return (
    <section
      id="certificates"
      className="py-20 bg-[#FFF7ED] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certificates <span className="text-[#FB923C]">& Achievements</span>
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Tombol kiri */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-10 bg-white/80 hover:bg-orange-100 p-3 rounded-full shadow-md transition"
          >
            <ChevronLeft className="w-6 h-6 text-[#FB923C]" />
          </button>

          {/* Card sertifikat */}
          <div className="relative w-full max-w-lg aspect-4/3 overflow-hidden rounded-2xl shadow-lg border border-orange-100 bg-white">
            <AnimatePresence mode="wait">
              <motion.a
                key={current}
                href={certificates[current].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={certificates[current].image}
                  alt={certificates[current].title}
                  className="w-full h-full object-cover"
                />
              </motion.a>
            </AnimatePresence>
          </div>

          {/* Tombol kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-10 bg-white/80 hover:bg-orange-100 p-3 rounded-full shadow-md transition"
          >
            <ChevronRight className="w-6 h-6 text-[#FB923C]" />
          </button>
        </div>

        {/* Caption */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-[#1F2937]">
            {certificates[current].title}
          </h3>
          <p className="text-gray-600">{certificates[current].issuer}</p>
          <p className="text-sm text-[#FB923C] font-medium">
            {certificates[current].year}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
