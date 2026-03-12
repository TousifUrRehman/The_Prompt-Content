import { Mail, Linkedin, ArrowRight, CheckCircle, AlertCircle, Loader } from "lucide-react";import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

declare global {
  interface Window {
    emailjs?: any;
  }
}

const FORMSPREE_URL = "https://formspree.io/f/myzpynpy";
const GMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [emailValid, setEmailValid] = useState<boolean | null>(null); // null = untouched
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Live Gmail validation on the email field
    if (name === "email") {
      setEmailValid(value.trim() === "" ? null : GMAIL_REGEX.test(value.trim()));
    }
  };

  const handleSubmit = async () => {
    // Empty field check
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in all fields before sending.");
      setStatus("error");
      return;
    }

    // Gmail format check
    if (!GMAIL_REGEX.test(form.email.trim())) {
      setEmailValid(false);
      setErrorMsg("Please enter a valid Gmail address ending with @gmail.com.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setEmailValid(null);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMsg("Something went wrong. Please try again or contact us directly.");
      setStatus("error");
    }
  };

  // Email input border color based on validation state
  const emailBorderClass =
    emailValid === null
      ? "border-slate-200"
      : emailValid
      ? "border-green-500 focus:border-green-500"
      : "border-red-400 focus:border-red-400";

  return (
    <footer className="bg-white pt-32 pb-16" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-10 tracking-tighter">
              Let's <span className="text-gradient">Connect.</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-12 font-medium leading-relaxed max-w-xl">
              Let's build something meaningful together. We're here to transform your educational ideas into impactful materials.
            </p>

            <div className="space-y-10">

              {/* WhatsApp — clickable, no number shown */}
              <a
                href="https://wa.me/923184961691"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">WhatsApp</p>
                  <span className="text-xl font-bold text-slate-900 group-hover:text-[#25D366] transition-colors flex items-center gap-2">
                    Chat with Us <ArrowRight size={18} />
                  </span>
                </div>
              </a>

              {/* Email — clickable, no address shown */}
              <a
                href="mailto:umair@thepromptcontent.com"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
                  <span className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center gap-2">
                    Send Us an Email <ArrowRight size={18} />
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/prompt-content/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">LinkedIn</p>
                  <span className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center gap-2">
                    Prompt Content <ArrowRight size={18} />
                  </span>
                </div>
              </a>

            </div>
          </div>

          <div className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 shadow-2xl shadow-slate-200/50">

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 gap-6 text-center">
                <CheckCircle size={64} className="text-green-500" />
                <h3 className="text-3xl font-extrabold text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 text-lg font-medium">
                  Thanks for reaching out. We'll get back to you shortly.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  className="mt-4 rounded-2xl px-8 h-12 font-bold bg-primary hover:bg-blue-600"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <div className="space-y-8">

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 ml-2">Full Name</label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="rounded-2xl h-16 border-slate-200 bg-white px-6 font-medium focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                {/* Email with live validation colour */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 ml-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    className={`rounded-2xl h-16 bg-white px-6 font-medium transition-all ${emailBorderClass}`}
                  />
                  {emailValid === false && (
                    <p className="text-xs text-red-500 ml-2 mt-1">
                      Please enter a valid Gmail address ending with @gmail.com.
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 ml-2">Your Message</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="rounded-2xl min-h-[160px] border-slate-200 bg-white px-6 py-4 font-medium focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <div className="flex items-center gap-3 text-red-500 font-semibold text-sm bg-red-50 border border-red-100 rounded-2xl px-5 py-4">
                    <AlertCircle size={18} className="shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full h-16 rounded-2xl text-lg font-bold bg-primary hover:bg-blue-600 shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:scale-100"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-3">
                      <Loader size={20} className="animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>

              </div>
            )}
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8 grayscale opacity-50" />
            <p className="text-sm font-bold text-slate-400">© {new Date().getFullYear()} PROMPT CONTENT. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-10">
            <a href="#" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
