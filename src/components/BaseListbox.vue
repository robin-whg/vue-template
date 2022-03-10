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

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
const selectedPerson = ref(people[0]);
</script>

<template>
  <listbox v-model="selectedPerson" as="div" class="flex flex-col gap-1">
    <listbox-label
      class="relative text-sm font-medium text-zinc-700 dark:text-zinc-200"
      :class="{ 'sr-only': srOnly }"
      >{{ label }}</listbox-label
    >
    <div class="relative">
      <listbox-button
        class="relative inline-flex w-full items-center justify-between rounded-lg border px-4 py-2 text-sm font-medium text-zinc-700 transition duration-100 ease-in-out hover:bg-zinc-100 disabled:opacity-75 dark:text-zinc-200 dark:hover:bg-zinc-800"
        :class="[
          error ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600',
        ]"
        >{{ selectedPerson.name }}
        <i-heroicons-solid-selector
          class="h-5 w-5 text-zinc-400 dark:text-zinc-500"
        />
      </listbox-button>
      <listbox-options
        class="absolute mt-1 w-full divide-y divide-zinc-300 overflow-hidden rounded-lg border border-zinc-300 bg-white dark:divide-zinc-600 dark:border-zinc-600 dark:bg-zinc-900"
      >
        <listbox-option
          v-for="person in people"
          v-slot="{ selected }"
          :key="person.id"
          :value="person"
          :disabled="person.unavailable"
          class="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 transition duration-100 ease-in-out hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          <i-heroicons-solid-check
            :class="selected ? '' : 'invisible'"
            class="h-5 w-5 text-primary"
          />
          <span class="truncate">
            {{ person.name }}
          </span>
        </listbox-option>
      </listbox-options>
    </div>
    <span
      v-if="error"
      class="flex items-center gap-1 text-sm font-medium text-red-500"
    >
      <i-heroicons-solid-exclamation-circle class="h-4 w-4" />
      {{ error }}
    </span>
  </listbox>
</template>
