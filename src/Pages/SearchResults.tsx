// src/Pages/SearchResults.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchImages } from '../services/api';
import { transformPin } from '../utils/transformPin';
import PinComponent from '../Components/Pin'; // Renders individual pins
import PinModal from '../Components/PinModal'; // Displays detailed information about a selected pin

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedPin, setSelectedPin] = useState<any>(null);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Track loading state

  const query = searchParams.get('query') || ''; // Extract the search query from URL params

  // Handle page reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      setSearchResults([]); // Clear search results
      navigate('/', { replace: true }); // Redirect to the home page
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [navigate]);

  // Clear selected pin on mount
  useEffect(() => {
    setSelectedPin(null);
  }, []);

  // Fetch images based on query and page
  const fetchResults = async (newPage: number) => {
    if (loading) return; // Prevent multiple simultaneous requests

    setLoading(true);
    try {
      const result = await fetchImages(query, newPage); // Fetch images for the given page
      console.log('Fetched Results:', result);

      // Use the transformPin utility to format the results
      const formattedResults = result.map(transformPin);

      // Deduplicate results based on id
      const uniqueResults = Array.from(
        new Map(formattedResults.map((item) => [item.id, item])).values()
      );

      console.log('Unique Results:', uniqueResults); // Inspect the deduplicated results

      // Append new results to the existing search results
      setSearchResults((prevResults) => [...prevResults, ...uniqueResults]);
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial results when the query changes
  useEffect(() => {
    if (query) {
      setSearchResults([]); // Reset results when the query changes
      setPage(1); // Reset page to 1
      fetchResults(1); // Fetch the first page of results
    } else {
      setSearchResults([]);
    }
  }, [query]);

  // Fetch more results when the page changes
  useEffect(() => {
    if (page > 1 && query) {
      fetchResults(page); // Fetch results for the current page
    }
  }, [page, query]);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prevPage) => prevPage + 1); // Increment the page number
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle pin click
  const handlePinClick = (pin: any) => {
    setSelectedPin(pin); // Set the selected pin for the modal
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedPin(null); // Clear the selected pin
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

      {/* Display Search Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div
              key={`${result.id}-${index}`} // Combine id and index for uniqueness
              onClick={() => handlePinClick(result)}
              className="cursor-pointer"
            >
              <PinComponent pin={result} />
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center">Loading more images...</p>}

      {/* Pin Modal */}
      {selectedPin && (
        <PinModal
          pin={selectedPin}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SearchResults;