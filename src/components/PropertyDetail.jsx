import React from 'react';
import './PropertyDetail.css';

const PropertyDetail = ({ property }) => (
  <div className="property-detail">
    <h1>{property.name}</h1>
    <p>{property.description}</p>
    <p>Preço: {property.price}</p>
  </div>
);

export default PropertyDetail;