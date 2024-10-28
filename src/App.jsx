import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex items-center justify-center h-screen bg-green-500 text-white">
      <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1>

      <ul>
        <li>About me</li>
        <li>Games</li>
        <li>Studying</li>
      </ul>
    </div>
    </>
  )
}

export default App
