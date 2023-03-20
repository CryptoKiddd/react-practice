import { useState } from 'react'
// c:\Users\ADMIN\Desktop\narr.jpg
const sasuke ="https://i1.sndcdn.com/avatars-WGz92y1Bty86phdv-zduzjA-t500x500.jpg"
const naruto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Q4sSGFBmNcf0lGKMSC1sGlP-FmR6hf__jg&usqp=CAU"
const kakashi = 'https://i.pinimg.com/736x/e4/06/73/e40673beef90e11715ab734898c889ed.jpg'
const sakura = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGjGz1HoCpf40o6kYZrJkvyLqYaNsMFeYqg&usqp=CAU'
const orochimaru = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c4LFklYr_VFPeaaayDRWX8LI4rf6klZlCg&usqp=CAU'
const madara = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99d86670-e21e-440b-8b3d-5833ff84f7ee/deyrn9o-a928263d-676d-4002-83b1-bb687b7baf2c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5ZDg2NjcwLWUyMWUtNDQwYi04YjNkLTU4MzNmZjg0ZjdlZVwvZGV5cm45by1hOTI4MjYzZC02NzZkLTQwMDItODNiMS1iYjY4N2I3YmFmMmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sPyCKepzEJ1XkKuUqW6oBTqJOJauU8z-zB06zkhZyEo'

const grid= [
    [sasuke,naruto,sakura],
    [naruto,sasuke,sakura],
    [kakashi, kakashi,orochimaru]
]

const MemoryGame = () => {
    const [revealedGrid,setRevealedGrid]=useState(new Array(grid.length).fill("").map(el=>new Array(grid[0].length).fill(false)))
    const [previousClick,setPreviousClick] = useState(undefined);
    const [hasWon,setHasWon] = useState(false)

    function revealAndMatch(rowidx,colidx){
        if(revealedGrid[rowidx][colidx])return;
        const clickedNumber = grid[rowidx][colidx]
        if(previousClick){
            const prevClickNumber = grid[previousClick.row][previousClick.col]
            if(prevClickNumber !== clickedNumber){
                setRevealedGrid(prev=>{
                    const updatedRevealedGrid = [...prev];
                    updatedRevealedGrid[rowidx][colidx] = true // show clicked number
                    updatedRevealedGrid[previousClick.row][previousClick.col]  = true //show prev clicked number
                    return updatedRevealedGrid
                })

                //hide both after second cuz they dont match
                setTimeout(()=>{
                    setRevealedGrid(prev=>{
                        const updatedRevealedGrid = [...prev];
                        updatedRevealedGrid[rowidx][colidx] = false // show clicked number
                        updatedRevealedGrid[previousClick.row][previousClick.col]  = false //show prev clicked number
                        return updatedRevealedGrid
                    })
                    setPreviousClick(undefined) //reset previous clcik

                },200)
            }else{
                setRevealedGrid(prev=>{
                    const updatedRevealedGrid = [...prev];
                    updatedRevealedGrid[rowidx][colidx] = true // show clicked number
                    updatedRevealedGrid[previousClick.row][previousClick.col]  = true //show prev clicked number cuz they match

                    //check if player won game
                    const flattenGrid = revealedGrid.flat().every(el=>el)
                    console.log(revealedGrid.flat())
                    if(flattenGrid){
                        setTimeout(()=>{
                            setHasWon(true)
                        },1000)
                    }
                    return updatedRevealedGrid
                })
                setPreviousClick(undefined) //reset previous clcik


            }

        }else{
            //if its first click of two clicks

            setPreviousClick({row:rowidx,col:colidx})
            setRevealedGrid(prev=>{
                const updatedRevealedGrid = [...prev];
                updatedRevealedGrid[rowidx][colidx] = true // show clicked number
                const flattenGrid = prev.flat().every(el=>el)
                console.log(prev.flat())
                if(flattenGrid){
                    setTimeout(()=>{
                        setHasWon(true)
                    },1500)
                }
                return updatedRevealedGrid
            })

            //check if he won because of 1 card is single
          

        }
    }




  

    
    return (
        <div >
            { hasWon?<div className='memory-game-container'> <h1>You Won</h1>  <img style={{width:'100%', height:'100%'}} src={madara} alt='fe' /> </div>:
                grid.map((row,rowidx)=>(
                    <div className='memory-game-row'>
                        {row.map((col,colidx)=>{
                            return(
                                <div className={'memory-game-col ' + (revealedGrid[rowidx][colidx]?'revealed':"")} onClick={(()=>revealAndMatch(rowidx,colidx))} >
                                    {revealedGrid[rowidx][colidx]?<img className='game-image' src={col} alt='imagehvb' />:""}

                                </div>
                            )
                        })}

                    </div>
                ))
            }

         
        </div>
    )
}

export default MemoryGame