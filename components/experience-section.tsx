"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Matrix Marketers",
      period: "Nov 2023 – Present",
      location: "Mohali, India",
      description:
        "Leading development of cloud-native applications using Node.js, NestJS, and AWS services. Architecting scalable solutions and mentoring junior developers.",
      achievements: [
        "Led development of CloudFence security automation platform",
        "Implemented 15+ AWS services integration",
        "Reduced deployment time by 60% through CI/CD optimization",
        "Handeled a multi tenant complex architechture",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Software Engineer",
      company: "Webroot Technologies",
      period: "Feb 2020 – Nov 2023",
      location: "Chandigarh, India",
      description:
        "Developed and maintained multiple web applications using Laravel, React, and modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Built Web4Realty managing 4,000+ properties",
        "Developed MachineSpotter with advanced search capabilities",
        "Improved application performance by 40%",
        "Transitioned from PHP to Node.js ecosystem",
      ],
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-20 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} hidden md:block`}
                />

                <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-400 font-medium mb-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="text-gray-300 flex items-start gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
