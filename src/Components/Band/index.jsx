import "./band.css"
import decolar from "../../../public/images/logo-decolar.svg"
import hoteis from "../../../public/images/logo-hoteis.svg"
import assistente from "../../../public/images/logo-assistente.svg"
import azul from "../../../public/images/logo-azul.svg"


let Band = () => {

    return(
        <section className="band">
            <div className="band-title">
                <h3>Descubra já o que a vida tem de melhor! <strong>Viaje conosco!</strong></h3>
            </div>
            <div className="band-companies">
                <img src={decolar} />
                <img src={hoteis}/>
                <img src={assistente}/>
                <img src={azul}/>
            </div>

        </section>
    )
}

export default Band;