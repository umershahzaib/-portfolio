'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { name: 'GitHub', icon: '📦', href: 'https://github.com/umershahzaib', color: 'from-slate-500 via-slate-600 to-slate-700' },
    { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/umer-shahzaib-86b0b5418/', color: 'from-emerald-400 via-green-500 to-teal-600' },
    { name: 'Email', icon: '📧', href: 'mailto:umershahjpi18@gmail.com', color: 'from-green-400 via-emerald-500 to-teal-600' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${link.color} text-white rounded-lg font-semibold shadow-lg`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-slate-700 pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-500">
            © 2024 Umer Shahzaib. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
