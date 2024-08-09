import { Breed } from "../types";
import BreedCard from "./BreedCard";

interface BreedListProps {
  breeds: Breed[];
}

const BreedList: React.FC<BreedListProps> = ({ breeds }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
