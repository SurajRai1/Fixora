import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import GuidesList from './components/GuidesList';
import SolutionModal from './components/SolutionModal';
import Footer from './components/Footer';
import { troubleshootingData } from './data/troubleshootingData';

export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredGuides, setFilteredGuides] = useState([]);
    const [selectedGuide, setSelectedGuide] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredGuides([]);
            return;
        }
        const allGuides = troubleshootingData.flatMap(category => category.guides);
        const searchResults = allGuides.filter(guide => 
            guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            guide.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredGuides(searchResults);
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setSelectedCategory(null);
    };

    const handleSelectCategory = (categoryTitle) => {
        setSelectedCategory(categoryTitle);
        setSearchTerm('');
    };
    
    const handleClearCategory = () => {
        setSelectedCategory(null);
    };

    const handleNavigation = (page) => {
        setCurrentPage(page);
        setSearchTerm('');
        setSelectedCategory(null);
    };

    const featuredGuides = troubleshootingData.flatMap(category => category.guides).filter(guide => guide.featured);
    const guidesForSelectedCategory = selectedCategory 
        ? troubleshootingData.find(cat => cat.title === selectedCategory)?.guides || []
        : [];

    const renderContent = () => {
        if (searchTerm.trim() !== '') {
            return (
                <GuidesList 
                    title="Search Results"
                    subtitle={`Found ${filteredGuides.length} guides for "${searchTerm}"`}
                    guides={filteredGuides}
                    onSelectGuide={setSelectedGuide}
                />
            );
        }

        if (selectedCategory) {
            return (
                <>
                    <div className="container mx-auto px-6 pt-8">
                        <button 
                            onClick={handleClearCategory}
                            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Back to All Categories
                        </button>
                    </div>
                    <GuidesList 
                        title={selectedCategory}
                        subtitle={`All troubleshooting guides for ${selectedCategory}.`}
                        guides={guidesForSelectedCategory}
                        onSelectGuide={setSelectedGuide}
                    />
                </>
            );
        }

        switch (currentPage) {
            case 'troubleshooting':
                return (
                    <>
                        <Categories categories={troubleshootingData} onSelectCategory={handleSelectCategory} />
                        <GuidesList 
                            title="All Troubleshooting Guides"
                            subtitle="Browse through our complete collection of laptop troubleshooting solutions."
                            guides={troubleshootingData.flatMap(category => category.guides)}
                            onSelectGuide={setSelectedGuide}
                        />
                    </>
                );
            case 'common-issues':
                return (
                    <GuidesList 
                        title="Most Common Laptop Issues"
                        subtitle="The problems our users encounter most frequently, with proven solutions."
                        guides={featuredGuides}
                        onSelectGuide={setSelectedGuide}
                    />
                );
            default:
                return (
                    <>
                        <Categories categories={troubleshootingData} onSelectCategory={handleSelectCategory} />
                        <GuidesList 
                            title="Popular Troubleshooting Guides"
                            subtitle="Check out our most viewed step-by-step solutions."
                            guides={featuredGuides}
                            onSelectGuide={setSelectedGuide}
                        />
                    </>
                );
        }
    };

    return (
        <div className="bg-gray-50 text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Header currentPage={currentPage} onNavigate={handleNavigation} />
            <main>
                <Hero searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                {renderContent()}
            </main>
            <Footer />
            <SolutionModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
        </div>
    );
}