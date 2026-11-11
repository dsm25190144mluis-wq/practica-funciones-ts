export const SistemaCalificaciones = () => {
  // Obtiene el promedio numérico de un conjunto de calificaciones
  const calcularPromedio = (calificaciones: number[]): number => {
    if (calificaciones.length === 0) return 0;
    const suma = calificaciones.reduce((acc, calif) => acc + calif, 0);
    return suma / calificaciones.length;
  };

  // Asigna una letra de equivalencia académica basada en el promedio
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return "A";
    if (promedio >= 80) return "B";
    if (promedio >= 70) return "C";
    if (promedio >= 60) return "D";
    return "F";
  };

  // Valida si la nota final es suficiente para aprobar (>= 70)
  const estaAprobado = (promedio: number): boolean => promedio >= 70;

  const alumnos = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Sistema de Calificaciones</h3>
      <div className="space-y-2 text-gray-700">
        {alumnos.map((alumno, index) => {
          const promedio = calcularPromedio(alumno.califs);
          const letra = obtenerLetra(promedio);
          const aprobado = estaAprobado(promedio);

          return (
            <p key={index}>
              {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {letra} -{" "}
              <span className={aprobado ? "text-emerald-600 font-semibold" : "text-rose-600 font-semibold"}>
                {aprobado ? "Aprobado" : "Reprobado"}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
};