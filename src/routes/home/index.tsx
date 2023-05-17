import Grid from "../../components/grid";
import Hero from "../../components/hero";
import Layout from "../../components/layout";
import ThemeSelector from "../../components/theme_selector";

export default function Home() {
  return (
    <>
      <Layout hero={<Hero />}>
        <ThemeSelector />
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
      </Layout>
    </>
  );
}
