import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/common/Pill";

const HERO_BG = "/images/Hero-Section.jpg"; // Update this if your hero image is in a different location

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("");

  const filters = ["Top Villa", "Self Checkin", "Private Pool", "Near Beach", "Pet Friendly"];

  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="px-4 py-8 space-y-10">
        {/* Hero Section */}
        <section
          className="relative h-[400px] w-full flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url(${HERO_BG})`,
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

        {/* Filter Section */}
        <section className="flex gap-2 flex-wrap justify-center">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </section>

        {/* Listing Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
            <div key={property.id} className="border rounded-lg overflow-hidden shadow-md">
              <Image
                src={property.image}
                alt={property.name}
                width={400}
                height={250}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 space-y-1">
                <h2 className="font-semibold text-lg">{property.name}</h2>t
                <p className="text-sm text-gray-500">
  {`${property.address.state}, ${property.address.city}, ${property.address.country}`}
</p>

                <p className="text-md font-medium text-blue-600">${property.price}</p>
                <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
