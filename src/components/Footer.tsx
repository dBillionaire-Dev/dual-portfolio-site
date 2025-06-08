
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Aniekan-Abasi Udofia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional Virtual Assistant and Product Manager dedicated to helping businesses achieve their goals through efficient operations and strategic product development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Virtual Assistant Services</li>
              <li>Product Management</li>
              <li>Administrative Support</li>
              <li>Project Coordination</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} />
                <span>aniekan@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-3 mt-4">
                <Linkedin size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Github size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Aniekan-Abasi Udofia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
