import React from 'react';


const PrivacyPolicy = () => (
  <main className="min-h-screen bg-white flex items-center justify-center py-8 px-2 md:px-8">
    <section className="max-w-3xl w-full bg-gradient-to-br from-[#e8edee] via-white to-[#e8edee] rounded-2xl shadow-2xl p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#004D40] via-[#008080] to-[#00BCD4] bg-clip-text text-transparent">Privacy Policy</h1>
      <p className="text-lg text-gray-700 mb-8">At Nepal Motor, your privacy and trust are our top priorities. This Privacy Policy describes how we collect, use, and safeguard your personal information when you use our website and services.</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><span className="font-semibold">Personal Data:</span> Name, email address, phone number, city, and vehicle details provided during registration, test drive booking, or vehicle exchange.</li>
            <li><span className="font-semibold">Usage Data:</span> Pages visited, actions taken, and device/browser information for analytics and improvement.</li>
            <li><span className="font-semibold">Cookies:</span> We use cookies to enhance your experience and remember your preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To provide, maintain, and improve our services.</li>
            <li>To communicate with you regarding your requests, bookings, and support.</li>
            <li>To personalize your experience and recommend relevant vehicles or content.</li>
            <li>For analytics, security, and fraud prevention.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">3. Data Sharing & Disclosure</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We do <span className="font-semibold">not</span> sell or rent your personal data to third parties.</li>
            <li>We may share data with trusted partners for service delivery (e.g., payment, hosting) under strict confidentiality.</li>
            <li>We may disclose information if required by law or to protect our rights and users.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">4. Data Security</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We use industry-standard security measures to protect your data.</li>
            <li>Access to your data is restricted to authorized personnel only.</li>
            <li>We regularly review and update our security practices.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">5. Your Rights & Choices</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You may access, update, or delete your personal information at any time by contacting us.</li>
            <li>You can opt out of marketing communications via the unsubscribe link or by contacting us.</li>
            <li>For cookie preferences, adjust your browser settings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">6. Changes to This Policy</h2>
          <p className="text-gray-700">We may update this Privacy Policy from time to time. Changes will be posted on this page with the effective date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">7. Contact Us</h2>
          <p className="text-gray-700">If you have any questions or concerns about your privacy, please contact us at <a href="mailto:privacy@nepalmotor.com" className="text-[#008080] underline">privacy@nepalmotor.com</a>.</p>
        </section>
      </div>
    </section>
  </main>
);

export default PrivacyPolicy;
