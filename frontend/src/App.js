import React, { useState } from 'react'
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './App.css'

const App = () => {
  const [url, setUrl] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    url && axios.post(`${process.env.REACT_APP_API_URL}/preview`, { url })
      .then(response => setResponse(JSON.stringify(response.data, null, 4)))
      .catch(error => setResponse(`Error: ${error.message}`))
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          className="url"
          placeholder="Digite sua URL aqui"
          onChange={e => setUrl(e.target.value)} 
        />
        <input
          type="submit"
          className="button"
          value="Enviar"
        />
      </form>

      <SyntaxHighlighter language="json" style={github} className="response">
        {response}
      </SyntaxHighlighter> 
    </div>
  )
}

export default App
