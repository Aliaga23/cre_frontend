import React from 'react';
import axios from 'axios';

const ExportButtons = ({ formik }) => {
  // Validación del prop formik
  if (!formik || !formik.values) {
    console.error("El prop 'formik' no fue pasado correctamente al componente ExportButtons.");
    return (
      <div className="text-red-500 font-bold">
        Error: No se proporcionó el objeto 'formik'.
      </div>
    );
  }

  const handleGenerateExcel = async () => {
    try {
      const response = await axios.post('https://crebackend-production.up.railway.app/generate-excel', formik.values);

      if (response.data && response.data.url) {
        const link = document.createElement('a');
        link.href = response.data.url;
        link.setAttribute('download', 'cre_generado.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error('Respuesta inválida del servidor:', response.data);
      }
    } catch (error) {
      console.error('Error al generar el archivo Excel:', error);
    }
  };

  const handleGeneratePDF = async () => {
    try {
      const response = await axios.post('https://crebackend-production.up.railway.app/generate-pdf', formik.values);

      if (response.data && response.data.url) {
        const link = document.createElement('a');
        link.href = response.data.url;
        link.setAttribute('download', 'cre_generado.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error('Respuesta inválida del servidor:', response.data);
      }
    } catch (error) {
      console.error('Error al generar el archivo PDF:', error);
    }
  };

  return (
    <div className="mt-8 flex justify-end space-x-4">
      <button
        type="button"
        onClick={handleGenerateExcel}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-green-700"
      >
        Exportar a Excel
      </button>
      <button
        type="button"
        onClick={handleGeneratePDF}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-blue-700"
      >
        Exportar a PDF
      </button>
    </div>
  );
};

export default ExportButtons;
