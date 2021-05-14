<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card color="primary">
          <v-card-text class="d-flex white--text">
            <v-icon class="blue--text text--lighten-5" :x-large="$vuetify.breakpoint.mdAndUp">mdi-account-group</v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h4">کاربران</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="warning">
          <v-card-text class="d-flex white--text">
            <v-icon class="orange--text text--lighten-5" :class="{ 'slghl': $vuetify.breakpoint.mdAndUp }" :x-large="$vuetify.breakpoint.mdAndUp">mdi-post</v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h4">پست ها</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="success">
          <v-card-text class="d-flex white--text">
            <span class="text-h6 text-md-h4">سفارشات</span>
            <v-spacer></v-spacer>
            <v-icon class="green--text text--lighten-5" :x-large="$vuetify.breakpoint.mdAndUp">mdi-cart</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="info">
          <v-card-text class="d-flex white--text">
            <span class="text-h6 text-md-h4">محصولات</span>
            <v-spacer></v-spacer>
            <v-icon class="indigo--text text--lighten-5" :x-large="$vuetify.breakpoint.mdAndUp">mdi-cart-plus</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="mt-4"></v-divider>

    <p class="text-h4 font-weight-medium my-5">لیست کاربران</p>

    <v-data-table
      :headers="titles"
      :items="users"
    >
      <template v-slot:item.name="{ item }">
        {{ item.name.toUpperCase() }}
      </template>
      <template v-slot:item.gender="{ item }">
        <v-chip
          :color="item.gender === 1 ? 'blue' : 'pink'"
          dark
        >
        {{ item.gender === 1 
          ? 'مرد'
          : 'زن'
           }}
        </v-chip>
      </template>
      <template v-slot:header.gender="{ header }">
        <template v-if="header.text === 'جنسیت'">
          <span>جنسیت</span>
          <span class="mr-2 blue--text">(مرد/زن)</span>
        </template>
        <template v-else>{{ header.text }}</template>
      </template>
      <template v-slot:body.prepend>
        <p class="display-1">salam</p>
      </template>
      <template v-slot:body.append>
        <p class="display-1">ssssssssssssss</p>
      </template>
      <template v-slot:body.append>
        <p class="display-1">ssssssssssssss</p>
      </template>
      <template v-slot:footer>
        <p class="body-2">footer</p>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    titles: [
      { text: 'اسم', value: 'name' },
      { text: 'ایمیل', value: 'email' },
      { text: 'اسم کاربری', value: 'username' },
      { text: 'جنسیت', value: 'gender' },
    ],
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        gender: 1,
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        gender: 2,
        email: "Shanna@melissa.tv",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        gender: 2,
        email: "Nathan@yesenia.net",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        gender: 2,
        email: "Julianne.OConner@kory.org",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        gender: 2,
        email: "Lucio_Hettinger@annie.ca",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        gender: 2,
        email: "Karley_Dach@jasper.info",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        gender: 1,
        email: "Telly.Hoeger@billy.biz",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        gender: 1,
        email: "Sherwood@rosamond.me",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        gender: 1,
        email: "Chaim_McDermott@dana.io",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        gender: 2,
        email: "Rey.Padberg@karina.biz",
      }
    ]
  }),

  created() {
    // this.$vuetify.theme.dark = true;
    console.log(
      { ...this.$vuetify.theme }
    )
  }
}
</script>
