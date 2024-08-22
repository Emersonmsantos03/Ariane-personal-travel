import "./header.css"
import logo from "../../../../public/images/Logo-ariane.svg"


let Header = () => {
    return(
        <div className="header">
            <div className="header-logo">
                <a><img src={logo} /></a>
            </div>
            <div className="header-nav">
                <a>Sobre mim</a>
                <a>Serviços</a>
                <a>Parcerias</a>
                <button className="header-nav-button"><a>Contatos</a></button>
            </div>

            

        </div>
    )
}

export default Header