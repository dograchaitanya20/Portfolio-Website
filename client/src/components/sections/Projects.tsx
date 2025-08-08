import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
	{
		title: "PricePrawl - A price comparison website",
		description:
			"A price comparison website that helps users find the best deals on products from various online retailers.",
		image: "price.jpg", // Updated to use correct public path
		liveUrl: "https://priceprawl.rf.gd",
		githubUrl: "https://github.com/dograchaitanya20/PricePrawl",
	},
	
];

export default function Projects() {
	return (
		<section className="section-padding relative" id="projects">
			<motion.div
				className="max-w-6xl mx-auto"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center glow">
					Featured Projects
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.title}
							{...project}
							delay={index * 0.2}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
}
