import "./Common.css";

export default function Juicy() {
  return (
    <section className="juicy">
      <article>
        <h1>Juicy</h1>
        <p className="p-1">Ripe fruit - freshly squeezed.</p>
        <p className="p-2">
          It is as simple as that. Chunky or smooth - it is your choice.
        </p>
        <div className="box">
          <div className="row">
            <span>Branched Apricots</span>
            <span>€ 4.20</span>
          </div>
          <div className="row">
            <span> Deep Rasberries</span> <span>€ 3.50</span>
          </div>
          <div className="row">
            <span>Smooth Oranges</span> <span>€ 6.50</span>
          </div>
        </div>
      </article>
    </section>
  );
}
