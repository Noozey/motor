
import React, { useState } from "react";

enum CarSpecificationsLayoutType {
    keyFeature = 'KeyFeature',
    specs= 'Specs',
    technology='Technology',
    safety='Safety',
    details='Details',
}

const CarSpecificationsLayout = () => {
    const specificationTabs:CarSpecificationsLayoutType[] = [
        CarSpecificationsLayoutType.keyFeature,
        CarSpecificationsLayoutType.specs,
        CarSpecificationsLayoutType.technology,
        CarSpecificationsLayoutType.safety,
        CarSpecificationsLayoutType.details,
    ];

    const [activeTab, setActiveTab] = useState<CarSpecificationsLayoutType>(CarSpecificationsLayoutType.keyFeature);

    const handleSpecClick = (tab: CarSpecificationsLayoutType) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full py-5 sm:py-20">
            {/* Desktop Tabs */}
            <div className="w-full hidden sm:flex justify-center md:justify-start items-center gap-6">
                {specificationTabs.map((tab, index) => (
                    <React.Fragment key={tab}>
                        <button
                            onClick={() => handleSpecClick(tab)}
                            className={`cursor-pointer ${
                                activeTab === tab
                                    ? "text-black font-semibold" 
                                    : "text-gray-500"
                            }`}
                        >
                            {tab}
                        </button>

                        {index < specificationTabs.length - 1 && (
                            <div className="h-5 w-px bg-gray-300" />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="w-full flex sm:hidden items-center justify-center mt-4">
                <select
                    id="tab-select"
                    value={activeTab}
                    onChange={(e) => handleSpecClick(e.target.value as CarSpecificationsLayoutType)}
                    className="border border-gray-300 p-2 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {specificationTabs.map((tab) => (
                        <option key={tab} value={tab}>
                            {tab}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
};


export default CarSpecificationsLayout;
