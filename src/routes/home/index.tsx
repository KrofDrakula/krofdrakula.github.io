import Background from "../../components/background";
import Grid from "../../components/grid";
import Hero from "../../components/hero";
import Layout, { types } from "../../components/layout";

export default function Home() {
  return (
    <>
      <Background />
      <Layout>
        <nav>Some banner navigation for you</nav>
        <div class={types.hero}>
          <Hero />
        </div>
        <main>
          <div>one</div>
          <Grid>
            <div>Column 1</div>
            <div>Column 2</div>
            <div>Column 3</div>
            <div>Column 4</div>
            <div>Column 5</div>
            <div>Column 6</div>
            <div>Column 7</div>
            <div>Column 8</div>
          </Grid>
          <p>
            Lorem veniam est ad aute Lorem. Esse laboris voluptate in ad anim
            duis ipsum sint do sunt. Aliqua sunt laboris qui labore velit fugiat
            amet enim eu.
          </p>
          <p>
            Non consequat nulla voluptate irure. Id enim ad nisi pariatur Lorem
            esse sunt laboris magna nisi amet eu. Ad nostrud Lorem quis cillum
            eiusmod ea nostrud Lorem consectetur elit irure. Commodo aliquip
            sunt non proident incididunt do mollit ut. Amet amet velit dolore
            consequat fugiat aliqua ad magna in est tempor eiusmod cillum. Lorem
            reprehenderit dolore excepteur ad sint eiusmod et enim anim eiusmod
            ipsum in.
          </p>
          <p>
            Est consectetur non sunt sit dolor sunt sit amet. Voluptate
            voluptate consequat minim quis eiusmod dolor id proident aute dolore
            nisi officia. Do eu do sint Lorem mollit occaecat et eu fugiat
            voluptate anim velit. Excepteur incididunt qui velit proident veniam
            ullamco ex et aliquip occaecat ullamco. Sint velit ad labore non sit
            eu sunt.
          </p>
          <p>
            Adipisicing in ipsum nostrud ipsum aliqua. In veniam labore deserunt
            sit elit exercitation laborum aliqua ea Lorem. Labore sit ullamco
            aliquip cupidatat anim labore amet dolore. Nisi incididunt
            reprehenderit ea aute nulla laboris aliquip voluptate.
          </p>
          <p>
            Sunt fugiat aliquip esse esse Lorem irure. Officia officia id tempor
            eu. Aliquip elit aute proident ad adipisicing. Nisi anim non
            cupidatat labore veniam non magna adipisicing laboris velit non
            excepteur.
          </p>
          <p>
            Labore eiusmod incididunt tempor duis et pariatur commodo ea veniam
            duis nisi. Ullamco ea velit duis ut fugiat. Nulla reprehenderit
            velit adipisicing aliqua nostrud enim qui id exercitation veniam ut.
            Laboris do proident labore nisi exercitation minim est aute. Tempor
            elit veniam laborum deserunt.
          </p>
        </main>
      </Layout>
    </>
  );
}
