import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/ui/gallery";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "@/components/SEO";
import { seoData } from "@/utils/seoData";
import { projects } from "@/lib/data/projects";

const Projects = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openGallery = (project: any) => {
    // Define different images for each project category
    const getProjectImages = (project: any) => {
      const baseImages = {
        "Web Development": [
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        ],
        "Mobile App Development": [
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
        ],
        "Social Media": [
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop&crop=center",
        ],
        "E-commerce": [
          "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop&crop=center",
        ],
        "Graphic Design": [
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center",
        ],
        SEO: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        ],
      };

      return baseImages[project.category] || [project.image];
    };

    const images = getProjectImages(project);
    const galleryItems = images.map((image, index) => ({
      id: index + 1,
      src: image,
      alt: `${project.title} - View ${index + 1}`,
      title: index === 0 ? project.title : `${project.title} - Detail ${index}`,
    }));

    setGalleryItems(galleryItems);
    setGalleryInitialIndex(0);
    setGalleryOpen(true);
  };

  return (
    <>
      <SEO {...seoData.projects} />

      <main className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of successful projects across various
              industries. Each project represents our commitment to excellence,
              innovation, and client satisfaction.
            </p>
          </header>

          {/* Category Filter */}
          <section className="mb-12" aria-labelledby="category-filter-heading">
            <h2 id="category-filter-heading" className="sr-only">
              Filter projects by category
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

          {/* Projects Grid */}
          <section className="mb-16" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">
              Project Portfolio
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <article key={project.id} className="group">
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-elegant group-hover:scale-[1.01]">
                    {/* Project Image */}
                    <div className="aspect-video rounded-t-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => openGallery(project)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${project.title} screenshots`}
                      />
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              project.status === "Live"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {project.year}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">
                          Key Features:
                        </h4>
                        <ul className="grid grid-cols-1 gap-1">
                          {project.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <li
                                key={index}
                                className="text-xs text-muted-foreground flex items-center"
                              >
                                <span className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          {project.features.length > 3 && (
                            <li className="text-xs text-muted-foreground">
                              +{project.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">
                          Project Metrics:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(project.metrics)
                            .slice(0, 4)
                            .map(([key, value]) => (
                              <div
                                key={key}
                                className="text-center p-2 bg-muted/50 rounded"
                              >
                                <div className="text-xs font-semibold text-primary">
                                  {value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {key}
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-primary hover:opacity-90"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} live site`}
                            >
                              Live Site
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} source code`}
                            >
                              Code
                              <Github className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="text-center bg-gradient-secondary rounded-lg md:p-12 p-6"
            aria-labelledby="cta-heading"
          >
            <h2
              id="cta-heading"
              className="md:text-3xl text-2xl font-bold mb-4"
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together.
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </section>
        </div>

        {/* Gallery Modal */}
        <Gallery
          items={galleryItems}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          initialIndex={galleryInitialIndex}
        />
      </main>
    </>
  );
};

export default Projects;
