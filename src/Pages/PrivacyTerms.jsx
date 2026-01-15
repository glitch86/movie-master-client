import React from "react";

const PrivacyTerms = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 ">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Privacy Policy & Terms of Service
      </h1>

      <p className="text-sm  text-center mb-10">
        Last updated: January 15, 2026
      </p>

      {/* Privacy Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

        <p className="mb-4">
          Welcome to <strong>Movie Master</strong>. Your privacy is important to
          us. This policy explains how we collect, use, and protect your
          information.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          1. Information We Collect
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Personal information such as name and email</li>
          <li>Usage data like pages visited and interactions</li>
          <li>Technical data including IP address and browser type</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>To provide and maintain our services</li>
          <li>To improve user experience</li>
          <li>To ensure platform security</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">3. Cookies</h3>
        <p>
          We use cookies to enhance your experience. You may disable cookies in
          your browser settings.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">4. Data Security</h3>
        <p>
          We use reasonable security measures to protect your data, but no
          system is 100% secure.
        </p>
      </section>

      {/* Terms of Service */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>

        <h3 className="text-lg font-semibold mt-4 mb-2">
          1. Acceptance of Terms
        </h3>
        <p>
          By using Movie Master, you agree to these terms. If you do not agree,
          please discontinue use.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">
          2. User Responsibilities
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use the platform lawfully</li>
          <li>Do not misuse or attempt to hack the service</li>
          <li>Do not upload harmful or illegal content</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">3. Accounts</h3>
        <p>
          You are responsible for maintaining your account security. We may
          suspend accounts that violate our policies.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">4. Disclaimer</h3>
        <p>
          Movie Master is provided “as is”. We do not guarantee uninterrupted or
          error-free service.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">
          5. Limitation of Liability
        </h3>
        <p>
          Movie Master is not liable for any damages arising from the use of
          this platform.
        </p>
      </section>
    </div>
  );
};

export default PrivacyTerms;
