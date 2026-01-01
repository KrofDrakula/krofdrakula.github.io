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
    <p>Lorem ipsum</p>
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
</section>

<style>
  .time-span {
    font-style: italic;

    &::before {
      content: '\2022\00a0';
    }
  }
</style>
