import React from 'react'
import PollItem from './PollItem'
import Search from './Search'
import PollForm from './PollForm'

const PollList = ({pollsArray, setSelectedPoll}) => {

    const pollList = pollsArray.map(poll => 
    <PollItem poll={poll} setSelectedPoll={setSelectedPoll} key={poll.id}/>)

  return (
    <div className='Polls-Side-Bar'>
        <div className='Side-Bar-Heading'>
          <h3>Polls</h3>
          <h3 className='New-Poll'>+</h3>
        </div>
        <Search />
        <div className="PollList-Side-Bar">
            {pollList}
        </div>
    </div>
  )
}

export default PollList