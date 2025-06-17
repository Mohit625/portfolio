"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench } from "lucide-react";
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "⚡",
      color: "border-yellow-500/20 bg-yellow-500/5",
      skills: [
        {
          name: "C",
          icon: "https://i.pinimg.com/736x/95/cb/a0/95cba0b2e3d6c318794e76f545ed0c47.jpg",
          color: "bg-cyan-500",
        },
        {
          name: "C++",
          icon: "https://i.pinimg.com/736x/9b/de/80/9bde80c47d26ad9ad1cc777b039fe42f.jpg",
          color: "bg-blue-500",
        },
        {
          name: "JavaScript",
          icon: "https://i.pinimg.com/736x/06/ae/80/06ae800957fd7efabe894de3d1c0611b.jpg",
          color: "bg-yellow-500",
        },
        {
          name: "Python",
          icon: "https://i.pinimg.com/736x/1d/be/60/1dbe6034fd59661cfd02d5aa8a79823a.jpg",
          color: "bg-green-500",
        },
      ],
    },
    {
      title: "Frameworks",
      icon: "⚛️",
      color: "border-blue-500/20 bg-blue-500/5",
      skills: [
        {
          name: "React.js",
          icon: "https://i.pinimg.com/736x/f0/cf/d0/f0cfd0b98fd7d5226f5d92188cc86a0c.jpg",
          color: "bg-blue-500",
        },
        {
          name: "Next.js",
          icon: "https://i.pinimg.com/736x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg",
          color: "bg-black",
        },
        {
          name: "Node.js",
          icon: "https://i.pinimg.com/736x/d9/61/ad/d961ad1684f674ef5e8fc4062ab88089.jpg",
          color: "bg-green-500",
        },
        {
          name: "Express.js",
          icon: "https://i.pinimg.com/736x/40/e9/7a/40e97aae3a908371bbd98e3fa4cc845c.jpg",
          color: "bg-green-400",
        },
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "border-green-500/20 bg-green-500/5",
      skills: [
        {
          name: "PostgreSQL",
          icon: "https://i.pinimg.com/736x/97/d1/83/97d183f69952212df2602a4f863db7b7.jpg",
          color: "bg-blue-600",
        },
        {
          name: "MySQL",
          icon: "https://i.pinimg.com/736x/d4/02/cc/d402ccb6685420a5d496942b72a889ce.jpg",
          color: "bg-green-500",
        },
        {
          name: "MongoDB",
          icon: "https://i.pinimg.com/736x/7b/18/80/7b1880160431b274486fdf7aa6c6cd80.jpg",
          color: "bg-green-500",
        },
        {
          name: "Firebase",
          icon: "https://i.pinimg.com/736x/9b/c6/64/9bc664d439827730a8ad8f815c738590.jpg",
          color: "bg-green-500",
        },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench />,
      color: "border-red-500/20 bg-red-500/5",
      skills: [
        {
          name: "Github",
          icon: "https://i.pinimg.com/736x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg",
          color: "bg-blue-600",
        },
        {
          name: "Figma",
          icon: "https://i.pinimg.com/736x/9f/4c/25/9f4c2598ee3f12d78d35065639f8e243.jpg",
          color: "bg-green-500",
        },
        {
          name: "Postman",
          icon: "https://i.pinimg.com/736x/82/a0/d0/82a0d0900cb1a2801b2a0f5988991baf.jpg",
          color: "bg-green-500",
        },
        {
          name: "Docker",
          icon: "https://i.pinimg.com/736x/d5/e2/00/d5e200a2e6cdcef7b21641fad480c55e.jpg",
          color: "bg-green-500",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-muted-foreground mb-8"
        >
          $ cat skills.json
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`${category.color} border hover:scale-105 transition-all duration-300`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <img
                        src={skill.icon}
                        className={`w-8 h-8 rounded-lg fill-black flex items-center justify-center text-white text-sm font-bold`}
                      ></img>
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
