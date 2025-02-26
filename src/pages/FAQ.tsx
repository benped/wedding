import React from 'react';

const FAQ: React.FC = () => {
    return (
        <div className="max-w-[800px] mx-auto p-8">
            <h1 className="text-sage-green font-harmond text-4xl md:text-5xl lg:text-6xl mb-8">Frequently Asked Questions</h1>

            <div className="mb-8">
                <h4 className="text-sage-green flex items-center gap-2">
                    What time should I arrive for the ceremony?
                </h4>
                <p className="text-sage-green leading-relaxed">
                    Please plan on arriving at Lakewood Cemetery Memorial Chapel between 4:30 and 4:45 p.m.
                    to allow ample time for parking and getting seated before the procession begins at 5 p.m.
                </p>
            </div>

            <div className="mb-8">
                <h4 className="text-sage-green flex items-center gap-2">
                    Is there parking at the ceremony location?
                </h4>
                <p className="text-sage-green leading-relaxed">
                    Yes! We ask that you do not park directly outside the chapel, but there is plenty of
                    parking available around Lakewood Cemetery Memorial Chapel. There is also street parking
                    outside the cemetery.
                </p>
            </div>

            <div className="mb-8">
                <h4 className="text-sage-green flex items-center gap-2">
                    Can I take photos during the ceremony? <span className="text-sage-green">📸</span>
                </h4>
                <p className="text-sage-green leading-relaxed">
                    We kindly ask that phones and cameras are put away during our wedding ceremony.
                </p>
            </div>

            <div className="mb-8">
                <h4 className="text-sage-green flex items-center gap-2">
                    Will there be vegetarian/vegan options?
                </h4>
                <p className="text-sage-green leading-relaxed">
                    Yes!
                </p>
            </div>

            <div className="mb-8">
                <h4 className="text-sage-green flex items-center gap-2">
                    Can I bring a plus one?
                </h4>
                <p className="text-sage-green leading-relaxed">
                    To ensure we can accommodate all guests comfortably within the venue's capacity,
                    we ask that only invited guests attend our wedding festivities. You'll find details
                    about your party size, including whether it includes a plus one, on your invitation.
                    We appreciate your understanding and can't wait to celebrate with you!
                </p>
            </div>

            <div className="mb-8">
                <h4 className="text-sage-green flex items-center gap-2">
                    What should I wear to the wedding?
                </h4>
                <p className="text-sage-green leading-relaxed">
                    Both ceremony and reception will be indoors, with the exception of optional outdoor
                    patio space during cocktail hour. We invite you to wear cocktail attire. Jackets are recommended for gentlemen.
                </p>
            </div>
        </div>
    );
};

export default FAQ;
