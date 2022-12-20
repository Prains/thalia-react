import Header from "../components/Header";
import Catal from "../components/Home/Catal";
import Main from "../components/Home/Main";
import Ropes from "../components/Home/Ropes";
import Soul from "../components/Home/Soul";
import rope1 from '../images/rope4.png'
import rope2 from '../images/rope3.png'
import Materials from "../components/Home/materials";
import Care from "../components/Home/Care";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <main className="page">
            <Main />
            <Soul />
            <Catal />
            <Ropes src={rope1} class={'rope4'} />
            <Ropes src={rope2} class={'rope3'} />
            <Materials />
            <Care />
            <Footer />
        </main>
    );
}

export default Home;