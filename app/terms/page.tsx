import React from 'react';


const TermsOfUse = () => (
  <main className="min-h-screen bg-white flex items-center justify-center py-8 px-2 md:px-8">
    <section className="max-w-3xl w-full bg-gradient-to-br from-[#e8edee] via-white to-[#e8edee] rounded-2xl shadow-2xl p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#004D40] via-[#008080] to-[#00BCD4] bg-clip-text text-transparent">Terms of Use</h1>
      <p className="text-lg text-gray-700 mb-8">Welcome to Nepal Motor. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Use. Please read them carefully.</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">1. Acceptance of Terms</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>By using Nepal Motor, you confirm that you are at least 18 years old or have parental consent.</li>
            <li>You agree to abide by all applicable laws and regulations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">2. Services Provided</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We offer car browsing, filtering, comparison, test drive booking, vehicle exchange, and access to automotive news and blogs.</li>
            <li>All vehicle information, prices, and offers are provided for informational purposes and may change without notice.</li>
            <li>We do not guarantee the availability, accuracy, or completeness of vehicle listings or offers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide accurate and truthful information when using forms or booking services.</li>
            <li>Do not misuse, copy, or distribute content, images, or data from Nepal Motor without permission.</li>
            <li>Do not attempt to disrupt, hack, or harm the website or other users.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">4. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>All content, logos, images, and code are the property of Nepal Motor or its licensors.</li>
            <li>You may not reproduce, modify, or distribute any part of the website without written consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">5. Limitation of Liability</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Nepal Motor is not liable for any direct, indirect, or incidental damages resulting from your use of the website or services.</li>
            <li>All transactions, bookings, and exchanges are subject to verification and may be declined at our discretion.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">6. Changes to Terms</h2>
          <p className="text-gray-700">We may update these Terms of Use at any time. Changes will be posted on this page with the effective date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#008080] mb-2">7. Contact & Support</h2>
          <p className="text-gray-700">For questions or support, contact us at <a href="mailto:terms@nepalmotor.com" className="text-[#008080] underline">terms@nepalmotor.com</a>.</p>
        </section>
      </div>
    </section>
  </main>
);

export default TermsOfUse;
