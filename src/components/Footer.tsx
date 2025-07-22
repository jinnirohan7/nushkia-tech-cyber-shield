import { Link } from "react-router-dom";
import { Shield, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Nushkia Tech</span>
            </Link>
            <p className="text-tech-gray text-sm">
              Leading cybersecurity solutions powered by advanced AI and threat intelligence.
              Protecting businesses worldwide from evolving cyber threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-tech-gray hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-tech-gray hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-tech-gray hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-tech-gray hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-tech-gray hover:text-primary transition-colors">
                  Endpoint Security
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-tech-gray hover:text-primary transition-colors">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-tech-gray hover:text-primary transition-colors">
                  Identity Protection
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-tech-gray hover:text-primary transition-colors">
                  Threat Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-tech-gray hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-tech-gray hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/surveys" className="text-tech-gray hover:text-primary transition-colors">
                  Surveys
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-tech-gray hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-tech-gray hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-tech-gray hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-tech-gray hover:text-primary transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-tech-gray hover:text-primary transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray text-sm">
            © {currentYear} Nushkia Tech. All rights reserved.
          </p>
          <p className="text-tech-gray text-sm mt-2 md:mt-0">
            Securing tomorrow's digital landscape today.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;