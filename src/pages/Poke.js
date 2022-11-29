import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokeWrapper } from "./Poke.style";
export const Poke = () =>{
    const [poke, setPoke] = useState({});
    let { id } = useParams();
    const name = id.charAt(0).toUpperCase() + id.slice(1);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!response.ok){ 
                    throw new Error(response.statusText);
                }
                const converted = await response.json();
                setPoke(converted);
            } catch (err){
                console.log(err);
            }
        }
        fetchData();
    }, [id])
    return(
        <PokeWrapper>
            <h1>{name}</h1>
            <img src={poke.sprites?.other["official-artwork"].front_default}></img>
        </PokeWrapper>
    )
}