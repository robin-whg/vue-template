<script lang="ts" setup>
import type { Ref } from "vue";

interface Props {
  label: string;
  srOnly?: boolean;
  error?: string | Ref<string | undefined>;
  modelValue: string;
  options: string[];
}
const props = withDefaults(defineProps<Props>(), {
  srOnly: false,
  error: "",
});
const { modelValue, options, label, srOnly } = toRefs(props);

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const localModelValue = ref(modelValue.value);
watch(localModelValue, (value) => {
  emit("update:modelValue", localModelValue.value);
});
</script>

<template>
  <h-listbox v-model="localModelValue" as="div" class="flex flex-col gap-1">
    <h-listbox-label
      class="relative text-sm font-medium text-zinc-700 dark:text-zinc-200"
      :class="{ 'sr-only': srOnly }"
      >{{ label }}</h-listbox-label
    >
    <div class="relative">
      <h-listbox-button
        class="relative inline-flex w-full items-center justify-between rounded-lg border bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition duration-100 ease-in-out hover:bg-zinc-100 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring disabled:opacity-50 motion-reduce:transition-none dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:border-transparent"
        :class="[
          error
            ? 'border-red-500   focus-visible:ring-red-500/50'
            : 'border-zinc-300  focus-visible:ring-primary/50 dark:border-zinc-600',
        ]"
        >{{ modelValue }}
        <i-heroicons-solid-selector
          class="h-5 w-5 text-zinc-400 dark:text-zinc-500"
        />
      </h-listbox-button>
      <h-listbox-options
        class="absolute mt-1 w-full divide-y overflow-hidden rounded-lg border border-zinc-300 bg-white focus-visible:outline-none dark:border-zinc-600 dark:bg-zinc-900"
        :class="[
          error
            ? 'divide-red-500 border-red-500'
            : 'divide-zinc-300   border-zinc-300 dark:divide-zinc-600 dark:border-zinc-600',
        ]"
      >
        <h-listbox-option
          v-for="option in options"
          v-slot="{ selected, active }"
          :key="option"
          :value="option"
          as="template"
        >
          <div
            class="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 transition duration-100 ease-in-out hover:bg-zinc-100 motion-reduce:transition-none dark:text-zinc-200 dark:hover:bg-zinc-800"
            :class="{ 'bg-zinc-100 dark:bg-zinc-800': active }"
          >
            <i-heroicons-solid-check
              :class="{ invisible: !selected }"
              class="h-5 w-5 text-primary"
            />
            <span class="truncate">
              {{ option }}
            </span>
          </div>
        </h-listbox-option>
      </h-listbox-options>
    </div>
    <span
      v-if="error"
      class="flex items-center gap-1 text-sm font-medium text-red-500"
    >
      <i-heroicons-solid-exclamation-circle class="h-4 w-4" />
      {{ error }}
    </span>
  </h-listbox>
</template>
