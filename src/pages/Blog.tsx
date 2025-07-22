import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, User, ArrowRight, Clock, BookOpen } from "lucide-react";

const Blog = () => {
  const categories = ["All", "Threat Intelligence", "Product Updates", "Industry News", "Best Practices"];
  
  const featuredPost = {
    title: "The Evolution of AI in Cybersecurity: 2024 Trends and Predictions",
    excerpt: "Explore how artificial intelligence is reshaping the cybersecurity landscape and what organizations need to know to stay ahead of emerging threats.",
    author: "Dr. Sarah Kim",
    date: "January 15, 2024",
    category: "Threat Intelligence",
    readTime: "8 min read",
    image: "photo-1551288049-bebda4e38f71"
  };

  const blogPosts = [
    {
      title: "Zero Trust Architecture: Implementation Best Practices",
      excerpt: "A comprehensive guide to implementing zero trust security in your organization, including common pitfalls and success strategies.",
      author: "Michael Thompson",
      date: "January 12, 2024",
      category: "Best Practices",
      readTime: "6 min read",
      image: "photo-1563013544-824ae1b704d3"
    },
    {
      title: "Nushkia Tech Platform Update: Enhanced Threat Detection",
      excerpt: "Learn about the latest improvements to our AI-powered threat detection engine and new dashboard features.",
      author: "Product Team",
      date: "January 10, 2024",
      category: "Product Updates",
      readTime: "4 min read",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "2024 Cybersecurity Threat Landscape Report",
      excerpt: "Our annual analysis of global cybersecurity threats, attack vectors, and industry trends based on billions of data points.",
      author: "Research Team",
      date: "January 8, 2024",
      category: "Threat Intelligence",
      readTime: "12 min read",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      title: "Ransomware Evolution: New Tactics and Defense Strategies",
      excerpt: "Understanding the latest ransomware techniques and how to build effective defenses against these evolving threats.",
      author: "Alex Rodriguez",
      date: "January 5, 2024",
      category: "Threat Intelligence",
      readTime: "7 min read",
      image: "photo-1556075798-4825dfaaf498"
    },
    {
      title: "Cloud Security Fundamentals for Modern Enterprises",
      excerpt: "Essential cloud security practices every organization should implement when moving to cloud infrastructure.",
      author: "Lisa Chen",
      date: "January 3, 2024",
      category: "Best Practices",
      readTime: "9 min read",
      image: "photo-1451187580459-43490279c0fa"
    },
    {
      title: "Industry Spotlight: Healthcare Cybersecurity Challenges",
      excerpt: "Examining the unique cybersecurity challenges facing healthcare organizations and specialized solutions.",
      author: "Guest Author",
      date: "December 28, 2023",
      category: "Industry News",
      readTime: "5 min read",
      image: "photo-1576091160399-112ba8d25d1f"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30">
              Nushkia Tech Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Cybersecurity{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest cybersecurity trends, threat intelligence, 
              and expert insights from our security research team.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Button variant="secondary">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          <Card className="border-0 shadow-tech overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">{featuredPost.category}</Badge>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="bg-gradient-primary hover:opacity-90 w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          {/* Category Tabs */}
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="All" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-0 shadow-tech hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-primary/5"></div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <BookOpen className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Other category tabs would show filtered content */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">Articles in {category}</h3>
                  <p className="text-muted-foreground mb-6">
                    Showing all articles tagged with "{category}"
                  </p>
                  <Button variant="outline">Load Articles</Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-bold">Stay Informed</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest cybersecurity insights, 
            threat alerts, and product updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-75">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
