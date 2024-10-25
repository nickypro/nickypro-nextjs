'use client';

import React, { useState } from 'react';
import { getUserPosts, PostData } from '@/lib/lesswrong';
import '@/assets/scss/list-posts.scss';
import ParticleBackground from '@/components/particle-background';

// Helper functions
function cleanExcerpt(htmlBody: string): string {
  const sliced = htmlBody.slice(0, 3000);
  const withoutTags = sliced.replace(/<[^>]*>/g, '');
  return withoutTags.slice(0, 300) + '...';
}

function extractImageFromHtml(htmlBody: string): string {
  const imgTag = htmlBody.match(/<img[^>]*src="([^"]+)"[^>]*>/);
  return imgTag ? imgTag[1] : '';
}

// Components
function PostImage({ post }: { post: PostData }) {
  const imageUrl = post?.socialPreviewImageUrl || extractImageFromHtml(post.htmlBody);

  if (!imageUrl) {
    return <div className="post-image" style={{ backgroundColor: 'lightblue', height: '80px' }}></div>;
  }

  return <img className="post-image" src={imageUrl} alt={post.title} />;
}

function PostCard({ post }: { post: PostData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="post-card">
      <div className="post-content">
        <PostImage post={post} />
        <br />
        <h3>
            {post.title}
            {expanded && (
              <button className="close-button" onClick={() => setExpanded(false)}>
                Close X
              </button>
            )}
        </h3>
        <div className="post-meta">
          <p>
            Posted {new Date(post.postedAt).toLocaleDateString()} on
            <a href={post.linkUrl} target="_blank" rel="noreferrer" style={{ color: '#7cc', textDecoration: 'underline', marginLeft: '0.3rem' }}> LessWrong</a>
          </p>
        </div>
        {expanded ? (
          <div className="post-full-content">
            <div dangerouslySetInnerHTML={{ __html: post.htmlBody }} />
          </div>
        ) : (
          <p className="post-excerpt">
            {post.socialPreviewData?.text || cleanExcerpt(post.htmlBody)}
          </p>
        )}
        {expanded && (
        <div className="post-links">
          <a className="post-link" href={`${post.linkUrl}#comments`} target="_blank" rel="noreferrer">
            View comments on LessWrong
          </a>
        </div>)}
        <div className="post-links">
          <button className="post-link" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </div>
  );
}

function PostsList() {
  const [postsData, setPostsData] = useState<{ posts: PostData[], name: string } | null>(null);

  React.useEffect(() => {
    async function fetchPosts() {
      const data = await getUserPosts();
      setPostsData(data);
    }
    fetchPosts();
  }, []);

  if (!postsData) {
    return (
      <div className="posts-grid">
        <div className="post-card" style={{ padding: '4rem 2rem' }}>Loading Posts...</div>
      </div>
    );
  }

  const { posts, name } = postsData;

  return (
    <div className="posts-grid">
    {posts.map((post) => (
        <PostCard key={post.title} post={post} />
    ))}
    </div>
  );
}

export default function PostsPage() {
  return (
    <div className="posts-container">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <ParticleBackground />
      </div>
      <h1 style={{ position: 'relative', zIndex: 1, marginTop: '8rem', marginBottom: '4rem' }}>My Posts</h1>
      <PostsList />
    </div>
  );
}
