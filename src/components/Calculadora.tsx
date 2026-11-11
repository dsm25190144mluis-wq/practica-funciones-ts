export const Calculadora = () => {
  // Suma dos números y retorna el resultado
  const sumar = (a: number, b: number): number => a + b;

  // Resta el segundo número del primero y retorna el resultado
  const restar = (a: number, b: number): number => a - b;

  // Multiplica dos números y retorna el producto
  const multiplicar = (a: number, b: number): number => a * b;

  // Divide el primer número entre el segundo; si b es 0, retorna 0 para evitar errores
  const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b);

  const a = 15;
  const b = 4;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Calculadora</h3>
      <div className="space-y-2 text-gray-700 font-mono">
        <p>{a} + {b} = {sumar(a, b)}</p>
        <p>{a} - {b} = {restar(a, b)}</p>
        <p>{a} × {b} = {multiplicar(a, b)}</p>
        <p>{a} ÷ {b} = {dividir(a, b).toFixed(2)}</p>
      </div>
    </div>
  );
};