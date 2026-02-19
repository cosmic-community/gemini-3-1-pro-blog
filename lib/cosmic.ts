import { createBucketClient } from '@cosmicjs/sdk';
import { Post, Author, Category } from './types';

// Initialize the Cosmic SDK client
export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || 'gemini-31-pro-blog-production',
  readKey: process.env.COSMIC_READ_KEY || 'EsvqYNXcles3URNqKapPQI6O2aeGZRQBF6LQgroD41Wj0kzaX0',
  writeKey: process.env.COSMIC_WRITE_KEY || '',
});

// Helper to check for 404s
function is404(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'status' in error && (error as any).status === 404;
}

// Data fetching functions
export async function getAllPosts(): Promise<Post[]> {
  try {
    const data = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'slug', 'title', 'metadata', 'created_at', 'modified_at'])
      .depth(1);
    return data.objects as Post[];
  } catch (error) {
    if (is404(error)) return [];
    throw error;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const data = await cosmic.objects
      .findOne({ type: 'posts', slug })
      .props(['id', 'slug', 'title', 'metadata', 'created_at', 'modified_at'])
      .depth(1);
    return data.object as Post;
  } catch (error) {
    if (is404(error)) return null;
    throw error;
  }
}

export async function getAllAuthors(): Promise<Author[]> {
  try {
    const data = await cosmic.objects
      .find({ type: 'authors' })
      .props(['id', 'slug', 'title', 'metadata', 'created_at'])
      .depth(1);
    return data.objects as Author[];
  } catch (error) {
    if (is404(error)) return [];
    throw error;
  }
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  try {
    const data = await cosmic.objects
      .findOne({ type: 'authors', slug })
      .props(['id', 'slug', 'title', 'metadata', 'created_at'])
      .depth(1);
    return data.object as Author;
  } catch (error) {
    if (is404(error)) return null;
    throw error;
  }
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const data = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'slug', 'title', 'metadata', 'created_at'])
      .depth(1);
    return data.objects as Category[];
  } catch (error) {
    if (is404(error)) return [];
    throw error;
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const data = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .props(['id', 'slug', 'title', 'metadata', 'created_at'])
      .depth(1);
    return data.object as Category;
  } catch (error) {
    if (is404(error)) return null;
    throw error;
  }
}

export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
  try {
    const data = await cosmic.objects
      .find({ 
        type: 'posts',
        'metadata.author': authorId
      })
      .props(['id', 'slug', 'title', 'metadata', 'created_at'])
      .depth(1);
    return data.objects as Post[];
  } catch (error) {
    if (is404(error)) return [];
    throw error;
  }
}

export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  try {
    const data = await cosmic.objects
      .find({ 
        type: 'posts',
        'metadata.categories': categoryId
      })
      .props(['id', 'slug', 'title', 'metadata', 'created_at'])
      .depth(1);
    return data.objects as Post[];
  } catch (error) {
    if (is404(error)) return [];
    throw error;
  }
}