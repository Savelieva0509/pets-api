export type Breed = {
  id: string;
  name: string;
  imageUrl: string;
  type: "dog" | "cat";
};

export type BreedDetails = {
  name: string;
  desc?: string;
  images: [];
  weight: string;
  height: string;
  bredFor: string;
  breedGroup: string;
  lifeSpan: string;
  temperament: string;
  wiki: string;
};