import { motion } from "framer-motion";
import { Target, BookOpen, Bot, PenLine, LayoutTemplate, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: "1",
    icon: Target,
    title: "Strategic Brief Alignment",
    description: "We translate your vision into structured production plans."
  },
  {
    id: "2",
    icon: BookOpen,
    title: "Curriculum & Pedagogical Mapping",
    description: "Learning objectives define content direction."
  },
  {
    id: "3",
    icon: Bot,
    title: "AI-Integrated Draft Development",
    description: "AI accelerates drafting under expert editorial supervision."
  },
  {
    id: "4",
    icon: PenLine,
    title: "Human Editorial Refinement",
    description: "Content is refined for clarity, tone, and educational depth."
  },
  {
    id: "5",
    icon: LayoutTemplate,
    title: "Design & Layout",
    description: "Structured visual presentation aligned with learning goals."
  },
  {
    id: "6",
    icon: ShieldCheck,
    title: "Quality Control & Delivery",
    description: "Final review and print-ready packaging."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 tracking-tighter">
            Our <span className="text-primary">Process.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl">
            Our Structured AI Publishing Framework — a strategic system for creating impactful educational content at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-10 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm group hover:bg-primary/10 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-6xl font-heading font-black text-white/5 group-hover:text-primary/10 transition-colors">
                {step.id}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                <step.icon size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">{step.title}</h3>
              <p className="text-slate-400 font-light text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}