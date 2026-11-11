export const AplicadorDescuentos = () => {
  // Función de orden superior que ejecuta un callback para restar el descuento al precio original
  const aplicarDescuento = (
    precio: number,
    calcularDescuento: (precio: number) => number
  ): number => {
    return precio - calcularDescuento(precio);
  };

  // Calcula un 10% de descuento sobre el precio
  const descuento10 = (p: number): number => p * 0.10;

  // Calcula un 25% de descuento sobre el precio
  const descuento25 = (p: number): number => p * 0.25;

  // Calcula un 15% de descuento especial para estudiantes
  const descuentoEstudiante = (p: number): number => p * 0.15;

  const precio = 1000;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Aplicador de Descuentos</h3>
      <div className="space-y-2 text-gray-700">
        <p>Precio original: ${precio}</p>
        <p>Con 10% off: <span className="font-semibold text-emerald-600">${aplicarDescuento(precio, descuento10)}</span></p>
        <p>Con 25% off: <span className="font-semibold text-emerald-600">${aplicarDescuento(precio, descuento25)}</span></p>
        <p>Descuento estudiante: <span className="font-semibold text-emerald-600">${aplicarDescuento(precio, descuentoEstudiante)}</span></p>
      </div>
    </div>
  );
};