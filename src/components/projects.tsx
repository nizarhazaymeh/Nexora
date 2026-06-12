import { motion } from "framer-motion"
import { PROJECTS } from "@/data/services"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Projects() {
    return (
        <section id="projects" className="relative z-10 w-full pb-28 px-4 md:px-6">
            <div className="mx-auto w-[min(1120px,92vw)]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="uppercase tracking-[0.15em] text-xs font-semibold text-[#35c0ff] mb-3">
                        Proven Results
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Projects We've Delivered
                    </h2>
                    <p className="text-[#a8c5d8] max-w-2xl mx-auto">
                        A selection of past engagements and the measurable outcomes
                        we achieved for our clients.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    {PROJECTS.map((project) => (
                        <motion.article
                            key={project.title}
                            variants={item}
                            className="flex flex-col rounded-2xl border border-[rgba(90,190,230,0.3)]
                            bg-[rgba(10,35,49,0.75)] p-6 shadow-[0_20px_45px_rgba(0,6,10,0.45)]
                            backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5
                            hover:border-[rgba(46,230,166,0.55)] hover:shadow-[0_14px_32px_rgba(46,230,166,0.2)]"
                        >
                            <div className="flex items-baseline gap-2">
                                <span className="font-display bg-gradient-to-r from-[#2ee6a6] to-[#35c0ff] bg-clip-text text-4xl font-extrabold text-transparent">
                                    {project.metric}
                                </span>
                                <span className="text-xs uppercase tracking-[0.08em] text-[#a8c5d8]">
                                    {project.metricLabel}
                                </span>
                            </div>
                            <h3 className="font-display mt-4 text-lg font-bold">
                                {project.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-[#a8c5d8]">
                                {project.description}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
