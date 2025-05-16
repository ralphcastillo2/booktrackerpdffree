"use client";
import { useState } from "react";
import { Book } from "../types";

type Props = {
  onAdd: (book: Book) => void;
};

export default function BookForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [status, setStatus] = useState<"active" | "tbr">("active");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !author || !totalPages) return;

    const book: Book = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      author,
      totalPages: Number(totalPages),
      pagesRead: 0,
      status,
      startDate: status === "active" ? new Date().toISOString().slice(0, 10) : undefined,
      notes: [],
      favoriteQuotes: [],
    };

    onAdd(book);
    setTitle("");
    setAuthor("");
    setTotalPages("");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-4 bg-white/80 dark:bg-gray-900/80 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
      <div className="grid gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-sm font-medium mb-1">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="pages" className="block text-sm font-medium mb-1">
            Total Pages
          </label>
          <input
            type="number"
            id="pages"
            value={totalPages}
            onChange={(e) => setTotalPages(e.target.value)}
            className="input w-full"
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as "active" | "tbr")}
            className="input w-full"
          >
            <option value="active">Start Reading</option>
            <option value="tbr">Add to TBR</option>
          </select>
        </div>
        <button type="submit" className="btn-secondary w-full">
          Add Book
        </button>
      </div>
    </form>
  );
} 