<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
const textInput = ref("");
const switchValue = ref(false);
</script>

<template>
  <div class="container mx-auto flex gap-2 px-2 py-4">
    <base-button>
      <i-heroicons-solid-beaker class="h-5 w-5" />
      Button</base-button
    >
    <base-button variant="primary" loading>Button</base-button>
    <base-button variant="secondary" icon>
      <i-heroicons-outline-home class="h-6 w-6" />
    </base-button>
    <base-button variant="secondary">Button</base-button>
    <base-button variant="tertiary" icon @click="toggleDark()">
      <i-heroicons-outline-cloud-upload class="h-6 w-6" />
      Upload
    </base-button>
  </div>
  <div class="mx-auto flex max-w-xl flex-col gap-4">
    <!-- <base-input
      v-model="textInput"
      label="Text Input"
      placeholder="placeholder"
      error="Requried"
    />
    <base-radio-group label="Radio Group" error="Required">
      <base-radio-group-option value="test"> Startup </base-radio-group-option>
      <base-radio-group-option value="test2"> Startup </base-radio-group-option>
    </base-radio-group>
    <base-listbox label="Listbox" error="Required" /> -->
    <base-switch v-model="switchValue" label="This is a switch." />
    <p>{{ switchValue }}</p>
    <!-- <base-checkbox-group /> -->
  </div>
</template>
