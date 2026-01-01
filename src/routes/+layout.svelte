<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <title>Klemen Slavič — Full-stack Web Developer & UI Engineer</title>
  <link rel="icon" href={favicon} />
  <link rel="preload" href="/fonts/Rubik-VariableFont_wght.ttf" as="font" />
  <link rel="preload" href="/fonts/Rubik-Italic-VariableFont_wght.ttf" as="font" />
  <link rel="preload" href="/fonts/Lora-VariableFont_wght.ttf" as="font" />
  <link rel="preload" href="/fonts/Lora-Italic-VariableFont_wght.ttf" as="font" />
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
    font-family: 'Rubik';
    font-style: italic;
    font-display: block;
    src: url('/fonts/Rubik-Italic-VariableFont_wght.ttf');
  }

  @font-face {
    font-family: 'EB Garamond';
    font-style: normal;
    font-display: block;
    src: url('/fonts/EBGaramond-VariableFont_wght.ttf');
  }

  @font-face {
    font-family: 'EB Garamond';
    font-style: italic;
    font-display: block;
    src: url('/fonts/EBGaramond-Italic-VariableFont_wght.ttf');
  }

  @font-face {
    font-family: 'Iosevka';
    font-display: block;
    font-weight: normal;
    src: url('/fonts/SGr-Iosevka-Regular.ttc');
  }

  @font-face {
    font-family: 'Iosevka';
    font-weight: bold;
    font-display: block;
    src: url('/fonts/SGr-Iosevka-Bold.ttc');
  }

  :global {
    :root {
      --border-overflow: 32px;
    }

    html {
      font-family: 'EB Garamond';
      font-size: calc(min(6vw, 1.4rem));
      line-height: 1.25;
      color: #555;
      margin: 0 1em;
      scroll-behavior: smooth;
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

    input,
    td,
    th,
    button {
      font: inherit;
    }

    code {
      font-family: 'Iosevka';
    }

    a,
    a:visited {
      color: #a00;
    }

    a:hover {
      color: #f00;
    }

    ::selection {
      background: #a00;
      color: white;
    }

    h1,
    h2,
    h3 {
      font-family: 'Rubik';
      font-size: 3rem;
      line-height: 0.9;
      font-weight: 800;
      color: #a00;
      margin: 0.8em calc(-1 * var(--border-overflow)) 0.5em calc(-1 * var(--border-overflow));
      padding: 0 var(--border-overflow) 0 var(--border-overflow);
      border-bottom: 1px dotted #a005;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5em;
    }

    p,
    ul,
    ol,
    pre {
      margin-bottom: 1em;
    }

    em,
    strong {
      color: #000;
    }

    em {
      font-style: normal;
    }
  }
</style>
