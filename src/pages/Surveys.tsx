import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Users, 
  TrendingUp, 
  Clock, 
  Award, 
  Download,
  CheckCircle,
  ArrowRight,
  PieChart,
  FileText
} from "lucide-react";

const Surveys = () => {
  const activeSurveys = [
    {
      title: "2024 Cybersecurity Preparedness Assessment",
      description: "Help us understand the current state of cybersecurity readiness across industries.",
      participants: 1247,
      target: 2000,
      timeRemaining: "14 days",
      incentive: "Receive free security assessment report",
      category: "Industry Research"
    },
    {
      title: "Remote Work Security Challenges",
      description: "Share your experience with remote work security implementations and challenges.",
      participants: 834,
      target: 1500,
      timeRemaining: "21 days",
      incentive: "$50 Amazon gift card (random draw)",
      category: "Workplace Security"
    },
    {
      title: "AI in Cybersecurity Adoption Survey",
      description: "Explore how organizations are adopting AI technologies for cybersecurity purposes.",
      participants: 567,
      target: 1000,
      timeRemaining: "28 days",
      incentive: "Early access to AI security whitepaper",
      category: "Technology Adoption"
    }
  ];

  const completedSurveys = [
    {
      title: "2023 Ransomware Impact Study",
      participants: 2156,
      completedDate: "December 2023",
      keyFindings: [
        "67% of organizations experienced at least one ransomware attempt",
        "Average recovery time decreased to 8.5 days",
        "80% improved backup strategies post-incident"
      ],
      downloadLink: "#"
    },
    {
      title: "Cloud Security Posture Analysis",
      participants: 1889,
      completedDate: "November 2023",
      keyFindings: [
        "92% of companies use multi-cloud environments",
        "45% lack comprehensive cloud security strategy",
        "Cloud-native security tools adoption increased 34%"
      ],
      downloadLink: "#"
    },
    {
      title: "CISO Priorities and Challenges 2023",
      participants: 1534,
      completedDate: "October 2023",
      keyFindings: [
        "Budget constraints remain top challenge (78%)",
        "Skills shortage affects 69% of organizations",
        "Zero Trust implementation priority for 84%"
      ],
      downloadLink: "#"
    }
  ];

  const benefits = [
    {
      icon: BarChart,
      title: "Industry Insights",
      description: "Gain valuable insights into industry trends and benchmarks for your security posture."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Contribute to important research and receive recognition for your participation."
    },
    {
      icon: FileText,
      title: "Exclusive Reports",
      description: "Get early access to comprehensive survey reports and analysis."
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow security professionals and share experiences."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30">
              Security Research Surveys
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Shape the Future of{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Participate in our research surveys to help the cybersecurity community understand 
              emerging threats, industry trends, and security challenges facing organizations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Take Survey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Why Participate?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your insights help drive cybersecurity research and improve industry standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-tech text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Survey Tabs */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="active" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Active Surveys
              </TabsTrigger>
              <TabsTrigger value="completed" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Completed Studies
              </TabsTrigger>
            </TabsList>

            {/* Active Surveys */}
            <TabsContent value="active" className="space-y-8">
              <div className="grid gap-8">
                {activeSurveys.map((survey, index) => (
                  <Card key={index} className="border-0 shadow-tech">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{survey.category}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {survey.timeRemaining} left
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{survey.title}</CardTitle>
                      <CardDescription className="text-lg">{survey.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress: {survey.participants} / {survey.target} participants</span>
                            <span>{Math.round((survey.participants / survey.target) * 100)}%</span>
                          </div>
                          <Progress value={(survey.participants / survey.target) * 100} className="h-2" />
                        </div>
                        
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-5 w-5 text-primary" />
                            <span className="font-medium">Participation Incentive</span>
                          </div>
                          <p className="text-muted-foreground">{survey.incentive}</p>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {survey.participants} participants
                            </div>
                            <div className="flex items-center gap-2">
                              <PieChart className="h-4 w-4" />
                              10-15 minutes
                            </div>
                          </div>
                          <Button className="bg-gradient-primary hover:opacity-90">
                            Participate Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Completed Surveys */}
            <TabsContent value="completed" className="space-y-8">
              <div className="grid gap-8">
                {completedSurveys.map((survey, index) => (
                  <Card key={index} className="border-0 shadow-tech">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">Completed</Badge>
                        <div className="text-sm text-muted-foreground">{survey.completedDate}</div>
                      </div>
                      <CardTitle className="text-2xl">{survey.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {survey.participants} participants
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Key Findings:</h4>
                          <ul className="space-y-2">
                            {survey.keyFindings.map((finding, findingIndex) => (
                              <li key={findingIndex} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{finding}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 border-t">
                          <span className="text-sm text-muted-foreground">
                            Full report available for download
                          </span>
                          <Button variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Report
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-bold">Contribute to Cybersecurity Research</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Your participation helps us understand the evolving threat landscape 
            and improve security practices across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Take Active Survey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
              View All Reports
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Surveys;