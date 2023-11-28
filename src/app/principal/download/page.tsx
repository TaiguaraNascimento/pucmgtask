"use client";

import { useState } from "react";

const FetchComponent = (id) => {
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/contribuintes/${id}`
      ); // Substitua pela sua URL de teste
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>Teste de Fetch Component</h1>
      <button onClick={fetchData("6563dbcd9af916b95794a8fd")}>
        Buscar Dados
      </button>
      {error && <p>Ocorreu um erro: {error.message}</p>}
      {data && (
        <div>
          <h2>Dados Recebidos:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FetchComponent;
