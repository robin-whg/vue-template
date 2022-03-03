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
    <base-button variant="tertiary" icon>
      <i-heroicons-outline-cloud-upload class="h-6 w-6" />
      Upload
    </base-button>
  </div>
</template>
