"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Medicare Telemedicine App",
      description:
        "Built an AI-powered telemedicine platform to match patient symptoms with specialists using dynamic symptom analysis.Used GeminiAI API for interpreting natural language symptoms and real-time doctor recommendations.",
      image: "https://i.pinimg.com/1200x/02/de/29/02de299d2fa8b1756697f75c32e0e51a.jpg",
      tags: ["React", "JavaScript", "Shadcn"],
      links: {
        demo: "#",
        github: "#",
      },
      category: "Application",
    },
    {
      title: "Ecommerce App",
      description:
        "Developed a full-featured e-commerce marketplace with product listings, dynamic cart and order tracking system, integrated secure Stripe payment flow and Cloudinary for optimized image storage and delivery.",
      image: "https://i.pinimg.com/736x/48/08/89/480889539651e903ac414cc4b5c3c4fc.jpg",
      tags: ["Next.js", "Strapi", "Vercel"],
      links: {
        demo: "#",
        github: "#",
      },
      category: "Application",
    },
    {
      title: "Bloggopedia",
      description:
        "Developed a scalable full-stack blogging platform featuring secure user authentication, complete CRUD operations, and real-time content updates to streamline content creation and enhance user interaction.",
      image: "https://i.pinimg.com/736x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
      tags: ["React", "Express", "MongoDB"],
      links: {
        demo: "#",
        github: "#",
      },
      category: "Extension",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-muted-foreground mb-8"
        >
          $ ls -la ./projects
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-16"
        >
          Selected Projects
        </motion.h2>

        {/* Projects grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project image */}
              <motion.div
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900/50 border border-slate-700">
                  {/* Placeholder for project image */}
                  <Image src={project.image} height={400} width={1000} alt="abc" className="object-fill"/>
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/10 flex items-center justify-center space-x-4"
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-background/90 hover:bg-background"
                      asChild
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-background/90 hover:bg-background text-black"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 fill-black" />
                        Source
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Project content */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-background/50 border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4">
                  <Button asChild>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
