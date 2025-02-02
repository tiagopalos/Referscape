// src/Components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void; // Simplified to only accept a search query
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload on form submission

    if (searchQuery.trim() !== "") {
      onSearch(searchQuery.trim()); // Pass the trimmed query to the parent component
      setSearchQuery(""); // Clear the input field after submission
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleFormSubmit}>
      {/* Search Input */}
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          placeholder="Search for images..."
          className="grow text-left border-none w-64 md:w-[600px]"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Search Button */}
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;