import React, { useState } from 'react';
import PropertyList from './assets/Components/PropertyList/PropertyList';
import FilterForm from './assets/Components/FilterForm/FilterForm';
import './App.css';

function App() {
  const [filters, setFilters] = useState({}); // State to hold filters

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  // Dummy data for demonstration
  const properties = [
    { id: 1, title: 'Beautiful Home', price: '$300,000', location: 'City A' },
    { id: 2, title: 'Cozy Apartment', price: '$150,000', location: 'City B' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000', location: 'City C' },
    { id: 4, title: 'Modern Condo', price: '$500,000', location: 'City D' },
    { id: 5, title: 'Charming Cottage', price: '$250,000', location: 'City E' },
    { id: 6, title: 'Spacious Ranch', price: '$450,000', location: 'City F' },
    { id: 7, title: 'Urban Loft', price: '$350,000', location: 'City G' },
    { id: 8, title: 'Suburban House', price: '$400,000', location: 'City H' },
    { id: 9, title: 'Historic Townhouse', price: '$600,000', location: 'City I' },
    { id: 10, title: 'Country Estate', price: '$900,000', location: 'City J' },
    { id: 11, title: 'Beachfront Bungalow', price: '$1,000,000', location: 'City K' },
    { id: 12, title: 'Downtown Penthouse', price: '$800,000', location: 'City L' },
    { id: 13, title: 'Mountain Cabin', price: '$200,000', location: 'City M' },
    { id: 14, title: 'Lake House', price: '$550,000', location: 'City N' },
    { id: 15, title: 'Golf Course Home', price: '$750,000', location: 'City O' },
    { id: 16, title: 'Gated Community Home', price: '$650,000', location: 'City P' },
    { id: 17, title: 'Studio Apartment', price: '$100,000', location: 'City Q' },
    { id: 18, title: 'Tiny House', price: '$120,000', location: 'City R' },
    { id: 19, title: 'Farmhouse', price: '$380,000', location: 'City S' },
    { id: 20, title: 'Duplex', price: '$220,000', location: 'City T' },
    { id: 21, title: 'Skyscraper Apartment', price: '$700,000', location: 'City U' },
    { id: 22, title: 'Suburban Ranch', price: '$320,000', location: 'City V' },
    { id: 23, title: 'Desert Oasis', price: '$480,000', location: 'City W' },
    { id: 24, title: 'Victorian Mansion', price: '$1,500,000', location: 'City X' },
    { id: 25, title: 'Modern Duplex', price: '$420,000', location: 'City Y' },
    { id: 26, title: 'Luxury Condo', price: '$850,000', location: 'City Z' },
    { id: 27, title: 'Colonial Home', price: '$330,000', location: 'City AA' },
    { id: 28, title: 'Hillside Villa', price: '$1,100,000', location: 'City BB' },
    { id: 29, title: 'Riverside Cottage', price: '$290,000', location: 'City CC' },
    { id: 30, title: 'Parkside Apartment', price: '$370,000', location: 'City DD' },
    { id: 31, title: 'Cliffside Mansion', price: '$2,000,000', location: 'City EE' },
    { id: 32, title: 'Country Cabin', price: '$180,000', location: 'City FF' },
    { id: 33, title: 'Eco-Friendly Home', price: '$400,000', location: 'City GG' },
    { id: 34, title: 'Downtown Studio', price: '$140,000', location: 'City HH' },
    { id: 35, title: 'City Loft', price: '$360,000', location: 'City II' },
    { id: 36, title: 'Seaside Villa', price: '$1,250,000', location: 'City JJ' },
    { id: 37, title: 'Modern Townhouse', price: '$430,000', location: 'City KK' },
    { id: 38, title: 'Rustic Cabin', price: '$210,000', location: 'City LL' },
    { id: 39, title: 'Penthouse Suite', price: '$950,000', location: 'City MM' },
    { id: 40, title: 'Lakeside House', price: '$570,000', location: 'City NN' },
    { id: 41, title: 'Urban Studio', price: '$110,000', location: 'City OO' },
    { id: 42, title: 'Traditional House', price: '$290,000', location: 'City PP' },
    { id: 43, title: 'Beach House', price: '$920,000', location: 'City QQ' },
    { id: 44, title: 'City Apartment', price: '$380,000', location: 'City RR' },
    { id: 45, title: 'Modern Farmhouse', price: '$540,000', location: 'City SS' },
    { id: 46, title: 'Secluded Cabin', price: '$190,000', location: 'City TT' },
    { id: 47, title: 'Luxury Penthouse', price: '$1,300,000', location: 'City UU' },
    { id: 48, title: 'Suburban Villa', price: '$410,000', location: 'City VV' },
    { id: 49, title: 'Historic Mansion', price: '$1,600,000', location: 'City WW' },
    { id: 50, title: 'Downtown Loft', price: '$340,000', location: 'City XX' }
  ];
  

  return (
    <div className="app">
      <h1>Real Estate Listings</h1>
      <FilterForm applyFilters={applyFilters} />
      <PropertyList properties={properties} filters={filters} />
    </div>
  );
}

export default App;
