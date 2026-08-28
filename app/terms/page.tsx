import Link from "next/link";

export const metadata = {
  title: "Terms of Service · Good Vessel",
  description:
    "Terms governing use of the Good Vessel event registration and attendee platform.",
};

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-800">
          Good Vessel · 好器皿
        </Link>
        <Link href="/privacy" className="text-sm font-medium text-gray-600 hover:text-blue-700">
          Privacy Policy
        </Link>
      </nav>

      <main className="py-12 px-6 max-w-3xl mx-auto w-full text-gray-700 leading-relaxed">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Effective 28 August 2026</p>

        <p className="mb-8">
          These terms govern your use of the event registration and attendee platform operated by
          Good Vessel (&ldquo;we&rdquo;, &ldquo;us&rdquo;) at goodvessel.org and its subdomains. By
          registering for an event or using the attendee portal, you agree to them. If you do not
          agree, please do not use the platform.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Our role</h2>
        <p className="mb-6">
          We provide the software. Events themselves are run by the organizations that host them
          (each a &ldquo;host organization&rdquo;). When you register, you enter into a relationship
          with that host organization regarding attendance, fees, refunds, conduct, and the event
          itself. Those matters are between you and them. We process your information on their
          behalf, as described in our{" "}
          <Link href="/privacy" className="text-blue-700 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Registering</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Provide accurate information, and keep it current.</li>
          <li>
            Register others &mdash; family members or minors in your care &mdash; only where you are
            authorized to do so, and only with their knowledge where they are old enough to give it.
          </li>
          <li>
            Do not register on behalf of someone who has not asked you to, and do not enter another
            person&apos;s contact details as your own.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Signing in</h2>
        <p className="mb-6">
          The attendee portal signs you in with a one-time code sent to the email address or mobile
          number on your registration, rather than a password. Keep access to that address or number
          secure. Codes expire, allow a limited number of attempts, and are for your use only.
          Anyone with access to your inbox or phone can sign in as you.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Text messages</h2>
        <p className="mb-6">
          Providing a mobile number is optional, and consenting to SMS is never required in order to
          register. If you opt in, you may receive one-time passcodes and verification codes.
          Message frequency varies; message and data rates may apply. Reply HELP for help or STOP to
          stop messages. Carriers are not liable for delayed or undelivered messages.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Acceptable use</h2>
        <p className="mb-3">Do not:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Attempt to access accounts, records, or data that are not yours</li>
          <li>Probe, scan, or interfere with the platform or its security</li>
          <li>Use automated means to submit registrations or harvest information</li>
          <li>Upload anything unlawful, or anything you do not have the right to share</li>
          <li>Use the platform to send unsolicited messages of any kind</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Payments</h2>
        <p className="mb-6">
          Registration fees, financial assistance, and refunds are set and administered by the host
          organization. We record payments on their behalf but are not a party to them. Direct
          questions about amounts, deadlines, or refunds to the host organization.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Availability</h2>
        <p className="mb-6">
          We aim to keep the platform available but do not guarantee uninterrupted service. We may
          suspend access for maintenance, or to protect the platform or its users. Features may
          change.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Disclaimer and liability</h2>
        <p className="mb-6">
          The platform is provided &ldquo;as is&rdquo;, without warranties of any kind to the extent
          permitted by law. To the fullest extent permitted by law, we are not liable for indirect,
          incidental, or consequential damages arising from your use of the platform. Nothing here
          limits liability that cannot be limited by law.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Ending access</h2>
        <p className="mb-6">
          We may suspend or end access for anyone who breaches these terms or puts the platform or
          its users at risk. You may stop using the platform at any time; see the{" "}
          <Link href="/privacy" className="text-blue-700 hover:underline">
            Privacy Policy
          </Link>{" "}
          for how to request removal of your information.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Changes</h2>
        <p className="mb-6">
          If we change these terms we will update the effective date above. Continuing to use the
          platform after a change means you accept the updated terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Governing law</h2>
        <p className="mb-6">
          These terms are governed by the laws of the State of Illinois, United States, without
          regard to its conflict of law rules.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Contact</h2>
        <p className="mb-10">
          Questions about these terms:{" "}
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
