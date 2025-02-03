# ReferScape

ReferScape is a React-based image search application that allows users to browse images using the Pexels API. 
The application has features like infinite scrolling, modal views, and image downloading, providing a seamless and intuitive user experience.

## **Table of Contents**
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

Image Search: Search for images by keyword using the Pexels API.
Infinite Scrolling: Load more images as you scroll down for a seamless browsing experience.
Modal View: Click on an image to view its details, including title, description, and download options.
Responsive Design: Fully responsive layout for optimal viewing on all devices.
Download Images: Download images directly from the modal view.
Error Handling: Gracefully handle API errors and empty search results.
Environment Variables: Securely manage API keys using environment variables.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

Node.js (v16 or higher)
npm or yarn
Steps to Set Up Locally
Clone the Repository :
```
git clone https://github.com/yourusername/refer-scape.git
cd refer-scape
Install Dependencies :
```
npm install 
or
yarn install

Set Up Environment Variables :
Create a .env file in the root directory.
Add your Pexels API key to the .env file:
```
VITE_PEXELS_API_KEY=your_pexels_api_key_here
```
Start the Development Server :
```
npm run dev
```
or
```
yarn dev
```
Open the App :
Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).

## Usage

#### Searching for Images

Enter a keyword in the search bar located in the navigation bar.
Press "Enter" or click the "Search" button to fetch and display images related to your query.
Viewing Image Details
Click on any image to open a modal view.
The modal displays the image, title, description, and a "Download" button.
Infinite Scrolling
As you scroll down the page, more images automatically load without requiring manual pagination.

### Downloading Images
Click the "Download" button in the modal view to save the image to your device.

## Tech Stack
**Frontend Framework** : React

**TypeScript**: For type-safe development.

**State Management**: React Hooks (useState, useEffect) for managing component state.

**Routing**: React Router for navigation.

**Styling**: Tailwind CSS , Daisy UI

**API Integration**: Pexels API for fetching images.

**Build Tool**: Vite for fast development and bundling.

**Environment Variables**: Securely manage sensitive data using .env files.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

Thanks to Pexels for providing the free image API.

Inspired by modern image search applications like Pinterest.

Built using Vite and React.
