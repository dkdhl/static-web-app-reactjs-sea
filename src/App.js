import React from 'react';

function App() {
  const value = 'World - from SEA';
  return <div>
    Hello {value}  
    <a href="https://http-trigger-poc4its.azurewebsites.net/api/HttpTriggerJava?code=R4KN_ks3Y_xTOYvXFLTNPw0XomrQEUxFCM5yuRtZy5MXAzFuR9kuDw==&name=dickson">Click me to call Azure Function</a>
  </div>;
}

export default App;
