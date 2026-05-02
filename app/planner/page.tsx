"use client";
import { useState } from "react";
import marrakech from "@/public/marrakech.jpg"
import atlas from "@/public/atlas.jpg"
import chefchaoun from "@/public/chefchaoun.webp"
import fez from "@/public/fez.jpg"


import Image from "next/image";


import {
  CalendarDays,
  ChevronDown,
  UtensilsCrossed,
  Trees,
  Flower2,
  Landmark,
  Users,
  RefreshCw,
} from "lucide-react";


// Data arrays for options
const DESTINATIONS = [
  { id: 'Marrakech', name: 'Marrakech', description: "The Red City, where ancient palaces meet sensory markets and teh scnet of jasmine", image: marrakech },
  { id: 'Chefchaoun', name: 'Chefchaoun', description: "The Red City, where ancient palaces meet sensory markets and teh scnet of jasmine", image: chefchaoun },
  { id: 'Fes', name: 'Fes', description: "The Red City, where ancient palaces meet sensory markets and teh scnet of jasmine", image: fez },
  { id: 'Atlas', name: 'Atlas Mountains', description: "The Red City, where ancient palaces meet sensory markets and teh scnet of jasmine", image: atlas }
]


const interestsList = [
  { key: "culture", label: "Culture", icon: Landmark },
  { key: "nature", label: "Nature", icon: Trees },
  { key: "culinary", label: "Culinary", icon: UtensilsCrossed },
  { key: "wellness", label: "Wellness", icon: Flower2 },
];


export default function Planner() {
  const [guestCapacity, setGuestCapacity] = useState("1-2");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);


  const toggleInterest = (key: string) => {
    setSelectedInterests((prev) =>
      prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]
    );
  };


  return (
    <div className="zellij-pattern flex flex-col md:flex-row justify-between items-start gap-10 px-20 py-30">
      <form className="bg-surface border border-primary p-4 flex flex-col  gap-5 rounded-md">
        <h2>Trip Details</h2>
        <div className="flex flex-col gap-5">
          <label className="text-primary" htmlFor="date">date</label>
          <input className="bg-gray-50 border-b-2 px-4 py-2 outline-none border-primary" type="date" id="date" name="date" />
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-primary" htmlFor="duration">duration</label>
          <input className="bg-gray-50 px-4 py-2 outline-none border-b-2 border-primary" type="number" id="duration" name="duration" />
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-primary">Primary Interests</label>
          <div className="flex flex-wrap gap-5">
            {interestsList.map(({ key, label, icon: Icon }) => {
              const active = selectedInterests.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  className={`btn  border border-primary text-black ${active
                    ? "bg-primary border-white text-white"
                    : "hover:bg-primary/10 bg-transparent"
                    }`}
                  onClick={() => toggleInterest(key)}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5"  >
          <label className="text-primary">Guest Capacity</label>
          <select
            value={guestCapacity}
            onChange={(e) => setGuestCapacity(e.target.value)}
            className="bg-gray-50 border-b-2 px-4 py-2 outline-none border-primary"
          >
            <option value="1-2">1-2</option>
            <option value="3-5">3-5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Generate Itinerary
        </button>
      </form>


      {/* destinations */}
      <div className="grid md:grid-cols-2 gap-5 min-w-xl w-fit">
        {DESTINATIONS.map(({ id, name, description, image }) => {
          return <div key={id} className="border border-primary rounded-md overflow-hidden shadow-md">
            <Image src={image} alt={name} className="h-[60%]" />
            <div className="p-2">
              <h3 className="text-primary text-center">{name}</h3>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}
