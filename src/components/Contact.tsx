import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle, XCircle } from 'lucide-react';
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
      icon: MapPin,
      label: "Location",
      value: "Rabat, Morocco",
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
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
      setTimeout(() => setSubmitStatus('idle'), 5000);
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
      subtitle="Let’s connect and collaborate on meaningful projects."
      className="bg-gradient-to-b from-slate-900 to-slate-800 light:from-slate-50 light:to-white"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* ===== LEFT SIDE ===== */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-4">Let’s Connect</h3>
            <p className="text-gray-400 light:text-slate-600 leading-relaxed">
              Whether you want to discuss a potential collaboration, share an idea, or simply say hello — 
              I’d love to hear from you. I’m passionate about creating digital solutions that combine 
              software engineering, data, and innovation.
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
                  className="flex items-center gap-4 bg-slate-800/50 light:bg-white/80 backdrop-blur-lg p-4 rounded-xl border border-slate-700 light:border-slate-200 light:shadow-sm 
                             hover:border-cyan-500 light:hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center 
                               flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 light:text-slate-500 text-sm">{info.label}</p>
                    <p className="text-white  light:text-slate-900 font-medium">{info.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 light:from-cyan-100 light:to-blue-100 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 light:border-cyan-300">
            <h4 className="text-lg font-bold text-white light:text-slate-900 mb-2">Currently Open For</h4>
            <p className="text-gray-300 light:text-slate-600">
              Software Development • Data Engineering • Cloud & DevOps Projects
            </p>
          </div>
        </div>

        {/* ===== RIGHT SIDE (FORM) ===== */}
        <div className="bg-slate-800/50 light:bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 light:border-slate-200 shadow-lg light:shadow-slate-200 hover:shadow-cyan-500/10 transition-all">
          <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 light:text-slate-600 mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900/70 light:bg-slate-50 border border-slate-700 light:border-slate-300 rounded-lg text-white light:text-slate-900 
                           focus:outline-none focus:border-cyan-500 light:focus:border-cyan-600 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 light:text-slate-600 mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900/70 light:bg-slate-50 border border-slate-700 light:border-slate-300 rounded-lg text-white light:text-slate-900 
                           focus:outline-none focus:border-cyan-500 light:focus:border-cyan-600 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 light:text-slate-600 mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900/70 light:bg-slate-50 border border-slate-700 light:border-slate-300 rounded-lg text-white light:text-slate-900 
                           focus:outline-none focus:border-cyan-500 light:focus:border-cyan-600 transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button variant="primary" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                'Sending...'
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="inline mr-2 text-green-400" size={20} />
                  Message Sent!
                </>
              ) : submitStatus === 'error' ? (
                <>
                  <XCircle className="inline mr-2 text-red-400" size={20} />
                  Error Sending
                </>
              ) : (
                <>
                  <Send className="inline mr-2" size={20} />
                  Send Message
                </>
              )}
            </Button>

            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg transition-all duration-500 animate-fadeIn">
                ✅ Thank you for your message! I’ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg transition-all duration-500 animate-fadeIn">
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
