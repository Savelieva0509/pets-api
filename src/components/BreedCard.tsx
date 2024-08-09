import React from "react";
import Link from "next/link";
import { Breed } from "../types";

const BreedCard: React.FC<Breed> = ({ id, name, imageUrl, type }) => {
  return (
    <Link href={`/breeds/${type}/${id}`}>
      <div className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">
            {type === "dog" ? "Dog" : "Cat"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BreedCard;
