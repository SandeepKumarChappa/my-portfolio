import { useState, useEffect, useRef } from 'react';
import { educationData } from '../../data/education';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
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
      id="education"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Journey</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 ml-4">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-5 mt-2 w-10 h-10 bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 rounded-full flex items-center justify-center">
                  <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {edu.institution}
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">
                    {edu.location}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-500 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.duration}</span>
                  </div>
                  
                  {edu.score && (
                    <div className="mt-4 inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.score}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;