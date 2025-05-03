"use client";
import { Book } from "../types";
import jsPDF from "jspdf";

export default function ExportPDF({ books }: { books: Book[] }) {
  function handleExport() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("BookTrack Export", 10, 10);

    let y = 20;
    books.forEach((book, idx) => {
      doc.setFontSize(12);
      doc.text(`${idx + 1}. ${book.title} by ${book.author}`, 10, y);
      y += 7;
      doc.text(`Pages: ${book.pagesRead}/${book.totalPages} | Status: ${book.status}`, 12, y);
      y += 7;
      if (book.notes.length > 0) {
        doc.text("Notes:", 14, y);
        y += 6;
        book.notes.forEach((note, nidx) => {
          doc.text(`- ${note}`, 16, y);
          y += 6;
        });
      }
      if (book.favoriteQuotes.length > 0) {
        doc.text("Favorite Quotes:", 14, y);
        y += 6;
        book.favoriteQuotes.forEach((quote, qidx) => {
          doc.text(`- "${quote}"`, 16, y);
          y += 6;
        });
      }
      y += 4;
      // Add new page if needed
      if (y > 270) {
        doc.addPage();
        y = 10;
      }
    });

    doc.save("booktrack_export.pdf");
  }

  return (
    <button className="btn-secondary mx-auto mt-4" onClick={handleExport}>
      Export as PDF
    </button>
  );
}