import React from 'react'
import List from './components/List'
import './App.css'


const App = () => {
    return (
        <div className='App'>
            <h1 className='movie-list-title'>The most amazing movie list</h1>
            <List />
        </div>
    )
}

export default App