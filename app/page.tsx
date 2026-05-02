import Link from 'next/link';
import desert from '../public/desert.png';
import Fez from '../public/fez.jpg';
import Image from 'next/image';
import mountains from "../public/atlas_mountains.webp"
import tagine from "../public/tagine.jpeg"
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-surface text-on-surface">

      <section className="relative text-white flex flex-col items-center justify-center min-h-screen pt-20">
        <Image src={desert} fill alt="Desert" className="w-full h-auto object-cover" priority /> 
        <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative max-w-3xl px-6 text-center flex flex-col items-center gap-6 mt-16'>
            <h2 className='text-tertiary-fixed-dim uppercase tracking-[0.2em] font-semibold text-sm'>Welcome to Al-Maghrib</h2>
            <h1 className='text-5xl md:text-7xl font-serif leading-[1.1] text-white drop-shadow-lg'>A Kingdom of Soulful Wonders</h1>
            <p className='text-lg md:text-xl font-sans text-surface-variant max-w-2xl leading-relaxed'>Experience the sensory richness of Morocco—from the warmth of sun-baked clay to the cool shade of ancient riad courtyards.</p>
            <div className='flex flex-col sm:flex-row gap-6 mt-8'>
              <button className='btn btn-primary px-8 py-4'>Begin Your Journey</button>
              <button className='btn btn-outline-white px-8 py-4'>Explore Destinations</button>
            </div>
          </div>
      </section>

      <section className='py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden zellij-pattern'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-primary font-serif text-4xl md:text-5xl font-semibold mb-4'>Why Visit Morocco?</h2>
              <div className='w-24 h-1 bg-secondary mx-auto opacity-50 rounded-full'></div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between mb-24 gap-12 bg-white rounded-xl p-8 md:p-12 warm-shadow border border-surface-variant'>
              <div className='md:w-1/2 flex flex-col gap-6'>
                <h3 className='font-serif text-3xl text-on-surface'>Echoes of a Thousand Years</h3>
                <p className='text-lg leading-relaxed text-on-surface-variant'>Step into the living history of imperial cities. From the Roman ruins of Volubilis to the medieval medina of Fes, every stone tells a story of dynasties, scholars, and artisans who shaped the world.</p>
                <Link className='font-semibold text-primary uppercase tracking-wider text-sm hover:text-primary-container transition-colors mt-2 flex items-center gap-2' href="/destinations" >
                  Explore Historical Sites <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <div className='md:w-1/2 w-full'>
                <div className='relative w-full aspect-[4/3] rounded-[100px_100px_0_0] overflow-hidden shadow-lg border border-surface-dim'>
                  <Image src={Fez} fill alt='Fez medina' className='object-cover'/>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse items-center justify-between mb-24 gap-12 bg-white rounded-xl p-8 md:p-12 warm-shadow border border-surface-variant'>
              <div className='md:w-1/2 flex flex-col gap-6'>
                <h3 className='font-serif text-3xl text-on-surface'>Wild Landscapes</h3>
                <p className='text-lg leading-relaxed text-on-surface-variant'>Conquer the snow-capped Atlas Mountains, surf the Atlantic breaks of Taghazout, or find solitude in the vastness of the Draa Valley. Morocco's nature is as diverse as its culture.</p>
                <Link className='font-semibold text-secondary uppercase tracking-wider text-sm hover:text-secondary-container transition-colors mt-2 flex items-center gap-2' href="/destinations" >
                  Discover Nature <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <div className='md:w-1/2 w-full'>
                <div className='relative w-full aspect-[4/3] rounded-[100px_100px_0_0] overflow-hidden shadow-lg border border-surface-dim'>
                  <Image src={mountains} fill alt='Atlas Mountains' className='object-cover'/>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-xl p-8 md:p-12 warm-shadow border border-surface-variant'>
              <div className='md:w-1/2 flex flex-col gap-6'>
                <h3 className='font-serif text-3xl text-on-surface'>Culinary Arts</h3>
                <p className='text-lg leading-relaxed text-on-surface-variant'>Savor the aromatic alchemy of saffron, cumin, and ginger. From slow-cooked tagines to the sweet ritual of mint tea, Moroccan cuisine is a hospitable embrace in every bite.</p>
                <Link className='font-semibold text-tertiary uppercase tracking-wider text-sm hover:text-tertiary-container transition-colors mt-2 flex items-center gap-2' href="/destinations" >
                  A Taste of Morocco <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <div className='md:w-1/2 w-full'>
                <div className='relative w-full aspect-[4/3] rounded-[100px_100px_0_0] overflow-hidden shadow-lg border border-surface-dim'>
                  <Image src={tagine} fill alt='Moroccan Tagine' className='object-cover'/>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className='py-24 px-6 flex flex-col items-center gap-8 bg-surface-dim'>
        <div className='max-w-2xl text-center flex flex-col items-center'>
          <h2 className='font-serif text-4xl text-primary mb-4'>Stay Inspired</h2>
          <p className='text-lg text-on-surface-variant mb-8'>Join our curated newsletter for boutique editorial content, exclusive travel tips, and cultural insights directly from the Kingdom.</p>
          <div className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
            <input 
              type="email"
              className='bg-transparent border-b-2 border-primary/40 focus:border-secondary py-3 px-4 min-w-[320px] outline-none transition-colors text-on-surface placeholder:text-on-surface-variant/60 font-sans' 
              placeholder='Enter your email address'
              aria-label="Email Address"
            />
            <button className='btn btn-primary px-8 whitespace-nowrap mt-4 sm:mt-0'>Subscribe</button>
          </div>
        </div>
      </section>
      
      <BackToTop />
    </div>
  );
}
