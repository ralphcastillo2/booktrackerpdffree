export type Book = {
    id: string;
    title: string;
    author: string;
    totalPages: number;
    startDate: string;
    pagesRead: number;
    notes: string[];
    favoriteQuotes: string[];
    status: 'active' | 'completed' | 'tbr';
  };
  
  export type Stats = {
    totalBooks: number;
    pagesReadThisMonth: number;
    booksCompleted: number;
    booksInProgress: number;
  };