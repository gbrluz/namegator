<template>
	<div>
		<h5>{{ title }} <span class="badge badge-info bg-success">{{ items.length }}</span></h5>
		<div class="card">
			<div class="card-body">
				<ul class="list-group">
					<!-- {{ value }} -->
					<li class="list-group-item" v-for="(item, index)  in items" v-bind:key="item.id">
						<div class="row">
							<div class="col-8">
								{{ item.description }}
								<!-- {{ index }} -->
							</div>
							<div class="col-4 text-end">
								<button class="btn btn-info" v-on:click="deleteItem(item)">
								<span class="fa fa-trash"></span></button>
								&nbsp;
									<button @click="()=>edit(index, item)" class="btn btn-info" type="button" data-toggle="collapse" data-target="#update" aria-expanded="false" aria-controls="update">
										<span class="fa fa-pencil-square-o"></span>
									</button>
							</div>	
						</div>
						<div class="row g-3 align-items-center">
							<div class="input-group">
								<div class="collapse.show" id="update" v-if="value === index">
									<input class="form-control" type="text" v-model="description" v-on:keyup.enter="updateItem(item.id, description) ; value = null" placeholder="Alterar item"/>
								</div>
								<div class="input-group-append" >
									<div class="collapse.show" id="update" v-if="value === index">
										<button class="btn btn-info" @click="updateItem(item.id, description) ; value = null" ><span class="fa fa-check"></span></button>
										&nbsp;
										<button class="btn btn-info" @click="value = null"><span class="fa fa-times"></span></button>
									</div>
									</div>
							</div>
						</div>
					</li>
				</ul>
				<br/>
				<div class="input-group">
					<input class="form-control" type="text" v-model="description" v-on:keyup.enter="addItem(type, description)" placeholder="Digite o item"/>
					<div class="input-group-append">
						<button class="btn btn-info" v-on:click="addItem(type,description)"><span class="fa fa-plus"></span></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppItemList",
	props: ["title", "type", "items"],
	data() {
		return {
			description: "",
			value: null,
		};
	},
	
	methods: {
		edit(index, {description}){
			this.value = index;
			this.description= description;
		},
		addItem(type, description) {
			this.description = "";
			this.$emit("addItem", {type, description});
			this.description = "";
		},
		deleteItem(item) {
			this.$emit("deleteItem", item);
		},
		updateItem(id,description) {
			this.$emit("updateItem", {id, description});
			this.description = "";
		}
	}
};
</script>

<style scoped>
</style>