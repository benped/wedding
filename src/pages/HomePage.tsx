// HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-white">
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-[20px] max-w-[80%] mr-[20%]">
          <div className="text-center space-y-0 h-full flex flex-col justify-center">
            <div className="flex items-center justify-between space-x-4">
              <span className="text-sage-green font-['Harmond'] text-[clamp(2rem,8vw,8rem)] whitespace-nowrap">You're invited to</span>
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                {/* Placeholder for first photo */}
              </div>
              <span className="text-sage-green font-['Harmond'] text-[clamp(2rem,8vw,8rem)] whitespace-nowrap">Emma</span>
            </div>

            <div className="flex items-center justify-between space-x-4">
              <div className="text-sage-green font-['Harmond'] text-[clamp(2rem,8vw,8rem)] whitespace-nowrap">&</div>
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                {/* Placeholder for second photo */}
              </div>
              <span className="text-sage-green font-['Harmond'] text-[clamp(2rem,8vw,8rem)] whitespace-nowrap">Ben's wedding!</span>
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                {/* Placeholder for rings icon */}
              </div>
            </div>

            <div className="flex items-center justify-between space-x-4">
              <span className="text-sage-green font-['Harmond'] text-[clamp(2rem,8vw,8rem)] whitespace-nowrap">May 3rd,</span>
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                {/* Placeholder for flower photo */}
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                {/* Placeholder for venue photo */}
              </div>
              <span className="text-sage-green font-['Harmond'] text-[clamp(2rem,8vw,8rem)] whitespace-nowrap">2025 in</span>
            </div>

            <div className="flex items-center justify-between space-x-4">
              <span className="text-sage-green font-['Harmond'] text-[clamp(2rem,8vw,8rem)] whitespace-nowrap">Minneapolis. We can't wait</span>
            </div>

            <div className="flex items-center justify-between space-x-4">
              <span className="text-sage-green font-['Harmond'] text-[clamp(2rem,8vw,8rem)] whitespace-nowrap">to see you!</span>
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                {/* Placeholder for disco ball photo */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;