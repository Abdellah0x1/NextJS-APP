import Link from 'next/link';

export default function Terms() {
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <section className="relative px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center mt-16 bg-surface-variant/20">
                <h1 className="text-primary font-serif font-bold text-4xl md:text-5xl mb-4 tracking-wide">
                    Terms of Service
                </h1>
                <p className="text-gray-600 font-sans text-lg">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
            </section>

            <section className="max-w-4xl mx-auto px-8 py-16 prose prose-lg prose-primary text-gray-700 font-sans leading-relaxed">
                <p>
                    Welcome to Maroc Discovery. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing our platform, you accept these Terms of Service in full. If you disagree with these terms or any part of these terms, you must not use our website.
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">2. Services Provided</h2>
                <p>
                    Maroc Discovery acts as an intermediary providing trip planning and booking services. We strive to ensure the accuracy of all information but do not guarantee that descriptions, pricing, or availability are entirely error-free.
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">3. Booking and Payments</h2>
                <p>
                    When you make a booking through our platform, you agree to provide accurate and complete information. You are responsible for all charges incurred under your account. Cancellation policies vary depending on the specific service provider (hotels, tour operators) and will be presented to you at the time of booking.
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">4. User Conduct</h2>
                <p>
                    You agree to use our services only for lawful purposes. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the platform.
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">5. Limitation of Liability</h2>
                <p>
                    Maroc Discovery shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, including but not limited to delays or cancellations caused by third-party vendors.
                </p>

                <h2 className="text-2xl font-serif text-primary mt-8 mb-4">6. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the service constitutes acceptance of the modified terms.
                </p>

                <div className="mt-16 p-8 bg-surface border border-primary/20 rounded-xl text-center">
                    <p className="font-bold text-primary mb-2">Questions about these terms?</p>
                    <p>Please contact us at <a href="mailto:legal@marocdiscovery.com" className="underline hover:text-primary-dark">legal@marocdiscovery.com</a></p>
                </div>
            </section>
        </div>
    );
}
