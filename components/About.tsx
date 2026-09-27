'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    'AI-powered web applications',
    'AI agents and intelligent workflows',
    'LLM-based applications',
    'RAG systems',
    'Modern full-stack websites',
    'Developer tools',
  ];

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm an <span className="text-emerald-400 font-semibold">AI-focused full-stack developer</span> who
                enjoys turning ideas into practical, modern digital products. I combine AI, web development,
                automation, and modern UI design to build useful applications.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My expertise spans from building <span className="text-green-400 font-semibold">LLM-based applications</span> and
                <span className="text-teal-400 font-semibold"> RAG systems</span> to creating responsive,
                user-friendly web interfaces with modern frameworks.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about exploring emerging AI technologies and experimenting with new ways
                to create intelligent, efficient solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">What I Build</h3>
              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
