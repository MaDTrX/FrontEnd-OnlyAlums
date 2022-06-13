import Navbar from '../components/Navbar'
import React from 'react'
import axios from 'axios'
const fetchAuth = {
  method: "get",
  headers: {
    'Accept': 'application/json',
  }
}

function App() {
  // const [testing, setTesting] = React.useState({})

  React.useEffect(() => {
    async function test () {
      const res = await axios.get('http://127.0.0.1:8000/test/', fetchAuth)
     
      console.log(res.data)
    }
    test()

  }, [])
  return (
    <main>
      <Navbar></Navbar>
    </main>
  );
}

export default App;
