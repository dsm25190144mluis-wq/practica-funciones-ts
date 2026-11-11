export const CarritoCompras = () => {
  // Multiplica el precio unitario por las unidades para obtener el subtotal
  const calcularSubtotal = (precio: number, cantidad: number): number => {
    return precio * cantidad;
  };

  // Calcula la cuota del 16% de IVA sobre un subtotal dado
  const calcularIVA = (subtotal: number): number => {
    return subtotal * 0.16;
  };

  // Suma el subtotal y el IVA para calcular el costo total
  const calcularTotal = (subtotal: number): number => {
    return subtotal + calcularIVA(subtotal);
  };

  // Formatea un número como monto monetario ($X.XX)
  const formatearPrecio = (precio: number): string => {
    return `$${precio.toFixed(2)}`;
  };

  const carrito = [
    { producto: "Laptop", precio: 15000, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 },
  ];

  const subtotal = carrito.reduce(
    (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad),
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Carrito de Compras</h3>
      <div className="space-y-1 text-gray-700 font-mono">
        {carrito.map((item, index) => (
          <p key={index}>
            {item.producto} x{item.cantidad} = {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}
          </p>
        ))}
        <hr className="my-3 border-gray-200" />
        <p>Subtotal: {formatearPrecio(subtotal)}</p>
        <p>IVA (16%): {formatearPrecio(calcularIVA(subtotal))}</p>
        <p className="text-lg font-bold text-slate-900 mt-1">
          Total: {formatearPrecio(calcularTotal(subtotal))}
        </p>
      </div>
    </div>
  );
};