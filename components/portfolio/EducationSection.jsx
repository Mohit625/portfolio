"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "National Institute of Technology Silchar",
      period: "2023 — 2027",
      grade: "8.54",
    },
  ];

  const certifications = [
    {
      name: "Simplilearn Certified Full Stack Developer",
      platform: "Simplilearn",
      color: "bg-orange-500",
    },
    {
      name: "Career Edge – TCS iON",
      platform: "TCS ION",
      color: "bg-blue-500",
    },
    {
      name: "Object-Oriented Programming – Scaler Academy",
      platform: "Scaler Academy",
      color: "bg-green-500",
    },
    {
      name: "AINCAT (National Level Coding Contest)",
      platform: "Naukri Campus",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-muted-foreground mb-8"
        >
          $ cat education.json
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-20">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-0">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary mb-3 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <span>{edu.institution}</span>
                    <span className="text-muted-foreground">
                      CGPA - {edu.grade}
                    </span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8"
        >
          Certifications
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold">Various Platforms</h4>
                <span className="text-sm text-muted-foreground font-mono">
                  2024 — Present
                </span>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-3 h-3 rounded-full ${cert.color}`} />
                    <span className="text-foreground">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection;
