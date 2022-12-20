import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokedexInfo = () => {
  const [poke, setPoke] = useState();

  const { id } = useParams();

  console.log(poke);
  
  const objStyleHp = {
    width: `${poke?.stats[0].base_stat/1.5}%`
  }
  const objStyleAttack = {
    width: `${poke?.stats[1].base_stat/1.5}%`
  }
  const objStyleDefense = {
    width: `${poke?.stats[2].base_stat/1.5}%`
  }
  const objStyleSpecialAttack = {
    width: `${poke?.stats[3].base_stat/1.5}%`
  }
  const objStyleSpecialDefense = {
    width: `${poke?.stats[4].base_stat/1.5}%`
  }
  const objStyleSpeed = {
    width: `${poke?.stats[5].base_stat/1.5}%`
  }

  useEffect(() => {
    const Url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(Url)
      .then((res) => setPoke(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const colorType = () => {
    switch (poke?.types[0].type.name) {
      case "bug":
      case "grass":
        return "green_card";
        break;
      case "fire":
        return "red_card";
        break;
      case "water":
        return "blue_card";
        break;
      case "electric":
        return "yellow_card";
        break;
      case "flying":
      case "rock":
      case "ground":
      case "fighting":
        return "brown_card";
        break;
      case "ghost":
      case "psychic":
      case "poison":
        return "purple_card";
        break;
      case "dragon":
      case "ice":
        return "ice_card";
        break;
      case "fairy":
        return "pink_card";
        break;
      case "shadow":
      case "dark":
        return "black_card";
        break;
      default:
        return "norm_card";
    }
  };
  
  return (
    <section>
      <header className="pokedex_hdr">
        <img
          loading="lazy"
          className="pokedex_img"
          src="/images/pokedex.png"
          alt="pokedex title"
        />
      </header>
      <div className={`${colorType()} info_img`}>
        <img
          className="info_poke"
          src={poke?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </div>
      <div className="stats_info">
        <h2 className="h2_info">#{id}</h2>

        <h1 className="h1_info"> {poke?.name}</h1>
        <span className="weight_height_info">
          <ul>
            <li>Weight</li>
            <li className="weight">{poke?.weight}</li>
          </ul>

          <ul>
            <li>Height</li>
            <li className="height">{poke?.height}</li>
          </ul>
        </span>
        <span className="type_skills">
          <span className="types_container">
        
          <h2 className="h2_info">Type</h2>
          <ul className="ul_types">
            {poke?.types.map((type) =>{
              
              const colorTypeLi = () => {
                switch (type.type.name) {
                  case "bug":
                  case "grass":
                    return "green_card";
                    break;
                  case "fire":
                    return "red_card";
                    break;
                  case "water":
                    return "blue_card";
                    break;
                  case "electric":
                    return "yellow_card";
                    break;
                  case "flying":
                  case "rock":
                  case "ground":
                  case "fighting":
                    return "brown_card";
                    break;
                  case "ghost":
                  case "psychic":
                  case "poison":
                    return "purple_card";
                    break;
                  case "dragon":
                  case "ice":
                    return "ice_card";
                    break;
                  case "fairy":
                    return "pink_card";
                    break;
                  case "shadow":
                  case "dark":
                    return "black_card";
                    break;
                  default:
                    return "norm_card";
                }
              };

              return(
              <li className={`${colorTypeLi()}  
               types_li`} key={type.slot}>{type.type.name}</li>)
              })}
          </ul>
              </span>
              <span>

          <h2 className="h2_info">Abilities</h2>
          <ul className="ul_abilities">
            {
              poke?.abilities.map(ability=>(
                <li className="types_li" key={ability.slot}> {ability.ability.name}</li>
                ))
              }
          </ul>
              </span>
        </span>
        <h2>Stats</h2> 
        <ul>
          <li>
            <span className="stat_num">

              <h3>Hp:</h3>
              <p>{poke?.stats[0].base_stat}/150</p>
            </span>
        <div className="bar_container">
          <div style={objStyleHp} className="bar">
          
          </div>
        </div>
          </li>
          <li>
            <span className="stat_num">

              <h3>Attack:</h3>
              <p>{poke?.stats[1].base_stat}/150</p>
            </span>
        <div className="bar_container">
          <div style={objStyleAttack} className="bar">
          
          </div>
        </div>
          </li>
          <li>
            <span className="stat_num">

              <h3>Defense:</h3>
              <p>{poke?.stats[2].base_stat}/150</p>
            </span>
        <div className="bar_container">
          <div style={objStyleDefense} className="bar">
          
          </div>
        </div>
          </li>
          <li>
            <span className="stat_num">

              <h3>Special Attack:</h3>
              <p>{poke?.stats[3].base_stat}/150</p>
            </span>
        <div className="bar_container">
          <div style={objStyleSpecialAttack} className="bar">
          
          </div>
        </div>
          </li>
          <li>
            <span className="stat_num">

              <h3>Special Defense:</h3>
              <p>{poke?.stats[4].base_stat}/150</p>
            </span>
        <div className="bar_container">
          <div style={objStyleSpecialDefense} className="bar">
          
          </div>
        </div>
          </li>
          <li>
            <span className="stat_num">

              <h3>Speed:</h3>
              <p>{poke?.stats[5].base_stat}/150</p>
            </span>
        <div className="bar_container">
          <div style={objStyleSpeed} className="bar">
          
          </div>
        </div>
          </li>
        </ul>
      </div>

      <div className="movements_info">
              <ul className="moves_container">
                {
                  poke?.moves.map(move=>(
                    <li className="moves"  key={move.move.url}>{move.move.name}</li>
                  ))
                }
              </ul>
      </div>
    </section>
  );
};

export default PokedexInfo;
