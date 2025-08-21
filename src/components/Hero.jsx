import React from 'react';
import Icon from './Icon';

const Hero = ({ searchTerm, onSearchChange }) => (
    <section className="py-20 md:py-32" style={{ 
        backgroundColor: '#f0f8ff',
        backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.8) 0%, rgba(220, 237, 255, 0.8) 100%), url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Your Laptop Problems, Solved.</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Simple, step-by-step guides to fix any laptop issue. Fast.</p>
            <div className="max-w-xl mx-auto">
                <div className="relative">
                    <input 
                        type="search" 
                        placeholder="Search for an issue (e.g., 'slow laptop', 'wifi')" 
                        className="w-full py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-3 pointer-events-none">
                        <Icon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;