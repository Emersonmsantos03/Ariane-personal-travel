import plane from "../../../public/images/plane.svg";
import business from "../../../public/images/business.svg";
import support from "../../../public/images/support.svg";
import flag from "../../../public/images/flag.svg";
import "./offers.css";

let Offers = () => {
  let cardData = [
    { image: plane, title: "Viagens personalizadas", text: "Com nossas viagens personalizadas, você terá experiências únicas e inesquecíveis. Deixe os detalhes comigo e aproveite cada momento da sua aventura." },
    { image: business, title: "Business", text: "Foque no que realmente importa. Cuidamos de todos os detalhes para que sua experiência seja produtiva e livre de estresse. Vamos garantir o sucesso da sua viagem!" },
    { image: support, title: "Suporte 24 horas", text: "Estamos disponíveis 24 horas para ajudar você. Viaje com total tranquilidade, sabendo que sempre terá suporte para resolver qualquer dúvida ou problema a qualquer momento." },
    { image: flag, title: "Imigração", text: "Facilitamos seu processo de imigração com suporte especializado. Cuidamos de todos os detalhes para que sua viagem seja tranquila e sem complicações. Deixe a burocracia conosco!" },
  ];

  return (
    <section className="offers" id="offers">
      <div className="top-row">
        <div className="bigcard">
          <div className="bigcard-container">
            <h1>Maior conforto para a sua viagem</h1>
            <a target="_blank"href="https://wa.me/41996205225?text=Ol%C3%A1%20Ariane%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20viagens.%20Poderia%20me%20dar%20mais%20detalhes%3F
"> <button>Saiba mais!</button></a>
          </div>
        </div>
        <div className="card-container">
          <img src={cardData[0].image} alt={cardData[0].title} />
          <h3>{cardData[0].title}</h3>
          <p>{cardData[0].text}</p>
        </div>
      </div>
      <div className="cards">
        {cardData.slice(1).map(({ image, title, text }, index) => (
          <div className="card-container" key={index}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
