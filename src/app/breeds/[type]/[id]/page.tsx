import { notFound } from "next/navigation";
import { fetchBreedDetails } from "../../../api/api";
import BreedCardDetails from "../../../../components/BreedCardDetails";

interface BreedDetailsProps {
  params: {
    type: "dog" | "cat";
    id: string;
  };
}

export default async function BreedDetailsPage({ params }: BreedDetailsProps) {
  const breed = await fetchBreedDetails(params.type, params.id);
  console.log(breed);

  if (!breed) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-4">
      <BreedCardDetails breedDetails={breed} />
    </main>
  );
}
