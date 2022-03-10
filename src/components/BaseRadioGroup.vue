<script lang="ts" setup>
import type { Ref } from "vue";

interface Props {
  label: string;
  srOnly?: boolean;
  error?: string | Ref<string | undefined>;
}
const props = withDefaults(defineProps<Props>(), {
  srOnly: false,
  error: "",
});
const { label, srOnly } = toRefs(props);

const plan = ref("startup");
</script>

<template>
  <radio-group v-model="plan" class="flex flex-col gap-1">
    <radio-group-label
      class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
      :class="{ 'sr-only': srOnly }"
      >{{ label }}</radio-group-label
    >
    <div
      class="divide-y overflow-hidden rounded-lg border"
      :class="[
        error
          ? 'divide-red-500 border-red-500'
          : ' divide-zinc-300 border-zinc-300 dark:divide-zinc-600 dark:border-zinc-600',
      ]"
    >
      <slot></slot>
    </div>
    <span
      v-if="error"
      class="flex items-center gap-1 text-sm font-medium text-red-500"
    >
      <i-heroicons-solid-exclamation-circle class="h-4 w-4" />
      {{ error }}
    </span>
  </radio-group>
</template>
