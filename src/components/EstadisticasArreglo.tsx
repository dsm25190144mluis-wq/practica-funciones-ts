export const EstadisticasArreglo = () => {
  // Calcula el promedio de un arreglo numérico utilizando reduce
  const calcularPromedio = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    const suma = nums.reduce((acc, num) => acc + num, 0);
    return suma / nums.length;
  };

  // Encuentra el valor máximo de una lista de números
  const encontrarMaximo = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    return Math.max(...nums);
  };

  // Encuentra el valor mínimo de una lista de números
  const encontrarMinimo = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    return Math.min(...nums);
  };

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Estadísticas</h3>
      <div className="space-y-2 text-gray-700">
        <p>Números: [{numeros.join(', ')}]</p>
        <p>Promedio: <span className="font-mono">{calcularPromedio(numeros).toFixed(2)}</span></p>
        <p>Máximo: <span className="font-semibold text-emerald-600">{encontrarMaximo(numeros)}</span></p>
        <p>Mínimo: <span className="font-semibold text-rose-600">{encontrarMinimo(numeros)}</span></p>
      </div>
    </div>
  );
};