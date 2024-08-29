import "./footer.css";
import logo from "../../../public/images/logo-ariane.svg";
import whatsapp from "../../../public/images/white-whatsapp.svg";
import email from "../../../public/images/white-email.svg";
import instagram from "../../../public/images/white-instagram.svg";

let Footer = () => {
    return (
        <section className="footer" id="contacts">
            <div className="footer-top">
                <div className="footer-top-image">
                    <img src={logo} alt="Logo Ariane Personal Travel" />
                </div>
                <div className="footer-top-title">
                    <h1>Viva a Aventura dos Seus Sonhos!</h1>
                </div>
                <div className="footer-top-subtitle">
                    <p>Explore destinos incríveis e viva experiências inesquecíveis com nossa agência de viagens. Fale conosco e comece a planejar sua próxima grande viagem hoje mesmo!</p>
                </div>
                <div className="footer-top-button">
                    <a target="_blank"href="https://wa.me/41996205225?text=Ol%C3%A1%20Ariane%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20viagens.%20Poderia%20me%20dar%20mais%20detalhes%3F
"><button>Viaje já!</button></a>
                </div>
            </div>

            <div className="footer-bot">
                <div className="footer-bot-nav">
                    <h3>Navegação</h3>
                    <div className="footer-bot-nav-a">
                        <a href="arianepersonaltravel.com">Início</a>
                        <a href="#about">Sobre mim</a>
                        <a href="#offers">Serviços</a>
                        <a href="#partners">Parcerias</a>
                        <a href="#contacts">Contato</a>
                    </div>
                </div>
                <div className="footer-bot-media">
                    <div className="footer-bot-media-title">
                        <h3>Mídias sociais</h3>
                    </div>
                    <div className="footer-bot-media-medias">
                    <div className="footer-bot-media-social">
                        <img src={whatsapp} alt="WhatsApp" />
                        <p>41 99620-5225</p>
                    </div>
                    <div className="footer-bot-media-social">
                        <img src={email} alt="Email" />
                        <p>contato@arianepersonaltravel.com</p>
                    </div>
                    <div className="footer-bot-media-social">
                        <img src={instagram} alt="Instagram" />
                        <p>@arianepersonaltravel</p>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className="footer-bot-rights">
                    <h4>© 2024 Ariane Personal Travel. Todos os direitos reservados | Desenvolvido por <a href="https://wa.me/41988702322?text=Olá%2C%20vim%20pelo%20site%20da%20Ariane%20Personal%20travel%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho" target="_blank">Emerson Moraes</a>.</h4>
                </div>
        </section>
    );
};

export default Footer;
