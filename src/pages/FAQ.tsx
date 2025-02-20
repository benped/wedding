import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const FAQSection = styled.div`
  margin-bottom: 2rem;
`;

const Question = styled.h4`
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Answer = styled.p`
  line-height: 1.6;
  color: #666;
`;


const FAQ: React.FC = () => {
    return (
        <FAQContainer>
            <h1>Frequently Asked Questions</h1>

            <FAQSection>
                <Question>What time should I arrive for the ceremony?</Question>
                <Answer>
                    Please plan on arriving at Lakewood Cemetery Memorial Chapel between 4:30 and 4:45 p.m.
                    to allow ample time for parking and getting seated before the procession begins at 5 p.m.
                </Answer>
            </FAQSection>

            <FAQSection>
                <Question>Is there parking at the ceremony location?</Question>
                <Answer>
                    Yes! We ask that you do not park directly outside the chapel, but there is plenty of
                    parking available around Lakewood Cemetery Memorial Chapel. There is also street parking
                    outside the cemetery.
                </Answer>
            </FAQSection>

            <FAQSection>
                <Question>
                    Can I take photos during the ceremony? <span style={{ color: '#666' }}>📸</span>
                </Question>
                <Answer>
                    We kindly ask that phones and cameras are put away during our wedding ceremony.
                </Answer>
            </FAQSection>

            <FAQSection>
                <Question>Will there be vegetarian/vegan options?</Question>
                <Answer>Yes!</Answer>
            </FAQSection>

            <FAQSection>
                <Question>Can I bring a plus one?</Question>
                <Answer>
                    To ensure we can accommodate all guests comfortably within the venue's capacity,
                    we ask that only invited guests attend our wedding festivities. You'll find details
                    about your party size, including whether it includes a plus one, on your invitation.
                    We appreciate your understanding and can't wait to celebrate with you!
                </Answer>
            </FAQSection>

            <FAQSection>
                <Question>What should I wear to the wedding?</Question>
                <Answer>
                    Both ceremony and reception will be indoors, with the exception of optional outdoor
                    patio space during cocktail hour. We invite you to wear cocktail attire. Jackets are recommended for gentlemen.
                </Answer>
            </FAQSection>
        </FAQContainer>
    );
};

export default FAQ;
