import { memo, useCallback, useEffect, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({})
  const [exchange2Data, setExchange2Data] = useState({})
  const [bankData, setBankData] = useState({})

  useEffect(() => {
    setExchange1Data({
      returns: 100
    })
  },[])

  useEffect(() => {
    setExchange2Data({
      returns: 100
    })
  },[])

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      }, 5000)
    })
  },[])

  const calculateCryptoReturns = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns 
  }, [exchange1Data, exchange2Data])

  return (
    <div>
       <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns}/>
    </div>
  )
}

  const CryptoGainsCalculator = memo(function({calculateCryptoReturns}){
    return <div>
      your crypto return are ({calculateCryptoReturns()})
    </div>
  })

export default App
