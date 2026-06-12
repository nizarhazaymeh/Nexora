import { useRef, useState } from "react"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { Solutions } from "@/components/solutions"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

function App() {
  const [showSolutions, setShowSolutions] = useState(false)
  const solutionsRef = useRef<HTMLElement>(null)

  const handleDiscover = () => {
    setShowSolutions(true)
    // Wait for the section to mount, then smooth-scroll to it.
    requestAnimationFrame(() => {
      solutionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <div className="relative min-h-screen w-full">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-one" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-two" aria-hidden="true" />

      <BackgroundPaths
        title="Nexora Solutions"
        ctaLabel={showSolutions ? "View Our Solutions" : "Discover Our Solutions"}
        onDiscover={handleDiscover}
      />

      {showSolutions && (
        <>
          <Solutions ref={solutionsRef} />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  )
}

export default App
