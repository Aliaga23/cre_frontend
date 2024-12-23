import React from 'react';

const MainContent = ({ formik }) => {
  return (
    <div className="space-y-8 p-8 bg-gray-50 rounded-lg shadow-md">
       

      {/* Datos Generales */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
          Datos Generales Test 2
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Ubicación:</label>
            <input
              name="ubicacion"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.ubicacion}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese la ubicación"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Contratista:</label>
            <input
              name="contratista"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.contratista}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el nombre del contratista"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Grupo:</label>
            <input
              name="grupo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.grupo}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el grupo"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Proyecto:</label>
            <input
              name="proyecto"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.proyecto}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el nombre del proyecto"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Informe:</label>
            <input
              name="informe"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.informe}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el informe"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Fecha:</label>
            <input
              name="fecha"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.fecha}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">O.C.:</label>
            <input
              name="oc"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.oc}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese la O.C."
            />
          </div>
        </div>
      </div>

      {/* Tipo de Seguimiento y Medios */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
          Tipo de Seguimiento y Medios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Tipo de Seguimiento:</label>
            <input
              name="tipoSeguimiento"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.tipoSeguimiento}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el tipo de seguimiento"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Medios:</label>
            <input
              name="medios"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.medios}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese los medios"
            />
          </div>
        </div>
      </div>

      {/* Movilización de Personal - CRE */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
          Movilización de Personal - CRE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Descripción (Item 1):</label>
            <input
              name="personalCRE1Descripcion"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalCRE1Descripcion}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese la descripción"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cargo (Item 1):</label>
            <input
              name="personalCRE1Cargo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalCRE1Cargo}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el cargo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Descripción (Item 2):</label>
            <input
              name="personalCRE2Descripcion"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalCRE2Descripcion}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese la descripción"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cargo (Item 2):</label>
            <input
              name="personalCRE2Cargo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalCRE2Cargo}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el cargo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Descripción (Item 3):</label>
            <input
              name="personalCRE3Descripcion"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalCRE3Descripcion}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese la descripción"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cargo (Item 3):</label>
            <input
              name="personalCRE3Cargo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalCRE3Cargo}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el cargo"
            />
          </div>
        </div>
      </div>

      {/* Movilización de Personal - Contratista */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
          Movilización de Personal - Contratista
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Descripción (Item 1):</label>
            <input
              name="personalContratista1Descripcion"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalContratista1Descripcion}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese la descripción"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cargo (Item 1):</label>
            <input
              name="personalContratista1Cargo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalContratista1Cargo}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el cargo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Descripción (Item 2):</label>
            <input
              name="personalContratista2Descripcion"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalContratista2Descripcion}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese la descripción"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cargo (Item 2):</label>
            <input
              name="personalContratista2Cargo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalContratista2Cargo}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el cargo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Descripción (Item 3):</label>
            <input
              name="personalContratista3Descripcion"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalContratista3Descripcion}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese la descripción"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cargo (Item 3):</label>
            <input
              name="personalContratista3Cargo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.personalContratista3Cargo}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Ingrese el cargo"
            />
          </div>
        </div>
      </div>

      {/* Descripción de Acuerdos Realizados */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
          Descripción de Acuerdos Realizados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['1', '2'].map((item) => (
            <React.Fragment key={item}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Detalle (Acuerdo {item}):</label>
                <input
                  name={`acuerdo${item}Detalle`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values[`acuerdo${item}Detalle`]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Ingrese el detalle"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Tarea (Acuerdo {item}):</label>
                <input
                  name={`acuerdo${item}Tarea`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values[`acuerdo${item}Tarea`]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Ingrese la tarea"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Responsable (Acuerdo {item}):</label>
                <input
                  name={`acuerdo${item}Responsable`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values[`acuerdo${item}Responsable`]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Ingrese el responsable"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Fecha de Ejecución (Acuerdo {item}):</label>
                <input
                  name={`acuerdo${item}FechaEjecucion`}
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values[`acuerdo${item}FechaEjecucion`]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Descripción de Actividades de Seguimiento */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
          Descripción de Actividades de Seguimiento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['1', '2'].map((item) => (
            <React.Fragment key={item}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Actividad ({item}):</label>
                <input
                  name={`actividad${item}`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values[`actividad${item}`]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Ingrese la actividad"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Encargado ({item}):</label>
                <input
                  name={`encargado${item}`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values[`encargado${item}`]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Ingrese el encargado"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Estado a Fecha de Inspección ({item}):
                </label>
                <input
                  name={`estadoInspeccion${item}`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values[`estadoInspeccion${item}`]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Ingrese el estado"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Observaciones Generales */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
          Observaciones Generales
        </h2>
        <textarea
          name="observaciones"
          onChange={formik.handleChange}
          value={formik.values.observaciones}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
          placeholder="Ingrese las observaciones"
        />
      </div>
    </div>
  );
};

export default MainContent;
