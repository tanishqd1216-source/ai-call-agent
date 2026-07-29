"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Zap } from "lucide-react";

type MouseState = { x: number | null; y: number | null; radius: number };

class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;

  constructor(
    x: number,
    y: number,
    directionX: number,
    directionY: number,
    size: number,
    color: string,
  ) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mouse: MouseState) {
    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius + this.size) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        this.x -= forceDirectionX * force * 5;
        this.y -= forceDirectionY * force * 5;
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw(ctx);
  }
}

function initParticles(canvas: HTMLCanvasElement): Particle[] {
  const particles: Particle[] = [];
  const numberOfParticles = (canvas.height * canvas.width) / 9000;
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * (canvas.width - size * 4) + size * 2;
    const y = Math.random() * (canvas.height - size * 4) + size * 2;
    const directionX = Math.random() * 0.4 - 0.2;
    const directionY = Math.random() * 0.4 - 0.2;
    const color = "rgba(191, 128, 255, 0.8)";
    particles.push(new Particle(x, y, directionX, directionY, size, color));
  }
  return particles;
}

function connectParticles(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  particles: Particle[],
  mouse: MouseState,
) {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      const distance =
        (particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2;

      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        const opacityValue = 1 - distance / 20000;
        let closeToMouse = false;
        if (mouse.x !== null && mouse.y !== null) {
          const dxMouseA = particles[a].x - mouse.x;
          const dyMouseA = particles[a].y - mouse.y;
          const distanceMouseA = Math.sqrt(dxMouseA * dxMouseA + dyMouseA * dyMouseA);
          closeToMouse = distanceMouseA < mouse.radius;
        }
        ctx.strokeStyle = closeToMouse
          ? `rgba(255, 255, 255, ${opacityValue})`
          : `rgba(200, 150, 255, ${opacityValue})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 + 0.3, duration: 0.8, ease: "easeInOut" },
  }),
};

interface AetherFlowHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function AetherFlowHero({ eyebrow, title, subtitle, children }: AetherFlowHeroProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse: MouseState = { x: null, y: null, radius: 200 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = initParticles(canvas);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) particle.update(canvas, ctx, mouse);
      connectParticles(ctx, canvas, particles, mouse);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 pt-16">
      {/* Fixed (not absolute) so this same particle canvas stays put behind the
          whole page — hero and everything scrolled past it — instead of being
          clipped to just this section's height. */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full pointer-events-none" />

      {eyebrow && (
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-20 left-6 md:top-24 md:left-10 z-20 flex items-center gap-3"
        >
          <Zap className="h-8 w-8 md:h-12 md:w-12 text-primary" />
          <span className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient-heading">
            {eyebrow}
          </span>
        </motion.div>
      )}

      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient-heading"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-lg text-gray-400"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}
