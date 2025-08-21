import React from 'react';
import GuideCard from './GuideCard';

const GuidesList = ({ title, subtitle, guides, onSelectGuide }) => (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{subtitle}</p>
            </div>
            {guides.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map(guide => (
                        <GuideCard key={guide.title} guide={guide} onSelectGuide={onSelectGuide} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500">
                    <p>No guides found in this category.</p>
                </div>
            )}
        </div>
    </section>
);

export default GuidesList;