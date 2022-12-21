<template>
	<h1 id="title">TODO List</h1>

	<section id="todo" class="o-card">
		<nav>TODO: qui andranno i filtri</nav>
		<ListItems />
	</section>
</template>

<script setup lang="ts">
import ListItems from '@/components/ListItems.vue'
</script>
