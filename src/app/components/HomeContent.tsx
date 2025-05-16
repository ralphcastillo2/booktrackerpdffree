"use client";
import { useState } from "react";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";
import BookForm from "./BookForm";
import ActiveReading from "./ActiveReading";
import TBR from "./TBR";
import CompletedBooks from "./CompletedBooks";
import StatsComponent from "./Stats";
import { Book, Stats } from "../types";
import ExportPDF from "./ExportPDF";
import Link from 'next/link';

export default function HomeContent() {
  const [books, setBooks] = useState<Book[]>([]);

  function addBook(book: Book) {
    setBooks([...books, book]);
  }

  function updateBook(updated: Book) {
    setBooks(books.map(b => (b.id === updated.id ? updated : b)));
  }

  function addTBR(book: Book) {
    setBooks([...books, book]);
  }

  function startTBR(id: string) {
    setBooks(
      books.map((b) =>
        b.id === id
          ? { ...b, status: "active", startDate: new Date().toISOString().slice(0, 10) }
          : b
      )
    );
  }

  function sortTBR(newTBR: Book[]) {
    const others = books.filter((b) => b.status !== "tbr");
    setBooks([...others, ...newTBR]);
  }

  const activeBooks = books.filter((b) => b.status === "active");
  const tbrBooks = books.filter((b) => b.status === "tbr");
  const completedBooks = books.filter((b) => b.status === "completed");

  const stats: Stats = {
    totalBooks: books.length,
    booksCompleted: completedBooks.length,
    booksInProgress: activeBooks.length,
    pagesReadThisMonth: 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 dark:from-green-900 dark:via-green-800 dark:to-green-700 text-gray-900 dark:text-gray-100 transition-colors relative">
      <ThemeToggle />
      <Header />
      <nav className="max-w-2xl mx-auto px-4 py-2 flex justify-center space-x-6 text-sm">
        <Link href="/about" className="hover:text-green-700 dark:hover:text-green-300 transition-colors">
          About
        </Link>
        <Link href="/faq" className="hover:text-green-700 dark:hover:text-green-300 transition-colors">
          FAQ
        </Link>
        <Link href="/privacy-policy" className="hover:text-green-700 dark:hover:text-green-300 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-green-700 dark:hover:text-green-300 transition-colors">
          Terms & Conditions
        </Link>
      </nav>
      <StatsComponent stats={stats} />
      <BookForm onAdd={addBook} />
      <ActiveReading books={activeBooks} onUpdate={updateBook} />
      <TBR books={tbrBooks} onAdd={addTBR} onStart={startTBR} onSort={sortTBR} />
      <CompletedBooks books={completedBooks} />
      <div className="max-w-2xl mx-auto flex justify-center mt-4">
        <ExportPDF books={books} />
      </div>
      <div className="text-center mt-8 text-gray-700 dark:text-gray-300">
        Welcome to Book Tracker PDF! 📚✨
      </div>
    </div>
  );
} 