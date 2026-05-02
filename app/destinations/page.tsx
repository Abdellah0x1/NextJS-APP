import { Search } from 'lucide-react';

export default function Destinations() {
    return <div className="flex flex-col flex-1">
        <div className="flex flex-col items-center gap-8 px-4">
            <h1 className="text-primary font-semibold text-3xl md:text-5xl text-center mt-20">
                Discover the soul of Morocco.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl">
                From the labyrinthine medinas of Fez to the endless dunes of the Sahara.
            </p>
            
            <div className="relative w-full max-w-2xl mt-4">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-primary/60" />
                </div>
                <input 
                    className="w-full bg-white/80 backdrop-blur-md py-4 pl-14 pr-32 rounded-full border border-primary/20 shadow-sm focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-gray-800 placeholder-gray-400 text-lg" 
                    placeholder="Search for cities, regions, or landmarks..." 
                />
                <button className="absolute inset-y-2 right-2 px-6 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium shadow-sm">
                    Search
                </button>
            </div>
        </div>
    </div>
}