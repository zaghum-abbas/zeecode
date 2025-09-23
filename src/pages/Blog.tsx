import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, ArrowRight, User, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "@/components/SEO";
import { seoData } from "@/utils/seoData";
import { blogPosts } from "@/lib/data/blogPosts";

const Blog = () => {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description:
          "Thank you for subscribing to our newsletter. You'll receive the latest updates and insights.",
      });
      setNewsletterEmail("");
      setIsSubscribing(false);
    }, 1500);
  };

  return (
    <>
      <SEO {...seoData.blog} />

      <main className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent !leading-[60px]">
              Tech Insights & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights
              in software development, cloud computing, and digital
              transformation.
            </p>
          </header>

          {/* Category Filter */}
          <section className="mb-12" aria-labelledby="category-filter-heading">
            <h2 id="category-filter-heading" className="sr-only">
              Filter articles by category
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-16" aria-labelledby="blog-posts-heading">
            <h2 id="blog-posts-heading" className="sr-only">
              Blog Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-elegant group-hover:scale-[1.02]">
                    <div className="aspect-video bg-gradient-secondary rounded-t-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📝</div>
                        <p className="text-sm text-muted-foreground">
                          {post.category}
                        </p>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readingTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="line-clamp-3 text-sm">
                        {post.excerpt}
                      </CardDescription>

                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="h-4 w-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </time>
                        </div>
                      </div>

                      <Link to={`/blog/${post.id}`}>
                        <Button
                          variant="ghost"
                          className="w-full mt-4 group-hover:bg-primary/10 transition-colors"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section
            className="bg-gradient-secondary rounded-lg p-12 text-center"
            aria-labelledby="newsletter-heading"
          >
            <h2 id="newsletter-heading" className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights,
              tutorials, and industry updates delivered to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
                aria-label="Email address for newsletter subscription"
              />
              <Button
                type="submit"
                disabled={isSubscribing || !newsletterEmail}
                className="bg-gradient-primary hover:opacity-90"
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Blog;
