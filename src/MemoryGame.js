import { useState } from 'react'
const sasuke ="https://i1.sndcdn.com/avatars-WGz92y1Bty86phdv-zduzjA-t500x500.jpg"
const naruto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AbUXU56n36-_X6w88-E0ET6qOsWuJsmqBw&usqp=CAU"
const grid= [
    [sasuke,naruto],
    [naruto,sasuke]
]
const MemoryGame = () => {
  
    const [revealedGrid, setRevealedGrid] = useState(new Array(grid.length).fill("").map(el => new Array(grid[0].length).fill(false)))
    const [previousClick, setPreviousClick] = useState(undefined)
    function revealAndMatch(rowidx, colidx) {
      
        
        if(revealedGrid[rowidx][colidx])return;
        const clickedNumber = grid[rowidx][colidx]
        if (previousClick) {
            const previousClickedkNumber = grid[previousClick.row][previousClick.col]
            if( previousClickedkNumber !== clickedNumber) {
                setRevealedGrid(prev => {
                    const updatedReveleadGrid = [...prev]
                    updatedReveleadGrid[rowidx][colidx] = true ///show  clicked number
                    updatedReveleadGrid[previousClick.row][previousClick.col] = true //show prev clicked number
                    return updatedReveleadGrid
                })
                  //hide both after a second beacause if  they dont match
                setTimeout(() => {
                    console.log(previousClick)
                    setRevealedGrid(prev => {
                        const updatedReveleadGrid = [...prev]
                        updatedReveleadGrid[rowidx][colidx] = false
                        updatedReveleadGrid[previousClick.row][previousClick.col] = false
                        return updatedReveleadGrid
                    })
                    setPreviousClick(undefined)

                }, 100)
                
            }else{
                setRevealedGrid(prev => {
                    const updatedReveleadGrid = [...prev]
                    updatedReveleadGrid[rowidx][colidx] = true
                    updatedReveleadGrid[previousClick.row][previousClick.col] = true
                    const flattenRevealedGrid = revealedGrid.flat().every(el=>el)
                    console.log(flattenRevealedGrid)
                    if(flattenRevealedGrid){
                        setTimeout(() => {
                            
                            window.alert("You won")
                        }, 1000);
                        console.log('entry in won point')
                    }
                    return updatedReveleadGrid
                })
                setPreviousClick(undefined)
            }

        }else{
            setPreviousClick({row:rowidx,col:colidx})
            setRevealedGrid(prev => {
                const updatedReveleadGrid = [...prev]
                updatedReveleadGrid[rowidx][colidx] = true
                return updatedReveleadGrid
            })
            
        }

    }
    return (
        <div className='memory-game-container'>
            {grid.map((row, rowidx) => (
                <div key={rowidx} className='memory-game-row'>
                    {row.map((img, colidx) => (
                        <div onClick={() => revealAndMatch(rowidx, colidx)} key={colidx} className={'memory-game-col '+(revealedGrid[rowidx][colidx]?'revealed':'')}>
                            {revealedGrid[rowidx][colidx] ? <img className='game-image' alt='s' src={img} />  : ""}
                        </div>
                    ))}
                </div>
            ))}
            {/* <button className='memory-game-retrybtn' onClick={()=>setRevealedGrid(new Array(grid.length).fill("").map(el => new Array(grid[0].length).fill(false)))} >Retry</button> */}
        </div>
    )
}

export default MemoryGame