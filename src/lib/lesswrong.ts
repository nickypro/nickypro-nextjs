import { NextResponse } from 'next/server';

const API_URL = 'https://www.lesswrong.com/graphql';

const headers = {
  "accept": "application/json",
  "accept-encoding": "gzip, deflate, br",
  "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
  "content-type": "application/json",
  "origin": "https://www.lesswrong.com",
  "referer": "https://www.lesswrong.com/graphiql",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
};

export interface UserData {
  displayName: string;
  username: string;
  slug: string;
  _id: string;
}

export interface PostData {
  title: string;
  maxBaseScore: number;
  author: string;
  coauthors: { displayName: string }[];
  linkUrl: string;
  postedAt: string;
  modifiedAt: string;
  htmlBody: string;
  socialPreviewData: { imageUrl: string, text: string };
  socialPreviewImageUrl: string;
}

async function queryGraphQL(query: string): Promise<any> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ query }),
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error querying GraphQL:', error);
    throw error;
  }
}

export async function getUserPosts(
  userId: string = "MDDhxT3EekBMYfQ8D",
  limit: number = 100, // not implemented
  offset: number = 0 // not implemented
): Promise<{ posts: PostData[], name: string, totalCount: number }> {
  const query = `
    query GetUserAndPosts {
      user(input: {selector: {_id: "${userId}"}}) {
        result {
          displayName
          username
          slug
          _id
        }
      }
      posts: posts(input: {
        terms: {userId: "${userId}"},
      }) {
        results {
          title
          maxBaseScore
          author
          coauthors { displayName }
          linkUrl
          postedAt
          modifiedAt
          htmlBody
          socialPreviewData { imageUrl, text }
          socialPreviewImageUrl
        }
        totalCount
      }
    }
  `;

  // Print the exact request being sent
  console.log('GraphQL Request:');
  console.log('Query:', query);

  const data = await queryGraphQL(query);

  const { user, posts } = data.data;
  const { displayName: name } = user.result;
  const postResults = posts.results;
  console.log(postResults);
  const totalCount = posts.totalCount;

  // sort by postedAt descending (reverse chronological)
  postResults.sort((a: PostData, b: PostData) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());

  console.log(`Loaded ${postResults.length} posts for ${name} (${userId}), limit: ${limit}, offset: ${offset}, total: ${totalCount}`);

  // Add a cache-control header to the response
  if (typeof window === 'undefined') {
    // This code will only run on the server side
    NextResponse.next().headers.set('Cache-Control', 's-maxage=60, stale-while-revalidate');
  }

  return { posts: postResults, name, totalCount };
}
