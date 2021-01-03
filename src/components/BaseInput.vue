<template>
  <div class="field">
    <div class="control" :class="{
      [`is-${size}`]: size,
      'is-loading': loading,
      'has-icons-left': icon || type === 'password'
    }">
      <input
        class="input"
        :type="inputType"
        placeholder="Primary input"
        :class="{
          [`is-${color}`]: color,
          [`is-${size}`]: size,
          'is-rounded': rounded
        }"
        v-bind="$attrs"
        :value="modelValue"
        @input="(event) => $emit('update:modelValue', event.target.value)"
      >
      <p class="icon ml-3 is-left" v-if="type === 'password' ">
        <i :class="passwordIcon" @click="handleShowPassword"></i>
      </p>
      <p class="icon ml-3 is-left" v-if="icon">
        <i :class="`fas fa-${icon}`"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,

  emits: ['update:modelValue'],

  props: {
    color: {
      type: String,
      required: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      inputType: this.type,
      showPassword: false
    }
  },
  computed: {
    passwordIcon() {
      return this.inputType === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash'
    }
  },
  methods: {
    handleShowPassword() {
      if(! this.showPassword) {
        this.inputType = 'text';
        this.showPassword = true;
      } else {
        this.inputType = 'password';
        this.showPassword = false;
      }
    }
  }
}
</script>

<style lang="scss">
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/helpers/spacing.sass";
@import "bulma/sass/form/shared.sass";
@import "bulma/sass/form/tools.sass";

.control.has-icons-left .icon, .control.has-icons-right .icon {
    pointer-events: all !important;
}

@import 'bulma/sass/form/input-textarea.sass';
</style>