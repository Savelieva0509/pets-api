// src/components/PaginationButton.tsx
"use client";

import React, { useState } from "react";
import axios from "axios";
import { Breed } from "../types";
import BreedList from "./BreedList";

const LIMIT = 9;

const LoadMoreButton: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMore = async () => {
    try {
      const dogBreeds = await axios.get(
        `/api/dog-breeds?page=${page + 1}&limit=${LIMIT}`
      );
      const catBreeds = await axios.get(
        `/api/cat-breeds?page=${page + 1}&limit=${LIMIT}`
      );

      const combinedBreeds = [...dogBreeds.data, ...catBreeds.data];

      // Перемешивание
      for (let i = combinedBreeds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combinedBreeds[i], combinedBreeds[j]] = [
          combinedBreeds[j],
          combinedBreeds[i],
        ];
      }

      setBreeds((prevBreeds) => [...prevBreeds, ...combinedBreeds]);

      setPage((prevPage) => prevPage + 1);

      // Условие для определения, есть ли еще данные
      setHasMore(
        dogBreeds.data.length === LIMIT || catBreeds.data.length === LIMIT
      );
    } catch (error) {
      console.error("Error loading breeds", error);
    }
  };

  return (
    <div>
      <BreedList breeds={breeds} />
      {hasMore && (
        <button
          onClick={loadMore}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
