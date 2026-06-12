import { forwardRef, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SERVICES } from "@/data/services"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export const Solutions = forwardRef<HTMLElement>((_, ref) => {
    const [openId, setOpenId] = useState<string | null>(null)
    const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

    const toggle = (id: string) => {
        setOpenId((prev) => {
            const next = prev === id ? null : id
            if (next) {
                // Wait for the detail panel to start expanding, then bring the
                // opened card (and its details) into view.
                requestAnimationFrame(() => {
                    cardRefs.current[id]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    })
                })
            }
            return next
        })
    }

    return (
        <section
            ref={ref}
            id="solutions"
            className="relative z-10 w-full py-24 px-4 md:px-6"
        >
            <div className="mx-auto w-[min(1120px,92vw)]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="uppercase tracking-[0.15em] text-xs font-semibold text-[#35c0ff] mb-3">
                        What We Provide
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Solutions We Deliver
                    </h2>
                    <p className="text-[#a8c5d8] max-w-2xl mx-auto">
                        Select any service to see exactly what we deliver in detail.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {SERVICES.map((service) => {
                        const Icon = service.icon
                        const isOpen = openId === service.id
                        return (
                            <motion.div
                                key={service.id}
                                ref={(el) => {
                                    cardRefs.current[service.id] = el
                                }}
                                variants={item}
                                layout
                                className={`group scroll-mt-6 rounded-2xl border bg-[rgba(10,35,49,0.75)] p-6
                                shadow-[0_20px_45px_rgba(0,6,10,0.45)] backdrop-blur-md transition-colors
                                ${
                                    isOpen
                                        ? "border-[rgba(46,230,166,0.55)] shadow-[0_14px_32px_rgba(46,230,166,0.2)] sm:col-span-2 lg:col-span-3"
                                        : "border-[rgba(90,190,230,0.3)] hover:border-[rgba(46,230,166,0.55)]"
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(service.id)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-start gap-4 text-left focus:outline-none
                                    focus-visible:ring-2 focus-visible:ring-[#35c0ff] rounded-xl"
                                >
                                    <span
                                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center
                                        rounded-xl bg-gradient-to-br from-[#2ee6a6]/20 to-[#35c0ff]/20
                                        text-[#2ee6a6] ring-1 ring-[rgba(46,230,166,0.35)]
                                        transition-colors group-hover:text-[#35c0ff]"
                                    >
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <span className="flex-1">
                                        <span className="font-display block text-lg font-bold">
                                            {service.title}
                                        </span>
                                        <span className="mt-1 block text-sm leading-relaxed text-[#a8c5d8]">
                                            {service.summary}
                                        </span>
                                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.06em] text-[#2ee6a6]">
                                            {isOpen ? "Hide details" : "What we provide"}
                                            <ChevronDown
                                                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                                                    isOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </span>
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="detail"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-5 border-t border-[rgba(90,190,230,0.25)] pt-5">
                                                <p className="mb-4 text-sm italic text-[#a8c5d8]">
                                                    {service.tagline}
                                                </p>
                                                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
                                                    {service.details.map((d, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex gap-2.5 text-sm leading-relaxed"
                                                        >
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2ee6a6]" />
                                                            <span className="text-[#ecf6ff]">
                                                                {d.label && (
                                                                    <span className="font-semibold text-[#ecf6ff]">
                                                                        {d.label}:{" "}
                                                                    </span>
                                                                )}
                                                                <span className="text-[#a8c5d8]">
                                                                    {d.text}
                                                                </span>
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
})

Solutions.displayName = "Solutions"
