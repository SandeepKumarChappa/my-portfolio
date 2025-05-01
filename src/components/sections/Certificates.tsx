import { useState, useEffect, useRef } from 'react';
import { certificatesData } from '../../data/certificates';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificate, index) => (
            <div
              key={certificate.title}
              className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                    <Award size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {certificate.issuer}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    {certificate.date}
                  </div>
                  {certificate.verificationLink && (
                    <a
                      href={certificate.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Achievements</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white shadow-lg transform transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-95'}`}>
              <h4 className="text-xl font-semibold mb-2">LeetCode Milestone</h4>
              <p className="mb-4">Solved 600+ problems and achieved a contest rating of 1786.</p>
              <div className="text-sm opacity-75 mb-4">April 2025</div>
              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-blue-100 transition-colors">
                <span className="mr-1">View Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className={`bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg transform transition-all duration-500 ${isVisible ? 'scale-100 delay-100' : 'scale-95'}`}>
              <h4 className="text-xl font-semibold mb-2">CodeForces Progress</h4>
              <p className="mb-4">Increased rating from 615 to 1070 in 8 months.</p>
              <div className="text-sm opacity-75 mb-4">April 2025</div>
              <a href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-blue-100 transition-colors">
                <span className="mr-1">View Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className={`bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 text-white shadow-lg transform transition-all duration-500 ${isVisible ? 'scale-100 delay-200' : 'scale-95'}`}>
              <h4 className="text-xl font-semibold mb-2">CodeChef Achievement</h4>
              <p className="mb-4">Reached a rating of 1519 and earned 2⭐ rank.</p>
              <div className="text-sm opacity-75 mb-4">March 2025</div>
              <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-blue-100 transition-colors">
                <span className="mr-1">View Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className={`bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 text-white shadow-lg transform transition-all duration-500 ${isVisible ? 'scale-100 delay-300' : 'scale-95'}`}>
              <h4 className="text-xl font-semibold mb-2">GFG Contributor</h4>
              <p className="mb-4">Solved 100+ problems and earned a coding score of 308.</p>
              <div className="text-sm opacity-75 mb-4">March 2025</div>
              <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-blue-100 transition-colors">
                <span className="mr-1">View Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;