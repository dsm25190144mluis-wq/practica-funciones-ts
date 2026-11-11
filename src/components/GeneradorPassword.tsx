export const GeneradorPassword = () => {
  // Genera una contraseña aleatoria uniendo los conjuntos de caracteres elegidos
  const generarPassword = (
    longitud: number,
    incluirNumeros: boolean,
    incluirSimbolos: boolean
  ): string => {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+";

    let caracteres = letras;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    let password = "";
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      password += caracteres[indiceAleatorio];
    }
    return password;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Generador de Contraseñas</h3>
      <div className="space-y-2 text-gray-700 font-mono">
        <p>Básica (8): <span className="bg-gray-100 px-2 py-1 rounded text-slate-800">{generarPassword(8, false, false)}</span></p>
        <p>Media (12): <span className="bg-gray-100 px-2 py-1 rounded text-slate-800">{generarPassword(12, true, false)}</span></p>
        <p>Fuerte (16): <span className="bg-gray-100 px-2 py-1 rounded text-slate-800">{generarPassword(16, true, true)}</span></p>
      </div>
    </div>
  );
};