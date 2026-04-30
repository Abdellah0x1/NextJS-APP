import Link from "next/link"

export default function Navigation(){
    return (
        <nav className="fixed z-50 top-0 left-0 right-0 px-8 py-4 flex justify-between items-center bg-surface/80 backdrop-blur-md border-b border-surface-variant transition-all duration-300">
            <h1 className="text-2xl font-serif text-primary tracking-wide">Maroc Discovery</h1>
            <ul className="hidden md:flex gap-8 text-on-surface font-sans text-sm font-semibold tracking-widest uppercase">
                <li><Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link></li> 
                <li><Link href="/destinations" className="hover:text-primary transition-colors duration-200">Destinations</Link></li> 
                <li><Link href="/culture" className="hover:text-primary transition-colors duration-200">Culture</Link></li> 
                <li><Link href="/Planner" className="hover:text-primary transition-colors duration-200">Planner</Link></li> 
            </ul>
            <button className="btn btn-primary">Explore now</button>
        </nav>
    );
}