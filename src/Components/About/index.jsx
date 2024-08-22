import "./about.css"
import about from '../../../public/images/ariane-about.png'
import whatsapp from '../../../public/images/whatsapp-logo.svg'
import instagram from '../../../public/images/instagram-logo.svg'
import email from '../../../public/images/email-logo.svg'

let About = () => {
    return(
        <section className="about">
            <div className="about-image">
                <img src={about}/>
            </div>
            <div className="about-texts">
                <div className="about-texts-title"><h3>Ariane - <strong>Personal Travel</strong></h3></div>
                <div className="about-texts-para">
                    <p>Olá! Meu nome é Ariane e sou a fundadora da agência de viagens personalizada. Viajar sempre foi minha maior paixão. Desde pequena, 
                        sonhava em explorar o mundo, descobrir novos destinos e mergulhar em culturas diferentes.</p>
                        <p>Minha missão é tornar sua experiência de viagem o mais simples e agradável possível. Com um acompanhamento profissional e personalizado, estou aqui para resolver problemas, ajustar planos e garantir 
                            que você aproveite ao máximo cada momento. 
                            Quero que você viva experiências únicas e memoráveis em cada jornada.</p>
                </div>
                <div className="about-texts-subtitle">
                    <h5>Vamos explorar o mundo juntos!</h5>
                </div>
                <div className="about-texts-social">
                    <img src={whatsapp} />
                    <img  src={instagram} />
                    <img  src={email} />
                </div>
            </div>
        </section>
    )
}


export default About 