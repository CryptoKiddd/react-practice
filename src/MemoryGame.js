import { useState } from 'react'

const MemoryGame = () => {
    const [grid, setGrid] = useState([
        [0, 4, 3, 2],
        [1, 1, 3, 5],
        [0, 7, 5, 4],
        [6, 2, 6, 7],
    ])
    const [revealedGrid, setRevealedGrid] = useState(new Array(grid.length).fill("").map(el => new Array(grid[0].length).fill(false)))
    const [previuousClick, setPreviousClick] = useState({row:undefined,col:undefined,clicked:false})
    function revealAndMatch(rowidx, colidx) {
        const clickedNumber = grid[rowidx][colidx]
        if (previuousClick.clicked) {
            if (grid[previuousClick.row][previuousClick.col] !== clickedNumber) {
                setRevealedGrid(prev => {
                    const updatedReveleadGrid = [...prev]
                    updatedReveleadGrid[rowidx][colidx] = true
                    updatedReveleadGrid[previuousClick.row][previuousClick.col] = true
                    return updatedReveleadGrid
                })
                setTimeout(() => {
                    setRevealedGrid(prev => {
                        const updatedReveleadGrid = [...prev]
                        updatedReveleadGrid[rowidx][colidx] = false
                        updatedReveleadGrid[previuousClick.row][previuousClick.col] = false
                        return updatedReveleadGrid
                    })
                    setPreviousClick(prev=>{
                        return(
                            {...prev,row:undefined,col:undefined, clicked:false }
                        )
                    })

                }, 1000)
            }else{
                setRevealedGrid(prev => {
                    const updatedReveleadGrid = [...prev]
                    updatedReveleadGrid[rowidx][colidx] = true
                    updatedReveleadGrid[previuousClick.row][previuousClick.col] = true
                    return updatedReveleadGrid
                })
                setPreviousClick(prev=>{
                    return(
                        {...prev,row:undefined,col:undefined, clicked:false }
                    )
                })
            }

        } else {
            setRevealedGrid(prev => {
                const updatedReveleadGrid = [...prev]
                updatedReveleadGrid[rowidx][colidx] = true
                return updatedReveleadGrid
            })
            setPreviousClick(prev=>{
                return(
                    {...prev,row:rowidx,col:colidx, clicked:true }
                )
            })
        }

    }
    return (
        <div className='memory-game-container'>
            {grid.map((row, rowidx) => (
                <div key={rowidx} className='memory-game-row'>
                    {row.map((col, colidx) => (
                        <div onClick={() => revealAndMatch(rowidx, colidx)} key={colidx} className='memory-game-col'>
                            {revealedGrid[rowidx][colidx] ? <p>{col}</p>  : ""}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default MemoryGame