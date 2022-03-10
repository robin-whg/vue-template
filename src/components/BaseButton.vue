<script lang="ts" setup>
interface Props {
  as?: string | Object;
  variant?: "primary" | "secondary" | "tertiary";
  loading?: boolean;
  icon?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  as: "button",
  variant: "primary",
  loading: false,
  icon: false,
});
const { as, variant, loading } = toRefs(props);

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
  <component
    :is="as"
    class="inline-flex items-center justify-center rounded-lg border text-sm font-medium transition duration-100 ease-in-out hover:shadow-md disabled:opacity-75"
    :class="[icon ? 'p-1.5' : 'px-4 py-2', variantClass]"
    :disabled="loading"
  >
    <base-spinner v-if="loading" class="absolute h-5 w-5" />
    <span
      class="flex items-center justify-center gap-2"
      :class="{ invisible: loading }"
    >
      <slot>Button</slot>
    </span>
  </component>
</template>

<style lang="postcss" scoped>
.btn-primary {
  @apply border-transparent bg-primary text-white hover:shadow-primary/50 dark:text-gray-900;
}

.btn-secondary {
  @apply border-gray-300 text-gray-700 hover:bg-gray-400/20 hover:shadow-gray-400/20 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-500/20 dark:hover:shadow-gray-500/20;
}

.btn-tertiary {
  @apply border-transparent text-gray-700 hover:bg-gray-400/20  hover:shadow-gray-400/20 dark:text-gray-200 dark:hover:bg-gray-500/20 dark:hover:shadow-gray-500/20;
}
</style>
