import React, {useState} from 'react';

import FaqContext from './FaqContext';

const FaqState = (props) => {

    

    const generalFaq = [
        {
            // Ques1
            ques: "What travel services do you offer?",
            ans: "Tripsy Trips offers an array of services including visas, e-visas, flight bookings, hotel reservations, packages, travel insurance and customised travel itineraries."
        },
        {
            // Ques2
            ques: "Can I book a trip for a large group?",
            ans: "Yes, we specialize in group bookings and can arrange travel packages for corporate events, family reunions, weddings, and other group activities. Please contact us directly for group rates and personalized itineraries."
        },
        {
            // Ques3
            ques: "What payment methods do you accept?",
            ans: "Tripsy Trips offers an array of services including visas, e-visas, flight bookings, hotel reservations, packages, travel insurance and customised travel itineraries."
        },
        {
            // Ques4
            ques: "Do you charge a fee for your services?",
            ans: "We charge a nominal fee for our visa services and not any other service like flights, hotels and tour packages."
        },
        {
            // Ques5
            ques: "Can I make changes to my booking after it’s confirmed?",
            ans: "Yes, you may make changes to your booking, but please be aware that changes may incur additional fees (cancellation fees may also be incurred due to third party service provider policies) and are subject to availability. Contact us as soon as possible if you need to modify your booking"
        },
        {
            // Ques6
            ques: "What should I do if I encounter issues during my trip?",
            ans: "If you encounter any issues during your trip, you can contact us anytime for assistance. We are here to help resolve any problems and ensure your travel experience is as smooth as possible."
        },
        {
            // Ques7
            ques: "Do you offer any special packages or discounts?",
            ans: "Yes, we frequently have special packages and discounts available. These can include seasonal promotions, early bird discounts, and group travel deals. Check our website or contact us for the latest offers."
        },
        {
            // Ques8
            ques: "Do you offer travel insurance?",
            ans: "Yes, we offer travel insurance that covers various scenarios such as trip cancellation, medical emergencies, lost luggage, and more. We highly recommend purchasing travel insurance for added peace of mind."
        },
        {
            // Ques9
            ques: "Do you offer visa consultation services?",
            ans: "Yes, we offer visa consultation services where we assess your eligibility, provide advice on the best visa options, and guide you through the entire application process."
        },
        {
            // Ques10
            ques: "What if my visa application is denied?",
            ans: "If your visa application is denied, we can help you understand the reasons for the denial and provide guidance on reapplying or exploring alternative options. In some cases, we can assist with submitting an appeal or additional documentation."
        },
        {
            // Ques11
            ques: "Can you help with visas for multiple destinations on one trip?",
            ans: "Yes, we can assist with obtaining visas for multiple destinations if you are planning a multi-country trip. We will coordinate the visa requirements and timelines to ensure a smooth travel experience."
        },
        {
            // Ques12
            ques: "How do I apply for an e-visa?",
            ans: "To apply for an e-visa, visit the ‘E-visa’ section on our website, fill out the application form, upload the required documents, and pay the visa fee online. We will take care of the rest and let you know about the status of your application."
        },
        {
            // Ques13
            ques: "What documents are required for an e-visa application?",
            ans: "Generally, you will need a valid passport, a recent passport-sized photograph and a scanned copy of the passport's bio page. Specific requirements may vary by country, so we provide detailed checklists for each destination on the ‘E-visa’ section of our website."
        },
        {
            // Ques14
            ques: "How long does it take to process an e-visa?",
            ans: "E-visa processing times vary by country but typically range from 24 hours to a few days. Please refer to the ‘E-visa’ section of our website for processing time of different countries."
        },
        {
            // Ques15
            ques: "What domestic travel services do you offer within India?",
            ans: " We offer a comprehensive range of domestic travel services including flight bookings, hotel bookings, and customised travel packages to suit your preferences and budget."
        },
        {
            // Ques16
            ques: "Do you offer travel packages for popular destinations in India?",
            ans: "Yes, we offer a variety of travel packages for popular destinations such as Goa, Kerala, Rajasthan, Himachal Pradesh, Uttarakhand, and more."
        },
        {
            // Ques17
            ques: "Can you arrange travel for large groups or corporate events?",
            ans: "Yes, we specialise in organising travel for large groups, corporate events, conferences, and team-building activities. We offer tailored solutions to meet your company’s specific needs."
        },
        {
            // Ques18
            ques: "What services do you offer for corporate travel?",
            ans: "We offer a full range of corporate travel services including flight and hotel bookings, car rentals, travel insurance, visa assistance, and 24/7 customer support."
        },
        {
            // Ques19
            ques: "Can you assist with visas for long-term stays?",
            ans: "Yes, we can provide guidance and assistance for obtaining visas for long-term stays in various countries. This includes digital nomad visas, multiple-entry visas, and other relevant permits."
        },
        {
            // Ques20
            ques: "What services do you offer for digital nomads?",
            ans: "We provide comprehensive services for digital nomads, including flights, long-term accommodation booking, travel insurance, visa assistance, and itinerary planning for work and leisure balance."
        },
        {
            // Ques21
            ques: "What are some good destinations for solo travel?",
            ans: "Popular destinations for solo travelers include Thailand, Japan, Australia, Spain, and New Zealand. In India, destinations like Goa, Himachal Pradesh, and Kerala are great for solo exploration. We can suggest the best destinations based on your interests."
        },
        {
            // Ques22
            ques: "What documents are required for a Schengen visa application?",
            ans: " Required documents include a completed visa application form, passport-sized photographs, a valid passport, travel itinerary, travel insurance, proof of accommodation, proof of financial means, and a cover letter stating the purpose of your visit. Visit the ‘Visas’ section of our website for more information."
        },
        {
            // Ques23
            ques: "How long does it take to process a Schengen visa?",
            ans: "The processing time for a Schengen visa is typically 15 calendar days from the date of your application. However, it can take longer during peak travel seasons. We recommend applying well in advance to avoid last-minute inconveniences."
        },
        {
            // Ques24
            ques: " How long does it take to process a UK visa?",
            ans: "The standard processing time for a UK visa is around 15-20 working days. However, it can take longer during peak travel seasons. We recommend applying well in advance to avoid last-minute inconveniences."
        },
        {
            // Ques25
            ques: "How long does it take to process an Australian visa?",
            ans: " The processing time for an Australian tourist visa (subclass 600) can range from 20-25 working days. However, it can take longer during peak travel seasons. We recommend applying well in advance to avoid last-minute inconveniences."
        }
    ]

    const australiaFaq = [
        {
            // Ques1
            ques: "Do I need a sponsor's documents for my Australian visa application?",
            ans: " If you are sponsored, you need the sponsor's bank statement for the last six months and the sponsor's last 3 years' ITR."
        },
        {
            // Ques2
            ques: " Is an invitation letter necessary for an Australian visa?",
            ans: "An invitation letter is required if applicable, along with the inviter's passport scan (front and back) and their residential proof."
        },
        {
            // Ques3
            ques: "Do I need to provide proof of accommodation if I am staying with a friend or relative in Australia?",
            ans: "Yes, if you are staying with a friend or relative, you need to provide an invitation letter, their passport scan, and residential proof."
        },
        {
            // Ques4
            ques: "How do I prove my relationship to my sponsor for an Australian Visa?",
            ans: "You can prove your relationship to your sponsor through documents like birth certificates, marriage certificates, or an affidavit."
        },
        {
            // Ques5
            ques: "Can I use my business bank account statements if I am self-employed for an Australian Visa?",
            ans: "Yes, if you are self-employed, you can use your business bank account statements along with personal bank statements to show financial stability."
        },
        {
            // Ques6
            ques: "Can I apply for an Australian visa if I am currently unemployed?",
            ans: "Yes, you can apply for an Australian visa if you are unemployed. You will need to provide additional documents like proof of financial stability and any sponsorship details if applicable."
        },
        {
            // Ques7
            ques: "What are the specific requirements for the passport-size photo for an Australian visa?",
            ans: "The passport-size photo should be recent (taken within the last six months), in color, and meet the Australian visa photo specifications (clear background, proper lighting, and 45mm X 35mm size)."
        },
        {
            // Ques8
            ques: "Is travel insurance mandatory for an Australian visa application?",
            ans: "While not always mandatory, it is highly recommended to have travel insurance for your trip to Australia. Some visas may require proof of travel insurance."
        },
        
    ]
    const ukingFaq = [
        {
            // Ques1
            ques: "What if my bank account does not meet the minimum balance requirement for a UK visa?",
            ans: "If your bank account does not meet the minimum balance requirement, you may need to provide additional financial documents, such as a sponsor's bank statement or proof of other financial assets."
        },
        {
            // Ques2
            ques: "What is the process if my application for a UK visa is refused?",
            ans: "If your UK visa application is refused, you can reapply, addressing the reasons for refusal and providing additional supporting documents. You may also appeal the decision if applicable."
        },
        {
            // Ques3
            ques: "What information should be included in the invitation letter for a UK visa?",
            ans: "The invitation letter should include the inviter's details, your relationship with the inviter, the purpose of your visit, duration of stay, and accommodation arrangements."
        },
        {
            // Ques4
            ques: "Can I provide a joint bank account statement for my visa application?",
            ans: "Yes, you can provide a joint bank account statement, but ensure it clearly indicates your name and meets the financial requirements."
        },
        {
            // Ques5
            ques: "What should be included in the cover letter for the UK visa?",
            ans: " The cover letter should include your personal details, travel itinerary, purpose of visit, financial means, and any additional information supporting your application."
        },
        {
            // Ques6
            ques: " What if my bank statements show occasional low balances?",
            ans: "If your bank statements show occasional low balances, you should explain and additional financial documents to show financial stability."
        },
        {
            // Ques7
            ques: "Do I need to submit my ITR even if I am not self-funded?",
            ans: " Yes, submitting your ITR is recommended to demonstrate your financial history and stability, even if you are sponsored."
        },
        {
            // Ques8
            ques: " Do I need to provide details of all my previous international travels for a UK visa?",
            ans: "Yes, it is generally required to provide details of your travel history as recorded in your passport, which helps demonstrate your travel experience and compliance with visa rules."
        },
        
    ]
    const uStatesFaq = [
        {
            // Ques1
            ques: "What should be included in the NOC from my employer for a US visa?",
            ans: "The NOC should include your employment status, duration of employment, approved leave dates, and a statement confirming your intention to return to your job after your trip."
        },
        {
            // Ques2
            ques: "How should the inviter's residential proof be formatted for a US visa application?",
            ans: "The inviter's residential proof should include utility bills, lease agreement, or property ownership documents clearly showing their name and address."
        },
        {
            // Ques3
            ques: "What should I do if my savings account does not meet the minimum balance requirement?",
            ans: " If your savings account does not meet the minimum balance requirement, provide additional financial documents, such as fixed deposits, investments, or a sponsor's financial support."
        },
        {
            // Ques4
            ques: "What documents are required if my trip to the US is business-related?",
            ans: " For a business trip, provide an invitation letter from the US company, details of the business purpose, and any other relevant documents such as business registration or contracts."
        },
        {
            // Ques5
            ques: "Can I apply for a US visa if I have previously been denied one?",
            ans: " Yes, you can reapply for a US visa if you have previously been denied. Make sure to address the reasons for the previous denial and provide any additional documentation that may support your application."
        },
        {
            // Ques6
            ques: "Do I need to attend an interview for a US visa?",
            ans: "Most applicants between the ages of 14 and 79 are required to attend a visa interview. There are some exceptions, such as for renewal of certain visa types under the interview waiver program."
        },
        {
            // Ques7
            ques: "Can I apply for a US visa without a prior international travel history?",
            ans: "Yes, you can apply for a US visa without prior international travel history, but ensure your application is strong in other areas, such as financial stability and ties to India."
        },
        {
            // Ques8
            ques: "Is travel insurance mandatory for a US visa application?",
            ans: "While travel insurance is not mandatory for a US visa application, it is recommended to cover any unforeseen medical emergencies or trip cancellations."
        },
        
    ]
    const canadaFaq = [
        {
            // Ques1
            ques: "Is a hotel booking mandatory for the Canadian visa application?",
            ans: "Yes, you should provide a confirmed hotel booking for your stay in Canada. If staying with friends or family, include an invitation letter and their residential proof along with your application."
        },
        {
            // Ques2
            ques: "Can I submit digital copies of my financial documents for the Canadian visa application?",
            ans: "Yes, digital copies of your financial documents are acceptable if they are clear, legible, and certified by the issuing bank or authority if required."
        },
        {
            // Ques3
            ques: "Is a hotel booking mandatory for the Canadian visa application?",
            ans: " Yes, you should provide a confirmed hotel booking for your stay in Canada. If staying with friends or family, include an invitation letter and their residential proof along with your application."
        },
        {
            // Ques4
            ques: "Is health insurance required for the Canadian visa application?",
            ans: "While not mandatory for the visa application, having health insurance is recommended to cover any unexpected medical expenses during your stay in Canada."
        },
        {
            // Ques5
            ques: "Is a No Objection Certificate (NOC) from my employer mandatory for the Canada visa application, even if I am self-employed?",
            ans: "If you are employed, a NOC from your employer confirming your leave and intention to return to work is necessary. If self-employed, provide business registration documents and financial statements instead."
        },
        {
            // Ques6
            ques: " Can I apply for a Canadian visa if I have previously been denied a visa to another country?",
            ans: "Yes, you can still apply for a Canadian visa. Be sure to provide complete and accurate information and address any previous visa denials in your application."
        },
        {
            // Ques7
            ques: "What is the purpose of providing Index 2 of property owned for the Canadian visa application?",
            ans: " Index 2 of property owned serves as proof of property ownership and financial stability, demonstrating that you have ties to your home country and reasons to return after your visit to Canada."
        },
        {
            // Ques8
            ques: "Do I need to provide biometric information for my Canadian visa application?",
            ans: "Yes, Indian passport holders aged 14 to 79 are required to provide biometric information (fingerprints and photo) as part of the visa application process."
        },
        
    ]
    const schengenFaq = [
        {
            // Ques1
            ques: "Can I apply for a Schengen visa if I don't have travel insurance?",
            ans: "Travel insurance covering medical expenses, emergencies, and repatriation is mandatory for a Schengen visa. You must provide proof of adequate travel insurance covering your entire stay in the Schengen Zone."
        },
        {
            // Ques2
            ques: "What if I have previous Schengen visa refusals?",
            ans: " If you have previous refusals, provide additional documentation addressing the reasons for the refusal and demonstrating changes in your circumstances or travel plans."
        },
        {
            // Ques3
            ques: "How early should I apply for a Schengen visa before my intended travel dates?",
            ans: "It's recommended to apply for a Schengen visa at least 15 days before your planned trip. Processing times can vary, so apply well in advance to avoid any delays."
        },
        {
            // Ques4
            ques: "Do I need to book all my accommodation in advance for the Schengen visa application?",
            ans: "Yes, you should provide confirmed hotel bookings or a detailed itinerary of your accommodation arrangements for the entire duration of your stay in the Schengen Zone."
        },
        {
            // Ques5
            ques: "Can I provide a flight reservation instead of a confirmed ticket for the Schengen visa application?",
            ans: "No, you need to provide a confirmed round-trip flight booking showing entry and exit dates from the Schengen Zone."
        },
        {
            // Ques6
            ques: "Can I apply for a Schengen visa if I plan to visit multiple countries within the Schengen Zone?",
            ans: "Yes, you can apply for a Schengen visa if you plan to visit multiple countries within the Schengen Zone. You should apply at the embassy/consulate of the country where you will be spending the most time or your point of entry into the Schengen zone."
        },
        {
            // Ques7
            ques: "What should I do if my Schengen visa application is rejected?",
            ans: "If your visa application is rejected, you will receive a rejection letter stating the reasons. You can reapply with additional documentation addressing the reasons for rejection or appeal the rejection if applicable."
        },
        {
            // Ques8
            ques: "What is the minimum balance required in my bank account for a Schengen visa?",
            ans: "There is no fixed minimum balance specified across all Schengen countries. However, you should show sufficient funds to cover your stay, on average about €50-100 per day of your intended stay. This typically needs to be evidenced by bank statements of the last 6 months."
        },
        
    ]

    const newZealandFaq = [
        {
            // Ques1
            ques: "How long can I stay in New Zealand with a visitor visa?",
            ans: "Visitor visas for New Zealand typically allow stays of up to 9 months for tourism purposes. The duration and conditions of the visa can vary based on the type of visa and individual circumstances."
        },
        {
            // Ques2
            ques: "Is there a specific format for the passport-size photo required for the New Zealand visa application?",
            ans: " Yes, the passport-size photo must meet specific requirements for dimensions, background, and clarity. The guidelines include 35 mm width and 45 mm length, non-white, light coloured background featuring 70-80% of your face."
        },
        {
            // Ques3
            ques: "How do I apply for a New Zealand Visa if I am self-employed or unemployed?",
            ans: "If self-employed, provide business registration documents, tax returns, and financial statements. If unemployed, provide evidence of alternative sources of income or financial support."
        },
        {
            // Ques4
            ques: "Is a No Objection Certificate (NOC) from my employer necessary for the New Zealand visa application?",
            ans: "Yes, if you are employed, you need an NOC from your employer confirming your leave approval, employment details, and intention to return to your job after your visit."
        },
        {
            // Ques5
            ques: "Is medical insurance mandatory for a New Zealand visitor visa?",
            ans: "While not mandatory, having medical and travel insurance for the duration of your stay in New Zealand is highly recommended to cover unexpected medical expenses and emergencies."
        },
        {
            // Ques6
            ques: "Do I need to provide biometric information (fingerprinting, etc.) for the New Zealand visa application?",
            ans: "Yes, Indian passport holders aged 12 and over need to provide biometric information (fingerprints and a digital photograph) as part of the visa application process."
        },
        {
            // Ques7
            ques: "Do I need to book my return flight before applying for a New Zealand visitor visa? A7:",
            ans: "It is recommended to have a confirmed return flight booking or a detailed itinerary showing your intended departure from New Zealand. Flexibility in travel plans is advisable."
        },
        {
            // Ques8
            ques: "What is the minimum bank balance required for a New Zealand visitor visa?",
            ans: "There is no fixed minimum, but you must demonstrate sufficient funds to cover your stay in New Zealand. Provide bank statements, income tax returns (ITR), and evidence of any additional financial resources."
        },
        
    ]

    const [genFaq, setGen] = useState(generalFaq)
    const [ausFaq, setAusGen] = useState(australiaFaq)
    const [ukFaq, setUkGen] = useState(ukingFaq)
    const [usaFaq, setUsaGen] = useState(uStatesFaq)
    const [canFaq, setCanGen] = useState(canadaFaq)
    const [schenFaq, setSchGen] = useState(schengenFaq)
    const [nzFaq, setNzGen] = useState(newZealandFaq)
    const [turFaq, setTurGen] = useState(null)
    const [taiFaq, setTaiGen] = useState(null)



    return (
        <FaqContext.Provider value={{ genFaq, ausFaq, ukFaq, usaFaq, canFaq, schenFaq, nzFaq, turFaq, taiFaq}}>
            {props.children}
        </FaqContext.Provider>
    )
}

export default FaqState