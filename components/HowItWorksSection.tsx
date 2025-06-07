import React from 'react';
import Image from 'next/image'; 

interface StepIcon {
    src: string;
    alt: string;
}

interface Step {
    icon: StepIcon; 
    title: string;
    description: string;
}

const HowItWorksSection: React.FC = () => {
    const steps: Step[] = [
        {
            icon: { src: '/Location.png', alt: 'Choose Location Icon' }, 
            title: "Choose Location",
            description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.",
        },
        {
            icon: { src: '/calander.png', alt: 'Pick-up Date Icon' },
            title: "Pick-up Date",
            description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.",
        },
        {
            icon: { src: '/stop.png', alt: 'Book Your Car Icon' }, 
            title: "Book your car",
            description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.",
        },
    ];

    // Icon background gradient based on the image
    const iconBgGradient: string = "bg-gradient-to-b from-[#90A866] to-[#596845]";
    
    // Text colors based on the image
    const primaryTextColor: string = "text-[#1D2B38]"; 
    const secondaryTextColor: string = "text-[#55606B]"; 
    const stepTitleColor: string = "text-[#333F4A]"; 

    return (
        <div className="w-full bg-white py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${primaryTextColor} mb-3 md:mb-4`}>
                        How it work
                    </h2>
                    <p className={`text-base md:text-lg ${secondaryTextColor} max-w-xl lg:max-w-2xl mx-auto`}>
                        A high-performing web-based car rental system for any rent-a-car company and website
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute top-0 left-0 w-full h-24 pointer-events-none">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 1200 96"
                            preserveAspectRatio="none"
                        >
                            <path d="M 240 48 Q 400 18, 560 48" stroke="#D1D5DB" strokeWidth="2" fill="none" />
                            <path d="M 640 48 Q 800 78, 960 48" stroke="#D1D5DB" strokeWidth="2" fill="none" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center relative z-10">
                                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${iconBgGradient} flex items-center justify-center shadow-md mb-5 md:mb-6`}>
                                    <Image
                                        src={step.icon.src}
                                        alt={step.icon.alt}
                                        width={48} 
                                        height={48} 
                                        className="h-10 w-10 md:h-12 md:w-12" 
                                    />
                                </div>
                                <h3 className={`text-xl font-semibold ${stepTitleColor} mb-2`}>
                                    {step.title}
                                </h3>
                                <p className={`text-sm ${secondaryTextColor} px-2 md:px-0`}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;