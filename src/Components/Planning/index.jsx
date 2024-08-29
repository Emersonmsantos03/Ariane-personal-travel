import "./planning.css";
import travel from "../../../public/images/travel-img.png";
import stars from "../../../public/images/stars.svg";
import map from "../../../public/images/map.svg";
import arrows from "../../../public/images/arrow.svg";
import suitcase from "../../../public/images/suitcase.svg";
import island from "../../../public/images/island.svg";
import arrowright from "../../../public/images/arrowright.svg";
import arrowleft from "../../../public/images/arrowleft.svg";
import React, { useState } from "react";

const Planning = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { title: "Aline", text: "Foi a melhor experiência com assistência de viagem. Achei que tinha pago mais barato comprando pela internet, mas descobri que o seu serviço é mais barato e oferece assistência na hora do nervosismo. Me colocaram no hotel certo e ainda deram dicas de pontos turísticos perfeitos. Não compro mais passagem sozinha.", rating: stars },
        { title: "Gabriel Damasceno", text: "Queria super agradecer pela experiência com a minha viagem! Foi extraordinário! Estar tudo bem organizado, seguro e economizar me deixou tranquilo para aproveitar minhas férias. Pude relaxar e descansar, sem me preocupar com nada. Muito obrigado! Vamos manter contato para a próxima viagem de férias.", rating: stars },
        { title: "Fabiana Oliveira", text: "Amei as 2 viagens que fechei com você! Comparando com amigos, tivemos muitas vantagens com o seu suporte. Me senti segura, tivemos mais opções de passeios, sugestões para refeições e um melhor preço. Literalmente zero defeito! Obrigada pelas sugestões e comprometimento, estamos ansiosos para a próxima viagem!", rating: stars },
        { title: "Angélica Alves", text: "Adorei viajar pela sua empresa. Fomos muito bem assistidos. Você cuidou desde o embarque até a chegada com muito profissionalismo e excelência. Indiquei outras pessoas para viajar com você e pretendo em breve viajar novamente!", rating: stars },
        { title: "Carla", text: "Nem sei como te agradecer, você é a top das galáxias! Me salva e ajuda nas passagens com os melhores preços. Obrigada por tudo, só gratidão!", rating: stars },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const visibleCards = 3;
    const offset = currentIndex * (100 / visibleCards);

    return (
        <section className="planning">
            <div className="planning-title">
                <h1>Do planejamento ao destino: <strong>Viaje conosco sem preocupações</strong></h1>
            </div>

            <div className="planning-image">
                <img src={travel} alt="Travel" />

                <div className="planning-plan">
                    <div className="planning-plan-top">
                        <img src={map} alt="Map" />
                        <h4>Escolha seu destino</h4>
                    </div>
                    <div className="planning-plan-bot">
                        <img src={arrows} alt="Arrows" />
                        <h4>Faça seu itinerário</h4>
                    </div>
                    <div className="planning-plan-top">
                        <img src={suitcase} alt="Suitcase" />
                        <h4>Prepare as malas</h4>
                    </div>
                    <div className="planning-plan-bot">
                        <img src={island} alt="Island" />
                        <h4>Deixe o resto conosco</h4>
                    </div>
                </div>
            </div>

            <div className="planning-title2">
                <h1>Já ajudamos várias pessoas a terem uma <strong>experiência inesquecível</strong> em sua viagem.</h1>
            </div>

            <div className="planning-subtitle">
                <h3>Saiba já o que falaram sobre nós!</h3>
                <img src={stars} alt="Stars" />
            </div>

            <div className="carousel-container">
                <button className="carousel-control prev" onClick={prevSlide}><img src={arrowleft} alt="Previous" /></button>
                <div className="carousel-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${offset}%)` }}>
                        {cards.concat(cards).map((card, index) => (
                            <div className="carousel-card" key={index}>
                                <h4>{card.title}</h4>
                                <img src={card.rating} alt="Rating" />
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="carousel-control next" onClick={nextSlide}><img src={arrowright} alt="Next" /></button>
            </div>
        </section>
    );
};

export default Planning;
