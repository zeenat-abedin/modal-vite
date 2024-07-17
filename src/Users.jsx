import { useState, useEffect } from 'react'

function Users() {
    const [users, setUsers] = useState([]) 
    const [isLoading, setIsLoading] = useState(true)

    const getUsersData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
    }

   useEffect(() => {
    getUsersData()
   }, [])

  return (
    <div>
      
    </div>
  )
}

export default Users
