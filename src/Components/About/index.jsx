import "./about.css"
import about from '../../../public/images/ariane-about.png'
import whatsapp from '../../../public/images/whatsapp-logo.svg'
import instagram from '../../../public/images/instagram-logo.svg'
import email from '../../../public/images/email-logo.svg'

let About = () => {
    return(
        <section className="about" id="about">
            <div className="about-image">
                <img src={about}/>
            </div>
            <div className="about-texts">
                <div className="about-texts-title"><h3>Ariane - <strong>Personal Travel</strong></h3></div>
                <div className="about-texts-para">
                    <p>Olá, meu nome é Ariane e sou a criadora do conceito Personal Travel, onde eu penso em cada detalhe da sua viagem como se fosse minha.</p>
                        <p>Me apaixonei por viagens enquanto fui militar, amo descobrir novos destinos e mergulhar em culturas diferentes.
                        </p>
                </div>
                <div className="about-texts-subtitle">
                    <h5>Vamos explorar o mundo juntos!</h5>
                </div>
                <div className="about-texts-social">
                    <a target="_blank" href="https://wa.me/41996205225?text=Ol%C3%A1%20Ariane%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20viagens.%20Poderia%20me%20dar%20mais%20detalhes%3F
"><img src={whatsapp} /></a>
                    <a target="_blank" href="https://www.instagram.com/arianepersonaltravel/"><img  src={instagram} /></a>
                    <a target="_blank" href="mailto:contato@arianepersonaltravel.com"><img  src={email} /></a>
                </div>
            </div>
        </section>
    )
}


export default About 