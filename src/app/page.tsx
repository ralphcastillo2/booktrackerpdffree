import { Metadata } from 'next';
import HomeContent from './components/HomeContent';

export const metadata: Metadata = {
  title: 'Book Tracker PDF - Your Personal Reading Companion',
  description: 'Track your reading progress, manage your reading lists, and generate reading statistics with Book Tracker PDF. The perfect tool for book lovers.',
  keywords: 'book tracker, reading companion, reading statistics, book tracking app, reading progress',
};

export default function Home() {
  return <HomeContent />;
}
