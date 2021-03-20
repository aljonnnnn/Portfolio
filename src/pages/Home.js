import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    return (
        <section class="hero" id="hero" data-scroll-index="0">
            <div class="hero__text">
                <h1 class="hero__heading">i am Aljon
                    <span class="hero__sub-heading">frontend web developer</span>
                </h1>
                <p class="hero__paragraph">I am a Front-end Developer who also likes to play around with UI/UX and Back-end</p>
                {/* <Link to='/about' class="btn btn-primary" data-scroll-goto="1">know more</Link> */}
                <Button className='btn btn-primary' path='/about' text='know more'/>
            </div>
        </section>
    )
}

export default Home;