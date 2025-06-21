"use client"

import { motion } from "framer-motion"
import { Server, Globe, Database, Cloud, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend",
      color: "from-green-400 to-blue-500",
      skills: ["Node.js", "NestJS", "ExpressJs", "PHP", "Laravel"],
    },
    {
      icon: Globe,
      title: "Frontend",
      color: "from-blue-400 to-purple-500",
      skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-purple-400 to-pink-500",
      skills: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "MongoDB", "Firestore"],
    },
    {
      icon: Cloud,
      title: "Cloud & AWS",
      color: "from-orange-400 to-red-500",
      skills: ["AWS Cognito", "Lambda", "CloudFront", "S3", "EC2", "EventBridge", "CloudFormation", "OpenSearch", "Google Firestore", "Google Functions"],
    },
    {
      icon: Wrench,
      title: "Dev Tools",
      color: "from-cyan-400 to-teal-500",
      skills: ["Prisma", "Sequelize", "TypeORM", "Docker", "Git", "Jest", "PHPUnit", "Cypress"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${category.color} text-white font-medium cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
