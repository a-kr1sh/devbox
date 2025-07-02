import { useEffect, useState } from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({})
  const [bankData, setBankData] = useState({})

  useEffect(() => {
    fetch("https://google.com", async (res) => {
      const json = await res.json();
      setBankData(json);
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100
      })
    })
  }, [])

  const incomeTax = (bankData.income + exchangeData) * 0.3;

  return (
      <div>
          hii there your income tax returns are {incomeTax}
      </div>
  )
}

export default App
