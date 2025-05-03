"use client";
import { useState } from "react";
import { Book } from "../types";

type Props = {
  books: Book[];
  onUpdate: (book: Book) => void;
};

export default function ActiveReading({ books, onUpdate }: Props) {
  return (
    <section className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Currently Reading</h2>
      <div className="flex flex-col gap-4">
        {books.length === 0 && (
          <p className="text-gray-500">No active books yet. Add one above!</p>
        )}
        {books.map((book) => (
          <BookCard key={book.id} book={book} onUpdate={onUpdate} />
        ))}
      </div>
    </section>
  );
}

function BookCard({ book, onUpdate }: { book: Book; onUpdate: (b: Book) => void }) {
  const [pages, setPages] = useState(book.pagesRead.toString());
  const [showNotes, setShowNotes] = useState(false);
  const [note, setNote] = useState("");
  const [quote, setQuote] = useState("");

  const percent = Math.round((book.pagesRead / book.totalPages) * 100);

  function handleBlur() {
    const num = Number(pages);
    if (!isNaN(num) && num >= 0 && num <= book.totalPages) {
      onUpdate({ ...book, pagesRead: num });
    } else {
      setPages(book.pagesRead.toString());
    }
  }

  function handleAddNote() {
    if (note.trim()) {
      onUpdate({ ...book, notes: [...book.notes, note] });
      setNote("");
    }
  }

  function handleAddQuote() {
    if (quote.trim()) {
      onUpdate({ ...book, favoriteQuotes: [...book.favoriteQuotes, quote] });
      setQuote("");
    }
  }

  return (
    <div className="p-4 bg-white/80 dark:bg-gray-900/80 rounded shadow flex flex-col gap-2">
      <div className="font-bold">{book.title}</div>
      <div className="text-sm text-gray-500">{book.author}</div>
      <div className="text-xs text-gray-400">Started: {book.startDate}</div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs">Progress:</span>
        <input
          type="number"
          min={0}
          max={book.totalPages}
          value={pages}
          onChange={e => setPages(e.target.value)}
          onBlur={handleBlur}
          className="input w-20"
        />
        <span className="text-xs">/ {book.totalPages} pages</span>
        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded">
          <div
            className="h-2 bg-blue-500 rounded transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-xs ml-2">{percent}%</span>
        <button className="btn-secondary" onClick={() => onUpdate({ ...book, status: "completed" })}>
  Mark as Complete
</button>
      </div>
      <button
        className="text-blue-500 text-xs underline self-start"
        onClick={() => setShowNotes((v) => !v)}
      >
        {showNotes ? "Hide Notes" : "Show Notes"}
      </button>
      {showNotes && (
        <div className="mt-2 flex flex-col gap-2 w-full">
          <textarea
            className="input"
            placeholder="Add a note..."
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={2}
          />
          <button className="btn-secondary w-fit" onClick={handleAddNote}>
            Save Note
          </button>
          <div>
            <div className="font-semibold text-xs mb-1">Notes:</div>
            <ul className="list-disc ml-4 text-xs">
              {book.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
          <textarea
            className="input mt-2"
            placeholder="Add a favorite quote..."
            value={quote}
            onChange={e => setQuote(e.target.value)}
            rows={2}
          />
          <button className="btn-secondary w-fit" onClick={handleAddQuote}>
            Save Quote
          </button>
          <div>
            <div className="font-semibold text-xs mb-1 mt-2">Favorite Quotes:</div>
            <ul className="list-disc ml-4 text-xs">
              {book.favoriteQuotes.map((q, i) => (
                <li key={i}>"{q}"</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}