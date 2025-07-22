import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Cloud, 
  Users, 
  Brain, 
  Lock, 
  Eye, 
  Zap,
  CheckCircle,
  ArrowRight,
  Server,
  Smartphone,
  Monitor
} from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "endpoint",
      name: "Endpoint Security",
      icon: Shield,
      description: "Advanced endpoint protection powered by AI",
      longDescription: "Our flagship endpoint security solution provides comprehensive protection against malware, ransomware, and zero-day attacks using advanced behavioral analysis and machine learning.",
      features: [
        "Real-time threat detection and prevention",
        "Behavioral analysis and ML algorithms",
        "Automated incident response",
        "Centralized management console",
        "Compliance reporting",
        "24/7 monitoring and support"
      ],
      pricing: "Starting at $5/endpoint/month"
    },
    {
      id: "cloud",
      name: "Cloud Security",
      icon: Cloud,
      description: "Comprehensive cloud workload protection",
      longDescription: "Secure your cloud infrastructure with our multi-cloud security platform that provides visibility, compliance, and threat protection across AWS, Azure, and Google Cloud.",
      features: [
        "Multi-cloud security posture management",
        "Container and serverless protection",
        "Cloud compliance monitoring",
        "Infrastructure as code security",
        "API security and monitoring",
        "DevSecOps integration"
      ],
      pricing: "Starting at $10/workload/month"
    },
    {
      id: "identity",
      name: "Identity Protection",
      icon: Users,
      description: "Zero-trust identity and access management",
      longDescription: "Protect user identities and prevent unauthorized access with our comprehensive identity security platform featuring multi-factor authentication and behavioral analytics.",
      features: [
        "Multi-factor authentication",
        "Single sign-on (SSO)",
        "Privileged access management",
        "Identity governance",
        "Risk-based authentication",
        "Directory service integration"
      ],
      pricing: "Starting at $3/user/month"
    },
    {
      id: "intelligence",
      name: "Threat Intelligence",
      icon: Brain,
      description: "AI-powered threat intelligence platform",
      longDescription: "Stay ahead of emerging threats with our comprehensive threat intelligence platform that provides real-time insights and proactive threat hunting capabilities.",
      features: [
        "Global threat intelligence feeds",
        "IOC and TTP analysis",
        "Threat hunting and investigation",
        "Custom threat indicators",
        "Intelligence sharing and collaboration",
        "Automated threat enrichment"
      ],
      pricing: "Starting at $15/analyst/month"
    }
  ];

  const integrations = [
    { name: "Microsoft 365", category: "Productivity" },
    { name: "AWS", category: "Cloud" },
    { name: "Splunk", category: "SIEM" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Slack", category: "Communication" },
    { name: "Jira", category: "Project Management" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30">
              Security Products
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Comprehensive Security{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your entire digital infrastructure with our suite of AI-powered 
              cybersecurity products designed for modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="border-0 shadow-tech hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <Tabs defaultValue="endpoint" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {products.map((product) => (
                <TabsTrigger key={product.id} value={product.id} className="flex items-center gap-2">
                  <product.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{product.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {products.map((product) => (
              <TabsContent key={product.id} value={product.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                        <Badge variant="secondary" className="mt-1">{product.pricing}</Badge>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {product.longDescription}
                    </p>
                    <div className="space-y-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button className="bg-gradient-primary hover:opacity-90">
                        Start Free Trial
                      </Button>
                      <Button variant="outline">
                        View Pricing
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-dark rounded-lg p-8 shadow-tech">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{product.name} Dashboard</span>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 rounded p-4 text-center">
                            <Monitor className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                            <div className="text-lg font-bold text-white">1,247</div>
                            <div className="text-xs text-gray-300">Assets</div>
                          </div>
                          <div className="bg-white/10 rounded p-4 text-center">
                            <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                            <div className="text-lg font-bold text-white">99.9%</div>
                            <div className="text-xs text-gray-300">Protected</div>
                          </div>
                          <div className="bg-white/10 rounded p-4 text-center">
                            <Eye className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                            <div className="text-lg font-bold text-white">24/7</div>
                            <div className="text-xs text-gray-300">Monitoring</div>
                          </div>
                          <div className="bg-white/10 rounded p-4 text-center">
                            <Zap className="h-8 w-8 text-red-400 mx-auto mb-2" />
                            <div className="text-lg font-bold text-white">0</div>
                            <div className="text-xs text-gray-300">Threats</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing security stack and business applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-0 shadow-tech text-center p-6 hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-sm">{integration.name}</div>
                <div className="text-xs text-muted-foreground">{integration.category}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Experience the power of our security platform with a free trial. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
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

export default Products;