"use client";

import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.div
      className="inline-flex w-fit items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <Icons.logo className="h-4 w-4 text-foreground/60" />
      <span>Accelerate Your Business with IT</span>
    </motion.div>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.h1
        className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        Transform Your Business with <span className="text-primary">IT Solutions</span>
      </motion.h1>
      <motion.p
        className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease }}
      >
        From custom software development to digital transformation,
        we solve your business challenges with cutting-edge technology.
      </motion.p>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-40 dark:opacity-25"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
          <div className="flex flex-col gap-4 text-center max-w-4xl">
            <HeroPill />
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
}
