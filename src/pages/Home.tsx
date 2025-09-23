import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Users,
  ShoppingCart,
  Palette,
  Search,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  Target,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { seoData } from "@/utils/seoData";
import { useEffect } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { homeServices } from "@/lib/data/services";
import { stats } from "@/lib/data/stats";
import { pricingPlans } from "@/lib/data/pricingPlans";
import { whyChooseUs } from "@/lib/data/whyChooseUs";
import { testimonials } from "@/lib/data/testimonials";
import { teamMembers } from "@/lib/data/teamMembers";

const Home = () => {
  // Icon mapping
  const iconMap: { [key: string]: JSX.Element } = {
    Globe: <Globe className="h-8 w-8" />,
    Smartphone: <Smartphone className="h-8 w-8" />,
    Users: <Users className="h-8 w-8" />,
    ShoppingCart: <ShoppingCart className="h-8 w-8" />,
    Palette: <Palette className="h-8 w-8" />,
    Search: <Search className="h-8 w-8" />,
  };

  const statsIconMap: { [key: string]: JSX.Element } = {
    Target: (
      <Target className="h-8 w-8 mx-auto mb-2 text-primary animate-bounce" />
    ),
    Users: (
      <Users className="h-8 w-8 mx-auto mb-2 text-primary animate-bounce" />
    ),
    Award: (
      <Award className="h-8 w-8 mx-auto mb-2 text-primary animate-bounce" />
    ),
    TrendingUp: (
      <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary animate-bounce" />
    ),
  };

  const whyChooseUsIconMap: { [key: string]: JSX.Element } = {
    CheckCircle: <CheckCircle className="h-12 w-12 text-primary" />,
    Star: <Star className="h-12 w-12 text-primary" />,
    Users: <Users className="h-12 w-12 text-primary" />,
  };

  useEffect(() => {
    // Add structured data for pricing plans
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Zeecode - Digital Excellence & Software Development",
      description:
        "Transform innovative ideas into powerful software solutions. Custom development, mobile apps, web applications, and cloud solutions.",
      url: window.location.href,
      mainEntity: {
        "@type": "Organization",
        name: "Zeecode",
        description:
          "Leading software development company specializing in custom solutions",
        offers: [
          {
            "@type": "Offer",
            name: "Starter Package",
            description: "Perfect for small businesses and startups",
            price: "2999",
            priceCurrency: "USD",
            category: "Software Development",
          },
          {
            "@type": "Offer",
            name: "Professional Package",
            description: "Ideal for growing businesses with advanced needs",
            price: "5999",
            priceCurrency: "USD",
            category: "Software Development",
          },
          {
            "@type": "Offer",
            name: "Enterprise Package",
            description: "Comprehensive solutions for large organizations",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "0",
              priceCurrency: "USD",
            },
            category: "Software Development",
          },
        ],
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <SEO {...seoData.home} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <header
          className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="banner"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70 dark:from-background/80 dark:via-background/70 dark:to-background/60"></div>
          <div className="absolute inset-0 bg-hero-gradient"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h1
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent drop-shadow-sm md:!leading-[78px]"
                style={{ textShadow: "var(--hero-text-glow)" }}
              >
                Crafting Digital Excellence
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We transform innovative ideas into powerful software solutions
                that drive business growth and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 animate-scale-in"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="animate-scale-in"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="hover:scale-110 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl rounded-lg p-6 bg-card/30 backdrop-blur-sm border border-border/20 group-hover:bg-card/60">
                    <div
                      className="group-hover:animate-pulse"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {statsIconMap[stat.icon]}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2 bg-gradient-primary bg-clip-text ">
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        duration={2500}
                        delay={index * 300}
                        className="drop-shadow-lg"
                      />
                    </div>
                    <div className="text-muted-foreground font-medium tracking-wide group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive software solutions designed to accelerate your
                digital transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-elegant group animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="text-primary mb-4 group-hover:animate-float">
                      {iconMap[service.icon]}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary"
          aria-labelledby="pricing-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2
                id="pricing-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Choose Your Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Flexible pricing options designed to scale with your business
                needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
              {pricingPlans.map((plan, index) => (
                <article
                  key={index}
                  className={`group relative animate-fade-in h-full`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card
                    className={`relative bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 hover:shadow-elegant transform hover:scale-105 hover:-translate-y-2 ${
                      plan.popular
                        ? "ring-2 ring-primary shadow-glow animate-pulse-soft"
                        : ""
                    } group-hover:bg-card/90 group-hover:shadow-2xl h-full flex flex-col`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg animate-glow">
                          <Star className="inline-block w-3 h-3 mr-1" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    <CardHeader className="text-center pb-2 group-hover:animate-float">
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {plan.name}
                      </CardTitle>
                      <div className="mt-4 transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl font-bold text-primary animate-number-count">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-muted-foreground ml-2">
                            /{plan.period}
                          </span>
                        )}
                      </div>
                      <CardDescription className="text-center mt-2 group-hover:text-foreground transition-colors duration-300">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="group-hover:translate-y-1 transition-transform duration-300 flex flex-col flex-1">
                      <ul className="space-y-3 mb-6 flex-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center animate-fade-in opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              animationDelay: `${
                                index * 0.1 + featureIndex * 0.05
                              }s`,
                              animationFillMode: "forwards",
                            }}
                          >
                            <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0 group-hover:animate-bounce" />
                            <span className="text-sm group-hover:text-foreground transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="mt-auto">
                        <Button
                          className={`w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:animate-pulse ${
                            plan.popular
                              ? "bg-gradient-primary hover:opacity-90 shadow-glow"
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                          aria-label={`Select ${plan.name} plan for ${plan.price}`}
                        >
                          {plan.name === "Enterprise"
                            ? "Contact Sales"
                            : "Get Started"}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in">
              <p className="text-muted-foreground mb-6">
                All plans include free consultation and project planning
                session.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8"
          aria-labelledby="why-choose-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2
                id="why-choose-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Why Choose Zeecode?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We deliver exceptional results through innovation, expertise,
                and unwavering commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div
                  key={index}
                  className="text-center group animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-6 group-hover:animate-float">
                    {whyChooseUsIconMap[feature.icon]}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2
                id="testimonials-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it - hear from our satisfied
                clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in hover:shadow-elegant transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          aria-labelledby="team-heading"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-secondary rounded-full blur-2xl opacity-15 animate-pulse delay-1000"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <header className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 animate-bounce">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2
                id="team-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent"
              >
                Meet Our Dream Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Brilliant minds, diverse backgrounds, one shared passion:
                crafting exceptional digital experiences that transform
                businesses and delight users.
              </p>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <article
                  key={member.name}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative">
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce delay-200"></div>

                    <Card className="h-full bg-card/40 backdrop-blur-lg border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-105 transform-gpu">
                      <CardHeader className="text-center pb-6 relative">
                        {/* Animated Avatar Container */}
                        <div className="relative mx-auto mb-6">
                          <div
                            className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} p-1 group-hover:animate-spin-slow transition-all duration-700`}
                          >
                            <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                              {member.avatar}
                            </div>
                          </div>
                          {/* Pulse Ring */}
                          <div
                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-30 animate-ping`}
                          ></div>
                        </div>

                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                          {member.name}
                        </CardTitle>
                        <CardDescription
                          className={`font-semibold text-transparent bg-gradient-to-r ${member.color} bg-clip-text`}
                        >
                          {member.role}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {member.bio}
                        </p>

                        {/* Expertise Tags */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm text-center">
                            Core Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {member.expertise.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="outline"
                                className={`text-xs border-border/50 hover:border-primary/50 bg-gradient-to-r ${member.color} bg-clip-text text-transparent hover:text-white hover:bg-gradient-to-r hover:${member.color} transition-all duration-300 transform hover:scale-105`}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-3 pt-2">
                          {Object.entries(member.social).map(
                            ([platform, url]) => (
                              <a
                                key={platform}
                                href={url}
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-sm hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                              >
                                {platform === "linkedin" && "💼"}
                                {platform === "github" && "💻"}
                                {platform === "twitter" && "🐦"}
                                {platform === "dribbble" && "🎨"}
                                {platform === "codepen" && "✏️"}
                                {platform === "medium" && "📝"}
                                {platform === "stackoverflow" && "❓"}
                              </a>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our expertise can help you achieve your digital
              goals.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 animate-scale-in"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
