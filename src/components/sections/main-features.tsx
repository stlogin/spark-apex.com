"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Shield, Users, Server, Database, Globe, Code, Lightbulb, Rocket, Circle, Clock, CheckCircle2 } from "lucide-react";
import DisplayCards from "@/components/prismui/display-cards";
import { LogoCarousel } from "@/components/prismui/logo-carousel";

const expertTeamCards = [
  {
    icon: <Code className="size-4 text-blue-300" />,
    title: "Engineers",
    description: "Full-stack development experts",
    date: "10+ years exp",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Lightbulb className="size-4 text-purple-300" />,
    title: "Consultants",
    description: "Strategic technology advisors",
    date: "Industry leaders",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] translate-x-0 sm:translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Rocket className="size-4 text-green-300" />,
    title: "Innovators",
    description: "Cutting-edge solutions",
    date: "Always learning",
    iconClassName: "text-green-500",
    titleClassName: "text-green-500",
    className:
      "[grid-area:stack] translate-x-0 sm:translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function FeatureCard({ title, description, children }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative rounded-xl border bg-background"
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground text-lg">{description}</p>
      </div>
      <div className="p-8 pt-0">{children}</div>
    </motion.div>
  );
}

const kanbanColumns = [
  {
    title: "To Do",
    icon: Circle,
    color: "text-slate-400",
    bgColor: "bg-slate-500/20",
    tasks: ["API Design", "Database Schema"],
  },
  {
    title: "In Progress",
    icon: Clock,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    tasks: ["User Auth", "Dashboard UI"],
  },
  {
    title: "Done",
    icon: CheckCircle2,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    tasks: ["Project Setup", "CI/CD Pipeline"],
  },
];

function KanbanBoardDemo() {
  return (
    <div className="w-full flex gap-3">
      {kanbanColumns.map((column, colIndex) => (
        <motion.div
          key={column.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: colIndex * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="flex-1 min-w-0"
        >
          <div className="flex items-center gap-2 mb-3">
            <column.icon className={cn("h-4 w-4", column.color)} />
            <span className="text-xs font-medium truncate">{column.title}</span>
            <span className="text-xs text-muted-foreground">({column.tasks.length})</span>
          </div>
          <div className="space-y-2">
            {column.tasks.map((task, taskIndex) => (
              <motion.div
                key={task}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: colIndex * 0.15 + taskIndex * 0.1 + 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className={cn(
                  "p-2 rounded-lg text-xs truncate",
                  column.bgColor
                )}
              >
                {task}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const chatMessages = [
  { id: 1, type: "user", message: "System is running slow", time: "10:24 AM" },
  { id: 2, type: "support", message: "Looking into it now", time: "10:25 AM" },
  { id: 3, type: "support", message: "Issue identified and resolved!", time: "10:28 AM" },
  { id: 4, type: "user", message: "Works perfectly. Thanks!", time: "10:29 AM" },
];

function SupportChatDemo() {
  return (
    <div className="w-full max-w-[320px] space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm text-muted-foreground">Support Online</span>
      </div>
      {chatMessages.map((msg, index) => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className={cn(
            "flex flex-col",
            msg.type === "user" ? "items-end" : "items-start"
          )}
        >
          <div
            className={cn(
              "px-4 py-2 rounded-2xl max-w-[240px]",
              msg.type === "user"
                ? "bg-primary text-primary-foreground rounded-br-md"
                : "bg-muted rounded-bl-md"
            )}
          >
            <p className="text-sm">{msg.message}</p>
          </div>
          <span className="text-xs text-muted-foreground mt-1">{msg.time}</span>
        </motion.div>
      ))}
    </div>
  );
}

const securityChecks = [
  { id: 1, label: "SSL/TLS Encryption" },
  { id: 2, label: "Data Backup & Recovery" },
  { id: 3, label: "Access Control" },
  { id: 4, label: "Security Monitoring" },
  { id: 5, label: "Vulnerability Scanning" },
];

function SecurityChecklistDemo() {
  return (
    <div className="w-full max-w-[300px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-green-500/20">
          <Shield className="h-5 w-5 text-green-500" />
        </div>
        <span className="font-medium">Security Status</span>
      </div>
      <div className="space-y-3">
        {securityChecks.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.3 + 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <Check className="h-4 w-4 text-green-500" />
            </motion.div>
            <span className="text-sm text-muted-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const scaleMetrics = [
  { id: 1, icon: Users, label: "Users", endValue: 10, suffix: "M+", color: "text-blue-500", bgColor: "bg-blue-500/20" },
  { id: 2, icon: Server, label: "Requests/sec", endValue: 50, suffix: "K", color: "text-purple-500", bgColor: "bg-purple-500/20" },
  { id: 3, icon: Database, label: "Data Points", endValue: 1, suffix: "B+", color: "text-orange-500", bgColor: "bg-orange-500/20" },
  { id: 4, icon: Globe, label: "Regions", endValue: 12, suffix: "", color: "text-green-500", bgColor: "bg-green-500/20" },
];

function CountUpNumber({ endValue, suffix, delay }: { endValue: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 30;
      const increment = endValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, endValue, delay]);

  return (
    <span ref={ref} className="text-2xl font-bold">
      {count}{suffix}
    </span>
  );
}

function ScaleMetricsDemo() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {scaleMetrics.map((metric, index) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-background/50"
        >
          <div className={cn("p-2 rounded-lg mb-2", metric.bgColor)}>
            <metric.icon className={cn("h-5 w-5", metric.color)} />
          </div>
          <CountUpNumber endValue={metric.endValue} suffix={metric.suffix} delay={index * 0.2} />
          <span className="text-xs text-muted-foreground">{metric.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function MainFeatures() {
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
            Why Choose Us
          </Button>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Driving Innovation Through Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            At Spark Apex, we combine deep technical expertise with business acumen
            to deliver solutions that create real value for our clients.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <FeatureCard
          title="Expert Team"
          description="Our skilled engineers and consultants bring diverse expertise across modern technologies. From startups to enterprises, we deliver solutions that exceed expectations."
        >
          <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-muted/50 p-4 sm:p-8 overflow-hidden">
            <div className="scale-[0.65] sm:scale-[0.80] origin-center w-full max-w-full">
              <DisplayCards cards={expertTeamCards} />
            </div>
          </div>
        </FeatureCard>

        <FeatureCard
          title="Agile Development"
          description="We use iterative development cycles to deliver working software fast. Continuous feedback ensures your project evolves with your business needs."
        >
          <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-muted/50 p-6">
            <KanbanBoardDemo />
          </div>
        </FeatureCard>

        <FeatureCard
          title="Reliable Support"
          description="We provide comprehensive maintenance and support services. When issues arise, our team responds quickly to keep your systems running smoothly."
        >
          <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-muted/50 p-6">
            <SupportChatDemo />
          </div>
        </FeatureCard>

        <FeatureCard
          title="Technology Partners"
          description="We collaborate with industry-leading technology providers. These partnerships enable us to deliver cutting-edge solutions using proven platforms."
        >
          <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-muted/50 p-8">
            <LogoCarousel columns={2} />
          </div>
        </FeatureCard>

        <FeatureCard
          title="Security Focused"
          description="We build security into every layer of your application. From secure coding practices to data encryption, your business assets stay protected."
        >
          <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-muted/50 p-6">
            <SecurityChecklistDemo />
          </div>
        </FeatureCard>

        <FeatureCard
          title="Built to Scale"
          description="Our architecture is designed for growth. Whether you serve hundreds or millions of users, your systems will perform reliably under any load."
        >
          <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-muted/50 p-6">
            <ScaleMetricsDemo />
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}
