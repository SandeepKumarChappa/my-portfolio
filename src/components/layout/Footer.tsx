import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 py-8 border-t dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Sandeep Kumar Chappa - All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SandeepKumarChappa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Github Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeepkumar-chappa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:chappasandeepkumar@gmail.com"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by
            Sandeep Kumar Chappa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
