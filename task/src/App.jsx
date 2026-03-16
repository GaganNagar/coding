import React, { useEffect } from 'react'

const App = () => {

  const [userList, setUserList] = useState([])
  const [page, setPage] = useState(1)



useEffect(()=>{
  const fetchData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data  = await response.json()
    console.log(data);
  }
})

  return (
    <div>
      
    <div className="card w-[300px] bg-red-400 p-5 flex flex-col justify-end items-center">
      <span>Remove</span>
      <div className='headData'>
        <h2 className='font-medium font-bold text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, dolorum?</h2>
        <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam!</p>
        <span className='text-gray-400'>Mon, 21 december 2020, 14:57 GMT </span>
      </div>

      <div className='h-[100px]'>
        <img className='w-full object-cover' src="" alt="" />
      </div>
    </div>

    </div>
  )
}

export default App
