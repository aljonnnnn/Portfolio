

import Button from "../components/Button";
import Footer from "../components/Footer";

// const imgMe = '../dist/img/me.png';
// import '../dist/img/me.png'

const About = () => {
    return (
        <>  
            <section class="about" id="about" data-scroll-index="1">
                <div class="container">
                    <h2 class="section-heading">about me</h2>
                    <div class="about__flex">
                        <div class="about__box">
                            <div class="about__item">
                                <img src="./src/dist/img/me.png" alt="" class="about__img" />
                            </div>
                        </div>
                        <div class="about__box">
                            <div class="about__item">
                                <h3 class="about__heading">aljon m de lumen</h3>
                                <p class="about__paragraph">I am currently taking a Bachelor of Computer Science from the AMA Computer College East Rizal Campus.</p>
                                <p class="about__paragraph">I like to create projects and put them on Github.</p>
                                <p class="about__paragraph">I love building websites and am always looking forward to improving my skills.</p>
                                <p class="about__paragraph">I like to develop any kind of project. Seeking Internship.</p>
                                <p class="about__paragraph">I am interested in exploring the fields of Software Engineering and Web Development. Feel free to reach me directly at delumenaljon@gmail.com.</p>
                                {/* <a href="#" class="btn btn-primary">resume</a> */}
                                <Button className='btn btn-primary' path='awit.pdf' text='resume'/>
                                {/* <a href="#" class="btn btn-secondary" data-scroll-goto="3">portfolio</a> */}
                                <Button className='btn btn-secondary' path='/portfolio' text='portfolio' />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="education" id="education">
                <div class="container">
                    <h2 class="section-heading">education</h2>
                    <div class="education__flex">
                        <div class="education__box">
                            <div class="education__item">
                                <h3 class="education__heading">2020-PRESENT</h3>
                                <div class="education__school-container">
                                    <p class="education__name">AMA Computer College East Rizal Campus</p>
                                    <span class="education__address">Marikina-Infanta Hwy, Antipolo, 1870 Rizal</span>
                                </div>
                            </div>
                        </div>
                        <div class="education__box">
                            <div class="education__item">
                                <h3 class="education__heading">2018-2020</h3>
                                <div class="education__school-container">
                                    <p class="education__name">ICCT Colleges Taytay Satellite Campus </p>
                                    <span class="education__address">128 Cabrera Rd, Taytay, 1920 Rizal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="skills" id="skills" data-scroll-index="2">
                <div class="container">
                    <h2 class="section-heading">my backpack</h2>
                    <div class="skills__flex">
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/html.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/css.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/js.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/bootstrap.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/sass.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/jquery.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/figma.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/git.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/github.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/vscode.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/npm.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                        <div class="skills__box">
                            <div class="skills__item">
                                <img src="dist/img/command.svg" alt="" class="skills__img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
        
        

    )
}

export default About;