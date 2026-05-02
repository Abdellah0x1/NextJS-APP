import Image from "next/image";
import riad from '@/public/riad.jpg'
import gnawa from "@/public/Gnawa.jpg"
import Link from "next/link";
export default function Culture() {
    return (
        <>
            <div className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center px-6 zellif-pattern">
                <Image
                    src={riad}
                    alt="Culture"
                    fill
                    priority
                    unoptimized
                    className="object-cover -z-10"
                />
                <div className="absolute inset-0 bg-black/40 -z-10"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl mb-6">Morocco Soul & Heritage</h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Immerse yourself in a land where ancient traditions meet vibrant energy. Morocco is a sensory feast, a place where every corner holds a new story waiting to be discovered.
                    </p>
                </div>

            </div>
            <div className="flex gap-20 py-10 px-20 items-center">
                <div  className="flex flex-col gap-4">
                    <h3 className="text-primary text-sm">A LIVING LEGACY</h3>
                    <h2 className="font-semibold text-xl">Timeless Traditions</h2>
                    <p>
                        Moroccan culture is a tapestry woven from Berber, Arab, Andalusian, and sub-Saharan threads. Experience the vibrant colors of traditional textiles, the intricate artistry of zellij tilework, and the soulful melodies of Gnawa music. Each tradition is a living legacy, passed down through generations and celebrated in daily life.
                    </p>
                </div>
                <Image className="rounded-md shadow-xl" src={gnawa} alt="Gnawa Music"  />
            </div>

            <div className=" bg-primary  m-10 flex flex-col gap-5 text-center text-white rounded-lg shadow-xl p-8 relative">
                <h2 className="text-3xl">Begin Your Story</h2>
                <p>
                    Our curators are ready to craft an itinerary that reflects your soul. Morocco beyond the map.
                </p>
                <div className="flex flex-row gap-5 justify-center">
                    <Link href="/destinations" className="btn bg-white text-primary">Start Planning</Link>
                    <Link href="/contact" className="btn  flex items-center border border-white">Talk to a Curator</Link>
                </div>
            </div>
        </>
    );
}