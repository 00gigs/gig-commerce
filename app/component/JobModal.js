import React from 'react'
import { useRouter } from "next/navigation";
const JobModal = () => {
const router = useRouter()
  return (
    <div className=''>
        <button  onClick={()=>router.push('/Jobs')}>
       view my jobs
        </button>
        </div>
  )
}

export default JobModal