import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex items-center justify-center h-screen bg-green-500 text-white">
      <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1>
      <h1 className="text-2xl">Welcome to my sersonal website</h1>
      <h1 className="text-2xl">Im anita Norouzi</h1>

      <ul>
        <li>My Academic life</li>
        <li>My Carear</li>
        <li>MY hobbies</li>
      </ul>

    </div>
    </>
  )
}

export default App
