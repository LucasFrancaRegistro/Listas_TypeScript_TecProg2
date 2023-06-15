import Navbar_ from '../../component/barraNavegacao';
import './styles.css'

function Home() {
    return (
       <section>
           <header>
               <Navbar_/>
           </header>
           <main>
           <div className="text">
                    <h1><strong>Bem-vindos!</strong></h1>
               </div>
               <div className="text-box">
                    <strong>
                    Com imensa felicidade, damos as boas-vindas a todos vocês em nosso incrível parque aquático. Preparem-se para uma jornada repleta de diversão, emoção e momentos revigorantes que ficarão eternamente guardados em suas lembranças.

                    Nossas piscinas cristalinas, tobogãs empolgantes e uma ampla variedade de atrações aquáticas estão prontas para recebê-los. A equipe do Atlants está totalmente comprometida em proporcionar uma experiência memorável, onde a segurança e a diversão são nossa máxima prioridade.
                    </strong>
                </div>
           </main>
       </section>
    );
}
export default Home;