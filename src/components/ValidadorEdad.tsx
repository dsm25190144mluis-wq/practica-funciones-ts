export const ValidadorEdad = () => {
  // Evalúa si una persona es mayor o igual a 18 años
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;

  // Genera un mensaje indicando si la persona puede votar o los años faltantes
  const obtenerMensaje = (edad: number): string => {
    return esMayorDeEdad(edad) ? "Puede votar" : `Le faltan ${18 - edad} años`;
  };

  const edades = [15, 18, 25, 12];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Validador de Edad</h3>
      <div className="space-y-2 text-gray-700">
        {edades.map((edad, index) => (
          <p key={index}>
            Edad {edad}: {obtenerMensaje(edad)}
          </p>
        ))}
      </div>
    </div>
  );
};