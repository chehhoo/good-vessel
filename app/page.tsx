import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-800">Good Vessel · 良船事工</span>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="#about" className="hover:text-blue-700">About</Link>
          <Link href="#services" className="hover:text-blue-700">Services</Link>
          <Link href="#contact" className="hover:text-blue-700">Contact</Link>
          <Link
            href="https://conference.goodvessel.org"
            className="bg-blue-700 text-white px-4 py-1.5 rounded-lg hover:bg-blue-800"
          >
            Attendee Portal
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-blue-900 text-white flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Good Vessel · 良船事工</h1>
        <p className="text-blue-200 text-lg sm:text-xl max-w-2xl mb-8">
          A non-profit ministry dedicated to serve non-profit small budget organizations with IT software services and AI modernization.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="#services"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="#about"
            className="border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us · 關於我們</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Good Vessel is a non-profit ministry dedicated to serve non-profit small budget organizations
          with IT software services and AI modernization. We believe that mission-driven organizations
          should have access to the same quality technology tools as large enterprises — without the
          enterprise price tag.
        </p>
        <p className="text-gray-600 leading-relaxed">
          From conference management platforms to AI-assisted workflows, we build and maintain
          software tailored to the real needs of churches, camps, and community organizations
          operating on limited resources.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What We Do · 我們的服務</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="text-blue-700 text-3xl mb-3">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-2">Custom Software</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Purpose-built web applications for conference registration, attendee management,
                check-in, meal scanning, and reporting — designed for organizations with lean teams.
              </p>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="text-blue-700 text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">AI Modernization</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Integrate AI tools into your existing workflows to save staff time, automate
                repetitive tasks, and surface insights from your data — without a full IT department.
              </p>
            </div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="text-blue-700 text-3xl mb-3">🏕️</div>
              <h3 className="font-bold text-gray-900 mb-2">Conference Platform</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our Good Camp platform manages camp and hotel conferences end-to-end: registration,
                lodging, meals, sessions, payments, and volunteer scanning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact · 聯絡我們</h2>
        <p className="text-gray-600">
          Interested in partnering with us or learning more about our services? Reach out at{" "}
          <a href="mailto:info@goodvessel.org" className="text-blue-700 hover:underline">
            info@goodvessel.org
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-200 text-sm text-center py-6 px-4 mt-auto">
        © {new Date().getFullYear()} Good Vessel Ministry · 良船事工. All rights reserved.
      </footer>
    </div>
  );
}
