// pages/breeds/index.tsx (Серверный компонент)
import React from "react";
import { fetchDogBreeds, fetchCatBreeds } from "../../app/api/api";
import SearchForm from "../../components/SearchForm";
import { Breed } from "../../types";

export default async function BreedsPage() {
  const dogBreeds: Breed[] = await fetchDogBreeds();
  const catBreeds: Breed[] = await fetchCatBreeds();
  const combinedBreeds: Breed[] = [...dogBreeds, ...catBreeds];

  return (
    <main className="max-w-7xl mx-auto p-4">
      <SearchForm breeds={combinedBreeds} />
    </main>
  );
}
