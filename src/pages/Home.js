import {useState, useEffect} from "react";
import { HomeWrapper, SecWrapper, Button } from "./Home.style";
import {List} from "../components/List";
export const Home = () => {
    const [pokes, setPokes] = useState([]);
    const [link, setLink] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextOffset, setNextOffset] = useState(20);
    const [prevOffset, setprevOffset] = useState(-20);
    useEffect(() => {
        const fetchData = async (url) => {
            try{
                const response = await fetch(`${url}`);
                if (!response.ok){ 
                throw new Error(response.statusText);
                }
                const converted = await response.json();
                setPokes(converted.results);
            } catch (err){
                console.log(err);
            }
        }
        fetchData(link);
    }, [link])
      const nextPage = () => {
        setLink(`https://pokeapi.co/api/v2/pokemon?offset=${nextOffset}&limit=20`);
        setNextOffset(nextOffset + 20);
        setprevOffset(prevOffset + 20);
      }
      const prevPage = () => {
        if (prevOffset >= 0){
          setLink(`https://pokeapi.co/api/v2/pokemon?offset=${prevOffset}&limit=20`);
          setNextOffset(nextOffset - 20);
          setprevOffset(prevOffset - 20);
        }
      }
    return(
        <HomeWrapper>
            <h1>Pokemon Database</h1>
            <SecWrapper>
                <Button onClick={prevPage}>Previous</Button>
                <List list={pokes}/>
                <Button onClick={nextPage}>Next</Button>
            </SecWrapper>
        </HomeWrapper>
    )
}
