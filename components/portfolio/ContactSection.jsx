"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { FileText } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:mohitlalwani639@gmail.com",
      label: "mohitlalwani639@gmail.com",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/MohitLalwa34919",
      label: "@MohitLalwa34919",
      color: "hover:text-sky-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Mohit625",
      label: "github.com/Mohit625",
      color: "hover:text-purple-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohit-lalwani-603239297/",
      label: "linkedin.com/in/mohit-lalwani-603239297/",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="max-w-screen mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-muted-foreground mb-8"
        >
          $ echo "get in touch"
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16"
        >
          Let's Connect
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 "
          >
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Always interested in hearing about new opportunities,
                interesting projects, or just having a chat about technology and
                design.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to collaborate, need advice, or want to
                discuss the latest in web development, I'd love to hear from
                you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href="mailto:mohitlalwani639@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send me an email
                  </a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-gray-300 dark:border-muted-foreground text-black dark:text-muted-foreground hover:text-white dark:hover:text-white hover:border-black dark:hover:border-white transition"
                  asChild
                >
                  <Link href="https://drive.google.com/file/d/1yV-f9NwzolLAB5SbAbafO3pD7A4rqFBd/view?usp=drivesdk">
                    <FileText />
                    Resume
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-100 dark:bg-slate-800/50 px-4 py-3 border-b border-gray-200 dark:border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Find me online</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-background/50 transition-all duration-300 group ${link.color}`}
                    >
                      <div className="flex-shrink-0">
                        <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-current transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground group-hover:text-current transition-colors">
                          {link.name}
                        </div>
                        
                      </div>
                      <div className="text-muted-foreground group-hover:text-current transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground font-mono text-sm">
            Built with Next.js, JavaScript, and TailwindCSS
          </p>
          <p className="text-muted-foreground font-mono text-sm mt-2">
            © {new Date().getFullYear()} Mohit Lalwani. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
