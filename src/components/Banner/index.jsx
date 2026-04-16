import "./Banner.css";

import banner from "../../assets/bg.jpg";

export default function Banner() {
  return (
    <section className="secao_capa" style={{
      backgroundImage: `url(${banner})`,
    }}>
      <div className="texto">
        <h2>Preview</h2>

        <h1>DC All In</h1>
        
        <button className="btn">Comprar</button>
      </div>
    </section>
  );
}