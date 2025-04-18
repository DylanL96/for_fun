// lib/reddit.ts
const REDDIT_CLIENT_ID = process.env.REDDIT_CLIENT_ID!;
const REDDIT_SECRET = process.env.REDDIT_SECRET!;

export async function getAccessToken() {
  const creds = Buffer.from(`${REDDIT_CLIENT_ID}:${REDDIT_SECRET}`).toString('base64');

  const res = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${creds}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await res.json();
  return data.access_token;
}

export async function getHotPosts(subreddit: string) {
    const token = await getAccessToken();
  
    const res = await fetch(`https://oauth.reddit.com/r/${subreddit}/hot`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'nextjs-reddit-app/0.1',
      },
    });
  
    const data = await res.json();
    return data.data.children;
  }