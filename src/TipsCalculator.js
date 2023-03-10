import React, { useRef, useState } from 'react'

const TipsCalculator = () => {
    const billRef = useRef('')
    const customTipRef = useRef('')
    const [calcModal, setCalcModal] = useState(false)
    const [tipAmount, setTipAmount] = useState()
    function calculateTipAmount(percent) {
        const bill = billRef.current.value
        const amount = (bill * percent) / 100
        setTipAmount(amount)
    }

    return (
        <div className='calc'>
            <h1>Tips Calculator</h1>
            <div>
                <span>Bill : </span>
                <input ref={billRef} />
                <br />
                {!isNaN(tipAmount) && <span className='amount' >Tip Amount :{tipAmount}</span>}
            </div>
            <div className='calc-wrapper' >
                <div onClick={() => calculateTipAmount(5)} className='calc-choice' >
                    <h5>
                        5%
                    </h5>
                </div>
                <div onClick={() => calculateTipAmount(10)} className='calc-choice' >
                    <h5>
                        10%
                    </h5>
                </div>
                <div onClick={() => calculateTipAmount(15)} className='calc-choice' >
                    <h5>
                        15%
                    </h5>
                </div>
                <div onClick={() => calculateTipAmount(20)} className='calc-choice' >
                    <h5>
                        20%
                    </h5>
                </div>

            </div>


            <button onClick={() => setCalcModal(true)} >Custom</button>
            {calcModal &&
                <div className='calc-modal' >
                    <h3>Enter The Amount</h3>
                    <input ref={customTipRef} />
                    <button onClick={() => { setCalcModal(false);setTipAmount(customTipRef.current.value) }} >Submit</button>
                </div>}

        </div>
    )
}

export default TipsCalculator