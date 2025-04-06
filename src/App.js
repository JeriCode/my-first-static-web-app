import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { message } = await( await fetch(`/api/message`)).json();    
      setData(message);
      console.log(message);
    })();
  });

  return <div>{data}</div>;
}

export default App;