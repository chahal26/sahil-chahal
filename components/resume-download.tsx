"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeDownload() {
  const handleDownload = () => {
    // Direct download of the static PDF file from public folder
    const link = document.createElement("a")
    link.href = "/Sahil_Chahal_Resume.pdf"
    link.download = "Sahil_Chahal_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Button
        onClick={handleDownload}
        size="lg"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 group"
      >
        <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
        Download Resume
        <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform duration-200" />
      </Button>
    </motion.div>
  )
}
