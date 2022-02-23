import React from 'react'

const Search = () => {

    const handleChange = (e) => {
        console.log(e.target.value)
    }
  return (
    <input type='text' placeholder='Search By Title' onChange={handleChange}/>
  )
}

export default Search