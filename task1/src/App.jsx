import { useState, useEffect } from 'react'
import './App.css'
import Img from '/image.png'


function App() {

  const [userList, setUserList] = useState([])
  const [page, setPage] = useState(1)



  useEffect(()=>{
    const fetchData = async ()=>{

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)   // ${page} we use template lateralls for change but  dont know how to set page and fetch data only 6
        const data  = await response.json()
        setUserList(data)
      }
    fetchData()
  },[page])


  const remove= (id)=>{
    const updatedList = userList.filter((user)=> !user.id === id)
    setUserList(updatedList)

  }


  const prev = () => {
    if (page > 1) {

      setPage(page - 1)
    }
  }
  const next = () => {
    setPage(page + 1)
  }

  return (
    <div className='flex flex-col justify-center items-center flex-wrap gap-10 p-10'>
          <h1>UserData</h1>
      <div className='cards flex flex-wrap gap-5 justify-between items-center'>
      {userList.map((data) => (
        <div key={data.id} className="card w-[40%]  rounded-2xl bg-white p-5 flex flex-col  items-center">
          <div className='flex justify-end w-full'>
            <span className='cursor-pointer' onClick={()=>remove(data.id)}>❌</span>
          </div>
          <div className='headData'>
            <h2 className='font-medium font-bold text-xl'>{data.title}</h2>
            <p className=''>{data.body}</p>
            <span className='text-gray-400'>Mon, 21 december 2020, 14:57 GMT </span>
          </div>

          <div className='w-full'>
            {/* we use random img because img is not available in json data  */}
            <img className='w-full rounded object-cover' src={Img} alt="" />  
          </div>
        </div>

      ))}
      </div>

      <div className='pagination flex justify-center items-center gap-2'>
        <button className='bg-emerald-400 text-center px-2 py-1 rounded-full font-medium text-xl cursor-pointer ' onClick={prev}>prev</button>

        <span>Page:{page}</span>

        <button className='bg-emerald-400 text-center px-2 py-1 rounded-full font-medium text-xl cursor-pointer ' onClick={next}>next</button>
      </div>

    </div>
  )

}

export default App
