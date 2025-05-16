import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Book Tracker PDF - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about Book Tracker PDF - Your personal reading companion.',
  keywords: 'book tracker FAQ, reading app questions, book tracking help, reading statistics FAQ',
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 dark:from-green-900 dark:via-green-800 dark:to-green-700 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <div className="space-y-6">
          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">What is Book Tracker PDF?</h2>
            <p>
              Book Tracker PDF is a web-based tool that helps you track your reading progress, manage your reading lists, and generate reading statistics. It&apos;s designed to be simple, efficient, and user-friendly for book lovers.
            </p>
          </section>

          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">How do I start tracking my books?</h2>
            <p>
              Simply use the &quot;Add Book&quot; form on the homepage to add a new book. You can specify the book&apos;s title, author, and current status (TBR, Active, or Completed). Once added, you can track your progress and update the status as needed.
            </p>
          </section>

          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Is my data stored securely?</h2>
            <p>
              Yes, all your data is stored locally on your device. We don&apos;t store any personal information on our servers. Your reading data remains under your control at all times.
            </p>
          </section>

          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Can I export my reading data?</h2>
            <p>
              Yes! You can export your reading data and statistics as a PDF file using the &quot;Export PDF&quot; button on the homepage. This allows you to keep a record of your reading journey or share it with others.
            </p>
          </section>

          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">How do I update my reading progress?</h2>
            <p>
              For active books, you can update your progress by clicking on the book in the &quot;Active Reading&quot; section. You can modify the current page, status, and other details as needed.
            </p>
          </section>

          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Can I organize my TBR list?</h2>
            <p>
              Yes! You can add books to your TBR (To Be Read) list and even reorder them by dragging and dropping. This helps you prioritize your future reads.
            </p>
          </section>

          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">What statistics are available?</h2>
            <p>
              Book Tracker PDF provides various statistics including total books read, books in progress, completed books, and pages read. These statistics help you understand your reading habits better.
            </p>
          </section>

          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Is the service free to use?</h2>
            <p>
              Yes, Book Tracker PDF is completely free to use. We may display ads to support the service, but all features are available without any cost.
            </p>
          </section>

          <section className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">How can I get help or report an issue?</h2>
            <p>
              If you need help or want to report an issue, please contact us at [Your Contact Email]. We&apos;re always happy to assist our users and improve our service based on feedback.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 