<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <title>Klemen Slavič — Full-stack Web Developer & UI Engineer</title>
  <link rel="preload" href="/fonts/Rubik-VariableFont_wght.ttf" as="font" />
  <link rel="preload" href="/fonts/EBGaramond-VariableFont_wght.ttf" as="font" />
</svelte:head>

{@render children()}

<style>
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: block;
    src: url('/fonts/Rubik-VariableFont_wght.ttf');
  }

  @font-face {
    font-family: 'EB Garamond';
    font-style: normal;
    font-display: block;
    src: url('/fonts/EBGaramond-VariableFont_wght.ttf');
  }

  :global {
    :root {
      --accent: #f66;
      --active: #f00;
    }

    html {
      font-family: 'EB Garamond';
      font-size: calc(min(6vw, 1.4rem));
      line-height: 1.25;
      color: #aaa;
      margin: 0 1em;
      scroll-behavior: smooth;
      background: black;
    }

    /* Respect user preferences for reduced motion */
    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    a,
    a:visited {
      color: var(--accent);
    }

    a:hover {
      color: var(--active);
    }

    ::selection {
      background: var(--accent);
      color: white;
    }

    h1 {
      font-family: 'Rubik';
      font-size: 3rem;
      line-height: 0.9;
      font-weight: 800;
      color: var(--accent);
      margin: 1em 0 0.5em 0;
    }
  }
</style>
