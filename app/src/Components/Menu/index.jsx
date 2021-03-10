import styled from 'styled-components';
import Link from 'next/link';

const HEADER = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 25px 8% 25px 8%;
    transition: 0.2s;
    border: 1px solid blue;
    h1 {
        margin-right: 40px;
        font-size: 22px;
        color: var(--title-color);
        cursor: pointer;
    }
    span{
        color: var(--primary-color);
    }
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li {
        margin-left: 45px;
        transition: 0.1s;
        border: 1px solid brown;
        &:hover{
            opacity: 75%;
        }
    }
    a {
        color: var(--secondary-color);
    }
    .btn-entrar{
        color: var(--primary-color);
        font-weight: bold;
        border: 2px solid var(--primary-color);
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 900px) {
        padding: 25px 1rem;
        align-items: baseline;
        div {
            width: 100%;
            align-items: baseline;
            justify-content: left;
        }
        ul{
            display: none;
            width:0;
            height:0;
            justify-content: space-between;
        }
        li{
            width: 10vw;
            font-size: 0.8rem;
            margin: 0.5rem;
        }
        h1{
            font-size: 1.5rem;
            margin-right: 0;
            margin-bottom: 15px;
        }
    }
`;

function Menu(props) {
    return (
        <>
            <HEADER>
                <Link href={props.home}><h1>BikeApp<span></span></h1></Link>
                <ul className='ul-sign'>
                    <li><Link href='#'>{props.link1}</Link></li>
                    <li><Link href="#">{props.link2}</Link></li>
                    <li><Link href="#">{props.link3}</Link></li>
                    <li><a href="#" >Cadastre - se</a></li>
                    <li><a href="#" className='btn-entrar'>Entrar</a></li>
                </ul>
            </HEADER>
        </>
    )
}

export default Menu;