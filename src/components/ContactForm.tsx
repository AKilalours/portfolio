"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName: name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
      } else {
        // Fallback: open mailto if Resend isn't configured
        const mailto = `mailto:akilalourdes@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.open(mailto, "_blank");
        setStatus("success");
      }
    } catch {
      const mailto = `mailto:akilalourdes@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailto, "_blank");
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <CheckCircle2 size={48} className="text-emerald-500" />
        <p className="font-display font-bold text-xl">Message sent!</p>
        <p className="font-mono text-sm text-muted-foreground">Akila will get back to you soon.</p>
        <Button variant="outline" onClick={() => setStatus("idle")}>Send another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-bold">Full name</label>
          <input
            value={name} onChange={e => setName(e.target.value)}
            placeholder="Your Name" required
            className="rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-bold">Email Address</label>
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com" required
            className="rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold">Your Message</label>
        <textarea
          value={message} onChange={e => setMessage(e.target.value)}
          placeholder="Tell me about your project or opportunity..."
          required rows={5}
          className="rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors resize-none"
        />
      </div>
      <p className="text-xs text-muted-foreground">I'll never share your data with anyone else. Pinky promise!</p>
      <Button type="submit" disabled={status === "loading"} className="rounded-full w-full py-6 text-base">
        {status === "loading" ? (
          <><Loader2 size={18} className="animate-spin mr-2" /> Sending...</>
        ) : (
          <>Send Message to akilalourdes@gmail.com <ArrowRight size={18} className="ml-2" /></>
        )}
      </Button>
    </form>
  );
}
