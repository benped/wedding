const Schedule = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 max-w-7xl mx-auto md:pr-[120px] md:translate-x-[30px]">
            <div className="flex flex-col md:flex-row justify-between w-full gap-12 md:gap-20">
                {/* Ceremony Section */}
                <div className="text-center flex-1">
                    <h2 className="text-sage-green text-2xl mb-2 font-altivo">CEREMONY</h2>
                    <p className="text-sage-green mb-8 font-altivo">5:00 PM</p>
                    <h3 className="font-['Harmond'] text-4xl md:text-5xl lg:text-6xl text-sage-green mb-4 whitespace-nowrap">
                        Lakewood Memorial Chapel
                    </h3>
                    <div className="text-sage-green text-4xl md:text-5xl space-y-1">
                        <a href="https://maps.google.com/?q=3600+Hennepin+Ave+Minneapolis+MN+55408"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-800">
                            <p className="font-['Harmond']">3600 Hennepin Ave.</p>
                            <p className="font-['Harmond']">Minneapolis, MN 55408</p>
                        </a>
                    </div>
                </div>

                {/* Reception Section */}
                <div className="text-center flex-1">
                    <h2 className="text-sage-green text-2xl mb-2 font-altivo">RECEPTION</h2>
                    <p className="text-sage-green mb-8 font-altivo">IMMEDIATELY TO FOLLOW</p>
                    <h3 className="font-['Harmond'] text-4xl md:text-5xl lg:text-6xl text-sage-green mb-4">
                        PAIKKA
                    </h3>
                    <div className="text-sage-green text-4xl md:text-5xl space-y-1">
                        <a href="https://maps.google.com/?q=550+Vandalia+Tower+St+165+St+Paul+MN+55114"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-800">
                            <p className="font-['Harmond'] whitespace-nowrap">550 Vandalia Tower St. #165</p>
                            <p className="font-['Harmond']">St. Paul, MN 55114</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Date */}
            <div className="border border-sage-green rounded-full px-8 py-2 text-sage-green mt-16 font-altivo">
                MAY  3  2025
            </div>
        </div>
    );
};

export default Schedule;