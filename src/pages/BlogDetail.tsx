import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  Loader2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/lib/data/blogPosts";

const BlogDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Use shared blog posts data
  const posts = blogPosts;

  const post = posts.find((p) => p.id.toString() === id) || posts[0];
  const relatedPosts = posts
    .filter((p) => p.id.toString() !== id && p.category === post.category)
    .slice(0, 3);

  useEffect(() => {
    // Add structured data for blog post
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Zeecode",
      },
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": window.location.href,
      },
      url: window.location.href,
      wordCount: post.content.split(" ").length,
      timeRequired: post.readingTime,
      articleSection: post.category,
      keywords: `${post.category}, software development, technology, ${post.author}`,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const response = await fetch("https://formspree.io/f/xblaaapd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newsletterEmail,
          _subject: "New newsletter subscription from blog detail",
        }),
      });

      if (response.ok) {
        toast({
          title: "Successfully subscribed!",
          description:
            "Thank you for subscribing to our newsletter. You'll receive our latest updates.",
        });
        setNewsletterEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Zeecode Technology Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`${post.category}, software development, technology, ${post.author}, programming, tech insights`}
        />

        {/* Open Graph tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={post.image} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:section" content={post.category} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta
          name="twitter:creator"
          content={`@${post.author.replace(" ", "").toLowerCase()}`}
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <main className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <article className="mb-16">
            <header className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Article
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <figure className="mb-8 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={`Featured image for ${post.title}`}
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
            </figure>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:bg-gradient-primary prose-headings:bg-clip-text prose-headings:text-transparent prose-p:text-muted-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <aside className="border-t pt-16">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                    <article className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-elegant overflow-hidden">
                      <Card className="h-full">
                        <div className="h-32 bg-muted overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={`Related article: ${relatedPost.title}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <Badge
                            variant="secondary"
                            className="w-fit mb-2 text-xs"
                          >
                            {relatedPost.category}
                          </Badge>
                          <CardTitle className="text-sm line-clamp-2">
                            {relatedPost.title}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </article>
                  </Link>
                ))}
              </div>
            </aside>
          )}

          {/* Newsletter CTA */}
          <section
            className="mt-16 text-center bg-gradient-secondary rounded-lg p-8"
            aria-labelledby="newsletter-cta"
          >
            <h2 id="newsletter-cta" className="text-2xl font-bold mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to get more insights delivered to your
              inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-primary hover:opacity-90"
                disabled={isSubscribing}
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </Button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default BlogDetail;
