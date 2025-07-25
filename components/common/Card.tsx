import React from 'react';
import Image from 'next/image';

type CardProps = {
  image: string; // e.g., "/properties/property1.jpg"
  title: string;
  location: string;
  price: string;
};

const Card = ({ image, title, location, price }: CardProps) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-indigo-600 font-bold">{price}</p>
    </div>
  );
};

export default Card;
