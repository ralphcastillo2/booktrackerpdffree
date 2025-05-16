import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Book Tracker PDF',
  description: 'Terms and Conditions for using Book Tracker PDF - Understand our service terms and user agreements.',
  keywords: 'terms and conditions, book tracker, user agreement, service terms',
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 dark:from-green-900 dark:via-green-800 dark:to-green-700 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using Book Tracker PDF, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p className="mb-4">
            Book Tracker PDF is a tool designed to help users track their reading progress, manage their reading lists, and generate reading statistics. The service is provided &quot;as is&quot; and may be modified or discontinued at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p className="mb-4">
            Users are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Maintaining the accuracy of their reading data</li>
            <li>Protecting their device and data</li>
            <li>Using the service in compliance with applicable laws</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All content and materials available on Book Tracker PDF, including but not limited to text, graphics, logos, and software, are the property of Book Tracker PDF and are protected by applicable copyright and trademark law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            Book Tracker PDF shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms and Conditions on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p className="mb-4">
            For any questions about these Terms and Conditions, please contact us at [Your Contact Email].
          </p>
        </section>
      </div>
    </div>
  );
} 