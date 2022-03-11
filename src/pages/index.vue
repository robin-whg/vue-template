<script lang="ts" setup>
import { toggleDark } from "~/composables";

const textInput = ref("");

const switchValue = ref(false);

const options = ["Option 1", "Option 2", "Option 3"];
const currentOption = ref<string>(options[0]);
</script>

<template>
  <div class="container mx-auto flex gap-2 px-2 py-4">
    <base-button>
      <i-heroicons-solid-beaker class="h-5 w-5" />
      Button</base-button
    >
    <base-button variant="primary" loading>Button</base-button>
    <base-button variant="secondary" icon @click="toggleDark()">
      <i-heroicons-outline-moon class="h-6 w-6" />
    </base-button>
    <base-button variant="tertiary" icon>
      <i-heroicons-outline-cloud-upload class="h-6 w-6" />
      Upload
    </base-button>
  </div>
  <div class="mx-auto flex max-w-xl flex-col gap-4">
    <base-button variant="secondary">Button</base-button>
    <base-input
      v-model="textInput"
      label="This is a text input"
      placeholder="placeholder"
    />
    <base-switch v-model="switchValue" label="This is a switch" />
    <base-listbox
      v-model="currentOption"
      label="This is a listbox"
      :options="options"
    />
  </div>
</template>
