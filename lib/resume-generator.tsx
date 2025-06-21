"use client"

import { jsPDF } from "jspdf"

export interface ResumeData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    location: string
  }
  summary: string
  experience: Array<{
    title: string
    company: string
    period: string
    location: string
    achievements: string[]
  }>
  education: {
    degree: string
    institution: string
    location: string
  }
  skills: {
    backend: string[]
    frontend: string[]
    databases: string[]
    cloud: string[]
    tools: string[]
    other: string[]
  }
  projects: Array<{
    name: string
    description: string
    technologies: string
    highlights: string[]
  }>
  accomplishments: string[]
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "SAHIL CHAHAL",
    title: "Full Stack Web Developer",
    email: "chahalsahil2608@gmail.com",
    phone: "7347455775",
    location: "Chandigarh, India",
  },
  summary:
    "Full Stack Web Developer with expertise in building scalable and efficient applications using modern technologies. Proficient in backend development with Node.js, NestJS, and PHP frameworks like Laravel and CodeIgniter, as well as frontend technologies including React.js, Next.js, and Angular. Skilled in managing complex databases (PostgreSQL, MySQL, Redis, Elasticsearch) and leveraging cloud services (AWS) to deliver robust solutions. Experienced in writing test cases, pipeline deployments, and leading teams to ensure high-quality project outcomes. Passionate about solving complex problems and continuously advancing technical knowledge to stay at the forefront of innovation.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Matrix Marketers",
      period: "November 2023 - Present",
      location: "Mohali, India",
      achievements: [
        "Developed scalable solutions using NestJS, Next.js, and advanced cloud services",
        "Managed complex databases with massive datasets and automated pipeline deployments",
        "Led teams, ensuring quality through test cases and efficient project delivery",
        "Collaborated with clients to deliver tailored, high-impact solutions",
      ],
    },
    {
      title: "Software Engineer",
      company: "Webroot Technologies",
      period: "February 2020 - November 2023",
      location: "Chandigarh, India",
      achievements: [
        "Developed PHP CRMs, PHP frameworks, Node.js apps, and dynamic UIs with React.js and Angular",
        "Managed servers, deployments, and led a team to deliver quality solutions",
        "Worked closely with clients to ensure successful project outcomes",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Science - Computer Science",
    institution: "Panjab University",
    location: "Chandigarh",
  },
  skills: {
    backend: ["Node.js", "NestJS", "PHP", "Laravel", "CodeIgniter", "Zend", "WordPress"],
    frontend: ["React.js", "Next.js", "Angular", "Livewire"],
    databases: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "FireStore"],
    cloud: [
      "AWS Lambda",
      "Cognito",
      "S3",
      "DynamoDB",
      "EC2",
      "CloudFormation",
      "CloudFront",
      "EventBridge",
      "OpenSearch",
      "Secret Manager",
    ],
    tools: ["Prisma", "Sequelize", "TypeORM", "Jest", "PHPUnit", "Docker", "CI/CD pipelines", "FilamentPHP"],
    other: ["Linux (Ubuntu)", "Git", "GitHub", "Bitbucket", "Team Leadership", "Project Management"],
  },
  projects: [
    {
      name: "CLOUDFENCE",
      description:
        "CloudFence is a unified platform designed for continuous monitoring of cloud workloads, network communications, and identity activities. It provides security and DevOps teams with real-time insights to drive action, ensuring the swift detection and prevention of potential threats. The platform enables teams to view baseline behavior of cloud assets, identify and remove unused access, and detect suspicious activities before they escalate into attacks.",
      technologies:
        "Next.js, NestJS, AWS Lambda, Secret Manager, OpenSearch, Cognito, CloudFormation, CloudFront, EventBridge",
      highlights: [
        "Built using Next.js and NestJS, leveraging over 15 AWS services",
        "Emphasizes scalability, security, and automation",
        "Enhances cloud infrastructure protection",
      ],
    },
    {
      name: "VIALOOP",
      description:
        "Vialoop is a robust platform designed to manage vendors and jobs for multiple clients, featuring complex business logic for tax calculations. The application handles a massive database with millions of records, ensuring smooth data processing and scalability.",
      technologies: "NestJS, Nuxt.js, Jest",
      highlights: [
        "Built using NestJS and Nuxt.js, optimized for performance and reliability",
        "Incorporates comprehensive test coverage with Jest",
        "Intricate tax calculation logic and large-scale database management",
      ],
    },
    {
      name: "Web4Reality",
      description:
        "Web4Reality is a comprehensive property management system that connects to over 4,000 websites, providing clients with a custom CRM to efficiently manage property listings. The platform integrates more than 15 databases and handles complex business logic across various modules.",
      technologies: "Laravel-Lumen, Laravel, Zend, React.js",
      highlights: [
        "Connects to over 4,000 websites with custom CRM functionality",
        "Integrates more than 15 databases",
        "Scalable and flexible solution for property managers",
      ],
    },
    {
      name: "MachineSpotter",
      description:
        "MachineSpotter is a machine listing platform that aggregates old and new machines across Europe. With the ability to handle millions of records, it provides users with an intuitive interface to browse and search for machines efficiently.",
      technologies: "Laravel, Livewire, FilamentPHP",
      highlights: [
        "Aggregates machines across Europe with millions of records",
        "Optimized for high-performance data handling",
        "Dynamic user interactions with smooth navigation",
      ],
    },
  ],
  accomplishments: [
    "Served as an NCC cadet, demonstrating discipline and leadership skills",
    "Competed as a Judo player",
    "Represented Chandigarh in shooting competition",
  ],
}

export function generateResumePDF(): void {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.width
  const pageHeight = doc.internal.pageSize.height
  const margin = 20
  let yPosition = margin

  // Helper function to add text with word wrapping
  const addText = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    fontSize = 10,
    fontStyle = "normal",
  ): number => {
    doc.setFontSize(fontSize)
    doc.setFont("helvetica", fontStyle)
    const lines = doc.splitTextToSize(text, maxWidth)
    doc.text(lines, x, y)
    return y + lines.length * (fontSize * 0.4)
  }

  // Check if we need a new page
  const checkNewPage = (requiredSpace: number): void => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }
  }

  // Header - Name
  doc.setFontSize(20)
  doc.setFont("helvetica", "bold")
  doc.text(resumeData.personalInfo.name, pageWidth / 2, yPosition, { align: "center" })
  yPosition += 12

  // Title
  doc.setFontSize(12)
  doc.setFont("helvetica", "normal")
  doc.text(resumeData.personalInfo.title, pageWidth / 2, yPosition, { align: "center" })
  yPosition += 10

  // Contact Info
  doc.setFontSize(10)
  const contactInfo = `${resumeData.personalInfo.phone} | ${resumeData.personalInfo.email} | ${resumeData.personalInfo.location}`
  doc.text(contactInfo, pageWidth / 2, yPosition, { align: "center" })
  yPosition += 15

  // Summary Section
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("S U M M A R Y", margin, yPosition)
  yPosition += 8

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  yPosition = addText(resumeData.summary, margin, yPosition, pageWidth - 2 * margin, 9)
  yPosition += 12

  // Experience Section
  checkNewPage(40)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("E X P E R I E N C E", margin, yPosition)
  yPosition += 10

  resumeData.experience.forEach((exp) => {
    checkNewPage(30)

    doc.setFontSize(11)
    doc.setFont("helvetica", "bold")
    doc.text(exp.title, margin, yPosition)
    yPosition += 6

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text(`${exp.company} - ${exp.location}`, margin, yPosition)
    yPosition += 5

    doc.setFontSize(9)
    doc.setFont("helvetica", "italic")
    doc.text(exp.period, margin, yPosition)
    yPosition += 8

    doc.setFont("helvetica", "normal")
    exp.achievements.forEach((achievement) => {
      checkNewPage(15)
      yPosition = addText(`• ${achievement}`, margin + 5, yPosition, pageWidth - 2 * margin - 5, 9)
      yPosition += 3
    })
    yPosition += 8
  })

  // Education Section
  checkNewPage(25)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("E D U C A T I O N   &   T R A I N I N G", margin, yPosition)
  yPosition += 10

  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text(resumeData.education.degree, margin, yPosition)
  yPosition += 6

  doc.setFont("helvetica", "normal")
  doc.text(`${resumeData.education.institution}, ${resumeData.education.location}`, margin, yPosition)
  yPosition += 15

  // Skills Section
  checkNewPage(60)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("S K I L L S", margin, yPosition)
  yPosition += 10

  const skillCategories = [
    { name: "Backend Development", skills: resumeData.skills.backend },
    { name: "Frontend Development", skills: resumeData.skills.frontend },
    { name: "Database Management", skills: resumeData.skills.databases },
    { name: "Cloud Services (AWS)", skills: resumeData.skills.cloud },
    { name: "ORMs & Testing", skills: resumeData.skills.tools },
    { name: "Deployment & Systems", skills: resumeData.skills.other },
  ]

  skillCategories.forEach((category) => {
    checkNewPage(15)
    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text(`${category.name}:`, margin, yPosition)
    yPosition += 5

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    yPosition = addText(category.skills.join(", "), margin + 5, yPosition, pageWidth - 2 * margin - 5, 9)
    yPosition += 8
  })

  // Projects Section
  checkNewPage(40)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("P R O J E C T S", margin, yPosition)
  yPosition += 10

  resumeData.projects.forEach((project) => {
    checkNewPage(50)

    doc.setFontSize(11)
    doc.setFont("helvetica", "bold")
    doc.text(project.name, margin, yPosition)
    yPosition += 8

    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    yPosition = addText(project.description, margin, yPosition, pageWidth - 2 * margin, 9)
    yPosition += 5

    doc.setFont("helvetica", "bold")
    doc.text("Technologies:", margin, yPosition)
    yPosition += 4

    doc.setFont("helvetica", "normal")
    yPosition = addText(project.technologies, margin + 5, yPosition, pageWidth - 2 * margin - 5, 9)
    yPosition += 5

    project.highlights.forEach((highlight) => {
      checkNewPage(10)
      yPosition = addText(`• ${highlight}`, margin + 5, yPosition, pageWidth - 2 * margin - 5, 9)
      yPosition += 3
    })
    yPosition += 10
  })

  // Accomplishments Section
  checkNewPage(30)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("A C C O M P L I S H M E N T S", margin, yPosition)
  yPosition += 10

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  resumeData.accomplishments.forEach((accomplishment) => {
    checkNewPage(10)
    yPosition = addText(`• ${accomplishment}`, margin, yPosition, pageWidth - 2 * margin, 9)
    yPosition += 5
  })

  // Technologies Section
  checkNewPage(40)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("T E C H N O L O G I E S", margin, yPosition)
  yPosition += 10

  const techSections = [
    { name: "Backend Development", tech: "Node.js, NestJS, PHP (Laravel, CodeIgniter, Zend, WordPress)" },
    { name: "Frontend Development", tech: "React.js, Next.js, Angular, Livewire" },
    { name: "Databases", tech: "PostgreSQL, MySQL, Redis, Elasticsearch, FireStore" },
    {
      name: "Cloud Services",
      tech: "AWS (Lambda, Cognito, S3, DynamoDB, EC2, CloudFormation, CloudFront, EventBridge, OpenSearch, Secret Manager)",
    },
    { name: "ORMs", tech: "Prisma, Sequelize, TypeORM" },
    { name: "Testing", tech: "Jest, PHPUnit" },
    { name: "Deployment & Systems", tech: "Linux (Ubuntu), AWS" },
    { name: "Version Control", tech: "Git, GitHub, Bitbucket" },
    { name: "Other Tools", tech: "Docker, CI/CD pipelines, FilamentPHP" },
  ]

  techSections.forEach((section) => {
    checkNewPage(15)
    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text(`${section.name}:`, margin, yPosition)
    yPosition += 5

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    yPosition = addText(section.tech, margin + 5, yPosition, pageWidth - 2 * margin - 5, 9)
    yPosition += 8
  })

  // Save the PDF
  doc.save("Sahil_Chahal_Resume.pdf")
}
