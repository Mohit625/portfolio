"use client";

import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";
import image from "@/public/image.jpeg"
import Image from "next/image";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-sm text-muted-foreground"
          >
            $ whoami
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight"
            >
              mohit
              <br />
              <span className="text-muted-foreground">lalwani</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-2 text-lg text-muted-foreground max-w-2xl"
            >
              <div className="flex items-center space-x-2">
                <span className="text-green-400">&gt;</span>
                <span>software engineer building intuitive</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">&gt;</span>
                <span>full-stack experiences with</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">&gt;</span>
                <span>modern web technologies</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex space-x-6 text-sm text-muted-foreground"
          >
            <a
              href="https://github.com/Mohit625"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <Github className="w-4 h-4" />
              <span>github</span>
            </a>
            <a
              href="https://x.com/MohitLalwa34919"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <Twitter className="w-4 h-4" />
              <span>twitter</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="w-full h-full bg-muted-foreground/20 flex items-center justify-center">
              <Image
  src={image}
  alt="Profile"
  width={320}
  height={320}
  className="rounded-full object-cover"
/>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-70"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-70"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
