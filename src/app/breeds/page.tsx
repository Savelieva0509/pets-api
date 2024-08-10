import React from "react";
import { fetchDogBreeds, fetchCatBreeds } from "../../app/api/api";
import SearchForm from "../../components/SearchForm";
import { Breed } from "../../types";

export default async function BreedsPage() {
  const dogBreeds: Breed[] = await fetchDogBreeds();
  const catBreeds: Breed[] = await fetchCatBreeds();
  const combinedBreeds: Breed[] = [...dogBreeds, ...catBreeds];

  const getMixBreeds = (breeds: Breed[]): Breed[] => {
    for (let i = breeds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [breeds[i], breeds[j]] = [breeds[j], breeds[i]];
    }
    return breeds;
  };

  const mixedBreeds = getMixBreeds(combinedBreeds);

  return (
    <main className="max-w-7xl mx-auto p-4">
      <SearchForm breeds={mixedBreeds} />
    </main>
  );
}
