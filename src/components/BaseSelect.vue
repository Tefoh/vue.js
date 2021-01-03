<template>
  <div class="field">
    <div class="control" :class="{ 'has-icons-left': icon }">
      <div class="select"
        :class="{
          [`is-${color}`]: color,
          [`is-${size}`]: size,
          'is-rounded': rounded
        }"
      >
        <select @change="(event) => $emit('update:modelValue', event.target.value)" v-bind="$attrs">
          <option value="" v-if="! modelValue">یکی از گزینه های زیر را انتخاب کنید</option>
          <option 
            value="2" 
            v-for="item in items" 
            :key="item.key"
            :selected="item.key === modelValue"
          >
            {{ item.value }}
          </option>
        </select>
      </div>
      <div class="icon ml-3 mt-2 is-left" v-if="icon">
        <i :class="`fas fa-${icon}`"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  
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
    items: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [Number, String],
      required: false
    }
  },
}
</script>

<style lang="scss">
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/helpers/spacing.sass";
@import "bulma/sass/form/shared.sass";
@import "bulma/sass/form/tools.sass";

@import 'bulma/sass/form/select.sass';
</style>