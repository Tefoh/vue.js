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

    

    <v-card>
      <v-card-title>
        <p class="text-h4 font-weight-medium mb-5">لیست کاربران</p>

        <v-spacer></v-spacer>





      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-on="on" v-bind="attrs">
            کاربر 
            <v-icon class="mr-2">mdi-account-plus</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            فرم کاربر جدید
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  label="نام"
                  v-model="userForm.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  label="ایمیل"
                  v-model="userForm.email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  label="اسم کاربری"
                  v-model="userForm.username"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-select
                  v-model="userForm.gender"
                  :items="[
                    { genderName: 'انتخاب جنسیت', genderCode: null },
                    { genderName: 'مرد', genderCode: 1 },
                    { genderName: 'زن', genderCode: 2 },
                  ]"
                  item-text="genderName"
                  item-value="genderCode"
                  label="جنسیت"
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="12" md="6" lg="4">
              </v-col>


              <v-col cols="12" md="6" lg="4" class="d-flex align-center">
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="saveUser">ذخیره</v-btn>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card>

      </v-dialog>

        <v-text-field
          class="mr-3"
          label="جستجو در دیتا تیبل"
          v-model="searchText"
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="titles"
        :items="users"
        :search="search"
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
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    searchText: '',
    search: '',
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
        email: "Shanna@gmail.com",
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
        email: "Lucio_Hettinger@gmail.com",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        gender: 2,
        email: "Karley_Dach@gmail.com",
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
    ],
    userForm: {
      name: '',
      email: '',
      username: '',
      gender: null
    },
    dialog: false
  }),

  watch: {
    searchText(newValue, oldValue) {
      if (newValue === 'مرد') {
        this.search = "1";
        return;
      } else if (newValue === 'زن') {
        this.search = "2";
        return;
      }
      this.search = newValue
    }
  },

  methods: {
    saveUser() {
      this.dialog = false;
      const id = Math.random();

      this.users.push({ id, ...this.userForm })

      this.userForm = {
        name: '',
        email: '',
        username: '',
        gender: null
      }

    }
  },

  created() {
    // this.$vuetify.theme.dark = true;
    console.log(
      { ...this.$vuetify.theme }
    )
  }
}
</script>
