import React, { useEffect, useRef, useState } from 'react';
import geojsonData from '../files/export.json'; // Asegúrate de que solo contiene límites sin puntos

const MapaInstalacion = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const initializedMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: -17.7833, lng: -63.1821 },
        zoom: 8,
      });

      const dataLayer = new window.google.maps.Data();
      dataLayer.addGeoJson(geojsonData);
      dataLayer.setStyle({
        fillColor: '#FFD700',
        strokeColor: '#FF5733',
        strokeWeight: 1,
        fillOpacity: 0.3,
      });
      dataLayer.setMap(initializedMap);
      dataLayer.setStyle({ clickable: false });

      initializedMap.addListener('click', (event) => {
        const { latLng } = event;
        const newMarker = new window.google.maps.Marker({
          position: latLng,
          map: initializedMap,
          title: "Ubicación seleccionada",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#007BFF',
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: '#333',
          },
        });

        newMarker.addListener('click', () => {
          newMarker.setMap(null);
          setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.marker !== newMarker));
        });

        setMarkers((prevMarkers) => [
          ...prevMarkers,
          { marker: newMarker, lat: latLng.lat(), lng: latLng.lng() },
        ]);
      });
    } else {
      console.error("Google Maps no está disponible. Verifica la carga del script.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800 text-center">
        Haz clic en el mapa para añadir una ubicación. Haz clic en un marcador para eliminarlo.
      </h2>
      
      <div
        ref={mapRef}
        className="w-full lg:w-11/12 xl:w-10/12 h-[60vh] border border-gray-400 rounded-lg shadow-lg mb-6"
      />

      <div className="w-full lg:w-11/12 xl:w-10/12 overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">#</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Latitud</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Longitud</th>
            </tr>
          </thead>
          <tbody>
            {markers.map((markerData, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-gray-700 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-gray-700">{markerData.lat.toFixed(6)}</td>
                <td className="px-4 py-2 text-gray-700">{markerData.lng.toFixed(6)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MapaInstalacion;
