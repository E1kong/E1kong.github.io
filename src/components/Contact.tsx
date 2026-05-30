import { useState, type FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: wire up form submission (e.g. EmailJS, Formspree, your own API)
    console.log('Form submitted:', form)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <div className="w-12 h-1 bg-blue-600 mb-12" />

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just a chat.
            </p>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-medium">✉</span>
                <span>your.email@example.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-medium text-xs">in</span>
                <span>linkedin.com/in/yourprofile</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-medium text-xs">GH</span>
                <span>github.com/yourusername</span>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
