import { Link } from "react-router-dom"

import CreateAccount from "../../../../pages/CreateAccout_page"
import Marketplace from "../../../../pages/Marketplace_page"
import Ranking from "../../../../pages/Ranking_page"

function Navbar(props) {
    const { children } = props
    return (
        <>
            {/* <h1>Navbar</h1> */}
            <ul>
                <li>
                    <Link to={"/"}>

                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/market"}>

                        Market
                    </Link>
                </li> <li>
                    <Link to={"create"}>

                        Create Account
                    </Link>
                </li>
                <li>
                    <Link to={"/ranking"}>

                        Ranking
                    </Link>
                </li>
            </ul>
        </>
    )

}

export default Navbar