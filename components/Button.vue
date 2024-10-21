<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary";
  leadingIcon?: string;
  trailingIcon?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  variant: "primary",
  disabled: false,
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const classes = computed(() => [
  "button",
  `button--${props.size}`,
  `button--${props.variant}`,
  { "button--disabled": props.disabled },
]);
</script>

<template>
  <button :class="classes" :disabled="disabled" @click="emit('click', $event)">
    <span
      v-if="leadingIcon"
      class="button__icon button__icon--leading"
      aria-hidden="true"
      >{{ leadingIcon }}</span
    >
    <span class="button__label">{{ label }}</span>
    <span
      v-if="trailingIcon"
      class="button__icon button__icon--trailing"
      aria-hidden="true"
      >{{ trailingIcon }}</span
    >
  </button>
</template>

<style scoped>
.button {
  font-family: var(--font-family);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-normal);
  color: var(--color-base-fg-default);

  display: inline-flex;
  height: var(--dimension-text-button-medium);
  padding: 0 var(--spacing-base-container-s);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-base-container-xxs);
  flex-shrink: 0;

  border-radius: var(--border-radius-base-container-s);
  cursor: pointer;
  transition: all var(--transition-speed) ease;

  &.button--small {
    height: var(--dimension-text-button-small);
    font-size: var(--font-size-small);
  }

  &.button--medium {
    /* Default styles are already set */
  }

  &.button--large {
    height: var(--dimension-text-button-large);
    font-size: var(--font-size-large);
    padding: 0 var(--spacing-base-container-m);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.button--primary {
    color: var(--color-interactive-fg-default);
    background-color: var(--color-interactive-bg-primary-default);
    border: 1px solid var(--color-interactive-bg-primary-default);

    &:hover:not(:disabled, :focus-visible) {
      background-color: var(--color-interactive-bg-primary-hover);
      border: 1px solid var(--color-interactive-bg-primary-hover);
    }

    &.button--disabled {
      background-color: var(--color-interactive-bg-primary-disabled);
      border: 1px solid var(--color-interactive-bg-primary-disabled);
      color: var(--color-base-fg-muted);
    }
  }

  &.button--secondary {
    background-color: var(--color-interactive-bg-secondary-default);
    border: var(--border-interactive-default);

    &:hover:not(:disabled, :focus-visible) {
      background-color: var(--color-interactive-bg-secondary-hover);
    }

    &.button--disabled {
      color: var(--color-base-fg-muted);
      border: var(--border-interactive-muted);
      cursor: not-allowed;
    }
  }

  &.button--tertiary {
    background-color: var(--color-interactive-bg-tertiary-default);
    border: var(--border-width) solid
      var(--color-interactive-bg-tertiary-default);

    &:hover:not(:disabled, :focus-visible) {
      background-color: var(--color-interactive-bg-tertiary-hover);
    }

    &.button--disabled {
      color: var(--color-base-fg-muted);
      cursor: not-allowed;
    }
  }

  &:focus-visible {
    background-color: var(--color-interactive-bg-selectables-default);
    color: var(--color-interactive-fg-selected);
    /* outline: var(--border-interactive-selected); */
    /* adding a border would change the size */
    border: var(--border-interactive-selected);
    outline: none;

    &:hover {
      background-color: var(--color-interactive-bg-selectables-hover);
    }
  }

  &.button__icon {
    font-size: 1.2em;
    line-height: 0;

    &.button--leading {
      margin-right: var(--spacing-xs);
    }

    &.button--trailing {
      margin-left: var(--spacing-xs);
    }
  }
}
</style>
