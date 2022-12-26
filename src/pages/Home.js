import Catal from "../components/Home/Catal/Catal";

import Main from "../components/Home/Main/Main";

import Ropes from "../components/Home/Ropes/Ropes";

import Soul from "../components/Home/Soul/Soul";

import rope1 from '../images/rope4.png'

import rope2 from '../images/rope3.png'

import Materials from "../components/Home/Materials/materials";

import Care from "../components/Home/Care/Care";

import { motion } from "framer-motion";

const Home = (props) => {

    let temp = props.maintemp

    return (
        <>
            {temp && <motion.main className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Main title={temp.mainpage_mainsection_title} />
                <Soul />
                <Catal />
                <Ropes src={rope1} class={'rope4'} />
                <Ropes src={rope2} class={'rope3'} />
                <Materials />
                <Care />
            </motion.main>}</>
    );
}

export default Home;