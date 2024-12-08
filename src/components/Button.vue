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
  text-rendering: geometricPrecision;
  font: var(--kds-font-interactive-medium-m);

  position: relative;
  display: flex;
  height: var(--kds-dimension-action-height-1_75x);
  padding: 0 var(--kds-spacing-container-0_5x);
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: var(--kds-spacing-container-0_25x);

  border-radius: var(--kds-border-radius-container-0_37x);
  cursor: pointer;
  transition: all var(--transition-speed) ease;

  & .button__label {
    padding: 0 var(--kds-spacing-container-0_25x);
  }

  &.button--medium {
    /* Default styles are already set */
  }

  &.button--large {
    height: var(--kds-dimension-action-height-2_25x);
    font-size: var(--font-size-large);
    padding: 0 var(--kds-spacing-container-0_75x);
    border-radius: var(--kds-border-radius-container-0_50x);
  }

  &.button--small {
    height: var(--kds-dimension-action-height-1_5x);
    gap: var(--kds-spacing-container-0_12x);
    font-size: var(--font-size-small);
  }

  &:focus-visible {
    outline: 2px solid var(--kds-color-focus-outline);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.button--primary {
    color: var(--kds-color-text-and-icon-primary-inverted);
    background-color: var(--kds-color-background-primary-bold-initial);
    border: var(--kds-border-action-transparent);

    &:not(:disabled) {
      &:hover {
        background-color: var(--kds-color-background-primary-bold-hover);
      }
      &:active {
        background-color: var(--kds-color-background-primary-bold-active);
      }
    }

    /* apply semi transparent overlay for disabled state */
    &.button--disabled::before {
      content: "";
      position: absolute;
      top: calc(-1 * var(--border-width));
      left: calc(-1 * var(--border-width));
      width: calc(100% + 2 * var(--border-width));
      height: calc(100% + 2 * var(--border-width));
      background-color: var(--kds-color-background-disabled-default);
      pointer-events: none;
      border-radius: inherit;
    }
  }

  &.button--secondary {
    background-color: var(--kds-color-background-neutral-initial);
    color: var(--kds-color-text-and-icon-neutral);
    border: var(--kds-border-action-default);

    &:not(:disabled) {
      &:hover {
        background-color: var(--kds-color-background-primary-hover);
        color: var(--kds-color-text-and-icon-primary-bold);
      }
      &:active {
        background-color: var(--kds-color-background-primary-active);
        color: var(--kds-color-text-and-icon-primary);
      }
    }

    &.button--disabled {
      color: var(--kds-color-text-and-icon-disabled);
      border: var(--kds-border-action-disabled);
    }
  }

  &.button--tertiary {
    background-color: var(--kds-color-background-neutral-initial);
    border: var(--kds-border-action-transparent);
    color: var(--kds-color-text-and-icon-neutral);

    &:not(:disabled) {
      &:hover {
        background-color: var(--kds-color-background-primary-hover);
        color: var(--kds-color-text-and-icon-primary-bold);
      }
      &:active {
        background-color: var(--kds-color-background-primary-active);
        color: var(--kds-color-text-and-icon-primary);
      }
    }

    &.button--disabled {
      color: var(--kds-color-text-and-icon-disabled);
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
