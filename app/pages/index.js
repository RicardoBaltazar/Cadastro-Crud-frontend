import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Container from '../src/Components/Container'
import Menu from '../src/Components/Menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          BikeApp - Aluguel de Bicicletas
        </title>
      </Head>
      <Container>
        <Menu 
        home='#'
        link1='Home'
        link2='sobre'
        link3='bikes'
        />
        ola mundo
      </Container>
    </div>
  )
}
