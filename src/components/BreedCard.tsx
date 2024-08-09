import Link from "next/link";
import Image from "next/image";
import { Breed } from "../types";

const BreedCard: React.FC<Breed> = ({ id, name, imageUrl, type }) => {
  return (
    <Link href={`/breeds/${type}/${id}`}>
      <div className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="relative w-full h-60">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6 bg-gray-100">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-xl text-gray-700">
            {type === "dog" ? "Dog" : "Cat"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BreedCard;
