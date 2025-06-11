import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactQueryProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohit Lalwani - Software Engineer",
  description: "Building delightful user experiences with modern web tech",
  keywords: ["software engineer", "web developer", "react", "nextjs"],
  authors: [{ name: "Mohit Lalwani" }],
  openGraph: {
    title: "Mohit Lalwani - Software Engineer",
    description: "Building delightful user experiences with modern web tech",
    siteName: "Mohit Lalwani",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Lalwani - Software Engineer",
    description: "Building delightful user experiences with modern web tech",
    creator: "@mohitlalwani",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
