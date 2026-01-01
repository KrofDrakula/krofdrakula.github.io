<script lang="ts">
  import { externalLink } from '$lib/links';
</script>

<h1>Work</h1>

<section>
  <header>
    <h2>Lead Software Engineer</h2>
    <p>
      <a href="https://blotout.io" use:externalLink>Blotout Inc.</a>
      <span class="time-span">08/2023 - present</span>
    </p>
    <details>
      <summary
        >I architect and develop the core EdgeTag product and provide mentorship to technical roles</summary
      >
      <ul>
        <li>
          Leading development team for EdgeTag product, managing full-stack delivery across React
          frontend, Postgres-backed REST API, and Cloudflare deployment infrastructure using weekly
          iterations
        </li>
        <li>
          Built and launched new products including ShopWallet pilot program, which established the
          development pathway for subsequent products like ShopGPT, EvoAI and more
        </li>
        <li>
          Continuous improvement of the peformance of the Cloudflare Worker infrastructure and
          browser SDKs
        </li>
        <li>
          Combined hands-on engineering with team growth initiatives, including direct customer
          support, developer mentoring, and fortnightly knowledge-sharing sessions
        </li>
      </ul>
    </details>
  </header>
</section>

<section>
  <header>
    <h2>Lead Software Engineer</h2>
    <p>
      <a href="https://resourceguruapp.com" use:externalLink>Resource Guru</a>
      <span class="time-span">04/2016 - 10/2022</span>
    </p>
  </header>

  <details>
    <summary>
      I worked on improvements of the core API services and rewrite the SPA application with a fully
      responsive mobile-first implementation
    </summary>
    <ul>
      <li>
        Rewrote reporting feature achieving 1.000× performance improvement and built custom XLSX
        pivot table generator delivering interactive tables in under one second
      </li>
      <li>
        Led rewrite of visual scheduler enabling reactive data loading and mobile web support, and
        migrated customerfacing API from Ruby on Rails to Node.js with 1.000× worst-case response
        time improvement
      </li>
      <li>
        Modernized frontend infrastructure by introducing TypeScript, Webpack, Babel, PostCSS, and
        implemented Storybook with Chromatic for design review and visual regression testing
      </li>
    </ul>
  </details>
</section>

<section>
  <header>
    <h2>Senior Software Engineer</h2>
    <p>
      <a href="https://celtra.com" use:externalLink>Celtra</a>
      <span class="time-span">10/2011 - 02/2016</span>
    </p>
  </header>

  <details>
    <summary
      >I developed and maintained the mobile runtime and SDK for mobile and desktop environments</summary
    >
    <ul>
      <li>
        Worked on the ad runtime JavaScript library powering ad display across mobile and desktop
        browsers, as well as native iOS and Android applications through partner SDKs
      </li>
      <li>
        Conducted deep research into browser internals and graphics rendering, producing developer
        guidelines that reduced client-facing bugs by approximately 80%
      </li>
      <li>
        Initiated experimental program enabling rapid ad format prototyping, cutting
        production-ready format development time from weeks to days and delivering multiple
        successful creative formats
      </li>
    </ul>
  </details>
</section>

<section>
  <h2>Developer and Trainer</h2>
  <p>
    <a href="https://kompas-xnet.si" use:externalLink>Kompas Xnet</a>
    <span class="time-span">06/2008 - 11/2011</span>
  </p>
  <p>
    I produced desktop and web applications for clients, along with training in creative and
    development software across the Microsoft and Adobe stacks.
  </p>
</section>

<section>
  <h2>Junior Developer</h2>
  <p>Tobonet (Httpool) <span class="time-span">04/2006 - 06/2008</span></p>
  <p>
    Fullstack development of a custom-built contextual ad network, I worked on the ad display and
    tracking SDK, impression billing and implemented a comprehensive translation interface for the
    product's website.
  </p>
</section>

<section>
  <h2>Web Developer</h2>
  <p>Oxylus d.o.o. <span class="time-span">2005 - 2006</span></p>
</section>

<section>
  <h2>Web Developer</h2>
  <p>Creatoor d.o.o. <span class="time-span">2003 - 2005</span></p>
</section>

<style>
  .time-span {
    font-style: italic;

    &::before {
      content: '\2022\00a0';
      font-style: normal;
    }
  }

  details {
    summary {
      margin-bottom: 1em;
      cursor: pointer;
    }

    ul {
      padding-left: 2em;

      li + li {
        margin-top: 0.75em;
      }
    }
  }
</style>
