import React from 'react';

const Transportation: React.FC = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-sage-green font-harmond mb-10">Transportation</h1>

                <div className="mb-10 w-full max-w-md">
                    <img
                        src="/assets/images/bus.gif"
                        alt="School Bus"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                <div className="prose prose-lg text-sage-green max-w-3xl">
                    <p className="text-5xl md:text-4xl font-harmond leading-relaxed mb-6">
                        Want a ride from our ceremony to the reception? It's about a 20 minute ride. We got you.
                        Hope on our yellow schoolbus that will (safely) take you to the party! Yee haw!
                    </p>

                    <div className="mt-10 space-y-6 text-left">

                        <div className="border-t border-sage-green/30 pt-6 mt-8">
                            <p className="text-sm italic">
                                If you plan to drive yourself, parking is available at both the ceremony and reception venues.
                                Ride-sharing services like Uber and Lyft are also readily available in Minneapolis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transportation;