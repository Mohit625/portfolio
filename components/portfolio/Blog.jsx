"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BLOG_API = "https://dev.to/api/articles";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(BLOG_API)
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 4)))
      .catch((err) => console.error("Failed to load blogs", err));
  }, []);

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-muted-foreground mb-8"
        >
          $ fetch blog
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16"
        >
          className="text-4xl lg:text-5xl font-bold mb-16">Latest Articles
        </motion.h2>

        <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`border hover:scale-105 transition-all duration-300`}
              >
                <CardHeader>
                  <img
                    src={post.cover_image || post.social_image}
                    alt={post.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardTitle className="px-6 font-semibold group-hover:underline">
                  <a href={post.url}>
                    {post.title}
                    <p className="text-sm text-muted-foreground mb-1">
                      {post.readable_publish_date}
                    </p>
                  </a>
                </CardTitle>
                <CardContent className="px-4">
                  <p className="text-muted-foreground line-clamp-3 text-sm">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
