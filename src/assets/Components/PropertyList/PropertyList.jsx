import React from 'react';
import PropertyCard from './PropertyCard';

function PropertyList({ properties, filters }) {
  // Apply filters
  const filteredProperties = properties.filter((property) => {
    if (filters.minPrice && parseInt(property.price.replace(/\$|,/g, '')) < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && parseInt(property.price.replace(/\$|,/g, '')) > filters.maxPrice) {
      return false;
    }
    return true;
  });

  return (
    <div className="property-list">
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
