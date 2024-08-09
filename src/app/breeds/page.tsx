import BreedList from "../../components/BreedList";
import { fetchDogBreeds, fetchCatBreeds } from "../api/api";

async function getBreeds() {
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

  return combinedBreeds;
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
