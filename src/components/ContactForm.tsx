import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="Your full name"
            maxLength={100}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="your@email.com"
            maxLength={255}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="+233 XXX XXX XXX"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            placeholder="Your company name"
            maxLength={100}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
          placeholder="Tell us about your project or requirements..."
          maxLength={1000}
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide hover:bg-pis-orange-dark transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
