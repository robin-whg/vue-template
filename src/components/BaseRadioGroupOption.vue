<script lang="ts" setup>
const props = defineProps<{ value: string }>();
const { value } = toRefs(props);
</script>

<template>
  <radio-group-option
    v-slot="{ checked }"
    :value="value"
    as="div"
    class="flex cursor-pointer items-center gap-2 px-4 py-2 transition duration-100 ease-in-out hover:bg-zinc-100 dark:hover:bg-zinc-800"
  >
    <div
      class="h-4 w-4 flex-none rounded-full border p-0.5 transition duration-100 ease-in-out"
      :class="
        checked ? 'border-blue-500' : 'border-zinc-400 dark:border-zinc-500'
      "
    >
      <div
        class="h-full w-full rounded-full transition duration-100 ease-in-out"
        :class="checked ? ' bg-blue-500' : ''"
      ></div>
    </div>
    <div>
      <radio-group-label
        as="span"
        class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
      >
        <slot name="default"></slot>
      </radio-group-label>
      <radio-group-description
        as="p"
        class="text-sm text-zinc-500 dark:text-zinc-400"
        ><slot name="description"></slot
      ></radio-group-description>
    </div>
  </radio-group-option>
</template>
