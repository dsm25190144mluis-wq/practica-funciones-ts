import { Calculadora } from './components/Calculadora';
import { ConversorTemperatura } from './components/ConversorTemperatura';
import { CalculadoraIMC } from './components/CalculadoraIMC';
import { ValidadorEdad } from './components/ValidadorEdad';
import { AnalizadorTexto } from './components/AnalizadorTexto';
import { EstadisticasArreglo } from './components/EstadisticasArreglo';
import { GeneradorPassword } from './components/GeneradorPassword';
import { AplicadorDescuentos } from './components/AplicadorDescuentos';
import { SistemaCalificaciones } from './components/SistemaCalificaciones';
import { CarritoCompras } from './components/CarritoCompras';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 text-center mb-8">
          Práctica de Funciones en TypeScript + React
        </h1>
        <Calculadora />
        <ConversorTemperatura />
        <CalculadoraIMC />
        <ValidadorEdad />
        <AnalizadorTexto />
        <EstadisticasArreglo />
        <GeneradorPassword />
        <AplicadorDescuentos />
        <SistemaCalificaciones />
        <CarritoCompras />
      </div>
    </div>
  );
}

export default App;