import { useState } from "react"
const test=['Upload now..','Review it..','Submit now']
export default function App(){
    const [Step,setStep]=useState(1)
    const [isOpen,setOpen]=useState(true)
    function PrevHandle(){
        if(Step>1){
            setStep(x=>x-1)
        }
        // if(Step>1){
        //     setStep(Step-1)
        // }
    }
    function NextHandle(){
        if(Step<3){
            setStep(x=>x+1)
        }
        // if(Step<3){
        //     setStep(Step+1)
        // }
    }
    return (
    <>
    <button onClick={()=>{
        setOpen(x=>!x)
    }}>&times;</button>
    {isOpen && <div className="Box">
            <div className="InnerBox">
                <div className={`number ${Step>= 1? 'Active':""}`}>1</div>
                <div className={`number ${Step>= 2? 'Active':""}`}>2</div>
                <div className={`number ${Step>= 3? 'Active':""}`}>3</div>
            </div>
            <p style={{textAlign:"center"}}>{test[Step-1]}</p>
            <div className="InnerBox">
                <div className='btn' onClick={PrevHandle}>Prev</div>
                <div className='btn' onClick={NextHandle}>Next</div>
            </div>
        </div>}
    </>)
}