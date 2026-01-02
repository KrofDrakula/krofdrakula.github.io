<script lang="ts">
  import Apolon from '$lib/icons/apolon.svelte';
  import Bluesky from '$lib/icons/bluesky.svelte';
  import Email from '$lib/icons/email.svelte';
  import Github from '$lib/icons/github.svelte';
  import Instagram from '$lib/icons/instagram.svelte';
  import Linkedin from '$lib/icons/linkedin.svelte';
  import { externalLink } from '$lib/links';
  import Worms from '../lib/components/worms.svelte';
</script>

<div class="bg">
  <Worms />
</div>

<main class="hero">
  <h1>Klemen Slavič</h1>
  <p>Full-stack Web Developer, UI Engineer and Archery Coach</p>
  <ul class="socials">
    <li>
      <a
        href="mailto:krof.drakula+ghpages@gmail.com?subject=I+like+your+landing+page"
        title="Email"
        use:externalLink><Email /></a
      >
    </li>
    <li>
      <a href="https://github.com/krofdrakula/" title="GitHub" use:externalLink><Github /></a>
    </li>
    <li>
      <a href="https://bsky.app/profile/krofdrakula.bsky.social" title="Bluesky" use:externalLink
        ><Bluesky /></a
      >
    </li>
    <li>
      <a href="https://www.instagram.com/makestuffnotwar/" title="Instagram" use:externalLink
        ><Instagram /></a
      >
    </li>
    <li>
      <a href="https://www.linkedin.com/in/krofdrakula" title="LinkedIn" use:externalLink
        ><Linkedin /></a
      >
    </li>
    <li>
      <a href="https://lk-apolon.si" title="Lokostrelski klub Apolon" use:externalLink><Apolon /></a
      >
    </li>
  </ul>
</main>

<style>
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.2;
  }

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
</style>
