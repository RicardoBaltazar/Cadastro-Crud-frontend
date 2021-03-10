import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Container from '../src/Components/Container'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          BikeApp - Aluguel de Bicicletas
        </title>
      </Head>
      <Container>
        ola mundo
      </Container>
    </div>
  )
}
