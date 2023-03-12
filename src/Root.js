import React from 'react'
import { Link } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Link to='treestructure'>
            <h1>Tree Structure</h1>
        </Link>
        <Link to='/tipcalculator'>
        <h1>Tip Calculator</h1>

        </Link>
        <Link to='/fetchusers'>
        <h1> Fetch User</h1>
        </Link>
        <Link to='/reactquery'>
        <h1> Fetch With React Query</h1>
        </Link>
        <Link to='/dotthepage'>
        <h1> Dot the Page</h1>
        </Link>
        <Link to='/memorygame'>
        <h1> Memory Game</h1>
        </Link>

    </div>
  )
}

export default Root