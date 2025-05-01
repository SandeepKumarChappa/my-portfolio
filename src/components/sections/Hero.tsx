import { useState, useEffect } from 'react';
import { FileDown, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "I'm a Software Developer";

  useEffect(() => {
    setIsLoaded(true);

    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`container mx-auto px-4 z-10 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Hello, I'm
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Sandeep Kumar Chappa
                </h1>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold flex">
                {text}
                <span
                  className={`h-8 w-1 bg-blue-600 dark:bg-blue-400 ml-1 inline-block ${
                    isTyping ? 'animate-blink' : 'opacity-0'
                  }`}
                ></span>
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                A passionate problem-solver and Computer Science student at
                Lovely Professional University, skilled in MERN Stack, PHP, and
                Java. Experienced in building dynamic web applications and
                committed to continuous learning and innovation in software
                development.
              </p>

              <div className="pt-2">
                {/* <a
                  href="SandyCV.pdf"
                  download
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <FileDown size={18} className="mr-2" />
                  Download CV
                </a> */}
                <a href="SandyCV.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <FileDown className="w-5 h-5" />
  Download CV
</a>

              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-xl flex items-center justify-center">
              <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              {/* <img
  src="/src/assets/sandie.jpg"
  alt="Sandy"
  className="w-32 h-32 rounded-full object-cover shadow-lg"/> */}
              <img
  src="sandie.jpg"
  alt="Sandy"
  className="w-62 h-62 rounded-full object-cover object-center shadow-lg"
/>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
