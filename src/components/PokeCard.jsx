import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({pokemon}) => {

  const [poke, setPoke] = useState()
  const [type, setType] = useState()

  const colorType = ()=> {switch (poke?.types[0].type.name) {
   case 'bug': 
   case 'grass':
    return 'green_card'
    break
   case 'fire':
    return 'red_card'
    break
   case 'water':
    return 'blue_card'
    break
   case 'electric':
    return 'yellow_card'
    break
    case 'flying':
    case 'rock':
    case 'ground':
    case 'fighting':
      return 'brown_card'
    break
    case 'ghost':
    case 'psychic':
    case 'poison':
      return 'purple_card'
    break
    case 'dragon':
    case 'ice':
      return 'ice_card'
    break
    case 'fairy':
      return 'pink_card'
    break
    case 'shadow':
    case 'dark':
      return 'black_card'
    break
   default:
    return 'norm_card'   
  }}

  useEffect(() => {
    axios.get(pokemon.url)
    .then(res=>setPoke(res.data))
    .catch(err=>console.log(err))
  }, [])

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/pokedex/${poke?.id}`)
  }
  return (
    <article className={`${colorType()} poke_card`} onClick={handleClick}>
      <span className='img_container'>

        <img className='card_img' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
      </span>
        <section className='card_txt'>

        <h2 className='pokeCard_h2'>{pokemon.name}</h2>
        <ul className='type'>
        {
          poke?.types.map(type=>(
            <li  key={type.slot}>{type.type.name}</li>
            ))
          }
        </ul>
        <p className='types_p'>{poke?.types.length===1?'Type':'Types'}</p>
          <hr className='pokeCard_hr'/>
        <ul className='stats_container'>

          {
            poke?.stats.map(stat=>(
              <li className='stats' key={stat.stat.name}>{stat.stat.name} <span className='stat_num'>{stat.base_stat}</span> </li>
              ))
            }
        </ul>
            </section>
    </article>
  )
}

export default PokeCard