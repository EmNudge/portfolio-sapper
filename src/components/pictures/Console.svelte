<script>
  const keyValPairs = new Map();
  keyValPairs.set("KEY", "VALUE");
  keyValPairs.set("name", "Calvin Kipperman");
  keyValPairs.set("position", "Fullstack Web Developer");
  keyValPairs.set("langs", `["JavaScript", "Typescript", "Rust"]`);
  keyValPairs.set("software", `["Adobe Suite", "G Suite"]`);
  keyValPairs.set("hobbies", `["coding", "acting"]`);

  let cursorVisible = true;
  setInterval(() => cursorVisible = !cursorVisible, 500);
</script>

<style>
  text {
    font: normal 7px monospace;
    fill: white;
  }
</style>

<svg width="400" height="300" viewBox="0 0 245 193" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
    <path d="M233.342 3H7.65766C5.0853 3 3 5.0853 3 7.65766V181.685C3 184.257 5.0853 186.342 7.65766 186.342H233.342C235.915 186.342 238 184.257 238 181.685V7.65766C238 5.0853 235.915 3 233.342 3Z" fill="white"/>
  </g>
  <path d="M233.342 20.7838H9.35132C6.77897 20.7838 4.69366 22.8691 4.69366 25.4415V181.685C4.69366 184.257 6.77897 186.342 9.35132 186.342H233.342C235.915 186.342 238 184.257 238 181.685V25.4415C238 22.8691 235.915 20.7838 233.342 20.7838Z" fill="black"/>
  <path d="M3 20.7838H238V182.108C238 183.231 237.554 184.308 236.76 185.102C235.966 185.896 234.889 186.342 233.766 186.342H7.23423C6.11125 186.342 5.03425 185.896 4.24018 185.102C3.44611 184.308 3 183.231 3 182.108V20.7838Z" fill="black"/>
  <path d="M7.23423 3H233.766C234.889 3 235.966 3.44611 236.76 4.24018C237.554 5.03425 238 6.11125 238 7.23423V20.7838H3V7.23423C3 6.11125 3.44611 5.03425 4.24018 4.24018C5.03425 3.44611 6.11125 3 7.23423 3V3Z" fill="url(#paint0_linear)"/>
  <path d="M31.5811 15.7027C33.1011 15.7027 34.3334 14.4705 34.3334 12.9505C34.3334 11.4305 33.1011 10.1982 31.5811 10.1982C30.0611 10.1982 28.8289 11.4305 28.8289 12.9505C28.8289 14.4705 30.0611 15.7027 31.5811 15.7027Z" fill="#49B059"/>
  <path d="M23.1126 15.7027C24.6326 15.7027 25.8649 14.4705 25.8649 12.9505C25.8649 11.4305 24.6326 10.1982 23.1126 10.1982C21.5926 10.1982 20.3604 11.4305 20.3604 12.9505C20.3604 14.4705 21.5926 15.7027 23.1126 15.7027Z" fill="#E4B35E"/>
  <path d="M14.6442 15.7027C16.1642 15.7027 17.3964 14.4705 17.3964 12.9505C17.3964 11.4305 16.1642 10.1982 14.6442 10.1982C13.1241 10.1982 11.8919 11.4305 11.8919 12.9505C11.8919 14.4705 13.1241 15.7027 14.6442 15.7027Z" fill="#C36B77"/>
  <path d="M233.766 3.21173H7.23425C5.01268 3.21173 3.21173 5.01268 3.21173 7.23425V182.108C3.21173 184.33 5.01268 186.131 7.23425 186.131H233.766C235.987 186.131 237.788 184.33 237.788 182.108V7.23425C237.788 5.01268 235.987 3.21173 233.766 3.21173Z" stroke="#707070" stroke-opacity="0.45" stroke-width="0.423423"/>
  <g>
    <text x="20" y="40">Calvins-Website:~ guest$ info</text>
    {#each [...keyValPairs] as [key, value], i}
      <text x="20" y={60 + i * 15}>{key}</text>
      <text x="70" y={60 + i * 15}>{value}</text>
    {/each}
    ▐
    <text x="20" y={65 + keyValPairs.size * 15}>
      {#if cursorVisible}
        Calvins-Website:~ guest$ ▎
      {:else}
        Calvins-Website:~ guest$ 
      {/if}
    </text>
  </g>
  <defs>
    <filter id="filter0_d" x="0.882883" y="0.882883" width="243.468" height="191.811" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dx="2.11712" dy="2.11712"/>
      <feGaussianBlur stdDeviation="2.11712"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.886 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear" x1="120.5" y1="3" x2="120.5" y2="18.8631" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2B2C2F"/>
      <stop offset="1" stop-color="#333333"/>
    </linearGradient>
  </defs>
</svg>
  