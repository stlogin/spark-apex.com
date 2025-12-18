"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    number: "01",
    title: "Systems Development",
    description:
      "Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable and secure solutions that drive growth.",
    icon: (
      <div className="relative w-full aspect-video mx-auto overflow-hidden rounded-lg">
        <Image
          src="/images/features/systems-development.jpg"
          alt="Systems Development"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    number: "02",
    title: "Digital Transformation",
    description:
      "Modernize your business with cutting-edge digital solutions. We help organizations embrace new technologies to improve efficiency, reduce costs, and stay competitive.",
    icon: (
      <div className="relative w-full aspect-video mx-auto overflow-hidden rounded-lg">
        <Image
          src="/images/features/digital-transformation.jpg"
          alt="Digital Transformation"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    number: "03",
    title: "IT Consulting",
    description:
      "Strategic technology guidance for your business. Our experts analyze your needs and provide actionable insights to optimize your IT infrastructure and processes.",
    icon: (
      <div className="relative w-full aspect-video mx-auto overflow-hidden rounded-lg">
        <Image
          src="/images/features/it-consulting.jpg"
          alt="IT Consulting"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
];

function FeatureCard({
  number,
  title,
  description,
  icon,
  index,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      <Card className="border-none bg-background/50 backdrop-blur">
        <CardHeader>
          <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-sm font-medium">
            {number}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-8">{description}</p>
          {icon}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="container relative py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Button variant="outline" className="rounded-full mb-4">
            Our Services
          </Button>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            End-to-End IT Solutions for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We provide comprehensive IT services to help businesses thrive in the digital age.
            From strategy to implementation, we&apos;re your trusted technology partner.
          </p>
        </motion.div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.number} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}
