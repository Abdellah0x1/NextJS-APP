import { Compass, Heart, Leaf, Users } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            {/* Hero Section */}
            <section className="relative px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center mt-16">
                <h1 className="text-primary font-serif font-bold text-4xl md:text-6xl mb-6 tracking-wide">
                    Our Story
                </h1>
                <p className="text-gray-600 font-sans text-lg md:text-xl max-w-3xl leading-relaxed">
                    Maroc Discovery was born from a deep-rooted passion for the authentic soul of Morocco. 
                    We are not just a travel agency; we are curators of unforgettable Maghreb experiences, 
                    dedicated to connecting travelers with the rich heritage, vibrant culture, and breathtaking 
                    landscapes of our homeland.
                </p>
            </section>

            {/* Mission Section */}
            <section className="bg-surface-variant/30 py-20 px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            To unveil the true magic of Morocco by crafting bespoke journeys that respect 
                            local traditions, support local communities, and leave our guests with memories 
                            that last a lifetime. We believe travel should be transformative, bridging 
                            cultures through genuine encounters and shared moments.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            From the bustling souks of Marrakech to the silent, starry nights in the Sahara, 
                            every itinerary is woven with care, expertise, and a touch of Moroccan hospitality.
                        </p>
                    </div>
                    {/* Decorative Image Placeholder (Stylized Div for now) */}
                    <div className="relative aspect-square md:aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center p-8 zellij-pattern shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                        <Compass className="w-32 h-32 text-primary/40" strokeWidth={1} />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-16">Why Travel With Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Authentic Connections</h3>
                        <p className="text-gray-600">
                            We take you beyond the tourist trails. Dine with local families, learn ancient crafts from artisans, and experience the true warmth of Moroccan hospitality.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Expert Local Guides</h3>
                        <p className="text-gray-600">
                            Our team consists of passionate locals who know every hidden alley of the Medina and every dune of the desert. They are your storytellers and friends.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <Leaf size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Sustainable Travel</h3>
                        <p className="text-gray-600">
                            We are committed to preserving the beauty of Morocco. We partner with eco-friendly riads and ensure our tours have a positive impact on local communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8 bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">Ready to start your journey?</h2>
                    <p className="text-white/80 text-lg md:text-xl">
                        Let us design your perfect Moroccan escape. Whether you seek adventure, relaxation, or cultural immersion, we are here to make it happen.
                    </p>
                    <Link href="/planner" className="mt-4 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Plan Your Trip
                    </Link>
                </div>
            </section>
        </div>
    );
}