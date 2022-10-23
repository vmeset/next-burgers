import { NextPage } from "next";
import styles from '../../styles/Home.module.css'
import { FaBeer } from 'react-icons/fa';

const Burgers: NextPage = () => {
    return (
        <div>
            <h3> Lets go for a <FaBeer />? </h3>
        </div>
    )
}

export default Burgers