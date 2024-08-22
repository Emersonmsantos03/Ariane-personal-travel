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
                <button><a>Planeje sua viagem conosco!</a></button>
            </div>
            </div>
        </section>
    )
}


export default Home