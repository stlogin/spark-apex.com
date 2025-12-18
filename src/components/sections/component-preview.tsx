"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const terminalLines = [
  { type: "command", text: "$ npx create-spark-apex@latest my-project" },
  { type: "output", text: "Creating a new Spark Apex project..." },
  { type: "success", text: "✓ Installing dependencies" },
  { type: "success", text: "✓ Configuring TypeScript" },
  { type: "success", text: "✓ Setting up database" },
  { type: "success", text: "✓ Adding authentication" },
  { type: "success", text: "✓ Generating API routes" },
  { type: "command", text: "$ npm run dev" },
  { type: "info", text: "▲ Ready on http://localhost:3000" },
];

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function TypingText({ text, delay, onComplete }: { text: string; delay: number; onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isInView, delay]);

  useEffect(() => {
    if (!started || !text) {
      if (started && !text && onComplete) {
        onComplete();
      }
      return;
    }

    let iteration = 0;
    const totalIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayedText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            const revealPoint = index * 3;
            if (iteration >= revealPoint) {
              return char;
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration++;

      if (iteration >= totalIterations) {
        setDisplayedText(text);
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [started, text, onComplete]);

  return <span ref={ref}>{displayedText}</span>;
}

function TerminalLine({ line, delay, onComplete }: { line: typeof terminalLines[0]; delay: number; onComplete?: () => void }) {
  const colorClass = {
    command: "text-green-400",
    output: "text-muted-foreground",
    success: "text-emerald-400",
    info: "text-blue-400",
  }[line.type];

  return (
    <div className={`font-mono text-sm ${colorClass}`}>
      <TypingText text={line.text} delay={delay} onComplete={onComplete} />
    </div>
  );
}

export function ComponentPreview() {
  const [visibleLines, setVisibleLines] = useState(1);

  const handleLineComplete = (index: number) => {
    if (index < terminalLines.length - 1) {
      setVisibleLines(index + 2);
    }
  };

  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="rounded-lg border bg-background/80 backdrop-blur-sm overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">Terminal — spark-apex</span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 space-y-1 min-h-[280px] bg-black/90">
          {terminalLines.slice(0, visibleLines).map((line, index) => (
            <TerminalLine
              key={index}
              line={line}
              delay={index === 0 ? 500 : 0}
              onComplete={() => handleLineComplete(index)}
            />
          ))}
          <motion.span
            className="inline-block w-2 h-4 bg-green-400 ml-0.5"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
