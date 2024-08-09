import axios from "axios";
import { Breed, BreedDetails } from "../../types";

export const fetchDogBreeds = async (): Promise<Breed[]> => {
  try {
    const response = await axios.get("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_DOG_API_KEY!,
      },
    });
    return response.data.map((dog: any) => ({
      id: dog.id,
      name: dog.name,
      imageUrl: dog.image?.url || "",
      type: "dog",
    }));
  } catch (error) {
    console.error("Error fetching dog breeds", error);
    return [];
  }
};

export const fetchCatBreeds = async (): Promise<Breed[]> => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY!,
      },
    });
    return response.data.map((cat: any) => ({
      id: cat.id,
      name: cat.name,
      imageUrl: cat.image?.url || "",
      type: "cat",
    }));
  } catch (error) {
    console.error("Error fetching cat breeds", error);
    return [];
  }
};

export async function fetchBreedDetails(
  type: "dog" | "cat",
  id: string
): Promise<BreedDetails | null> {
  try {
    const breedApiUrl =
      type === "dog"
        ? `https://api.thedogapi.com/v1/breeds/${id}`
        : `https://api.thecatapi.com/v1/breeds/${id}`;

    const imagesApiUrl =
      type === "dog"
        ? `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&breed_ids=${id}`
        : `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&breed_ids=${id}`;

    const [breedResponse, imagesResponse] = await Promise.all([
      axios.get(breedApiUrl, {
        headers: {
          "x-api-key":
            type === "dog"
              ? process.env.NEXT_PUBLIC_DOG_API_KEY!
              : process.env.NEXT_PUBLIC_CAT_API_KEY!,
        },
      }),
      axios.get(imagesApiUrl, {
        headers: {
          "x-api-key":
            type === "dog"
              ? process.env.NEXT_PUBLIC_DOG_API_KEY!
              : process.env.NEXT_PUBLIC_CAT_API_KEY!,
        },
      }),
    ]);

    const breedData = breedResponse.data;
    const imagesData = imagesResponse.data;

    return {
      name: breedData.name || "Unknown",
      desc: breedData.description || "No description available",
      images: imagesData.map((image: any) => image.url),
      weight: breedData.weight ? breedData.weight.metric : "not specified",
      height: breedData.height ? breedData.height.metric : "not specified",
      bredFor: breedData.bred_for || "not specified",
      breedGroup: breedData.breed_group || "not specified",
      lifeSpan: breedData.life_span || "not specified",
      temperament: breedData.temperament || "not specified",
      wiki: breedData.wikipedia_url || null,
    };
  } catch (error) {
    console.error("Error fetching breed info:", error);
    return null;
  }
}
