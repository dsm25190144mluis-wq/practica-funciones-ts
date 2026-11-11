export const CalculadoraIMC = () => {
  // Calcula el Índice de Masa Corporal mediante peso / (altura ^ 2)
  const calcularIMC = (peso: number, altura: number): number => {
    return peso / (altura * altura);
  };

  // Clasifica el resultado del IMC según los rangos de salud establecidos
  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Calculadora de IMC</h3>
      <div className="space-y-2 text-gray-700">
        <p>Peso: {peso} kg | Altura: {altura} m</p>
        <p>IMC: <span className="font-mono">{imc.toFixed(2)}</span></p>
        <p>Clasificación: <strong className="text-emerald-600 font-semibold">{clasificarIMC(imc)}</strong></p>
      </div>
    </div>
  );
};