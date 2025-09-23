import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  Users,
  ShoppingCart,
  Palette,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoData } from "@/utils/seoData";
import { services } from "@/lib/data/services";

const Services = () => {
  // Icon mapping for services
  const iconMap: { [key: string]: JSX.Element } = {
    Globe: <Globe className="h-12 w-12" />,
    Smartphone: <Smartphone className="h-12 w-12" />,
    Users: <Users className="h-12 w-12" />,
    ShoppingCart: <ShoppingCart className="h-12 w-12" />,
    Palette: <Palette className="h-12 w-12" />,
    Search: <Search className="h-12 w-12" />,
  };

  return (
    <>
      <SEO {...seoData.services} />

      <main className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions designed to accelerate your
              digital transformation journey and drive business growth.
            </p>
          </header>

          {/* Services Grid */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">
              Software Development Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-elegant"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="text-primary mb-4" aria-hidden="true">
                        {iconMap[service.icon]}
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="text-center bg-gradient-secondary rounded-lg p-12"
            aria-labelledby="cta-heading"
          >
            <h2 id="cta-heading" className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and how we can help you
              achieve your goals.
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
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Services;
