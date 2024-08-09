import type { Metadata } from "next";
import BreedList from "../../components/BreedList";
import { fetchDogBreeds, fetchCatBreeds } from "../api/api";

async function getBreeds() {
  const dogBreeds = await fetchDogBreeds();
  const catBreeds = await fetchCatBreeds();
  return [...dogBreeds, ...catBreeds];
}

export default async function BreedsPage() {
  const breeds = await getBreeds();

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Pet Breed Explorer</h1>
      <BreedList breeds={breeds} />
    </main>
  );
}
