import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import ExportButtons from './Components/ExportButton';
import MapaInstalacion from './Components/MapaInstalacion';

function App() {
  const formik = useFormik({
    initialValues: {
      ubicacion: '',
      contratista: '',
      grupo: '',
      proyecto: '',
      informe: '',
      fecha: '',
      oc: '',
      tipoSeguimiento: '',
      medios: '',
      personalCRE1Descripcion: '',
      personalCRE1Cargo: '',
      personalCRE2Descripcion: '',
      personalCRE2Cargo: '',
      personalCRE3Descripcion: '',
      personalCRE3Cargo: '',
      personalContratista1Descripcion: '',
      personalContratista1Cargo: '',
      personalContratista2Descripcion: '',
      personalContratista2Cargo: '',
      acuerdo1Detalle: '',
      acuerdo1Tarea: '',
      acuerdo1Responsable: '',
      acuerdo1FechaEjecucion: '',
      acuerdo2Detalle: '',
      acuerdo2Tarea: '',
      acuerdo2Responsable: '',
      acuerdo2FechaEjecucion: '',
      actividad1: '',
      encargado1: '',
      estadoInspeccion1: '',
      actividad2: '',
      encargado2: '',
      estadoInspeccion2: '',
      observaciones: '',
    },
    onSubmit: async (values) => {
      try {
        // Generar Excel
        const responseExcel = await axios.post('https://crebackend-production.up.railway.app/generate-excel', values, { responseType: 'blob' });
        const urlExcel = window.URL.createObjectURL(new Blob([responseExcel.data]));
        const linkExcel = document.createElement('a');
        linkExcel.href = urlExcel;
        linkExcel.setAttribute('download', 'cre_generado.xlsx');
        document.body.appendChild(linkExcel);
        linkExcel.click();

        // Generar PDF
        const responsePDF = await axios.post('https://crebackend-production.up.railway.app/generate-pdf', values, { responseType: 'blob' });
        const urlPDF = window.URL.createObjectURL(new Blob([responsePDF.data]));
        const linkPDF = document.createElement('a');
        linkPDF.href = urlPDF;
        linkPDF.setAttribute('download', 'cre_generado.pdf');
        document.body.appendChild(linkPDF);
        linkPDF.click();
      } catch (error) {
        console.error('Error al generar archivos:', error);
      }
    },
  });

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar siempre visible */}
        <Sidebar />

        {/* Contenedor principal */}
        <div className="flex-1 overflow-auto">
          <Routes>
            {/* Ruta principal para el formulario */}
            <Route
              path="/"
              element={
                <form onSubmit={formik.handleSubmit} className="bg-white p-8 shadow-md rounded-lg max-w-4xl mx-auto">
                  <MainContent formik={formik} /> {/* Pasar formik si MainContent lo necesita */}
                  <ExportButtons formik={formik} /> {/* Pasa formik explícitamente */}
                </form>
              }
            />
            {/* Ruta para el mapa en /mapa */}
            <Route
              path="/mapa"
              element={
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-lg font-semibold mb-4">Ubicación de la Instalación Reciente</h2>
                  <MapaInstalacion />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
