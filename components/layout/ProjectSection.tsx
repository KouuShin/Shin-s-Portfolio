import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectSection = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment integration, and admin dashboard.',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            gradient: 'from-[var(--color-accent-green)] to-[var(--color-accent-blue)]',
        },
        {
            title: 'Design System',
            description: 'A comprehensive design system with 50+ components, built with React and Tailwind CSS. Includes documentation site and Figma integration.',
            tags: ['React', 'Tailwind', 'Figma'],
            gradient: 'from-[var(--color-accent-blue)] to-[var(--color-accent-red)]',
        },
        {
            title: 'Analytics Dashboard',
            description: 'Real-time analytics dashboard with interactive charts and data visualization. Built for performance with optimized rendering.',
            tags: ['TypeScript', 'D3.js', 'WebSocket'],
            gradient: 'from-[var(--color-accent-red)] to-[var(--color-accent-green)]',
        },
    ];

    return (
        <section id="projects" className="py-[var(--space-3xl)]">
            <div className="container mx-auto px-[var(--space-lg)]">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[var(--space-2xl)] gap-[var(--space-md)]">
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-[var(--space-sm)]">
                            Selected Works
                        </h2>
                        <p className="text-xl opacity-70 font-body">Case studies and experiments.</p>
                    </div>

                    <button className="flex items-center gap-2 text-[var(--color-accent-blue)] font-bold hover:text-[var(--color-accent-red)] transition-colors px-6 py-3 border-2 border-[var(--color-text)]/10 rounded-full bg-white hover:shadow-md hover:border-[var(--color-accent-blue)] transition-all duration-300">
                        View Archive
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-[var(--color-text)]/5"
                        >

                            {/* Gradient Top Border */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex items-center justify-center p-8">
                                <div className="w-full h-full bg-white rounded-xl shadow-inner flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} opacity-20`} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-[var(--space-lg)]">
                                <div className="flex items-start justify-between mb-[var(--space-sm)]">
                                    <h3 className="font-heading text-xl font-bold group-hover:text-[var(--color-accent-blue)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <Github className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <p className="opacity-60 text-sm mb-[var(--space-md)] leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono font-medium opacity-60 bg-gray-50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
