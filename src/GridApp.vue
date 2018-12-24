<template>
  <div>
    <ag-grid-vue
      style="width:500px; height: 600px;"
      class="ag-theme-fresh"
      :columnDefs="columnDefs"
      :rowData="rowData"
    ></ag-grid-vue>
  </div>
</template>
<style></style>

<script type="text/javascript">
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-enterprise";
import { LicenseManager } from "ag-grid-enterprise";

LicenseManager.setLicenseKey(
  "Evaluation_License_Not_For_Production_Valid_Until1_March_2019__MTU1MTM5ODQwMDAwMA==571888b3c7cbc45a13d91e9c2e885c44"
);

export default {
  props: {},
  data() {
    return {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
  mounted() {},
  beforeMount() {},
  components: {
    AgGridVue
  }
};
</script>
