import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer'
import CardHome from '../../components/CardHome/CardHome'

function HomePage() {
    return ( 
        <>
            <BackgroundContainer>
                <img src='./background-home.png' height="100%" width="auto" />
                <CardHome />
            </BackgroundContainer>   
        </>
     );
}

export default HomePage;