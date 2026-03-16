import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [userList, setUserList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    const fetchData = async ()=>{

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${page}`)

      const data  = await response.json()
      setUserList(data)
      console.log(data)
    }

    fetchData()

  },[page])


  const remove = (id)=>{
    const updatedList = userList.filter((user)=> user.id !== id)
    setUserList(updatedList)
  }


  const prev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const next = () => {
    if(page < 6){
      setPage(page + 1)
    }
  }


  return (
    <div className='flex flex-col justify-center items-center flex-wrap gap-10 p-10'>

      <h1>User Data</h1>

      <div className='cards flex flex-wrap gap-5 justify-between items-center'>

      {userList.map((data) => (

        <div key={data.id} className="card w-[40%] rounded-2xl bg-white p-5 flex flex-col items-center">

          <div className='flex justify-end w-full'>
            <span className='cursor-pointer' onClick={()=>remove(data.id)}>❌</span>
          </div>

          <div className='headData'>
            <h2 className='font-bold text-xl'>{data.title}</h2>
            <p>{data.body}</p>
            <span className='text-gray-400'>
              Mon, 21 December 2020, 14:57 GMT
            </span>
          </div>

          <div className='w-full'>
          
            <img
              className='w-full rounded object-cover'
              src={`https://picsum.photos/300/200?random=${data.id}`}
              alt="post"
            />
          </div>

        </div>

      ))}

      </div>

      <div className='pagination flex justify-center items-center gap-4'>

        <button
          className='bg-emerald-400 px-3 py-1 rounded-full font-medium cursor-pointer'
          disabled={page===1}
          onClick={prev}
        >
          Prev
        </button>

        <span>Page: {page}</span>

        <button className='bg-emerald-400 px-3 py-1 rounded-full font-medium cursor-pointer'
          disabled={page===6}
          onClick={next}
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default App