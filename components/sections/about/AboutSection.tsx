import { motion } from 'framer-motion';
import { capabilityPlates, manifesto } from '../../portfolioContent';

export const AboutSection = () => {
    return (
        <section id="about" className="bg-[#f7f6f1] px-4 py-24 text-[#111111] md:px-8 lg:px-10">
            <div className="mx-auto grid w-[min(1480px,100%)] grid-cols-1 gap-8 border-t border-[#111111]/20 pt-10 md:grid-cols-12 md:gap-5">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55 }}
                    className="font-mono-ui text-xs uppercase leading-tight text-[#111111]/60 md:col-span-2"
                >
                    002 / Manifesto
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                    className="md:col-span-6"
                >
                    <h2 className="m-0 max-w-4xl text-[clamp(42px,6.4vw,104px)] font-semibold leading-[0.94] tracking-[-0.06em]">
                        {manifesto.titleCn}
                    </h2>
                    <figure className="mt-10 w-[min(520px,100%)] border border-[#111111]/20 bg-white p-3 shadow-[10px_10px_0_rgba(17,17,17,0.08)]">
                        <img
                            src={manifesto.personalPhoto}
                            alt={`${manifesto.name} portrait`}
                            className="aspect-[4/5] w-full rounded-[18px] object-cover grayscale-[12%] saturate-[0.92]"
                        />
                        <figcaption className="mt-3 flex justify-between font-mono-ui text-[10px] uppercase leading-tight text-[#111111]/50">
                            <span>{manifesto.name}</span>
                            <span>Personal archive</span>
                        </figcaption>
                    </figure>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: 0.14 }}
                    className="grid gap-3 md:col-span-4"
                >
                    {capabilityPlates.map((item) => (
                        <article
                            key={item.code}
                            className="min-h-[132px] rounded-[22px] border border-[#111111]/20 bg-[#ebe8df] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#111111] hover:bg-[#f7f6f1]"
                        >
                            <div className="font-mono-ui text-xs uppercase text-[#111111]/50">{item.code}</div>
                            <h3 className="mb-3 mt-8 text-2xl font-semibold leading-none tracking-[-0.055em]">
                                {item.title}
                            </h3>
                            <p className="m-0 text-sm leading-[1.55] text-[#111111]/68">{item.body}</p>
                        </article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
