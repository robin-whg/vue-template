<script lang="ts" setup>
import type { Ref } from "vue";

interface Props {
  modelValue: boolean | Ref<boolean>;
  label: string;
}
const props = defineProps<Props>();
const { modelValue, label } = toRefs(props);

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();
</script>

<template>
  <h-switch
    :value="modelValue"
    class="group flex items-center gap-2 rounded-lg border border-transparent py-2 text-sm font-medium text-zinc-700 focus:outline-none disabled:opacity-50 dark:text-zinc-200"
    :title="label"
    @click="emit('update:modelValue', !modelValue)"
  >
    <div
      :class="
        modelValue
          ? 'border-primary bg-primary'
          : 'border-zinc-300 bg-zinc-300 dark:border-zinc-600 dark:bg-zinc-600'
      "
      class="relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full border transition duration-100 ease-in-out group-focus:ring group-focus:ring-primary/50 motion-reduce:transition-none"
    >
      <span
        aria-hidden="true"
        :class="modelValue ? 'translate-x-4' : 'translate-x-0'"
        class="inline-block h-[1.125rem] w-[1.125rem] transform rounded-full bg-white transition duration-100 ease-in-out motion-reduce:transition-none"
      />
    </div>
    {{ label }}
  </h-switch>
</template>
