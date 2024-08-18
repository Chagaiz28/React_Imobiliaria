import React, { useState, useEffect } from 'react';
import PropertyList from '../components/PropertyList';
import './PropertyPage.css';

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simulação de chamada de API
    setProperties([
      { id: 1, name: 'Casa 1', description: 'Descrição da Casa 1', price: 'R$ 500.000', image: '/images/casa1.jpg' },
      { id: 2, name: 'Casa 2', description: 'Descrição da Casa 2', price: 'R$ 600.000', image: '/images/casa2.jpg' },
    ]);
  }, []);

  return <div className="property-page"><PropertyList properties={properties} /></div>;
};

export default PropertyPage;