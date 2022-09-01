import Head from "next/head"
import NavBar from "./Navbar"
import {Container} from 'react-bootstrap'

const Layout = (props) =>{
    return(
        <div className="homepage-container">
            <Head>
                <title>Amit</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar/>
            <div>
                <Container fluid className="container-fullWidth">
                    {props.children}
                </Container>
            </div>
        </div>
    )
}
export default Layout