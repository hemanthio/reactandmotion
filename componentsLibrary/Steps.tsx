
import React,{useState} from 'react'

const Steps = () => {
    const [step, setStep] = useState(1)
  return (
   <div className='flex justify-between rounded p-8'>
      step={1}
      step={2}
      step={3}
      step={4}

   </div>
  )
}

export default Steps