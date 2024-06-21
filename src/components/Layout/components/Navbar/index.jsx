import { Link } from "react-router-dom"
import clsx from "clsx";

import CreateAccount from "../../../../pages/CreateAccout_page"
import Marketplace from "../../../../pages/Marketplace_page"
import Ranking from "../../../../pages/Ranking_page"
import { H2, P, Span } from "../../../Typography/index"

import cn from "./style.module.scss";

function Navbar() {
    // const { children } = props
    return (
        <div className={clsx(cn.Navbar)}>
            {/* <h1>Navbar</h1> */}


            <div className={clsx(cn.logo)}>
                <Link to={"/"}>

                    <i class="fa-solid fa-store"></i>
                    <H2>
                        NFT Marketplace
                    </H2>
                </Link>
            </div>
            <ul>

                <li>
                    <Link to={"/market"}>

                        <Span> Marketplace</Span>
                    </Link>
                </li> <li>
                    <Link to={"create"}>

                        <Span>Create Account</Span>
                    </Link>
                </li>
                <li>
                    <Link to={"/ranking"}>

                        <Span> Rankings</Span>
                    </Link>
                </li>
            </ul>
        </div>
    )

}

export default Navbar

