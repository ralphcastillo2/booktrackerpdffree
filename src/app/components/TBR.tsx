"use client";
import { useState } from "react";
import { Book } from "../types";

type Props = {
  books: Book[];
  onAdd: (book: Book) => void;
  onStart: (id: string) => void;
  onSort: (books: Book[]) => void;
};

export default function TBR({ books, onAdd, onStart, onSort }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleAdd() {
    if (!title || !author) return;
    onAdd({
      id: Date.now().toString(),
      title,
      author,
      totalPages: 0,
      startDate: "",
      pagesRead: 0,
      notes: [],
      favoriteQuotes: [],
      status: "tbr",
    });
    setTitle("");
    setAuthor("");
  }

  function move(index: number, dir: -1 | 1) {
    const newBooks = [...books];
    const [removed] = newBooks.splice(index, 1);
    newBooks.splice(index + dir, 0, removed);
    onSort(newBooks);
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">To Be Read (TBR)</h2>
      <div className="flex gap-2 mb-2">
        <input className="input" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="input" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
        <button className="btn-primary" onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {books.map((book, i) => (
          <li key={book.id} className="flex items-center gap-2 mb-1">
            <span className="flex-1">{book.title} <span className="text-xs text-gray-500">by {book.author}</span></span>
            <button className="btn-secondary" onClick={() => onStart(book.id)}>Start Reading</button>
            <button disabled={i === 0} onClick={() => move(i, -1)} className="text-xs">↑</button>
            <button disabled={i === books.length - 1} onClick={() => move(i, 1)} className="text-xs">↓</button>
          </li>
        ))}
      </ul>
    </section>
  );
}