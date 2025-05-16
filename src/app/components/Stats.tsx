"use client";
import { Stats as StatsType } from "../types";

type Props = {
  stats: StatsType;
};

export default function Stats({ stats }: Props) {
  return (
    <div className="max-w-2xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="bg-white/80 dark:bg-gray-900/80 p-4 rounded shadow text-center">
        <div className="text-2xl font-bold">{stats.totalBooks}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Total Books</div>
      </div>
      <div className="bg-white/80 dark:bg-gray-900/80 p-4 rounded shadow text-center">
        <div className="text-2xl font-bold">{stats.booksCompleted}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Completed</div>
      </div>
      <div className="bg-white/80 dark:bg-gray-900/80 p-4 rounded shadow text-center">
        <div className="text-2xl font-bold">{stats.booksInProgress}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">In Progress</div>
      </div>
      <div className="bg-white/80 dark:bg-gray-900/80 p-4 rounded shadow text-center">
        <div className="text-2xl font-bold">{stats.pagesReadThisMonth}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Pages This Month</div>
      </div>
    </div>
  );
} 