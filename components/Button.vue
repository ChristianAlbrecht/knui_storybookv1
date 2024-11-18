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
  font-family: var(--font-family);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-normal);

  display: inline-flex;
  height: var(--dimension-button-height-m);
  padding: 0 var(--spacing-base-container-s);
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: var(--spacing-base-container-xxs);

  border-radius: var(--border-radius-base-container-m);
  cursor: pointer;
  transition: all var(--transition-speed) ease;

  & .button__label {
    padding: 0 var(--spacing-base-container-xs);
  }

  &.button--medium {
    /* Default styles are already set */
  }

  &.button--large {
    height: var(--dimension-button-height-l);
    font-size: var(--font-size-large);
    padding: 0 var(--spacing-base-container-m);
    gap: 0;

    & .button__label {
      padding: 0 var(--spacing-base-container-s);
    }
  }

  &.button--small {
    height: var(--dimension-button-height-s);
    font-size: var(--font-size-small);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.button--primary {
    color: var(--color-action-filled-onEnabled);
    background-color: var(--color-action-filled-enabled);
    border: var(--border-interactive-transparent);

    &:not(:disabled) {
      &:hover {
        background-color: var(--color-action-filled-hover);
      }
      &:active {
        background-color: var(--color-action-filled-active);
      }
      &:focus-visible {
        border: var(--border-base-subtle);
      }
    }

    &.button--disabled {
      background-color: var(--color-action-filled-disabled);
      color: var(--color-action-filled-onDisabled);
    }
  }

  &.button--secondary {
    background-color: var(--color-action-transparent-enabled);
    color: var(--color-action-transparent-onEnabled);
    border: var(--border-interactive-default);

    &:not(:disabled) {
      &:hover {
        background-color: var(--color-action-transparent-hover);
      }
      &:active {
        background-color: var(--color-action-transparent-active);
      }
    }

    &.button--disabled {
      color: var(--color-action-transparent-onDisabled);
      border: var(--border-interactive-muted);
    }
  }

  &.button--tertiary {
    background-color: var(--color-action-transparent-enabled);
    border: var(--border-interactive-transparent);

    &:not(:disabled) {
      &:hover {
        background-color: var(--color-action-transparent-hover);
      }
      &:active {
        background-color: var(--color-action-transparent-active);
      }
    }

    &.button--disabled {
      color: var(--color-action-transparent-onDisabled);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-outline);
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
