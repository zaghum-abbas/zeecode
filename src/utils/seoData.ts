export const seoData = {
  home: {
    title: "Zeecode - Premium Web Development & Digital Solutions",
    description:
      "Transform your digital presence with Zeecode. We deliver cutting-edge web development, mobile apps, and digital marketing solutions that drive results.",
    keywords:
      "web development, mobile apps, digital marketing, React, Node.js, SEO, UI/UX design, custom software",
  },
  services: {
    title: "Zeecode - Web Development Services",
    description:
      "Comprehensive web development services including React apps, mobile development, UI/UX design, and digital marketing. Get a free consultation today.",
    keywords:
      "web development services, React development, mobile app development, UI/UX design, digital marketing, SEO services",
  },
  projects: {
    title: "Our Portfolio - Web Development Projects",
    description:
      "Explore our portfolio of successful web development projects. See how we've helped businesses grow with custom software solutions and digital experiences.",
    keywords:
      "web development portfolio, React projects, mobile apps, case studies, client work, software development",
  },
  blog: {
    title: "Tech Blog - Web Development Insights",
    description:
      "Stay updated with the latest web development trends, React tutorials, and digital marketing strategies. Expert insights from the Zeecode team.",
    keywords:
      "web development blog, React tutorials, JavaScript tips, digital marketing, SEO strategies, tech insights",
  },
  contact: {
    title: "Contact Zeecode - Get Your Project Started",
    description:
      "Ready to transform your digital presence? Contact Zeecode for a free consultation. Let's discuss your web development and digital marketing needs.",
    keywords:
      "contact web developer, free consultation, web development quote, digital marketing services, project inquiry",
  },
};

export const generateBlogPostSEO = (post: {
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  author: string;
}) => ({
  title: `${post.title} | Zeecode Blog`,
  description: post.excerpt,
  keywords: post.tags.join(", "),
  type: "article",
  article: {
    author: post.author,
    publishedTime: post.publishedAt,
    tags: post.tags,
  },
});
