"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Shield, Calculator, Building, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  const projects = [
    {
      icon: Shield,
      title: "CloudFence",
      description:
        "Advanced cloud security automation platform built with Next.js and NestJS, integrating 15+ AWS services for comprehensive security monitoring and compliance.",
      tech: ["Next.js", "NestJS", "AWS Cognito", "Lambda", "S3", "EventBridge", "CloudFormation", "OpenSearch"],
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Real-time security monitoring",
        "Automated compliance checks",
        "Multi-cloud support",
        "Advanced analytics dashboard",
      ],
    },
    {
      icon: Calculator,
      title: "Vialoop",
      description:
        "Comprehensive tax management and vendor/job management system built with NestJS and Nuxt.js, featuring complex tax logic and workflow automation.",
      tech: ["NestJS", "Nuxt.js", "PostgreSQL", "Redis", "TypeScript"],
      gradient: "from-purple-500 to-pink-500",
      features: ["Complex tax calculations", "Vendor management", "Job tracking", "Automated workflows"],
    },
    {
      icon: Building,
      title: "Web4Reality",
      description:
        "Large-scale property management platform managing 4,500+ sites, built with Laravel and React for optimal performance and scalability.",
      tech: ["Laravel", "React", "MySQL", "Redis", "PHP", "Cypress", "PHPUnit"],
      gradient: "from-green-500 to-teal-500",
      features: ["4,500+ property management", "Real-time updates", "Advanced reporting", "Multi-tenant architecture"],
    },
    {
      icon: Search,
      title: "MachineSpotter",
      description:
        "Data-heavy machine listing platform with advanced search and filtering capabilities, built using Laravel and FilamentPHP for efficient data management.",
      tech: ["Laravel", "FilamentPHP", "MySQL", "Elasticsearch", "Vue.js"],
      gradient: "from-orange-500 to-red-500",
      features: ["Advanced search filters", "Machine specifications", "Dealer management", "Real-time inventory"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence across various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} p-2.5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-md bg-gray-700 text-gray-300 border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
