"use client"

import { motion } from "framer-motion"
import { Award, Users, Target } from "lucide-react"

export function AccomplishmentsSection() {
  const accomplishments = [
    {
      icon: Users,
      title: "NCC Cadet",
      description: "National Cadet Corps member, demonstrating leadership, discipline, and commitment to service",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Judo Competitor",
      description: "Competitive judo athlete, showcasing dedication, physical fitness, and mental resilience",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Target,
      title: "Shooting Representative",
      description: "Precision shooting representative, highlighting focus, accuracy, and competitive spirit",
      color: "from-blue-500 to-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Accomplishments
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond coding, I've pursued excellence in various fields that have shaped my character and discipline
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {accomplishments.map((accomplishment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${accomplishment.color} p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <accomplishment.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{accomplishment.title}</h3>

                <p className="text-gray-300 leading-relaxed">{accomplishment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
