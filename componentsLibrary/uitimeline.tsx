'use client'

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle2 } from 'lucide-react'

const sections = [
  {
    title: "Research",
    description: `In this crucial first phase, we dive deep into understanding your brand's essence. We'll conduct comprehensive market analysis, study your competitors, and identify your target audience's needs and preferences. This involves:

    1. Brand audit: Evaluating your current brand positioning and identity
    2. Competitor analysis: Identifying strengths and weaknesses in your market
    3. User research: Conducting surveys and interviews with your target audience
    4. Market trends: Analyzing current and future trends in your industry
    
    The insights gained here will form the foundation of our design strategy, ensuring that every decision moving forward is data-driven and aligned with your business goals.`,
  },
  {
    title: "Design",
    description: `Building on our research findings, we enter the creative phase where ideas come to life. Using industry-standard tools like Figma, we'll craft a visual language that resonates with your brand and audience. This phase includes:

    1. Mood boarding: Curating visual inspiration aligned with your brand values
    2. Wireframing: Creating low-fidelity layouts to establish information hierarchy
    3. Visual design: Developing color schemes, typography, and graphical elements
    4. Prototyping: Building interactive mockups for user testing
    5. Iteration: Refining designs based on feedback and usability testing

    We'll work closely with you throughout this process, ensuring that the final design not only looks stunning but also effectively communicates your brand message and meets user needs.`,
  },
  {
    title: "Development",
    description: `With approved designs in hand, we move into the development phase, bringing your vision to life on the web. Our development process focuses on creating a robust, scalable, and user-friendly website. Key steps include:

    1. Frontend development: Translating designs into responsive HTML, CSS, and JavaScript
    2. Backend integration: Setting up databases and server-side logic if required
    3. Content Management System (CMS) implementation: Enabling easy content updates
    4. Performance optimization: Ensuring fast load times and smooth interactions
    5. Cross-browser testing: Guaranteeing consistency across different platforms
    6. Accessibility implementation: Making sure your site is usable by all
    
    Throughout development, we maintain open communication, providing regular updates and opportunities for feedback. The result will be a pixel-perfect, fully functional website that's ready to elevate your online presence.`,
  },
]

export default function ScrollProgressSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div className="min-h-screen bg-black/95 text-white p-8" ref={containerRef}>
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          className="absolute left-[19px] top-8 w-px h-[calc(100%-4rem)] bg-white/20"
          style={{
            scaleY: scrollYProgress,
            backgroundImage: "linear-gradient(to bottom, rgb(34 197 94), rgb(34 197 94))",
            transformOrigin: "top",
            opacity: 0.5
          }}
        />
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            description={section.description}
            index={index}
            progress={scrollYProgress}
            totalSections={sections.length}
          />
        ))}
      </div>
    </div>
  )
}

function Section({
  title,
  description,
  index,
  progress,
  totalSections
}: {
  title: string
  description: string
  index: number
  progress: any
  totalSections: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3, // Lowered threshold for better interaction
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const sectionProgress = useTransform(
    progress,
    [index / totalSections, (index + 1) / totalSections],
    [0, 1]
  )

  return (
    <motion.div
      ref={sectionRef}
      className="grid grid-cols-[40px_1fr] gap-8 min-h-[40vh] items-start relative py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          className="absolute left-0 top-2 size-5 rounded-full bg-white/30"
          style={{
            scale: useTransform(sectionProgress, [0.9, 1], [1, 1.2]),
            backgroundColor: useTransform(sectionProgress, [0.9, 1], ["rgba(255,255,255,0.3)", "rgb(34 197 94)"]),
          }}
        />
        {isVisible && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute left-0 top-2 size-5 flex items-center justify-center"
          >
            <CheckCircle2 
              className="size-7 text-green-500 bg-black rounded-full p-0.5" 
              strokeWidth={3}
            />
          </motion.div>
        )}
      </div>
      <div>
        <motion.h2
          className="text-3xl font-bold mb-4"
          style={{
            color: useTransform(sectionProgress, [0.1, 0.3], ["rgba(255,255,255,0.4)", "#22c55e"]),
          }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="text-white/80 text-sm leading-relaxed space-y-4"
          style={{
            opacity: useTransform(sectionProgress, [0, 0.3], [0.4, 1]),
          }}
        >
          {description.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}