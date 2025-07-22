import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Shield, 
  Users, 
  Headphones,
  Globe,
  Send
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our technical support team",
      contact: "+1 (555) 123-4567",
      availability: "24/7 for Enterprise customers"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 2 hours",
      contact: "support@nushkiatech.com",
      availability: "24/7 response"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant chat with our support team",
      contact: "Available on website",
      availability: "Mon-Fri, 8AM-8PM EST"
    },
    {
      icon: Headphones,
      title: "Emergency Support",
      description: "Critical incident response hotline",
      contact: "+1 (555) 911-HELP",
      availability: "24/7 for all customers"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 400",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      type: "Headquarters"
    },
    {
      city: "New York",
      address: "456 Security Ave, Floor 15",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 234-5678",
      type: "East Coast Office"
    },
    {
      city: "London",
      address: "789 Cyber Lane, Level 8",
      zipCode: "London, UK EC2A 4NE",
      phone: "+44 20 1234 5678",
      type: "EMEA Headquarters"
    },
    {
      city: "Singapore",
      address: "321 Innovation Blvd, Tower A",
      zipCode: "Singapore 018956",
      phone: "+65 6789 0123",
      type: "APAC Office"
    }
  ];

  const departments = [
    { value: "sales", label: "Sales Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "security", label: "Security Incident" },
    { value: "partnerships", label: "Partnerships" },
    { value: "media", label: "Media & Press" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30">
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our cybersecurity solutions? Need support? 
              Our expert team is here to help you secure your digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-muted-foreground">
              Choose the contact method that works best for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-tech text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold text-primary">{method.contact}</p>
                  <p className="text-sm text-muted-foreground">{method.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <Card className="border-0 shadow-tech">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your inquiry in detail..."
                        className="min-h-[120px]"
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Global Offices</h2>
                <p className="text-muted-foreground">
                  We have offices worldwide to better serve our global customer base.
                </p>
              </div>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-0 shadow-tech">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            {office.city}
                          </CardTitle>
                          <Badge variant="outline" className="mt-2">{office.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">{office.address}</p>
                        <p className="text-muted-foreground">{office.zipCode}</p>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Phone className="h-4 w-4" />
                        <span className="font-medium">{office.phone}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Support */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-tech overflow-hidden">
              <div className="bg-gradient-primary text-white p-8">
                <div className="text-center space-y-4">
                  <Shield className="h-16 w-16 mx-auto" />
                  <h3 className="text-2xl font-bold">Need Immediate Security Support?</h3>
                  <p className="text-lg opacity-90">
                    If you're experiencing a security incident, contact our emergency response team immediately.
                  </p>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Clock className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="font-semibold">24/7 Availability</h4>
                    <p className="text-sm text-muted-foreground">Round-the-clock incident response</p>
                  </div>
                  <div className="space-y-2">
                    <Users className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="font-semibold">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Certified security professionals</p>
                  </div>
                  <div className="space-y-2">
                    <Globe className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="font-semibold">Global Coverage</h4>
                    <p className="text-sm text-muted-foreground">Worldwide incident response</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Emergency Hotline: +1 (555) 911-HELP
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services and support.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is your response time for support tickets?",
                answer: "We respond to all support tickets within 2 hours for standard issues and immediately for critical security incidents."
              },
              {
                question: "Do you offer 24/7 technical support?",
                answer: "Yes, we provide 24/7 support for all Enterprise customers and emergency security incident response for all customers."
              },
              {
                question: "How can I schedule a product demo?",
                answer: "You can schedule a demo by clicking the 'Get Demo' button on our website or contacting our sales team directly."
              },
              {
                question: "What training resources do you provide?",
                answer: "We offer comprehensive training including webinars, documentation, video tutorials, and personalized training sessions."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-tech">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;