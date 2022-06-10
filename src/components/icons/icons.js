import styled from "styled-components";
import {AiFillHome} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {MdWork} from "react-icons/md";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineReload} from 'react-icons/ai';
import {TbListDetails} from 'react-icons/tb'
import {AiFillLinkedin} from 'react-icons/ai';

export const IconHome = styled(AiFillHome)`
    font-size: 1.2rem;
    margin-right: 6px;
`

export const IconPerfil = styled(BsFillPersonFill)`
    font-size: 1.2rem;
    margin-right: 6px;
`

export const IconVagas = styled(MdWork)`
    font-size: 1.2rem;
    margin-right: 6px;
`

export const IconArrow = styled(AiOutlineArrowLeft)`
    font-size: 1.3rem;
    font-weight: bold;
    color: black;
    margin: 5px;
`
export const IconReload = styled(AiOutlineReload)`
    font-size: 1.3rem;
    font-weight: bold;
    color: black;
    margin: 10px;

`

export const IconDetalhes = styled(TbListDetails)`
    font-size: 1rem;
    color: red;
`

export const IconContratei = styled(TbListDetails)`
    font-size: 1rem;
    color: green;
`

export const IconLinkedln = styled(AiFillLinkedin)`
`