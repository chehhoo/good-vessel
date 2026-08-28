import Link from "next/link";

export const metadata = {
  title: "Privacy Policy · Good Vessel",
  description:
    "How Good Vessel collects, uses, and protects personal information on its event registration and attendee platform.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-800">
          Good Vessel · 好器皿
        </Link>
        <Link href="/terms" className="text-sm font-medium text-gray-600 hover:text-blue-700">
          Terms of Service
        </Link>
      </nav>

      <main className="py-12 px-6 max-w-3xl mx-auto w-full text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective 28 August 2026</p>

        <p className="mb-6">
          Good Vessel (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates an event registration and
          attendee platform at goodvessel.org on behalf of the non-profit organizations we serve.
          This policy explains what personal information we collect through that platform, why we
          collect it, and who it is shared with.
        </p>
        <p className="mb-8">
          When you register for an event you are registering with the organization hosting that
          event (the &ldquo;host organization&rdquo;). We process your information on their behalf.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Information we collect</h2>
        <p className="mb-3">Provided by you when registering:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Names, including Chinese name, and gender</li>
          <li>Email address, mobile number, and home phone</li>
          <li>Mailing address</li>
          <li>Age category, and exact age for attendees who are not adults</li>
          <li>Church affiliation and, where asked, years of faith</li>
          <li>Dietary notes, which may include food allergies</li>
          <li>Shirt size, lodging and meal preferences, and session selections</li>
          <li>Emergency contact name, relationship, phone, email, and pickup authorization</li>
        </ul>
        <p className="mb-3">Generated as you use the platform:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Check-in and check-out times recorded when a badge is scanned, and who scanned it</li>
          <li>Room and group assignments</li>
          <li>
            Payment records &mdash; amount, date, type, and whether financial assistance was
            applied. We do not store payment card numbers.
          </li>
          <li>Administrative notes recorded by event staff</li>
          <li>One-time sign-in codes, stored only as a hash and deleted once used or expired</li>
          <li>Whether you consented to SMS, and when</li>
        </ul>
        <p className="mb-6">
          Some of this is sensitive &mdash; religious affiliation, dietary and allergy information,
          financial assistance, and information about minors. We collect it only because it is
          needed to run the event you registered for, and we limit who can see it.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Text messages</h2>
        <p className="mb-4">
          If you provide a mobile number you may separately opt in to receive one-time passcodes and
          verification codes by SMS. Providing a mobile number is optional, and consent is never a
          condition of registering. Message frequency varies; message and data rates may apply.
          Reply HELP for help or STOP to stop messages.
        </p>
        <p className="mb-6 font-medium text-gray-800">
          No mobile information will be shared with third parties or affiliates for marketing or
          promotional purposes. Text messaging originator opt-in data and consent will not be shared
          with any third parties.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">How we use it</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>To process your registration and administer the event</li>
          <li>To sign you in to the attendee portal</li>
          <li>To assign lodging, meals and sessions, and to record attendance</li>
          <li>To reach you or your emergency contact about the event, including in an emergency</li>
          <li>To keep financial records for the host organization</li>
        </ul>
        <p className="mb-6">
          We do not sell personal information, and we do not use it for advertising.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Who it is shared with</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>
            <strong>The host organization</strong> &mdash; its staff and authorized volunteers, who
            use it to run the event.
          </li>
          <li>
            <strong>Amazon Web Services</strong> &mdash; our hosting provider, which also delivers
            our email and text messages. Data is stored in the United States.
          </li>
        </ul>
        <p className="mb-6">
          We may disclose information if required by law, or where necessary to protect
          someone&apos;s safety.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Retention</h2>
        <p className="mb-6">
          Registration records are kept for the host organization&apos;s records, including across
          events, so returning attendees do not have to re-enter their details. Sign-in codes are
          deleted once used or expired. If you want your information removed, contact us or the host
          organization; we will honour the request unless a record must be kept for financial or
          legal reasons.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Children</h2>
        <p className="mb-6">
          Children are registered by a parent or guardian as part of a family registration, not
          directly. We do not knowingly collect information directly from children. Contact details
          are held for the adult registering the family rather than for minors.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Security</h2>
        <p className="mb-6">
          Access to attendee data requires authentication and is limited by role. Sign-in uses a
          one-time code sent to the address or number on your registration rather than a stored
          password. Data is encrypted in transit. No system is perfectly secure, and we cannot
          guarantee absolute security.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Your choices</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Leave the mobile number blank, or decline SMS consent, and register normally</li>
          <li>Withdraw SMS consent at any time by replying STOP</li>
          <li>Ask us or the host organization to correct or delete your information</li>
          <li>Sign in by email instead of SMS at any time</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Changes</h2>
        <p className="mb-6">
          If we change this policy we will update the effective date above. Material changes will be
          noted on this page.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Contact</h2>
        <p className="mb-10">
          Questions about this policy, or requests about your information:{" "}
          <a href="mailto:info@goodvessel.org" className="text-blue-700 hover:underline">
            info@goodvessel.org
          </a>
        </p>

        <Link href="/" className="text-blue-700 hover:underline">
          &larr; Back to Good Vessel
        </Link>
      </main>

      <footer className="bg-blue-900 text-blue-200 text-sm text-center py-6 px-4 mt-auto">
        © {new Date().getFullYear()} Good Vessel Ministry · 好器皿. All rights reserved.
      </footer>
    </div>
  );
}
