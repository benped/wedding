// HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-6rem)] w-full flex flex-col bg-white">
      <main className="flex-grow flex items-center justify-center ">
        <div className="container mx-auto px-4 sm:px-[20px] sm:max-w-[80%] sm:mr-[20%] py-4 sm:py-6 lg:py-12 xl:max-h-[1200px]">
          <div className="text-center space-y-0 h-full flex flex-col max-w-[1200px] justify-center">
            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0 mb-4 sm:mb-0">
              <span className="text-sage-green font-['Harmond'] text-[3rem] sm:text-[clamp(2rem,8vw,8rem)] whitespace-normal sm:whitespace-nowrap">You're invited to</span>
              <div className="w-48 h-16 sm:w-48 sm:h-24 bg-white rounded-full overflow-hidden">
                <img src="/assets/images/emma.JPG" alt="Emma" className="w-full h-full object-cover object-[center_25%]" />
              </div>
              <span className="text-sage-green font-['Harmond'] text-[3rem] sm:text-[clamp(2rem,8vw,8rem)] whitespace-normal sm:whitespace-nowrap">Emma</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0 mb-4 sm:mb-0">
              <div className="text-sage-green font-['Harmond'] text-[3rem] sm:text-[clamp(2rem,8vw,8rem)] whitespace-normal sm:whitespace-nowrap">&</div>
              <div className="w-48 h-16 sm:w-48 sm:h-24 bg-white rounded-full overflow-hidden">
                <img src="/assets/images/ben.jpg" alt="Ben" className="w-full h-full object-cover object-[center_30%]" />
              </div>
              <span className="text-sage-green font-['Harmond'] text-[3rem] sm:text-[clamp(2rem,8vw,8rem)] whitespace-normal sm:whitespace-nowrap">Ben's wedding!</span>
              <div className="w-48 h-16 sm:w-48 sm:h-24 bg-gray-200 rounded-full overflow-hidden">
                <img src="/assets/images/penguins.png" alt="Penguins" className="w-full h-full object-cover object-[center_15%]" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0 mb-4 sm:mb-0">
              <span className="text-sage-green font-['Harmond'] text-[3rem] sm:text-[clamp(2rem,8vw,8rem)] whitespace-normal sm:whitespace-nowrap">May 3rd,</span>
              <div className="w-48 h-16 sm:w-48 sm:h-24 bg-gray-200 rounded-full overflow-hidden">
                <img src="/assets/images/flower.jpg" alt="Flowers" className="w-full h-full object-cover object-[center_15%]" />
              </div>
              <div className="w-48 h-16 sm:w-48 sm:h-24 bg-gray-200 rounded-full overflow-hidden">
                <img src="/assets/images/chapel.jpg" alt="Chapel" className="w-full h-full object-cover object-[center_15%]" />
              </div>
              <span className="text-sage-green font-['Harmond'] text-[3rem] sm:text-[clamp(2rem,8vw,8rem)] whitespace-normal sm:whitespace-nowrap">2025 in</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0 mb-4 sm:mb-0">
              <span className="text-sage-green font-['Harmond'] text-[3rem] sm:text-[clamp(2rem,8vw,8rem)] whitespace-normal sm:whitespace-nowrap">Minneapolis. We can't wait</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0 mb-4 sm:mb-0">
              <span className="text-sage-green font-['Harmond'] text-[3rem] sm:text-[clamp(2rem,8vw,8rem)] whitespace-normal sm:whitespace-nowrap">to see you!</span>
              <div className="w-48 h-16 sm:w-48 sm:h-24 bg-gray-200 rounded-full overflow-hidden">
                <img src="/assets/images/disco.webp" alt="Disco" className="w-full h-full object-cover object-[center_15%]" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;