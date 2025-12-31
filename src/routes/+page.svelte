<script lang="ts">
  import { externalLink } from '$lib/links';
  import Expertise from '../components/expertise.svelte';
  import Work from '../components/work.svelte';
</script>

<header class="hero">
  <h1>Klemen Slavič</h1>
  <p>Full-stack Web Developer and UI Engineer</p>
  <ul class="socials">
    <li>
      <a
        href="mailto:krof.drakula+ghpages@gmail.com?subject=I+like+your+landing+page"
        use:externalLink>Email</a
      >
    </li>
    <li>
      <a href="https://github.com/krofdrakula/" use:externalLink>GitHub</a>
    </li>
    <li>
      <a href="https://bsky.app/profile/krofdrakula.bsky.social" use:externalLink>Bluesky</a>
    </li>
    <li>
      <a href="https://www.instagram.com/makestuffnotwar/" use:externalLink>Instagram</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/krofdrakula" use:externalLink>LinkedIn</a>
    </li>
  </ul>
</header>

<nav>
  <ul>
    <li><a href="#expertise">Expertise</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#play">Play</a></li>
  </ul>
</nav>

<main>
  <section id="expertise" class="screen">
    <Expertise />
  </section>
  <section id="work" class="screen">
    <Work />
  </section>
  <section id="play" class="screen">
    <h1>Play</h1>
  </section>
</main>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    min-height: calc(100dvh - 1.4rem);
    gap: 1em;
    text-align: center;

    & > * {
      margin: 0;
    }

    p {
      font-size: 1.5rem;
    }

    .socials {
      display: flex;
      gap: 1em;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
    }
  }

  .screen {
    min-height: 100dvh;
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      gap: 1em;
    }
  }

  main {
    max-width: 35em;
    margin: 2em auto 0 auto;
  }
</style>
