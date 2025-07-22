import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Zap, Globe, Award, Briefcase, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to making cybersecurity accessible and effective for organizations of all sizes."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Constantly pushing boundaries with cutting-edge AI and machine learning technologies."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Every decision we make is guided by our commitment to customer success and satisfaction."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Protecting businesses worldwide with scalable, reliable security solutions."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Chief Executive Officer",
      bio: "Former cybersecurity executive with 15+ years leading security teams at Fortune 500 companies.",
      image: "photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Dr. Sarah Kim",
      role: "Chief Technology Officer",
      bio: "AI/ML researcher with Ph.D. in Computer Science and expertise in threat detection algorithms.",
      image: "photo-1494790108755-2616b612b786"
    },
    {
      name: "Michael Thompson",
      role: "Chief Security Officer",
      bio: "20+ years in cybersecurity with experience at leading security firms and government agencies.",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Lisa Chen",
      role: "VP of Engineering",
      bio: "Full-stack engineering leader with expertise in scalable security platform development.",
      image: "photo-1438761681033-6461ffad8d80"
    }
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Nushkia Tech established with vision to revolutionize cybersecurity" },
    { year: "2019", title: "First Product Launch", description: "Launched AI-powered endpoint protection platform" },
    { year: "2020", title: "Series A Funding", description: "Raised $25M to accelerate product development" },
    { year: "2021", title: "Global Expansion", description: "Expanded operations to Europe and Asia-Pacific" },
    { year: "2022", title: "1M+ Endpoints", description: "Reached milestone of protecting over 1 million endpoints" },
    { year: "2023", title: "Industry Recognition", description: "Named Leader in Gartner Magic Quadrant" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30">
              About Nushkia Tech
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Pioneering the Future of{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded in 2018, Nushkia Tech has emerged as a global leader in AI-powered cybersecurity solutions. 
              We protect millions of endpoints worldwide with our innovative threat detection and response platform.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To democratize advanced cybersecurity by making enterprise-grade protection 
                  accessible to organizations of all sizes through innovative AI and machine learning technologies.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  A world where every organization, regardless of size or technical expertise, 
                  can defend against sophisticated cyber threats with confidence and ease.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-primary rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold">500M+</div>
                <div className="text-sm opacity-90">Endpoints Protected</div>
              </div>
              <div className="bg-tech-dark rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm opacity-90">Countries Served</div>
              </div>
              <div className="bg-tech-dark rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Uptime SLA</div>
              </div>
              <div className="bg-gradient-primary rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-tech text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionaries driving innovation in cybersecurity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-tech overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to secure the digital world.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <Badge variant="outline" className="text-primary border-primary">
                      {milestone.year}
                    </Badge>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-1"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-bold">Join Our Mission</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Be part of the team that's shaping the future of cybersecurity. Explore career opportunities at Nushkia Tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              View Careers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;