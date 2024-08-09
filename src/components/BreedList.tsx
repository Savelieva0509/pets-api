"use client";

import React, { useState, useEffect } from "react";
import { Breed } from "../types";
import BreedCard from "./BreedCard";
import { fetchDogBreeds, fetchCatBreeds } from "../app/api/api";
import { ClipLoader } from "react-spinners";

const BreedList: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        setLoading(true);
        const dogBreeds = await fetchDogBreeds();
        const catBreeds = await fetchCatBreeds();

        const combinedBreeds = [...dogBreeds, ...catBreeds];

        for (let i = combinedBreeds.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [combinedBreeds[i], combinedBreeds[j]] = [
            combinedBreeds[j],
            combinedBreeds[i],
          ];
        }

        setBreeds(combinedBreeds);
      } catch (err) {
        setError("Failed to load breeds");
      } finally {
        setLoading(false);
      }
    };

    loadBreeds();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader size={150} color="#000000" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {breeds.map((breed) => (
        <BreedCard
          key={breed.id}
          id={breed.id}
          name={breed.name}
          imageUrl={breed.imageUrl}
          type={breed.type}
        />
      ))}
    </div>
  );
};

export default BreedList;
