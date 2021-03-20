import Footer from "../components/Footer";


const Contact = () => {
    return (
       <>
            <section class="contact" id="contact" data-scroll-index="4">
                <div class="container">
                    <h2 class="section-heading">contact</h2>
                    <div class="contact__flex">
                        <div class="contact__box">
                            <div class="contact__item">
                                <span class="contact__icon"><img src="dist/img/contact-email-icon.svg" alt="" /></span>
                                <span class="contact__contact">delumenaljon@gmail.com</span>
                            </div>
                        </div>
                        <div class="contact__box">
                            <div class="contact__item">
                                <span class="contact__icon"><img src="dist/img/contact-phone-icon.svg" alt="" /></span>
                                <span class="contact__contact">0907-345-9009</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
       </>
    )
}

export default Contact;