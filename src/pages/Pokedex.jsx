import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import PokeCard from "../components/PokeCard";

const Pokedex = () => {
  const trainer = useSelector((st) => st.trainer);
  const [pokemons, setPokemons] = useState();
  const [types, setTypes] = useState()
  const [typeSelect, setTypeSelect] = useState('All pokemon')

  const navigate = useNavigate()

  useEffect(() => {
    if (typeSelect!=='All pokemon'){
      axios.get(typeSelect)
      .then(res=>setPokemons(res.data.pokemon.map(e=>e.pokemon)))
      .catch(err=>console.log(err))
    }else{
      const Url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000`;
    axios
      .get(Url)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
    }    
  }, [typeSelect]);
  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
    .then(res=>setTypes(res.data.results))
  }, [])
  


  const handleSubmit = e => {
    e.preventDefault()
   const input = e.target.search.value.trim().toLowerCase()
    navigate(`/pokedex/${input}`)
  }
  const handleChange = e=>{
    setTypeSelect(e.target.value) 

  }

  const [page, setPage] = useState(1)
  const [pokePage, setPokePage] = useState(8)
  const initialPoke = (page-1) * pokePage
  const finalPoke = page * pokePage
  const maxPage = pokemons?.length / pokePage
  return (
    <div className="pokedex">
      <header className="pokedex_hdr">

      <img loading="lazy" className="pokedex_img" src="/images/pokedex.png" alt="pokedex title" />
      </header>
      <main className="pokedex_main">

      <h2 className="pokedex_h2"><span className="red_text">Welcome {trainer},</span>  here you can find your favorite pokemon </h2>
      <span className="form_select">

      <form className="pokedex_form" onSubmit={handleSubmit}>
      <input className="pokedex_input" id="search" type="text" />
      <button className="pokedex_btn">Search</button>
      </form>
      <select className="pokedex_select" onChange={handleChange}>
        <option value="All pokemon">All pokemon</option>
        {
          types?.map(type=>(
            <option key={type.url} value={type.url}>{type.name}</option>
            
            ))
          }
      </select>
          </span>
      <div className="pokeCard_container">
        {pokemons?.slice(initialPoke,finalPoke).map((pokemon) => (
          <PokeCard pokemon={pokemon} key={pokemon.url} />
          ))}
      </div>
          <section className="pagination">

          <Pagination page={page} maxPage={maxPage} setPage={setPage}/> 
          </section>
          </main>
    </div>
  );
};

export default Pokedex;
