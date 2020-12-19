<template>
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th @click="sortByString">رشته ها</th>
        <th @click="sortByNumber">اعداد</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.number">
        <td>{{ item.string }}</td>
        <td>{{ item.number }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    items: [
      // { string: 'a', number: 2 },
      // { string: 'z', number: 3 },
      { string: 'five', number: 5 },
      { string: 'Two', number: 2 },
      { string: 'Four', number: 4 },
      { string: 'One', number: 1 },
      { string: 'three', number: 3 },
    ],
    descNumbers: false,
    descString: false,
  }),
  methods: {
    sortByString() {
      if(this.descString) {

        this.descString = false;
        this.items.sort((a, b) => {
          if(a.string.toLowerCase() > b.string.toLowerCase()) return -1;
          if(a.string.toLowerCase() < b.string.toLowerCase()) return 1;

          return 0;
        })
      } else {
        this.descString = true;
        this.items.sort((a, b) => {
          if(a.string.toLowerCase() > b.string.toLowerCase()) return 1;
          if(a.string.toLowerCase() < b.string.toLowerCase()) return -1;

          return 0;
        })
      }
    },
    sortByNumber() {
      if (this.descNumbers) {
        this.descNumbers = false;
        this.items.sort((a, b) => {
          return b.number - a.number;
        });
      } else {
        this.descNumbers = true;
        this.items.sort((a, b) => {
          return a.number - b.number;
        });
      }
    }
  }
}
</script>
