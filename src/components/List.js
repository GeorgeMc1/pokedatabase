import { ListWrapper, ListText } from "./List.style";
import {Link} from "react-router-dom";
export const List = (props) => {
    const list = [...props.list];
    return(
        <ListWrapper>
            {list.map((poke,i) => {
                const name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
                return(
                    <Link key={i} className="link" to={`/${poke.name}`}>
                        <ListText>{(name)}</ListText>
                    </Link>
                )
            })}
        </ListWrapper>
    )
}