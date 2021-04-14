import styles from '@styles/Layout.module.scss'
import Navbar from '@components/navbar/Navbar'
import Head from 'next/head'
import Error from 'next/error'
import styled from 'styled-components'
const StyledMain = styled.div`
font-size: 1.25rem;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;`
const Layout = ({ children, me, title }) => {
  if (me == null) return <Error></Error>
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar me={me} />
      <StyledMain id="main">
        {children}
      </StyledMain>
    </div>
  )
}

export default Layout
