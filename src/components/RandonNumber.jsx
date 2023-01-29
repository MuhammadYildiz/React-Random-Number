import React from 'react'
import { useState} from 'react'

export default function RandonNumber() {
    const [inputValueMin, setinputValueMin] = useState("")
    const [inputValueMax, setinputValueMax] = useState("")
    const [randomNum, setrandomNum] = useState(0)
    const [minValueTommt, setminValueTommt] = useState()
    const [maxValueTommt, setmaxValueTommt] = useState()
    
    const getRandom = () => {
        let randomNum = Math.floor(Math.random() * (inputValueMax - inputValueMin + 1) + inputValueMin)
        setrandomNum(randomNum)
        if (!inputValueMin) {
            setminValueTommt(
                <span className='bg-red-900 text-white px-3 py-1 my-1 mr-2 sm:mr-1 w-1/2 text-xl'>Enter Min Number</span>
            )
            setrandomNum(0)
        }
        else {
            setminValueTommt("")
        }
        if (!inputValueMax) {
            setmaxValueTommt(
                <span className='bg-red-900 text-white px-3 py-1 my-1 ml-2 w-1/2 text-xl'>Enter Max Number</span>
            )
            setrandomNum(0)
        }
        else {
            setmaxValueTommt("") 
        }
    }
    return (
        <div className='bg-gradient-to-b from-blue-400 to-cyan-700 sm:p-10 p-5 min-h-[50vh] w-[90%] lg:w-[50%] mt-10'>
            <h1 className='text-3xl bg-green-400 p-3 mt-5'>
                Random Number: <span className='text-red-500 bg-cyan-100 px-3'>{randomNum} </span>
            </h1>
            <div className='flex flex-col items-center sm:flex-row sm:justify-between' >
                <div className='flex flex-col  items-start'>
                    <span className='mx-2 mt-5 text-white text-2xl'>Min:</span>
                    <input className='border border-green-400 outline-none p-1 px-3 mt-2  text-xl w-[200px]'
                        placeholder='Enter Min Number...'
                        type="number"
                        value={inputValueMin}
                        onChange={(e) => setinputValueMin(+e.target.value)}
                        onFocus={()=>setinputValueMin("")}
                    />
                </div>
                <div className='flex flex-col  items-start'>
                    <span className='mx-2 mt-5 text-white text-2xl'>Max:</span>
                    <input className='border border-green-400 outline-none p-1 px-3 mt-2 text-xl w-[200px]'
                        placeholder='Enter Max Number...'
                        type="number"
                        value={inputValueMax}
                        onChange={(e) => setinputValueMax(+e.target.value)}
                        onFocus={()=>setinputValueMax("")}
                    />
                </div>
            </div>
            <button type='submit' className=" bg-green-500 px-5 py-2 text-black font-bold my-8 hover:bg-black hover:text-white"
                onClick={getRandom}>
                Get Random Number
            </button>
            <div className='flex items-center justify-center'>
                {minValueTommt}
                {maxValueTommt}
            </div>
        </div>
    )
}
