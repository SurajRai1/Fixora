import Icon from './Icon';

const Categories = ({ categories, onSelectCategory }) => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Find Solutions by Category</h2>
                <p className="text-gray-600 mt-2">Browse through common laptop problem areas.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {categories.map(cat => (
                    <div 
                        key={cat.title} 
                        onClick={() => onSelectCategory(cat.title)}
                        className="icon-card bg-blue-50 p-6 rounded-lg text-center transition duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-white rounded-full p-4 inline-block shadow-md">
                                <Icon path={cat.iconPath} className="w-10 h-10 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">{cat.title}</h3>
                        <p className="text-sm text-gray-600">{cat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Categories;