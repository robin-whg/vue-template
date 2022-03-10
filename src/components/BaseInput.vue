<script lang="ts">
import type { Ref } from "vue";

export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
interface Props {
  modelValue: string | Ref<string>;
  srOnly?: boolean;
  label?: string;
  error?: string | Ref<string | undefined>;
}
const props = withDefaults(defineProps<Props>(), {
  srOnly: false,
  label: "",
  error: "",
});
const { modelValue, srOnly, error, label } = toRefs(props);

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
function updateInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label
      class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
      :class="{ 'sr-only': srOnly }"
      >{{ label }}</label
    >
    <input
      :value="modelValue"
      v-bind="$attrs"
      class="rounded-lg border bg-white px-4 py-2 text-sm transition duration-150 ease-in-out placeholder:text-zinc-400 focus:border-transparent focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-75 motion-reduce:transition-none dark:bg-zinc-900 dark:placeholder:text-zinc-500"
      :class="[
        error
          ? 'border-red-500  caret-red-500 focus:ring-red-500/50'
          : 'border-zinc-300 caret-primary focus:ring-primary/50 dark:border-zinc-600  dark:focus:border-transparent',
      ]"
      @input="updateInput"
    />
    <span
      v-if="error"
      class="flex items-center gap-1 text-sm font-medium text-red-500"
    >
      <i-heroicons-solid-exclamation-circle class="h-4 w-4" />
      {{ error }}
    </span>
  </div>
</template>
