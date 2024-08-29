import "./partners.css";
import people from "../../../public/images/people.svg"
import suit from "../../../public/images/suit.svg"
import megaphone from "../../../public/images/megaphone.svg"
import insta from "../../../public/images/insta.svg"
import right from "../../../public/images/right.svg"



let Partners = () => {
  let share = [
    { image: people, title: "Afilie-se", text: "Tem uma boa rede de viajantes? Seja nosso representante e ganhe comissões por cada venda realizada. Transforme suas conexões em ganhos extras enquanto ajuda mais pessoas a descobrirem nossas experiências de viagem únicas. Junte-se a nós e seja recompensado!" },
    { image: suit, title: "Indique", text: "Já voou conosco e viu como é completamente diferente de qualquer outra agência? Nos indique e ganhe comissões por trazer novos viajantes para viver também essa incrível experiência."},
    { image: megaphone, title: "Divulgue", text: "Divulgue nosso trabalho e seja recompensado! Indique nossos serviços e ganhe uma comissão por cada venda efetivada. Transforme suas recomendações em ganhos extras e ajude mais pessoas a descobrirem a experiência única que oferecemos. Faça parte do nosso sucesso!" },
    { image: insta, title: "Patrocinado", text: "Tem um Instagram engajado? Torne-se um patrocinado e ganhe comissões por cada nova venda efetivada. Transforme seu engajamento em ganhos extras e ajude a divulgar nossas experiências de viagem exclusivas. Junte-se a nós e seja recompensado pelo seu sucesso!" }
  ];

  return (
    <section className="partners" id="partners">
      <div className="partners-cards">
        {share.map((item, index) => (
          <div key={index} className="card-part">
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>
        <div className="partners-join">
            <div className="partners-join-title">
            <h3>Seja um parceiro:</h3>
            </div>
            
            <div className="partners-join-subtitle">
            <p>Transforme suas conexões em comissões reais! Seja nosso parceiro, amplie seus lucros a cada venda e monetize suas redes ao divulgar nossas viagens exclusivas. Junte-se a nós e ganhe recompensas por suas recomendações</p>
            </div>

            <div className="partners-join-enter">
                <a href="https://wa.me/41996205225?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20programa%20de%20parcerias." target="_blank">Seja um parceiro <img src={right}/></a>

            </div>


        </div>

    </section>
  );
};

export default Partners;
