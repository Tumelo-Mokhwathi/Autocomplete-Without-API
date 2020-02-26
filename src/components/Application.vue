<template>
  <div class="container mt-5">
    <h2 class="text-center"><i>Autocomplete</i></h2>
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <div class="list-group">
            <vue-simple-suggest
              v-model="searchText"
              :list="Lists"
              :filter-by-query="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSimpleSuggest from "vue-simple-suggest";
import { mapGetters, mapActions } from "vuex";

import "vue-simple-suggest/dist/styles.css";
export default {
  components: {
    VueSimpleSuggest
  },
  computed: {
    ...mapGetters(["List"]),
    Lists() {
      const newArray = this.List.map(item => item.Address);
      return newArray;
    }
  },
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    ...mapActions(["ListOfTypes"])
  },
  mounted() {
    this.ListOfTypes();
  },
  name: "autocomplete"
};
</script>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style scoped>
::-webkit-input-placeholder {
  font-style: italic;
}
:-moz-placeholder {
  font-style: italic;
}
::-moz-placeholder {
  font-style: italic;
}
:-ms-input-placeholder {
  font-style: italic;
}
</style>
