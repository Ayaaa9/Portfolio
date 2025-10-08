import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import Section from './Section';
import Button from './Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayaouahi99@gmail.com",
      href: "mailto:ayaouahi99@gmail.com",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 771-965569",
      href: "tel:+212771965569",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Morocco",
      href: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Aya Ouahi",
      href: "https://www.linkedin.com/in/aya-ouahi-6b82bb268/",
      color: "from-pink-500 to-red-600"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mrbyarzn', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's discuss opportunities and collaborate on exciting projects"
      className="bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* ===== LEFT SIDE ===== */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <p className="text-gray-400">
              I'm currently seeking a Final Year Project (PFE) internship starting February 2026.
              Feel free to reach out for opportunities in Data Engineering, Software Development, or DevOps roles.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30">
            <h4 className="text-lg font-bold text-white mb-2">Availability</h4>
            <p className="text-gray-300">
              Open to PFE internship opportunities starting <span className="text-cyan-400 font-semibold">February 2026</span>
            </p>
          </div>
        </div>

        {/* ===== RIGHT SIDE (FORM) ===== */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button variant="primary" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                'Sending...'
              ) : submitStatus === 'success' ? (
                'Message Sent!'
              ) : (
                <>
                  <Send className="inline mr-2" size={20} />
                  Send Message
                </>
              )}
            </Button>

            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg animate-fadeIn">
                ✅ Thank you for your message! I’ll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg animate-fadeIn">
                ❌ Oops! Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
