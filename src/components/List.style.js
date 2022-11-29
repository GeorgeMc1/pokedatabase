import styled from "styled-components";
export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .link{
        text-decoration: none;
        color: black;
        &:hover{
        text-decoration: underline;
        }
    }
`
export const ListText = styled.p`
    min-width: 100px;
    margin: 10px 0;
`