export type Book = {
  id: string;
  title: string;
  author: string;
  totalPages: number;
  pagesRead: number;
  status: "active" | "completed" | "tbr";
  startDate?: string;
  notes: string[];
  favoriteQuotes: string[];
}; 