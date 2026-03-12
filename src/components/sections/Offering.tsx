import { motion } from "framer-motion";
import { BookCopy, FileText, Settings2, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "1",
    icon: BookCopy,
    title: "End-to-End Series Production",
    description: "Complete management of educational book series from brief to print-ready files.",
    includes: [
      "Scope planning",
      "Curriculum alignment",
      "Structured manuscript development",
      "Editing & refinement",
      "Design & layout",
      "Print-ready delivery",
    ],
  },
  {
    id: "2",
    icon: FileText,
    title: "Manuscript Development",
    description: "For publishers with in-house design teams.",
    includes: [
      "Learning outcome mapping",
      "Structured chapter development",
      "Activities & assessments",
      "Editing & final manuscript packaging",
    ],
  },
  {
    id: "3",
    icon: Settings2,
    title: "Production Management",
    description: "For publishers who need coordination oversight.",
    includes: [
      "Timeline management",
      "Team supervision",
      "Quality control",
      "Workflow optimization",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 tracking-tighter">
            Our <span className="text-primary">Services.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl">
            Tailored publishing solutions for educational producers — from full series production to focused manuscript and workflow support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-10 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm group hover:bg-primary/10 transition-all duration-500 flex flex-col"
            >
              <div className="absolute top-8 right-8 text-6xl font-heading font-black text-white/5 group-hover:text-primary/10 transition-colors">
                {service.id}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                <service.icon size={30} />
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight min-h-[64px]">{service.title}</h3>
              <p className="text-slate-400 font-light text-base leading-relaxed mb-8 min-h-[72px]">
                {service.description}
              </p>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-4">
                  Includes
                </p>
                <ul className="space-y-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-light">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}