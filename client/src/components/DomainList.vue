<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <AppItemList
          title="Prefixos"
          type="prefix"
          v-bind:items="items.prefix"
          v-on:addItem="addItem"
          v-on:deleteItem="deleteItem"
          v-on:updateItem="updateItem"
        ></AppItemList>
      </div>
      <div class="col-md">
        <AppItemList
          title="Sufixos"
          type="sufix"
          v-bind:items="items.sufix"
          v-on:addItem="addItem"
          v-on:deleteItem="deleteItem"
          v-on:updateItem="updateItem"
        ></AppItemList>
      </div>
    </div>
    <br />
    <h5>
      Domínios
      <span class="badge badge-info bg-success">{{ domains.length }}</span>
    </h5>
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="domain in domains"
            v-bind:key="domain.name"
          >
            <div class="row">
              <div class="col-md">
                {{ domain.name }}
              </div>
              <div class="col-md-3">
                <span class="badge badge-info bg-success">{{
                  domain.available ? "Disponível" : "Não Disponível"
                }}</span>
              </div>
              <div class="col-md text-end">
                <a
                  class="btn btn-info"
                  v-bind:href="domain.checkout"
                  target="_blank"
                >
                  <span class="fa fa-shopping-cart"></span>
                </a>
                &nbsp;
                <button
                  class="btn btn-info bg-success"
                  @click="openDomain(domain)"
                >
                  <span class="fa fa-search"></span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AppItemList from "./AppItemList";

export default {
	name: "app",
	components: {
		AppItemList
	},
	data: function () {
		return {};
	},
	methods: {
		...mapActions(["addItem", "updateItem","deleteItem", "getItems", "generateDomains"]),
		openDomain(domain) {
			this.$router.push({
				path: `/domains/${domain.name}`
			});
		}
	},
	computed: {
		...mapState(["items", "domains"])
	}
};
</script>

<style></style>
