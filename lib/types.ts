// Shared types for blog-related components
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  body: string;
  slug: string;
  published: boolean;
  createdAt: string;
  featuredImage: {
    image: {
      url: string;
    };
    altText: string;
  };
}

export interface BlogPostData {
  data: BlogPost[];
  success: boolean;
  message?: string;
}

export interface PageProps {
  params: {
    slug: string;
  };
}
