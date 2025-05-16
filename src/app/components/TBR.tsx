"use client";
import { useState } from "react";
import { Book } from "../types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type Props = {
  books: Book[];
  onAdd: (book: Book) => void;
  onStart: (id: string) => void;
  onSort: (books: Book[]) => void;
};

export default function TBR({ books, onAdd, onStart, onSort }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [totalPages, setTotalPages] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !author || !totalPages) return;

    const book: Book = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      author,
      totalPages: Number(totalPages),
      pagesRead: 0,
      status: "tbr",
      notes: [],
      favoriteQuotes: [],
    };

    onAdd(book);
    setTitle("");
    setAuthor("");
    setTotalPages("");
    setShowForm(false);
  }

  function handleDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(books);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onSort(items);
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">To Be Read</h2>
        <button
          className="btn-secondary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add to TBR"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white/80 dark:bg-gray-900/80 rounded shadow">
          <div className="grid gap-4">
            <div>
              <label htmlFor="tbr-title" className="block text-sm font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                id="tbr-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="tbr-author" className="block text-sm font-medium mb-1">
                Author
              </label>
              <input
                type="text"
                id="tbr-author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="input w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="tbr-pages" className="block text-sm font-medium mb-1">
                Total Pages
              </label>
              <input
                type="number"
                id="tbr-pages"
                value={totalPages}
                onChange={(e) => setTotalPages(e.target.value)}
                className="input w-full"
                min="1"
                required
              />
            </div>
            <button type="submit" className="btn-secondary w-full">
              Add to TBR
            </button>
          </div>
        </form>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tbr">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-4"
            >
              {books.map((book, index) => (
                <Draggable key={book.id} draggableId={book.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-white/80 dark:bg-gray-900/80 rounded shadow flex justify-between items-center"
                    >
                      <div>
                        <div className="font-bold">{book.title}</div>
                        <div className="text-sm text-gray-500">{book.author}</div>
                        <div className="text-xs text-gray-400">
                          {book.totalPages} pages
                        </div>
                      </div>
                      <button
                        className="btn-secondary"
                        onClick={() => onStart(book.id)}
                      >
                        Start Reading
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
} 