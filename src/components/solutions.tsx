import { forwardRef } from "react"
import { motion } from "framer-motion"
import { SERVICES } from "@/data/services"
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

export const Solutions = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section
            ref={ref}
            id="solutions"
            className="relative z-10 w-full py-24 px-4 md:px-6"
        >
            <div className="mx-auto w-[min(1120px,92vw)]">
                {/* Slim title bar — stays pinned while cards scroll behind it */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="sticky top-0 z-20 w-full bg-gradient-to-b from-[#04141f]
                    via-[#04141f]/85 to-transparent pb-10 pt-5 text-center"
                >
                    <p className="uppercase tracking-[0.15em] text-xs font-semibold text-[#35c0ff] mb-2">
                        What We Provide
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                        Solutions We <span className="text-[#2ee6a6]">Deliver</span>
                    </h2>

                    {/* Animated accent line */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "8rem", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative mx-auto mt-4 h-[3px] overflow-hidden rounded-full
                        bg-gradient-to-r from-[#2ee6a6] to-[#35c0ff]"
                    >
                        <motion.span
                            aria-hidden="true"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{
                                duration: 1.6,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                            className="absolute inset-y-0 left-0 w-1/2
                            bg-gradient-to-r from-transparent via-white/80 to-transparent"
                        />
                    </motion.div>

                    <p className="mx-auto mt-4 max-w-prose text-sm text-[#a8c5d8]">
                        Scroll through everything we deliver. Each service stacks into
                        view so you can explore our full capability set, end to end.
                    </p>
                </motion.div>

                {/* Stacking cards (full-width / horizontal) */}
                <ContainerScroll className="mx-auto w-full space-y-8 pb-24">
                        {SERVICES.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <CardSticky
                                    key={service.id}
                                    index={index + 4}
                                    incrementY={64}
                                    incrementZ={5}
                                    className="rounded-2xl border border-[rgba(90,190,230,0.3)]
                                    bg-[rgba(10,35,49,0.85)] p-6 sm:p-8
                                    shadow-[0_20px_45px_rgba(0,6,10,0.45)] backdrop-blur-md"
                                >
                                    <div className="flex items-start gap-4">
                                        <span
                                            className="inline-flex h-12 w-12 shrink-0 items-center justify-center
                                            rounded-xl bg-gradient-to-br from-[#2ee6a6]/20 to-[#35c0ff]/20
                                            text-[#2ee6a6] ring-1 ring-[rgba(46,230,166,0.35)]"
                                        >
                                            <Icon className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-baseline justify-between gap-4">
                                                <h3 className="font-display text-xl sm:text-2xl font-bold">
                                                    {service.title}
                                                </h3>
                                                <span className="text-xl font-bold text-[#2ee6a6]">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm leading-relaxed text-[#a8c5d8]">
                                                {service.summary}
                                            </p>
                                        </div>
                                    </div>

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
                                                    <span>
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
                                </CardSticky>
                            )
                        })}
                </ContainerScroll>
            </div>
        </section>
    )
})

Solutions.displayName = "Solutions"
