"use client"

import { motion } from "framer-motion"
import { Code, Users, Zap, Award } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Technical Evolution",
      description: "Transitioned from PHP to advanced Node.js frameworks, mastering modern development practices",
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges with innovative solutions and clean code",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experienced in leading development teams and mentoring junior developers",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Committed to delivering high-quality, scalable applications with best practices",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Senior Full Stack Developer</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies. My journey began with PHP
              and has evolved to encompass cutting-edge Node.js frameworks, cloud technologies, and scalable
              architecture design.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With over 5+ years of professional experience, I specialize in building robust, scalable applications using Node.js, NestJS, Laravel, and AWS cloud services. I thrive on solving complex problems and leading development teams to deliver exceptional results.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently serving as a Senior Software Engineer at Matrix Marketers, I continue to push the boundaries of
              what's possible with modern web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <highlight.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
