import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function Layout(props) {
    const { children } = props
    return (
        < >


            <Navbar />
            {children}
            <Footer />
        </>
    )

}

export default Layout