'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const roles = [
    'AI Developer',
    'Full-Stack Developer',
    'AI & LLM Enthusiast',
    'Agentic AI Explorer',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/project-image.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950/95"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl shadow-emerald-500/50 ring-4 ring-emerald-400/20">
              <Image
                src="/project-image.png"
                alt="Umer Shahzaib"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Umer Shahzaib
          </motion.h1>

          <motion.div
            className="mb-8 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {roles.map((role, index) => (
              <motion.p
                key={role}
                className="text-xl md:text-2xl text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {role}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Building intelligent solutions with AI, LLMs, and modern web technologies.
            Turning ideas into practical digital products.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-emerald-400 text-emerald-300 rounded-lg font-semibold hover:bg-emerald-400/10 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
