"use client";
import { Book } from "../types";

type Props = {
  books: Book[];
};

export default function CompletedBooks({ books }: Props) {
  return (
    <section className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Completed Books</h2>
      <div className="flex flex-col gap-4">
        {books.length === 0 && (
          <p className="text-gray-500">No completed books yet.</p>
        )}
        {books.map((book) => (
          <div
            key={book.id}
            className="p-4 bg-white/80 dark:bg-gray-900/80 rounded shadow"
          >
            <div className="font-bold">{book.title}</div>
            <div className="text-sm text-gray-500">{book.author}</div>
            <div className="text-xs text-gray-400">
              Completed on: {book.startDate}
            </div>
            {book.notes.length > 0 && (
              <div className="mt-2">
                <div className="font-semibold text-sm">Notes:</div>
                <ul className="list-disc ml-4 text-sm">
                  {book.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
            {book.favoriteQuotes.length > 0 && (
              <div className="mt-2">
                <div className="font-semibold text-sm">Favorite Quotes:</div>
                <ul className="list-disc ml-4 text-sm">
                  {book.favoriteQuotes.map((quote, i) => (
                    <li key={i}>&ldquo;{quote}&rdquo;</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 