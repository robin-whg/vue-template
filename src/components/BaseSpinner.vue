<template>
  <svg
    viewBox="0 0 100 100"
    v-bind="$attrs"
    class="animate-spin"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" />
  </svg>
</template>

<style lang="postcss" scoped>
circle {
  fill: transparent;
  stroke: currentColor;
  stroke-width: 9;
  stroke-dasharray: 214;
  stroke-linecap: round;
  transform-origin: 50% 50%;
}
</style>
