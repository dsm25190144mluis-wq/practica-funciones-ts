export const AnalizadorTexto = () => {
  // Cuenta el número total de palabras dividiendo la cadena por espacios
  const contarPalabras = (texto: string): number => {
    const limpio = texto.trim();
    return limpio === "" ? 0 : limpio.split(/\s+/).length;
  };

  // Cuenta la cantidad de vocales (incluyendo acentos) en la cadena
  const contarVocales = (texto: string): number => {
    const coincidencias = texto.match(/[aeiouáéíóú]/gi);
    return coincidencias ? coincidencias.length : 0;
  };

  // Invierte el orden de los caracteres de la cadena recibida
  const invertirTexto = (texto: string): string => {
    return texto.split('').reverse().join('');
  };

  const texto = "Hola mundo desde TypeScript";

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Analizador de Texto</h3>
      <div className="space-y-2 text-gray-700">
        <p>Texto: &quot;{texto}&quot;</p>
        <p>Palabras: {contarPalabras(texto)}</p>
        <p>Vocales: {contarVocales(texto)}</p>
        <p>Invertido: <span className="font-mono text-indigo-600">{invertirTexto(texto)}</span></p>
      </div>
    </div>
  );
};