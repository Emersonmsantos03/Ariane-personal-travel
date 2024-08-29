import Header from "./Header"
import "./home.css"


let Home = () => {
    return(
        <section className="home">
            <Header />
            <div className="home-container">
            <div className="home-title">
                <h1>Acompanhamento exclusivo e experiências únicas: transformando sua viagem</h1>
            </div>
            <div className="home-subtitle">
                <h4>Experimente uma nova forma de viajar com nossa agência. Nosso acompanhamento profissional garante que problemas sejam resolvidos e planos ajustados, permitindo que você aproveite cada momento. Deixe-nos cuidar de tudo para que sua viagem seja tranquila e inesquecível.</h4>
            </div>
            <div className="home-button">
               <a target="_blank" href="https://wa.me/41996205225?text=Ol%C3%A1%20Ariane%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20viagens.%20Poderia%20me%20dar%20mais%20detalhes%3F
"><button>Planeje sua viagem conosco!</button></a>
            </div>
            </div>
        </section>
    )
}


export default Home