<script lang="ts" setup>
import { computed, toRefs } from "vue";

interface Props {
  variant?: "primary" | "secondary" | "tertiary";
}
const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
const { variant } = toRefs(props);

function getVariantClass() {
  switch (variant.value) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "tertiary":
      return "btn-tertiary";
  }
}

const variantClass = computed(() => getVariantClass());
</script>

<template>
  <button class="base-button" :class="variantClass">
    <slot>Button</slot>
  </button>
</template>

<style lang="postcss" scoped>
.base-button {
  @apply inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium;
}

.btn-primary {
  @apply border-transparent bg-primary-500;
}

.btn-secondary {
  @apply border-gray-300;
}

.btn-tertiary {
  @apply border-transparent;
}
</style>
