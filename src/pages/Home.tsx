import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Brain, 
  Lock, 
  Eye, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "AI-powered endpoint security that stops threats before they strike."
    },
    {
      icon: Brain,
      title: "Intelligent Detection",
      description: "Machine learning algorithms that adapt to emerging threats in real-time."
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive identity protection with continuous verification."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 surveillance with instant threat response and remediation."
    }
  ];

  const stats = [
    { value: "99.9%", label: "Threat Detection Rate" },
    { value: "500M+", label: "Endpoints Protected" },
    { value: "<1ms", label: "Response Time" },
    { value: "24/7", label: "Security Monitoring" }
  ];

  const testimonials = [
    {
      quote: "Nushkia Tech transformed our security posture completely. Their AI-driven approach is unmatched.",
      author: "Sarah Johnson",
      role: "CISO, TechCorp",
      rating: 5
    },
    {
      quote: "The threat intelligence platform has prevented numerous attacks. Highly recommended.",
      author: "Michael Chen",
      role: "Security Director, DataFlow",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30">
              Industry Leading Cybersecurity Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Next-Gen Security for the{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Digital Age
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Protect your enterprise with AI-powered cybersecurity solutions. 
              Stop advanced threats, secure endpoints, and maintain compliance with our unified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Advanced Security Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection powered by cutting-edge AI and machine learning technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-tech hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Platform Overview</Badge>
              <h2 className="text-4xl font-bold">
                Unified Security Platform
              </h2>
              <p className="text-lg text-muted-foreground">
                Our comprehensive cybersecurity platform integrates endpoint protection, 
                threat intelligence, and identity security into a single, powerful solution.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time threat detection and response",
                  "Advanced behavioral analytics",
                  "Automated incident remediation",
                  "Comprehensive compliance reporting"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-primary hover:opacity-90">
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-dark rounded-lg p-8 shadow-tech">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Security Dashboard</span>
                    <Badge className="bg-green-500">Online</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded p-3 text-center">
                      <div className="text-2xl font-bold text-green-400">99.9%</div>
                      <div className="text-xs text-gray-300">Uptime</div>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">1.2K</div>
                      <div className="text-xs text-gray-300">Endpoints</div>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                      <div className="text-2xl font-bold text-red-400">0</div>
                      <div className="text-xs text-gray-300">Threats</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground">
              See what security professionals say about our platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-tech">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Secure Your Business?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Join thousands of organizations that trust Nushkia Tech to protect their critical assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;