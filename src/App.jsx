import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex items-center justify-center h-screen bg-green-500 text-white">
      <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1>
    </div>
    </>
  )
}

export default App
