// app/api/reddit/route.ts
import { getHotPosts } from '@/lib/reddit';

export async function GET() {
  const posts = await getHotPosts('reactjs');
  return Response.json(posts);
}
