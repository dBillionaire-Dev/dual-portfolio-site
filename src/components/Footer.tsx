
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Aniekan-Abasi Udofia</h3>
            <p className="text-slate-300 leading-relaxed">
              Professional Virtual Assistant and Product Manager dedicated to helping businesses achieve their goals through efficient operations and strategic product development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Virtual Assistant Services</li>
              <li>Product Management</li>
              <li>Administrative Support</li>
              <li>Project Coordination</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={16} />
                <span><a href="mailto:aniekanabasiudofia01@gmail.com" target="_blank" rel="noopener noreferrer">admin@annieudofia.com</a></span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={16} />
                <span><a href="tel:08131382405">+234-813-138-2405</a></span>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="http://linkedin.com/in/aniekan-abasi-udofia01" target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="text-slate-300 hover:text-white cursor-pointer transition-colors" /></a>
                <Github size={20} className="text-slate-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Aniekan-Abasi Udofia. All rights reserved.</p>
          <p>Made with ❤️ by <a href="https://nexdbillionairedev.vercel.app/" target="_blank" rel="noopener noreferrer">Nexy(Nex.Dev)</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;