import { Book } from "../types";

export default function CompletedBooks({ books }: { books: Book[] }) {
  return (
    <section className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Completed Books</h2>
      <div className="flex flex-col gap-4">
        {books.length === 0 && (
          <p className="text-gray-500">No completed books yet.</p>
        )}
        {books.map((book) => (
          <div
            key={book.id}
            className="p-4 bg-white/80 dark:bg-gray-900/80 rounded shadow flex flex-col gap-2"
          >
            <div className="font-bold">{book.title}</div>
            <div className="text-sm text-gray-500">{book.author}</div>
            <div className="text-xs text-gray-400">Started: {book.startDate}</div>
            <div className="text-xs text-gray-400">Pages: {book.totalPages}</div>
            <div className="text-xs text-gray-400">Notes: {book.notes.length}</div>
            <div className="text-xs text-gray-400">Quotes: {book.favoriteQuotes.length}</div>
          </div>
        ))}
      </div>
    </section>
  );
}