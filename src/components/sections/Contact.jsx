import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { siteConfig } from '../../config';
import { useReveal } from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

const contactCards = [
  { icon: Mail,   label: 'Email',  value: siteConfig.company.email,         sub: `Response ${siteConfig.company.emailResponse}` },
  { icon: Phone,  label: 'Phone',  value: siteConfig.company.phone,         sub: siteConfig.company.phoneHours },
  { icon: MapPin, label: 'Office', value: siteConfig.company.headquarters,  sub: 'Visit our headquarters' },
];

export default function Contact() {
  const { ref, visible } = useReveal(0.1);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={['reveal', visible ? 'visible' : ''].join(' ')}>
          <SectionHeader
            badge="Get In Touch"
            title="Let's Build Together"
            subtitle="Ready to transform your business? Contact us for a free consultation."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactCards.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="card flex gap-4 p-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-subtle uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-text">{value}</p>
                  <p className="text-xs text-muted mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            <div className="card p-5">
              <p className="text-[10px] font-semibold text-subtle uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-2.5">
                {siteConfig.social.map((s) => {
                  const Icon = LucideIcons[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-lg border border-border bg-surface-2 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 hover:bg-accent/8 transition-all duration-200"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 card p-6 sm:p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <Send className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Message Sent!</h3>
                <p className="text-muted text-sm max-w-xs">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="Full Name" name="name" type="text" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                  <Input label="Email Address" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                </div>
                <Input label="Company (optional)" name="company" type="text" placeholder="Your Company" value={form.company} onChange={handleChange} />
                <Textarea label="Message" name="message" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required />
                <Button type="submit" size="lg" className="w-full sm:w-auto sm:self-start">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
