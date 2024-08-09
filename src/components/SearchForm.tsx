"use client";

import React, { useState, useEffect } from "react";
import { Breed } from "../types";
import BreedList from "./BreedList";
import Loader from "./Loader";

interface SearchFormProps {
  breeds: Breed[];
}

const SearchForm: React.FC<SearchFormProps> = ({ breeds }) => {
  const [query, setQuery] = useState<string>("");
    const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>(breeds);
    const [loading, setLoading] = useState<boolean>(true);



    useEffect(() => {
      setLoading(true);
      // Filter breeds based on the query
      if (query) {
        setFilteredBreeds(
          breeds.filter((breed) =>
            breed.name.toLowerCase().includes(query.toLowerCase())
          )
        );
      } else {
        setFilteredBreeds(breeds);
      }
      setLoading(false);
    }, [query, breeds]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search breeds..."
        className="mb-4 p-4 border border-gray-300 rounded-lg w-full"
      />
      {loading ? <Loader /> : <BreedList breeds={filteredBreeds} />}
    </>
  );
};

export default SearchForm;
