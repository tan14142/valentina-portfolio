<template>
  <div>
    <input placeholder=" " title="search" />
    <label for="search">Search</label>
    <svg
      height="20px"
      width="20px"
      fill="none"
      stroke="black"
      stroke-width="2"
      viewBox="2 4 20 20">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
</template>

<style scoped>
div {
  border-bottom: 0.25rem solid;
  right: 1rem;
  top: 0.75rem;
  position: absolute;
  z-index: 1;
}

label {
  color: #666;
  left: 0;
  font-size: 0.85rem;
  position: absolute;
  z-index: 0;
  transition: all 0.33s ease-out;
}

div:hover > label,
div:focus-within > label {
  font-size: 0.5rem;
  top: -0.5rem;
}

input {
  background: transparent;
  font-size: 0.85rem;
  position: relative;
  width: 160px;
  z-index: 1;
}

svg {
  stroke: #666;
  height: 100%;
  position: absolute;
  right: 0.1rem;
  top: 0;
  z-index: 0;
}

div:hover > label,
div:focus-within > label,
input:not(:placeholder-shown) + label {
  font-size: 0.5rem;
  top: -0.5rem;
}
</style>
