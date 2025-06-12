"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const codeContent = `// current stack
const languages = ['C', 'C++', 'JavaScript']

const frontend = ['React', 'Next.js', 'TailwindCSS']

const backend = ['Node.js', 'Express,js', 'Vercel']

const tools = ['Figma', 'Linear', 'Arc']`;

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-muted-foreground mb-8"
        >
          $ cat about.md
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-16"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
              I'm a software engineer currently pursuing a B.Tech in Electrical Engineering at NIT Silchar. I specialize in building full-stack web applications with a focus on clean architecture, responsive design, and long-term scalability. I enjoy bringing ideas to life using technologies like React, Next.js, Tailwind CSS, and Node.js—crafting intuitive user interfaces backed by robust backend systems.
              </p>

              <p>
              Beyond development, I actively engage in competitive programming and hackathons to sharpen my problem-solving skills. I'm also an active contributor to campus tech communities, where I collaborate with development teams and support technical events.
              </p>

             
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-100 dark:bg-slate-800/50 px-4 py-3 border-b border-gray-200 dark:border-slate-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-sm text-slate-400 font-mono">
                      stack.js
                    </span>
                  </div>
                </div>

                <div className="p-6 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    {codeContent.split("\n").map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex"
                      >
                        <span className="text-slate-500 w-6 text-right mr-4 select-none">
                          {index + 1}
                        </span>
                        <span
                          className={`
                            ${line.includes("//") ? "text-slate-500" : ""}
                            ${line.includes("const") ? "text-purple-400" : ""}
                            ${line.includes("=") && !line.includes("//") ? "text-blue-400" : ""}
                            ${line.includes("[") || line.includes("]") ? "text-yellow-400" : ""}
                            ${line.includes("'") ? "text-green-400" : ""}
                            ${!line.includes("const") && !line.includes("//") && !line.includes("[") && !line.includes("'") && !line.includes("=") ? "text-slate-200" : ""}
                          `}
                        >
                          {line || "\u00A0"}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;