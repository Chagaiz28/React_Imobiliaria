import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyList.css';

const PropertyList = ({ properties }) => (
  <div className="property-list">
    {properties.map(property => (
      <div key={property.id} className="property-item">
        <img src={property.image} alt={property.name} className="property-image" />
        <h2>{property.name}</h2>
        <p>{property.description}</p>
        <Link to={`/properties/${property.id}`}>Ver detalhes</Link>
      </div>
    ))}
  </div>
);

export default PropertyList;