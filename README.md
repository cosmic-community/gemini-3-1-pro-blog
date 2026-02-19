# Modern Content Blog

A clean, responsive, and performance-optimized blog application built with Next.js 16 and Tailwind CSS, tailored for the "Posts, Authors, and Categories" content model.

![App Preview](https://imgix.cosmicjs.com/a86da110-0dd8-11f1-af80-2fcbe4ec62b4-photo-1515965885361-f1e0095517ea-1771535961248.jpg?w=1200&h=300&fit=crop&auto=format,compress)

## Features

- **Modern Stack**: Built with Next.js 16 (App Router), React 19, and Tailwind CSS.
- **Dynamic Routing**: Automatic pages for posts, authors, and categories.
- **Rich Content**: Markdown rendering for blog posts.
- **Relational Data**: Deep integration of Author and Category relationships.
- **Responsive Design**: Mobile-first approach looking great on all devices.
- **Performance**: Server Components for optimal speed and SEO.
- **Type Safety**: Full TypeScript integration matching your content model.

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69977db736718579e047dd4a&clone_repository=699781ce36718579e047dd6e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A blog with posts, authors, and categories"

### Code Generation Prompt

> Based on the content model I created for "A blog with posts, authors, and categories", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - The React Framework for the Web
- [React 19](https://react.dev/) - The library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Headless CMS SDK
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown renderer
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and project

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/modern-content-blog.git
    ```

2.  Install dependencies:
    ```bash
    bun install
    ```

3.  Configure environment variables:
    Create a `.env.local` file in the root directory and add your Cosmic credentials:
    ```env
    COSMIC_BUCKET_SLUG=your_bucket_slug
    COSMIC_READ_KEY=your_read_key
    COSMIC_WRITE_KEY=your_write_key
    ```

4.  Run the development server:
    ```bash
    bun run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Cosmic SDK Examples

This project uses the `@cosmicjs/sdk` to fetch data. Here are some examples of how data is retrieved:

### Fetching Posts

```typescript
import { cosmic } from '@/lib/cosmic'

export async function getPosts() {
  const { objects: posts } = await cosmic.objects
    .find({ type: 'posts' })
    .props('id,slug,title,metadata,created_at')
    .depth(1)
  return posts
}
```

### Fetching a Single Post

```typescript
export async function getPost(slug: string) {
  const { object: post } = await cosmic.objects
    .findOne({
      type: 'posts',
      slug
    })
    .props('id,slug,title,metadata,created_at')
    .depth(1)
  return post
}
```

## Deployment Options

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push your code to a Git repository (GitHub, GitLab, BitBucket).
2.  Import your project into Vercel.
3.  Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`) during the import process.
4.  Click **Deploy**.

### Netlify

1.  Push your code to a Git repository.
2.  Import your project into Netlify.
3.  Set the build command to `next build` and publish directory to `.next`.
4.  Add your environment variables in Site Settings > Build & Deploy > Environment.
5.  Click **Deploy Site**.

<!-- README_END -->