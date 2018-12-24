// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import GridApp from "./GridApp.vue";

import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import "ag-grid-enterprise";
import { LicenseManager } from "ag-grid-enterprise";

LicenseManager.setLicenseKey(
  "Evaluation_License_Not_For_Production_Valid_Until1_March_2019__MTU1MTM5ODQwMDAwMA==571888b3c7cbc45a13d91e9c2e885c44"
);

Vue.config.productionTip = false;

Vue.component("grid-app", GridApp);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(GridApp)
});
