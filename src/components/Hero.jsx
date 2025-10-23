// src/components/Hero.jsx
import { motion } from "framer-motion";
import profilePic from "../assets/khidhir.jpg"; // ganti path kalau perlu

export default function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemLeft = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemRight = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="bg-[#FFF7ED] text-[#1F2937] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* grid: 1 col mobile, 2 col desktop */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT : text */}
          <motion.div variants={itemLeft} className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m <span className="text-[#FB923C]">Khidhir</span> 👋
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#4B5563] max-w-xl">
              I’m a <span className="text-[#FB923C] font-semibold">Junior Frontend Developer</span> and <span className="text-[#FB923C] font-semibold">UI/UX Designer</span> focused on
              building clean, accessible, and performant web experiences using React, Tailwind and Framer Motion.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
              <motion.a
                variants={itemLeft}
                href="#projects"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-[#FB923C] text-white font-medium shadow hover:bg-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#FB923C]/40"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                role="button"
                aria-label="View my projects"
              >
                View My Work
              </motion.a>

              <motion.a
                variants={itemLeft}
                href="#contact"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-[#FB923C]/30 text-[#1F2937] bg-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Contact me"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT : image */}
          <motion.div
            variants={itemRight}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px]">


              {/* image box with rounded corner + shadow */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#FB923C]/8">
                <img
                  src={profilePic}
                  alt="Khidhir profile"
                  className="w-full h-full object-cover aspect-4/4"
                />
              </div>

              {/* soft gradient overlay pada bagian kiri foto untuk transisi */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 rounded-l-2xl"
                   style={{ background: "linear-gradient(90deg, rgba(255,247,237,0.85) 0%, rgba(255,247,237,0.0) 60%)" }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
