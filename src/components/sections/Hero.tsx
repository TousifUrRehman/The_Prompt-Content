import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const scrollTo = (href: string) => {
  const element = document.querySelector(href);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Digital Education Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:via-white/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-sm font-bold tracking-wider mb-6">
              PUBLISHING, SIMPLIFIED.
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 leading-[1.1] mb-6">
              Structured Publishing. <span className="text-primary">Scalable Results.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              We design and manage structured publishing workflows that help publishers produce high-quality books faster, more efficiently, and at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto" onClick={() => scrollTo("#contact")}>
                Request a Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-blue-50 text-lg px-8 py-6 h-auto group" onClick={() => scrollTo("#process")}>
                View Our Process <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-24 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
