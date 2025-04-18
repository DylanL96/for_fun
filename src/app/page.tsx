'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">🚀 Welcome to Reddit Explorer</h1>

      <ul className="space-y-4">
        <li>
          <Link
            href="/reddit"
            className="text-blue-600 underline hover:text-blue-800"
          >
            🔍 View Top Posts from r/reactjs
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-blue-600 underline hover:text-blue-800"
          >
            📘 About This Project
          </Link>
        </li>
      </ul>
    </main>
  );
}
