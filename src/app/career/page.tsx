import { Mail } from "lucide-react";

export default function CareerPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold text-slate-900">Join Our Team</h1>
          <p className="mt-2 text-lg text-slate-600">Build your career with Glowrious</p>
        </div>
      </div>

      <div className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Work With Us</h2>
              <p className="text-slate-700 leading-relaxed">
                At Glowrious, we're building more than just a beauty platform—we're building a movement. We're a team of passionate individuals dedicated to transforming the beauty industry through innovation, authenticity, and exceptional customer experiences. If you're excited about making an impact and growing with us, we'd love to hear from you!
              </p>
            </div>

            {/* Why Join Us */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Join Glowrious?</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-6 border-l-4 border-indigo-400">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Innovation First</h3>
                  <p className="text-sm text-slate-600">Work on cutting-edge projects that combine beauty and technology in exciting new ways.</p>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-6 border-l-4 border-indigo-400">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Grow & Learn</h3>
                  <p className="text-sm text-slate-600">Access continuous learning opportunities, mentorship, and professional development programs.</p>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-6 border-l-4 border-indigo-400">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Collaborative Culture</h3>
                  <p className="text-sm text-slate-600">Be part of a diverse, inclusive team that values every voice and celebrates diverse perspectives.</p>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-6 border-l-4 border-indigo-400">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Competitive Benefits</h3>
                  <p className="text-sm text-slate-600">Enjoy competitive salary, health benefits, and flexible work arrangements.</p>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-6 border-l-4 border-indigo-400">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Impact & Purpose</h3>
                  <p className="text-sm text-slate-600">Make a real difference in the beauty industry and empower our growing community.</p>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-6 border-l-4 border-indigo-400">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">Career Growth</h3>
                  <p className="text-sm text-slate-600">Advance your career with clear growth paths and leadership opportunities.</p>
                </div>
              </div>
            </div>

            {/* Culture & Values */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Culture & Values</h2>
              <div className="space-y-4">
                <div className="flex gap-4 pb-4 border-b border-slate-200">
                  <div className="flex-shrink-0 text-2xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Integrity First</h3>
                    <p className="mt-1 text-slate-600">We operate with honesty and transparency in everything we do.</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-4 border-b border-slate-200">
                  <div className="flex-shrink-0 text-2xl">💡</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Innovation</h3>
                    <p className="mt-1 text-slate-600">We encourage creative thinking and bold ideas from everyone on the team.</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-4 border-b border-slate-200">
                  <div className="flex-shrink-0 text-2xl">🤝</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Collaboration</h3>
                    <p className="mt-1 text-slate-600">We believe in the power of teamwork and supporting each other's success.</p>
                  </div>
                </div>

                <div className="flex gap-4 pb-4 border-b border-slate-200">
                  <div className="flex-shrink-0 text-2xl">🌟</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Excellence</h3>
                    <p className="mt-1 text-slate-600">We pursue excellence in our work and continuously raise the bar.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">🌱</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Growth Mindset</h3>
                    <p className="mt-1 text-slate-600">We embrace learning, adapt to change, and grow together as a team.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Openings */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Current Job Openings</h2>
              <div className="rounded-lg border-2 border-dashed border-slate-300 p-8 text-center bg-slate-50">
                <div className="text-5xl mb-4">😊</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No Openings Right Now</h3>
                <p className="text-slate-600 mb-6">
                  We're not actively hiring at the moment, but we're always interested in exceptional talent!
                </p>
                <p className="text-sm text-slate-600">
                  If you'd like to be considered for future opportunities, please submit your information below and we'll keep your profile in mind.
                </p>
              </div>
            </div>

            {/* Team Highlights */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Life at Glowrious</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100 p-6 text-center">
                  <div className="text-4xl mb-3">🎓</div>
                  <h3 className="font-semibold text-slate-900 mb-2">Learning</h3>
                  <p className="text-sm text-slate-600">Regular workshops, training programs, and skill development opportunities.</p>
                </div>

                <div className="rounded-lg overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100 p-6 text-center">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="font-semibold text-slate-900 mb-2">Team Events</h3>
                  <p className="text-sm text-slate-600">Company outings, team celebrations, and social activities throughout the year.</p>
                </div>

                <div className="rounded-lg overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100 p-6 text-center">
                  <div className="text-4xl mb-3">⚖️</div>
                  <h3 className="font-semibold text-slate-900 mb-2">Work-Life Balance</h3>
                  <p className="text-sm text-slate-600">Flexible schedules, remote work options, and respect for personal time.</p>
                </div>
              </div>
            </div>

            {/* Interest Form */}
            <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 p-8 text-white shadow-sm">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold mb-3">Be Part of Our Future</h2>
                <p className="mb-6 text-sm opacity-90">
                  Even though we don't have openings right now, we'd love to hear from passionate professionals interested in joining Glowrious. Submit your information and we'll reach out when the right opportunity comes along.
                </p>

                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="rounded-lg px-4 py-3 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="rounded-lg px-4 py-3 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Your Position of Interest"
                    className="w-full rounded-lg px-4 py-3 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur"
                    required
                  />

                  <textarea
                    placeholder="Tell us about yourself and why you'd like to join Glowrious..."
                    rows={4}
                    className="w-full rounded-lg px-4 py-3 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg hover:bg-slate-50 transition flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Submit Your Interest
                  </button>
                </form>

                <p className="mt-4 text-xs opacity-75">
                  We respect your privacy. Your information will only be used for career-related communications.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-700 mb-6">
                Have questions about careers at Glowrious? Feel free to reach out to our team!
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <a href="mailto:careers@glowrious.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    careers@glowrious.com
                  </a>
                  <p className="text-sm text-slate-600 mt-1">For career inquiries and opportunities</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">General Contact</h3>
                  <a href="mailto:glowrious.info@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    glowrious.info@gmail.com
                  </a>
                  <p className="text-sm text-slate-600 mt-1">General inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
