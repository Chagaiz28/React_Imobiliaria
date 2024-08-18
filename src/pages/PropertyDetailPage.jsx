import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetail from '../components/PropertyDetail';
import './PropertyDetailPage.css';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Simulação de chamada de API
    const fetchedProperty = { id, name: `Casa ${id}`, description: `Descrição da Casa ${id}`, price: `R$ ${id}00.000` };
    setProperty(fetchedProperty);
  }, [id]);

  return property ? <div className="property-detail-page"><PropertyDetail property={property} /></div> : <p>Carregando...</p>;
};

export default PropertyDetailPage;