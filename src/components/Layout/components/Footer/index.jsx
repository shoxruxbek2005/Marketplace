import { Link } from "react-router-dom";
import clsx from "clsx";
import { H2 } from "../../../Typography";
import cn from "./style.module.scss";



function Footer(props) {
    const { children } = props
    return (


        <footer className={cn.footer}>

            <div className={cn.top}>
                <div className={clsx(cn.first, cn.same)}>
                    <div className={clsx(cn.logo)}>
                        <Link to={"/"}>

                            <i class="fa-solid fa-store"></i>
                            <H2>
                                NFT Marketplace
                            </H2>
                        </Link>
                    </div>
                    <ul>
                        <li>NFT marketplace UI created with Anima for Figma.</li>
                        <li>Join our community</li>             <li>
                            <H2>Social</H2>
                        </li>
                    </ul>
                </div>
                <div className={clsx(cn.second, cn.same)}>
                    <H2 fontFamily="mono">Explore</H2>
                    <ul>
                        <li>
                            <Link to="/marketplace">Marketplace</Link>
                        </li>
                        <li>
                            <Link to="rankings">Rankings</Link>
                        </li>
                        <li>
                            <Link to="connection">Connect a wallet</Link>
                        </li>
                    </ul>
                </div>
                <div className={clsx(cn.third, cn.same)}>
                    <H2 fontFamily="mono">Join our weekly digest</H2>
                    <ul>
                        <li>
                            Get exclusive promotions & updates straight to your inbox.
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className={cn.bottom}>Ⓒ NFT Market. Use this template freely.</div>

        </footer >
    )

}

export default Footer

