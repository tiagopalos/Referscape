// types/PinTypes.ts

// Updated Pin interface to match the Pexels API response
export interface Pin {
  id: number; // Unique identifier for the pin (or photo)
  width: number; // Width of the image
  height: number; // Height of the image
  url: string; // URL to the pin's page on Pexels
  src: {
    original: string; // Original size image URL
    large: string; // Large size image URL
    medium: string; // Medium size image URL
    small: string; // Small size image URL
  };
  alt: string; // Alt text/description for the pin
}

// Existing PinState interface
export interface PinState {
  pins: Pin[];
  loading: boolean;
  error: string | null;
}

export const FETCH_PINS_REQUEST = 'FETCH_PINS_REQUEST';
export const FETCH_PINS_SUCCESS = 'FETCH_PINS_SUCCESS';
export const FETCH_PINS_FAILURE = 'FETCH_PINS_FAILURE';

interface FetchPinsRequestAction {
  type: typeof FETCH_PINS_REQUEST;
}

interface FetchPinsSuccessAction {
  type: typeof FETCH_PINS_SUCCESS;
  payload: Pin[];
}

interface FetchPinsFailureAction {
  type: typeof FETCH_PINS_FAILURE;
  payload: string;
}

export type PinActionTypes =
  | FetchPinsRequestAction
  | FetchPinsSuccessAction
  | FetchPinsFailureAction;

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: Pin[] | Pin;
}

export type SortBy = 'title' | 'createdAt';
export type FilterBy = 'userId';