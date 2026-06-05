import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-800">Good Vessel · 良船事工</span>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="#about" className="hover:text-blue-700">About</Link>
          <Link href="#events" className="hover:text-blue-700">Events</Link>
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
          Serving the Chinese Christian community through conferences, camps, and spiritual formation.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="#events"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Upcoming Events
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
        <p className="text-gray-600 leading-relaxed">
          Good Vessel is a non-profit ministry dedicated to equipping and strengthening
          Chinese Christian communities through annual conferences, youth camps, and
          discipleship programs. We believe in building strong foundations of faith
          through community, worship, and God&apos;s Word.
        </p>
      </section>

      {/* Events */}
      <section id="events" className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events · 即將舉行</h2>
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-700 mb-1">2026 Summer Conference</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Annual Church Camp · 年度退修會</h3>
            <p className="text-gray-500 text-sm">
              Details coming soon. Registered attendees can access the schedule and workshops below.
            </p>
            <Link
              href="https://conference.goodvessel.org"
              className="inline-block mt-4 bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              Attendee Portal →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact · 聯絡我們</h2>
        <p className="text-gray-600">
          For inquiries, please email us at{" "}
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
