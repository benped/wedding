import React from 'react';

const ReceptionMap: React.FC = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] p-8 max-w-7xl mx-auto">
            <h1 className="text-4xl text-sage-green font-serif mb-6">RECEPTION MAP</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                    <p className="text-sage-green mb-4">
                        Our reception will be held at Paikka, a modern industrial venue space in St. Paul featuring
                        exposed brick, wood beams, and large windows.
                    </p>
                    <p className="text-sage-green mb-4">
                        <strong>Address:</strong> 550 Vandalia St #165, St Paul, MN 55114
                    </p>
                    <p className="text-sage-green mb-4">
                        <a
                            href="https://maps.google.com/?q=550+Vandalia+Tower+St+165+St+Paul+MN+55114"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage-green underline hover:text-green-800"
                        >
                            Get Directions
                        </a>
                    </p>
                    <p className="text-sage-green mb-4">
                        Look for the watertower with the moon:
                    </p>
                    <img
                        src="/assets/images/vandalia.png"
                        alt="Vandalia Tower with Moon"
                        className="w-3/4 h-auto rounded-lg shadow-lg mb-4 mx-auto"
                    />
                </div>

                <div className="lg:w-1/2">
                    <img
                        src="/assets/images/Paikka.jpg"
                        alt="Paikka Reception Venue"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReceptionMap;
