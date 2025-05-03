import { Stats } from "../types";

export default function StatsComponent({ stats }: { stats: Stats }) {
  return (
    <section className="flex flex-wrap gap-4 justify-center my-4">
      <StatCard label="Total Books" value={stats.totalBooks} />
      <StatCard label="Completed" value={stats.booksCompleted} />
      <StatCard label="In Progress" value={stats.booksInProgress} />
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 min-w-[100px] text-center shadow">
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}