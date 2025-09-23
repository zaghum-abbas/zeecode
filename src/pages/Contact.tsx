import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import FormspreeInstructions from "@/components/forms/FormspreeInstructions";
import SEO from "@/components/SEO";
import { seoData } from "@/utils/seoData";
import { useEffect } from "react";
import Map from "@/components/Map";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnnbbbop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          _subject: `New contact form submission from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description:
            "Thank you for your message. We'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "hello@zeecode.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+92311-7085377",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      content:
        "2nd floor, Faisal Rasheed Rd, opp. Chase Value, D Ground Block B People's Colony No 1, Faisalabad",
      description: "Come say hello at our HQ",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Weekend support available",
    },
  ];

  return (
    <>
      <SEO {...seoData.contact} />
      <main className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. Send
              us a message and we'll respond as soon as possible.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Setup Instructions */}
            {/* <section className="lg:col-span-3">
              <FormspreeInstructions />
            </section> */}

            {/* Contact Form */}
            <section
              className="lg:col-span-2"
              aria-labelledby="contact-form-heading"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle id="contact-form-heading" className="text-2xl">
                    Send us a message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            First Name *
                          </label>
                          <Input
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Last Name *
                          </label>
                          <Input
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Company
                        </label>
                        <Input
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Service Interested In
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">
                              Web Development (MERN Stack)
                            </SelectItem>
                            <SelectItem value="mobile-app">
                              Mobile App Development (React Native)
                            </SelectItem>
                            <SelectItem value="social-media">
                              Social Media
                            </SelectItem>
                            <SelectItem value="ecommerce">
                              E-commerce
                            </SelectItem>
                            <SelectItem value="graphic-design">
                              Graphic Design
                            </SelectItem>
                            <SelectItem value="seo">SEO</SelectItem>
                            <SelectItem value="consulting">
                              Consulting
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Project Budget
                        </label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            handleInputChange("budget", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                            <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                            <SelectItem value="50k-100k">
                              $50k - $100k
                            </SelectItem>
                            <SelectItem value="100k+">$100k+</SelectItem>
                            <SelectItem value="not-sure">
                              Not sure yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Message *
                        </label>
                        <Textarea
                          placeholder="Tell us about your project, requirements, and timeline..."
                          className="min-h-[120px]"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-primary hover:opacity-90"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <section
              className="space-y-6"
              aria-labelledby="contact-info-heading"
            >
              <h2 id="contact-info-heading" className="sr-only">
                Contact Information
              </h2>
              <div className="bg-gradient-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  Let's start a conversation
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're here to help and answer any question you might have. We
                  look forward to hearing from you.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <address key={index} className="not-italic">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary mt-1" aria-hidden="true">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-foreground mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </address>
              ))}

              {/* Map placeholder */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                <Map />
              </Card>
            </section>
          </div>

          {/* FAQ Section */}
          <section className="mt-20" aria-labelledby="faq-heading">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to questions you may have.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">
                    How long does a typical project take?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Project timelines vary based on scope and complexity. Simple
                    projects may take 4-8 weeks, while complex enterprise
                    solutions can take 3-6 months or longer.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Do you provide ongoing support?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive support and maintenance packages
                    to ensure your software continues to perform optimally after
                    launch.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">
                    What technologies do you work with?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work with a wide range of modern technologies including
                    React, Node.js, Python, cloud platforms, and mobile
                    frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">
                    How do you ensure project quality?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We follow industry best practices including code reviews,
                    automated testing, continuous integration, and regular
                    client feedback cycles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;
