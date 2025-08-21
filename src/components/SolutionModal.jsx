import React from 'react';

const SolutionModal = ({ guide, onClose }) => {
    if (!guide) return null;

    return (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b sticky top-0 bg-white z-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className={`text-sm ${guide.categoryColor} font-semibold`}>{guide.category}</span>
                            <h2 className="text-2xl font-bold text-gray-800">{guide.title}</h2>
                        </div>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl leading-none">&times;</button>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-600 mb-6">{guide.description}</p>
                    <div className="space-y-4">
                        {guide.solution.map((step, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-lg text-gray-800">{index + 1}. {step.title}</h3>
                                <p className="text-gray-600 ml-5 mt-1">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4 bg-gray-50 border-t text-right sticky bottom-0">
                    <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Close</button>
                </div>
            </div>
        </div>
    );
};

export default SolutionModal;