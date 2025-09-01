import React from "react";
import OrgChart from "./OrgChart"; // Import the chart component we created

const OurTeamPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Meet the NagaEd Team
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Our organizational structure, designed for collaboration and innovation.
          </p>
        </div>

        {/* The placeholder is now replaced with the actual OrgChart component */}
        <div className="mt-12">
          <OrgChart />
        </div>
        
      </div>
    </div>
  );
};

export default OurTeamPage;