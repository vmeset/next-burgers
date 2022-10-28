import { NextPage } from "next";
import styles from '../../styles/Home.module.css'
import { FaBeer } from 'react-icons/fa';
import { IBurger } from "../../types/IBurger";
import BurgerCard from "../../components/burgerCard";

interface BurgersProps {
    burgerz: IBurger[]
}

const Burgers: NextPage<BurgersProps> = ({burgerz}) => {
    
    return (
        <div>
            <h3> Lets go for a <FaBeer />? </h3>
            {burgerz.map(burg =>
                <BurgerCard key={burg.id} burger={burg} />    
            )}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:5000/items')
    const data = await response.json()
  
    return {
        props: {
            burgerz: data
        }
    }
}

export default Burgers