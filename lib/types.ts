export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    description?: string;
  };
}

export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    bio: string;
    avatar: CosmicImage;
  };
}

export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    excerpt: string;
    content: string;
    cover_image: CosmicImage;
    author: Author;
    categories: Category[];
  };
}