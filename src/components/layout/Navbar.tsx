import { Link } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Process", href: "#process" },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="The Prompt Content"
              className="h-10 w-10 object-contain rounded-lg shadow-sm group-hover:scale-110 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-slate-900 tracking-tighter leading-none">
                PROMPT CONTENT
              </span>
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mt-1">
                Publishing Simplified
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-bold text-slate-600 hover:text-primary transition-all hover:tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={scrollToContact}
            className="bg-primary hover:bg-blue-600 text-white font-bold px-8 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-l border-white/20 backdrop-blur-2xl bg-white/80"
            >
              <div className="flex flex-col gap-8 mt-16">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-2xl font-heading font-extrabold text-slate-900 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  onClick={scrollToContact}
                  className="w-full rounded-2xl py-6 h-auto text-lg font-bold shadow-xl shadow-primary/20"
                >
                  Get in Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
