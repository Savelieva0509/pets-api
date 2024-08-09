import BreedList from "../../components/BreedList";



export default async function BreedsPage() {


  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Pet Breed Explorer</h1>
      <BreedList/>
    </main>
  );
}
