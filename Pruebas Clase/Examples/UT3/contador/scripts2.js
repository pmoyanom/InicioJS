// Importa React y el hook useState desde la biblioteca 'react'
import React, { useState } from 'react';

// Define un componente funcional llamado 'App'
function App() {
  // Declara una variable de estado 'contador' y su función actualizadora 'setContador'
  // Inicializa 'contador' con el valor 0
  const [contador, setContador] = useState(0);

  // Retorna el JSX que define la interfaz del componente
  return (
    <div>
      {/* Muestra el valor actual del contador */}
      <h1>Contador: {contador}</h1>
      {/* Botón que, al ser clicado, incrementa el contador en 1 */}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

// Exporta el componente 'App' para que pueda ser utilizado en otros archivos
export default App;