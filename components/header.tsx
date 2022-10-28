import { NextPage } from 'next'
import Link from 'next/link';
import {GiHamburger} from 'react-icons/gi'

const Header: NextPage = () => {
    return (
        <header>
            <nav>
                <GiHamburger />
                <Link href='/burgers'><a> burgZ </a></Link>
                <Link href='/about'><a>about </a></Link>
                <Link href='/reviews'><a>reviews </a></Link>
            </nav>
        </header>
    );
}

export default Header;