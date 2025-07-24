import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the ALX Listing App</h1>
        <Card />
        <div className="mt-4">
          <Button />
        </div>
      </main>
    </>
  );
}
import { HERO_BG } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] w-full flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${HERO_BG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
import Pill from "@/components/common/Pill";
import { useState } from "react";

const filters = ["Top Villa", "Self Checkin", "Private Pool", "Near Beach", "Pet Friendly"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div>
      {/* Hero section here... */}

      {/* Filter Section */}
      <section className="py-8 px-4 flex flex-wrap gap-4 justify-center">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </section>
    </div>
  );
}
export default function Home() {
  return (
    <div className="px-4 py-8 space-y-10">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white text-center py-32 rounded-xl"
        style={{ backgroundImage: "url('/your-image.jpg')" }}
      >
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-4">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="flex gap-2 flex-wrap justify-center">
        {["Top Villa", "Self Check-in", "Countryside", "Rooms"].map((label) => (
          <span
            key={label}
            className="bg-gray-200 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-gray-300"
          >
            {label}
          </span>
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md">
            <Image
              src={property.image}
              alt={property.name}
              width={400}
              height={250}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 space-y-1">
              <h2 className="font-semibold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-500">{property.address}</p>
              <p className="text-md font-medium text-blue-600">${property.price}</p>
              <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
