import styled from 'styled-components'

export const Container = styled.div`
width: 100% ;
height: auto;
`

export const Wrapper = styled.div`
width:100%;
max-width: 1300px;
height:100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;
`

export const LogoEspacio = styled.div`
width:auto;
height:auto;
margin-left: 0.4rem;
margin-right: 4rem;
`

export const LogoContainer = styled.div`
margin-left: 0.5 rem;
margin-right: 2rem;
display: flex;
align-items: center;

&:hover {
    color: #fff;
    background-color: #9EB4BB;
    transition: 0.5 all ease;
}
`

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;

`

export const MenuItem = styled.li`
height: 100%;
`

export const MenuItemLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.2rem 3.5rem;
color: #64b2ff;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;


&:hover {
    color: #fff;
    background-color: #9EB4BB;
    transition: 0.5 all ease;
}
`

export const MenuItemLinkE = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.2rem 1rem;
color: #64b2ff;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;


&:hover {
    color: #fff;
    background-color: #9EB4BB;
    transition: 0.5 all ease;
}
`