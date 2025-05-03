"use client";
import { useState } from "react";
import { Book } from "../types";

type Props = {
  onAdd: (book: Book) => void;
};

export default function BookForm({ onAdd }: Props) {
  const [form, setForm] = useState({ title: "", author: "", totalPages: "", startDate: "" });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.author || !form.totalPages || !form.startDate) {
      setError("All fields are required.");
      return;
    }
    if (isNaN(Number(form.totalPages)) || Number(form.totalPages) <= 0) {
      setError("Total pages must be a positive number.");
      return;
    }
    onAdd({
      id: Date.now().toString(),
      title: form.title,
      author: form.author,
      totalPages: Number(form.totalPages),
      startDate: form.startDate,
      pagesRead: 0,
      notes: [],
      favoriteQuotes: [],
      status: "active",
    });
    setForm({ title: "", author: "", totalPages: "", startDate: "" });
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 bg-white/80 dark:bg-gray-900/80 rounded shadow max-w-md mx-auto mt-8">
      <input
        name="title"
        placeholder="Book Title"
        value={form.title}
        onChange={handleChange}
        className="input"
      />
      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        className="input"
      />
      <input
        name="totalPages"
        placeholder="Total Pages"
        value={form.totalPages}
        onChange={handleChange}
        className="input"
        type="number"
        min="1"
        inputMode="numeric"
        pattern="[0-9]*"
      />
      <input
        name="startDate"
        placeholder="Start Date"
        value={form.startDate}
        onChange={handleChange}
        className="input"
        type="date"
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="btn-primary">Add Book</button>
    </form>
  );
}