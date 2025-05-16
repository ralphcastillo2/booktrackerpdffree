import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Book Tracker PDF | Your Reading Companion',
  description: 'Learn about Book Tracker PDF - Your personal reading companion for tracking books, managing reading lists, and generating reading statistics.',
  keywords: 'about book tracker, reading companion, book tracking app, reading statistics',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 dark:from-green-900 dark:via-green-800 dark:to-green-700 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Book Tracker PDF</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At Book Tracker PDF, we&apos;re passionate about helping readers organize their reading journey. Our mission is to provide a simple, efficient, and user-friendly tool that helps book lovers track their reading progress, manage their reading lists, and gain insights into their reading habits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Reading Progress Tracking</h3>
              <p>Track your current reads, set goals, and monitor your progress with our intuitive interface.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Reading Lists</h3>
              <p>Organize your TBR (To Be Read) list and completed books in one place.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Reading Statistics</h3>
              <p>Get insights into your reading habits with detailed statistics and reports.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">PDF Export</h3>
              <p>Export your reading data and statistics in PDF format for easy sharing and record-keeping.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">User Privacy: We respect your privacy and keep your data secure</li>
            <li className="mb-2">Simplicity: We believe in making book tracking easy and enjoyable</li>
            <li className="mb-2">Innovation: We continuously improve our features based on user feedback</li>
            <li className="mb-2">Accessibility: We strive to make our tool accessible to all readers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We love hearing from our users! Whether you have suggestions, feedback, or just want to say hello, feel free to reach out to us at [Your Contact Email].
          </p>
        </section>
      </div>
    </div>
  );
} 