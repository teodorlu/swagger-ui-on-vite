import { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Minimal example: Vite.js and Swagger UI.</p>
      <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json"></SwaggerUI>
    </div>
  );
}

export default App;
