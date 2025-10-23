import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-liniear-to-br from-orange-50 to-white relative overflow-hidden"
    >
      {/* background soft blur circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-20 -z-10"></div>

      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
          Get in Touch
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Feel free to reach out if you'd like to collaborate or just say hi 👋
        </p>

        <motion.form
          action="https://formspree.io/f/meorbang"
          method="POST"
          className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="Your name..."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="Your email..."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="Write your message..."
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-orange-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* social icons */}
        <motion.div
          className="flex justify-center mt-10 space-x-6 text-2xl text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:khidhirziyan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/khidhir-ziyan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/khidhirz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/khidhir-ziyan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram />
          </a>

        </motion.div>
      </motion.div>
    </section>
  );
}
