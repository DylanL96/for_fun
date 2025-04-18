// app/reddit/page.tsx
'use client';

import { useEffect, useState } from 'react';

export default function RedditPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/reddit');
      const data = await res.json();
      console.log('Reddit API response: ', data)
      setPosts(data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🔥 r/reactjs Hot Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((p, idx) => (
            <li key={idx} className="border rounded p-4 hover:bg-gray-100">
              <a
                href={`https://reddit.com${p.data.permalink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-lg font-semibold">{p.data.title}</h2>
                <p className="text-sm text-gray-600">Score: {p.data.score}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
