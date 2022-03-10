<script lang="ts" setup>
const options = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
</script>

<template>
  <div
    class="divide-y divide-zinc-300 overflow-hidden rounded-lg border border-zinc-300 dark:divide-zinc-600 dark:border-zinc-600"
  >
    <label
      for="a"
      class="flex cursor-pointer items-center gap-2 truncate py-2 px-4 text-sm font-medium text-zinc-700 transition duration-100 ease-in-out hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200"
    >
      <input
        id="a"
        type="checkbox"
        name="blag"
        class="rounded border-zinc-400 dark:border-zinc-500 dark:bg-zinc-900"
      />
      Option
    </label>
  </div>
</template>
