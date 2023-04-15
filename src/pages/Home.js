import Catal from "../components/Home/Catal/Catal";
import Main from "../components/Home/Main/Main";
import Ropes from "../components/Home/Ropes/Ropes";
import rope1 from '../images/rope4.png'
import rope2 from '../images/rope3.png'
import Materials from "../components/Home/Materials/materials";
import Care from "../components/Home/Care/Care";
import { motion } from "framer-motion";
import Reviews from "../components/Home/Reviews/Reviews";


const Home = (props) => {


    let novelties = props.novelties;

    return (
        <>
            {novelties && <motion.main className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Main />
                <Catal novelties={novelties} />
                <Ropes src={rope1} class={'rope4'} />
                <Ropes src={rope2} class={'rope3'} />
                <Materials />
                <Care />
            </motion.main>}</>
    );
}

export default Home;