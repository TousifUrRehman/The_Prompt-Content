import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Workflow } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50"
            >
              <img 
                src="/images/missions.png"
                alt="Our Mission" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </motion.div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 z-0" />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-10 tracking-tighter">
              Our Vision & <span className="text-gradient">Mission.</span>
            </h2>
            
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Vision</h3>
                </div>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  We envision a world where every teacher has access to high-quality, outcome-driven resources—bridging the gap between creativity, pedagogy, and real classroom needs.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <Target size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Mission</h3>
                </div>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  To create rigorously structured educational resources that prioritize student reading outcomes (SROs) through thoughtful design and strong pedagogy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div id="approach" className="pt-32 border-t border-slate-100">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-slate-900 mb-8 tracking-tighter">Our Approach.</h2>
            <p className="text-xl text-slate-500 font-medium">Combining literacy, pedagogy, and creativity to deliver practical tools for mastery tracking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: CheckCircle2,
                title: "What we do",
                desc: "We create affordable, outcome-driven educational resources ensuring teachers have tools not just to teach but to measure progress and mastery."
              },
              {
                icon: Workflow,
                title: "How we do it",
                desc: "We integrate pedagogy, design, technology, and assessment frameworks to deliver content that brings clarity to learning objectives."
              },
              {
                icon: Target,
                title: "Why we do it",
                desc: "Because learning should lead somewhere. Education is more powerful when progress is visible, achievable, and aligned to real needs."
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-[2.5rem] bg-slate-50 flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white">
                  <item.icon size={36} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
