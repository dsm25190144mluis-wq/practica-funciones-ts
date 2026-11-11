export const ConversorTemperatura = () => {
  // Convierte grados Celsius a Fahrenheit usando la fórmula (c * 9/5) + 32
  const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;

  // Convierte grados Fahrenheit a Celsius usando la fórmula (f - 32) * 5/9
  const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

  const temperatura = 25;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Conversor</h3>
      <div className="space-y-2 text-gray-700 font-mono">
        <p>{temperatura}°C = {celsiusAFahrenheit(temperatura)}°F</p>
        <p>100°F = {fahrenheitACelsius(100).toFixed(2)}°C</p>
      </div>
    </div>
  );
};