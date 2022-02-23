import React from 'react'
import PollForm from './PollForm'


const PollDetail = ({selectedPoll, setSelectedPoll}) => {
    
  return (
    <div className='Poll-Details'>
        {!selectedPoll ? 
        <div className='Poll-Detail-CTA'>
            <h2>Select A Poll</h2>
        </div> 
        :
        <>
            <header className='Poll-Header'>
                <div className="Poll-Title">
                    <h1>{selectedPoll.title}</h1>
                </div>
                <div className='Poll-Detail-Close'>
                    <h1 onClick={()=> setSelectedPoll(null)}>x</h1>
                </div>
            </header>

            <section className='PollVote'>
                <div>
                    <h2>{selectedPoll.question}</h2>
                </div>
                <div>
                    <h3>Cast Your Vote</h3>
                    <div>
                        <button>No</button>
                        <button>Yes</button>
                    </div>
                    <div>
                        <h4>No Votes: </h4>
                        <h4>Yes Votes: </h4>
                    </div>
                </div>
            </section>
        </>
    }
    </div>
  )
}

export default PollDetail