<script lang="ts" setup>
import type { Ref } from "vue";

interface Props {
  modelValue: boolean | Ref<boolean>;
  srOnly?: boolean;
  label: string;
}
const props = withDefaults(defineProps<Props>(), {
  srOnly: false,
});
const { modelValue, srOnly, label } = toRefs(props);

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();
function updateInput() {
  emit("update:modelValue", !modelValue.value);
}
</script>

<template>
  <h-switch
    :value="modelValue"
    class="flex items-center gap-2 overflow-hidden rounded-lg border border-zinc-300 bg-white py-2 px-4 transition duration-100 ease-in-out hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    @click="updateInput"
  >
    <div
      :class="
        modelValue
          ? 'border-primary bg-primary'
          : 'border-zinc-400 bg-zinc-400 dark:border-zinc-600 dark:bg-zinc-600'
      "
      class="relative inline-flex h-[20px] w-[36px] flex-shrink-0 cursor-pointer items-center rounded-full border transition duration-100 ease-in-out"
    >
      <span
        aria-hidden="true"
        :class="modelValue ? 'translate-x-4' : 'translate-x-0'"
        class="inline-block h-[18px] w-[18px] transform rounded-full bg-white transition duration-200 ease-in-out"
      />
    </div>
    <span
      class="truncate text-sm font-medium text-zinc-700 dark:text-zinc-200"
      :class="{ 'sr-only': srOnly }"
      >{{ label }}</span
    >
  </h-switch>
</template>
