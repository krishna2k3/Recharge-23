import About from "../components/Home/About"
import Landing from "../components/Home/Landing"
import ProShows from "../components/Home/ProShows"
import Sponsors from "../components/Home/Sponsors"

const Home = ()=>{
    return (
        <div>
            <Landing/>
            <About/>
            <ProShows/>
            <Sponsors/>
        </div>
    )
}

export default Home