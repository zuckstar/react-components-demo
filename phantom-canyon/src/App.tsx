import React, {useState, useEffect} from 'react'

const App: React.FC = () => {
  const [title, setTitle] = useState('')
  useEffect(() => {
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
      </header>
    </div>
  )
}


export default App;
