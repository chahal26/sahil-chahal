import { NextResponse } from "next/server"
import { resumeData } from "@/lib/resume-generator"

export async function GET() {
  try {
    // Return the resume data as JSON for client-side PDF generation
    return NextResponse.json(resumeData)
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
