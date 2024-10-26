import React from 'react'

const page = () => {
  return (
    <div className='bg-blue-300'>
        <iframe className=' '
      src="https://symphonious-cranachan-6d7191.netlify.app/" 
      title="Embedded Content"
      width="90%"
      height="600"
      style={{ border: "none",margin:"auto"}}
    />

<iframe className=' '
      src="https://reactandmotion.vercel.app/interactiveiconbar" 
      title="Embedded Content"
      width="50%"
      height="300"
      style={{ border: "none",margin:"auto"}}
    />

<iframe className=' '
      src="https://reactandmotion.vercel.app/digitaltransitioncounter" 
      title="Embedded Content"
      width="50%"
      height="300"
      style={{ border: "none",}}
    />
    </div>
  )
}

export default page