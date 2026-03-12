import { motion } from "framer-motion";
import { BookOpen, Library, PenTool, FileText, ClipboardList, MonitorPlay, } from "lucide-react";

const services = [
  {
    icon: Library,
    title: "End-to-End Publishing",
    description: "We manage educational publishing projects from strategic planning to final delivery  ensuring execution, clear timelines, and consistent quality.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: BookOpen,
    title: "Editorial ",
    description: "Curriculum-aligned, pedagogy-driven manuscript development supported by developmental editing and structured refinement processes.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: ClipboardList,
    title: "Production Workflows",
    description: "We integrate AI into controlled editorial systems to accelerate drafting while maintaining human oversight and educational integrity.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: PenTool,
    title: "Design & Layout Production",
    description: "Professional interior layout and structured visual presentation, delivered as print-ready files for seamless production.",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: FileText,
    title: "Proofreading & Quality Control",
    description: "Comprehensive final-stage review to ensure accuracy, consistency, and production readiness.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: MonitorPlay,
    title: "Workflow Consulting",
    description: "Helping publishers integrate AI into their internal systems.",
    color: "from-cyan-500 to-blue-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-8 tracking-tighter">
            What <span className="text-gradient">We Do</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            Comprehensive educational content solutions designed for modern learning environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-10 rounded-[3rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-10 shadow-lg transition-transform duration-500 group-hover:-rotate-12`}>
                  <service.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-10 flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
