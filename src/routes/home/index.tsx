import Background from "../../components/background";
import Grid from "../../components/grid";
import Hero from "../../components/hero";
import Layout, { types } from "../../components/layout";

export default function Home() {
  return (
    <>
      <Background />
      <Layout>
        <div class={types.hero}>
          <Hero />
        </div>
        <main style="margin-top:2em">
          <Grid>
            <div style="text-align:center">
              <h2>I write code.</h2>
            </div>
            <div style="text-align:center">
              <h2>I teach.</h2>
            </div>
            <div style="text-align:center">
              <h2>I make stuff.</h2>
            </div>
          </Grid>
        </main>
      </Layout>
    </>
  );
}
