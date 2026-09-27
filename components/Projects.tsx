'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'PromptFlow',
      description: 'AI prompt discovery platform enabling users to explore, share, and optimize prompts for various LLM applications.',
      tags: ['AI', 'LLM', 'Next.js', 'Prompt Engineering'],
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      link: 'https://promptflow-phi.vercel.app/',
    },
    {
      title: 'GameScope',
      description: 'Game discovery and PC compatibility platform helping gamers find titles that match their system specifications.',
      tags: ['React', 'API Integration', 'Gaming', 'Web App'],
      gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
      link: 'https://gamescope-umber.vercel.app/',
    },
    {
      title: 'Career Craft AI',
      description: 'AI-powered resume analysis platform providing intelligent feedback and optimization suggestions for job seekers.',
      tags: ['AI', 'Python', 'RAG', 'Career Tools'],
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      link: 'https://career-craft-ai-3-4oulp03hf-umershahjpi18-5520s-projects.vercel.app/',
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI chatbot powered by advanced language models for natural, context-aware interactions.',
      tags: ['AI', 'LLM', 'Chat Interface', 'Next.js'],
      gradient: 'from-orange-400 via-rose-500 to-red-600',
      link: 'https://ai-chatbot-ruho.vercel.app/chat',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer block group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4 group-hover:h-3 transition-all duration-300`}></div>

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-slate-700/50 text-gray-300 rounded-full border border-slate-600 group-hover:border-slate-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
