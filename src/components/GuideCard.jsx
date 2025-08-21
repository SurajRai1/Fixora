import React from 'react';

const GuideCard = ({ guide, onSelectGuide }) => (
    <div 
        onClick={() => onSelectGuide(guide)}
        className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col cursor-pointer"
    >
        <img 
            src={guide.imageUrl} 
            alt={`${guide.title} illustration`} 
            className="w-full h-48 object-cover" 
            onError={(e) => { 
                e.target.onerror = null; 
                e.target.src='https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'; 
            }}
        />
        <div className="p-6 flex flex-col flex-grow">
            <span className={`text-sm ${guide.categoryColor} font-semibold`}>{guide.category}</span>
            <h3 className="text-xl font-bold my-2">{guide.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{guide.description}</p>
            <span className="text-blue-600 font-semibold hover:underline text-left mt-auto">
                Read Guide &rarr;
            </span>
        </div>
    </div>
);

export default GuideCard;