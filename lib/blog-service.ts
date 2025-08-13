// Blog service for fetching blog data from API

export interface BlogImage {
  url: string;
  publicId: string;
}

export interface BlogAuthor {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: BlogImage;
  author: BlogAuthor;
  category: string;
  tags: string[];
  status: string;
  views: number;
  readTime: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogResponse {
  blogs: BlogPost[];
  pagination: BlogPagination;
}

const API_URL = 'https://ad-landing-blog-server.vercel.app/api/blogs';

export async function getBlogs(category?: string): Promise<BlogResponse> {
  try {
    let url = API_URL;
    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    }
    
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    // Return empty data structure on error
    return {
      blogs: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalBlogs: 0,
        hasNext: false,
        hasPrev: false
      }
    };
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(API_URL, { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    
    const data: BlogResponse = await response.json();
    const blog = data.blogs.find(blog => blog.slug === slug);
    
    return blog || null;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return null;
  }
}

export async function getBlogCategories(): Promise<string[]> {
  try {
    const response = await fetch(API_URL, { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    
    const data: BlogResponse = await response.json();
    // Extract unique categories
    const categories = [...new Set(data.blogs.map(blog => blog.category))];
    
    return categories;
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return [];
  }
}