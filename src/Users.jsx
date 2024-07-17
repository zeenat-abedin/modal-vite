import { useState, useEffect } from 'react'

 const getUsersData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
}

function Users() {
    const [users, setUsers] = useState([]) 
    const [isLoading, setIsLoading] = useState(false)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
       setIsLoading(true)
        getUsersData()
            .then((res) => setUsers(res))
        .finally(setIsLoading(false))
    }, [])
    
    function handleSearch(e) {
       setSearchText(e.target.value) 
    }

  return (
    <>
      <input value={users} onChange={handleSearch} placeholder='Search...' />
      <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Name</th>
        </tr>
       </thead>
        <tbody>
              
       </tbody>
    </>
  )
}

export default Users
