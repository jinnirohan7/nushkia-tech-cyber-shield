import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Users, 
  Globe,
  Calendar,
  Mail
} from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, job title, and company information when you register for our services or contact us.",
        "Technical Information: IP addresses, browser type, device information, and usage patterns to improve our services and security.",
        "Service Data: Information about how you use our cybersecurity platform, including security events, configurations, and performance metrics.",
        "Communication Data: Records of your communications with our support team and feedback you provide."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Service Provision: To provide, maintain, and improve our cybersecurity services and platform.",
        "Security Monitoring: To detect, prevent, and respond to security threats and incidents.",
        "Communication: To respond to your inquiries, provide support, and send important service updates.",
        "Analytics: To analyze usage patterns and improve our services' effectiveness and performance.",
        "Compliance: To comply with legal obligations and regulatory requirements.",
        "Marketing: To send relevant product information and updates (with your consent)."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "Service Providers: We may share information with trusted third-party service providers who assist in delivering our services.",
        "Legal Compliance: We may disclose information when required by law, regulation, or legal process.",
        "Security Incidents: We may share threat intelligence data (in anonymized form) to improve cybersecurity for the broader community.",
        "Business Transfers: Information may be transferred in connection with mergers, acquisitions, or asset sales.",
        "Consent: We may share information with your explicit consent for specific purposes."
      ]
    },
    {
      title: "Data Security and Protection",
      content: [
        "Encryption: All data is encrypted in transit and at rest using industry-standard encryption protocols.",
        "Access Controls: Strict access controls ensure only authorized personnel can access your information.",
        "Regular Audits: We conduct regular security audits and penetration testing to maintain the highest security standards.",
        "Incident Response: We have comprehensive incident response procedures to address any potential security breaches.",
        "Compliance: Our security practices comply with SOC 2, ISO 27001, and other industry standards."
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Access: You have the right to access the personal information we hold about you.",
        "Correction: You can request correction of inaccurate or incomplete personal information.",
        "Deletion: You may request deletion of your personal information, subject to certain limitations.",
        "Portability: You have the right to receive your personal information in a portable format.",
        "Objection: You can object to certain processing of your personal information.",
        "Consent Withdrawal: You may withdraw consent for marketing communications at any time."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "Account Data: We retain account information for as long as your account is active or as needed to provide services.",
        "Security Logs: Security event logs are retained for up to 7 years for security analysis and compliance purposes.",
        "Communication Records: Support communications are retained for 3 years to improve service quality.",
        "Marketing Data: Marketing consent and preferences are retained until withdrawn or account deletion.",
        "Legal Requirements: Some data may be retained longer to comply with legal obligations."
      ]
    }
  ];

  const principles = [
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "We build privacy protection into our systems from the ground up."
    },
    {
      icon: Lock,
      title: "Data Minimization",
      description: "We collect only the information necessary to provide our services."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We clearly explain what data we collect and how we use it."
    },
    {
      icon: Users,
      title: "User Control",
      description: "You have control over your personal information and privacy settings."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30">
              Privacy Policy
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Privacy is{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Last Updated: January 15, 2024
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Version 3.0
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Our Privacy Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide how we handle your personal information.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="border-0 shadow-tech text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-tech">
                <CardHeader>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-tech">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">International Data Transfers</CardTitle>
                    <CardDescription>How we handle data across borders</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  As a global cybersecurity company, we may transfer your personal information across international borders. 
                  We ensure all transfers comply with applicable data protection laws through:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Adequacy Decisions</h4>
                    <p className="text-sm text-muted-foreground">
                      We transfer data to countries with adequacy decisions from relevant data protection authorities.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Standard Contractual Clauses</h4>
                    <p className="text-sm text-muted-foreground">
                      We use EU Standard Contractual Clauses for transfers to countries without adequacy decisions.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Binding Corporate Rules</h4>
                    <p className="text-sm text-muted-foreground">
                      Our internal policies ensure consistent data protection standards across all our global offices.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Additional Safeguards</h4>
                    <p className="text-sm text-muted-foreground">
                      We implement technical and organizational measures to protect data during international transfers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Questions About This Policy?</h2>
            <p className="text-xl opacity-90">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact our Data Protection Officer.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Data Protection Officer</h3>
                <div className="space-y-2 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    privacy@nushkiatech.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Nushkia Tech Privacy Office
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Mailing Address</h3>
                <div className="text-sm opacity-90">
                  Nushkia Tech, Inc.<br />
                  Attn: Privacy Office<br />
                  123 Tech Street, Suite 400<br />
                  San Francisco, CA 94105
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;