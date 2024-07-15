import React from 'react';

function PropertyCard({ property }) {
  const { title, price, location } = property;

  return (
    <div className="property-card">
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <p>Location: {location}</p>
      {/* Additional property details */}
    </div>
  );
}

export default PropertyCard;
