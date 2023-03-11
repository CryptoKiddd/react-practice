import {useState} from 'react'

const Dot = () => {
    const [dots, setDots] = useState([])
    const [color, setColor] = useState('')
    const dotLocation = (e)=>{
        const {clientX,screenY} = e
        console.log(e)
        setDots([...dots,{
            x:clientX,
            y:screenY,
            bg:color,
        }])

    }
  
  return (
    <div className='dot-page-container'>
    <div className='select-color-container'>
        <h1>Select the color</h1>
        <p onClick={()=>setColor('orange')}>Orange</p>
        <p onClick={()=>setColor('blue')}>Blue</p>
        <p onClick={()=>setColor('red')}>Red</p>
    
    </div>
    <div onClick={(e)=>dotLocation(e)} className='dot-container'>
        <h1>Click Anywhere and Dot the Page</h1>
     
        {dots?.map((dot,idx)=><div key={idx} className="dot" style={{left:dot.x -295 +'px', top:dot.y-215 + 'px', background:dot.bg}} ></div>)}
    </div>
    </div>
  )
}

export default Dot