// src/Components/Navbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const navigate = useNavigate(); // Use navigate hook here

  // Handle search functionality
  const handleSearch = (search: string) => {
    if (!search.trim()) {
      console.warn('Search query is empty');
      return;
    }

    // Navigate to the search-results page with the query as a URL parameter
    navigate(`/search-results?query=${encodeURIComponent(search)}`);
  };

  return (
    <div className="navbar bg-base-100 h-16 items-center justify-between p-4 shadow-md sticky top-0 z-50">
      {/* Logo and App Name */}
      <div className="flex gap-2 items-center">
        <a
          className="btn btn-ghost text-xl font-sans flex items-center"
          href="http://localhost:5173/"
        >
          <img
            src="./src/assets/RSlogo.svg"
            alt="App Logo"
            className="w-10 h-10 mr-2"
          />
          ReferScape
        </a>
      </div>

      {/* Search Bar */}
      <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Navbar;