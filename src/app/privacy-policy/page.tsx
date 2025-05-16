import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Book Tracker PDF',
  description: 'Privacy Policy for Book Tracker PDF - Learn how we collect, use, and protect your data.',
  keywords: 'privacy policy, book tracker, data protection, user privacy',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 dark:from-green-900 dark:via-green-800 dark:to-green-700 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            Book Tracker PDF collects minimal personal information necessary for the functionality of our service. This includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Book reading data (titles, progress, dates)</li>
            <li>User preferences and settings</li>
            <li>Basic usage statistics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our book tracking services</li>
            <li>Generate reading statistics and reports</li>
            <li>Enhance user experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
          <p className="mb-4">
            All data is stored locally on your device. We do not store your personal information on our servers. Your data remains under your control at all times.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
          <p className="mb-4">
            We use Google AdSense for advertising. Google may collect and process data according to their privacy policy. You can review Google&apos;s privacy policy at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your data</li>
            <li>Export your data</li>
            <li>Delete your data</li>
            <li>Opt-out of data collection</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at [Your Contact Email].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>
      </div>
    </div>
  );
} 