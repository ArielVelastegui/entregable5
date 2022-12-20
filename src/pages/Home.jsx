import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerGlobal(e.target.name.value.trim())) 
    e.target.name.value=''
        navigate('/pokedex')
    }

  return (
    <div className='home'>
        <img className='home_image' src="/images/pokedex.png" alt="pokedex title" />
        <h1 className='home_h1'>Hi Trainer!</h1>
        <p className='home_p'>Give me your name to start</p>
        <form onSubmit={handleSubmit} className='home_form'>
            <input placeholder='Enter your name..' type="text" id='name' className='home_input'/>
            <button className='home_btn'>Start</button>
        </form>
        <footer className='home_footer'>

        </footer>
    </div>
  )
}

export default Home