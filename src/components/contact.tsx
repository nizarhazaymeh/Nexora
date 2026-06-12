import { forwardRef, useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

const AJAX_ENDPOINT = "https://formsubmit.co/ajax/nizar.hazaymeh@gmail.com"

type Status = "idle" | "sending" | "success" | "error"

export const Contact = forwardRef<HTMLElement>((_, ref) => {
    const [status, setStatus] = useState<Status>("idle")

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget

        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }

        setStatus("sending")
        try {
            const response = await fetch(AJAX_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(form),
            })
            if (!response.ok) throw new Error("Failed to submit the form.")
            setStatus("success")
            form.reset()
        } catch {
            setStatus("error")
        }
    }

    const inputClasses =
        "w-full rounded-xl border border-[rgba(236,246,255,0.2)] bg-[rgba(4,21,31,0.8)] " +
        "px-3.5 py-2.5 text-[#ecf6ff] placeholder:text-[#5f7d8e] outline-none transition " +
        "focus:border-[#35c0ff] focus:ring-2 focus:ring-[#35c0ff]/40"

    return (
        <section
            ref={ref}
            id="contact"
            className="relative z-10 w-full pb-32 px-4 md:px-6"
        >
            <div className="mx-auto grid w-[min(1120px,92vw)] items-start gap-10 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="uppercase tracking-[0.15em] text-xs font-semibold text-[#35c0ff] mb-3">
                        Get In Touch
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Let's Build Your Next Advantage
                    </h2>
                    <p className="text-[#a8c5d8] max-w-xl mb-8">
                        Share your goals and contact details. We'll reach out to
                        discuss your project in IT, AI, cyber security, audit,
                        marketing, or consulting.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-[#a8c5d8]">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2ee6a6]/15 text-[#2ee6a6] ring-1 ring-[rgba(46,230,166,0.35)]">
                                <Mail className="h-5 w-5" />
                            </span>
                            <span>Send us your details and we'll reply by email</span>
                        </li>
                        <li className="flex items-center gap-3 text-[#a8c5d8]">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2ee6a6]/15 text-[#2ee6a6] ring-1 ring-[rgba(46,230,166,0.35)]">
                                <Phone className="h-5 w-5" />
                            </span>
                            <span>Available 24/7 for project inquiries</span>
                        </li>
                        <li className="flex items-center gap-3 text-[#a8c5d8]">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2ee6a6]/15 text-[#2ee6a6] ring-1 ring-[rgba(46,230,166,0.35)]">
                                <MapPin className="h-5 w-5" />
                            </span>
                            <span>Remote-first, serving clients worldwide</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    onSubmit={handleSubmit}
                    className="grid gap-4 rounded-2xl border border-[rgba(90,190,230,0.3)] bg-[rgba(10,35,49,0.75)] p-6 shadow-[0_20px_45px_rgba(0,6,10,0.45)] backdrop-blur-md sm:p-8"
                >
                    {/* FormSubmit configuration */}
                    <input
                        type="hidden"
                        name="_subject"
                        value="New Nexora website contact request"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="text"
                        name="_honey"
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                    />

                    <div className="grid gap-1.5">
                        <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            required
                            className={inputClasses}
                        />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-1.5">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@company.com"
                                required
                                className={inputClasses}
                            />
                        </div>
                        <div className="grid gap-1.5">
                            <label htmlFor="phone" className="text-sm font-medium">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+1 234 567 890"
                                required
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="grid gap-1.5">
                        <label htmlFor="service" className="text-sm font-medium">
                            Service Needed
                        </label>
                        <input
                            id="service"
                            name="service"
                            type="text"
                            placeholder="IT / AI / Cyber Security / Audit / Marketing"
                            className={inputClasses}
                        />
                    </div>

                    <div className="grid gap-1.5">
                        <label htmlFor="message" className="text-sm font-medium">
                            Project Details
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Tell us about your goals"
                            className={inputClasses}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#29d9a0] to-[#20a7e3] px-5 py-3 font-bold text-[#04151f] transition hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(46,230,166,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {status === "sending" ? "Sending..." : "Send Request"}
                    </button>

                    {status === "success" && (
                        <p className="min-h-[1.2rem] text-sm text-[#2ee6a6]">
                            Thank you. Your request was sent successfully.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="min-h-[1.2rem] text-sm text-[#ff8595]">
                            Submission failed. Please try again in a moment.
                        </p>
                    )}
                </motion.form>
            </div>
        </section>
    )
})

Contact.displayName = "Contact"
