import Image from "next/image";
import { BreedDetails } from "../types";

const BreedCardDetails: React.FC<{ breedDetails: BreedDetails }> = ({
  breedDetails,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">{breedDetails.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {breedDetails.images.map((imageUrl, index) => (
          <div key={index} className="relative w-full h-64 md:h-96">
            <Image
              src={imageUrl}
              alt={breedDetails.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        ))}
        <div>
          <p className="text-xl mb-2">
            <strong>Weight:</strong> {breedDetails.weight}
          </p>
          <p className="text-xl mb-2">
            <strong>Height:</strong> {breedDetails.height}
          </p>
          <p className="text-xl mb-2">
            <strong>Bred For:</strong> {breedDetails.bredFor}
          </p>
          <p className="text-xl mb-2">
            <strong>Breed Group:</strong> {breedDetails.breedGroup}
          </p>
          <p className="text-xl mb-2">
            <strong>Life Span:</strong> {breedDetails.lifeSpan}
          </p>
          <p className="text-xl mb-2">
            <strong>Temperament:</strong> {breedDetails.temperament}
          </p>
        </div>
      </div>

      <p className="text-xl mb-2">
        <strong>Description:</strong> {breedDetails.desc}
      </p>

      {breedDetails.wiki && (
        <p className="text-xl mb-2">
          <a
            href={breedDetails.wiki}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Read more on Wikipedia
          </a>
        </p>
      )}
    </div>
  );
};

export default BreedCardDetails;
