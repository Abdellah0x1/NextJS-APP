import Link from 'next/link';

export default function Privacy() {
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <section className="relative px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center mt-16 bg-surface-variant/20">
                <h1 className="text-primary font-serif font-bold text-4xl md:text-5xl mb-4 tracking-wide">
                    Privacy Policy
                </h1>
                <p className="text-gray-600 font-sans text-lg">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
            </section>

            <section className="max-w-4xl mx-auto px-8 py-16 prose prose-lg prose-primary text-gray-700 font-sans leading-relaxed">
                <p>
                    At Maroc Discovery, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">1. Information We Collect</h2>
                <p>
                    We may collect and process the following data about you:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Personal Details:</strong> Name, email address, phone number, and billing information provided during the booking process.</li>
                    <li><strong>Travel Preferences:</strong> Interests, dietary requirements, and itinerary choices.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, and interaction data collected via cookies to improve user experience.</li>
                </ul>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">2. How We Use Your Information</h2>
                <p>
                    The information we collect is used in the following ways:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>To process and manage your bookings and payments.</li>
                    <li>To communicate with you regarding your itinerary, updates, or support requests.</li>
                    <li>To personalize your experience and provide tailored travel recommendations.</li>
                    <li>To improve our website functionality and service offerings.</li>
                </ul>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">3. Data Sharing and Third Parties</h2>
                <p>
                    We do not sell your personal data. However, we must share relevant details with our trusted third-party partners (hotels, airlines, local tour operators) strictly for the purpose of fulfilling your travel arrangements. We ensure these partners also adhere to strict privacy standards.
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">4. Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All payment transactions are encrypted using secure socket layer technology (SSL).
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">5. Your Rights</h2>
                <p>
                    You have the right to request access to the personal data we hold about you, ask for corrections, or request deletion of your data. You may also opt out of marketing communications at any time.
                </p>

                <div className="mt-16 p-8 bg-surface border border-primary/20 rounded-xl text-center">
                    <p className="font-bold text-primary mb-2">Privacy Inquiries</p>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@marocdiscovery.com" className="underline hover:text-primary-dark">privacy@marocdiscovery.com</a></p>
                </div>
            </section>
        </div>
    );
}
