<template>
	<ul class="c-list" v-if="items.length > 0">
		<li class="c-list__item" v-for="item in items" :key="item.id">
			<label class="c-list__item__wrapper">
				<input
					type="checkbox"
					:disabled="true"
					:checked="item.state === TodoState.DONE"
					:indeterminate="item.state === TodoState.DOING" />

				<span class="c-list__item__input"></span>
				<span class="c-list__item__text">{{ item.title }}</span>
			</label>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { TodoState, get, type Todo } from '@/utilities/fetch'
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'

const items: Ref<Todo[]> = ref([])

onMounted(async () => {
	items.value = await get('/todo')
})
</script>

<style lang="scss">
@use '@css/utilities/units';
@use '@css/utilities/colors';
@use '@css/utilities/transitions' as t;

.c-list {
	$this: &;
	$item: #{$this}__item;
	$input: #{$item}__input;
	$text: #{$item}__text;

	list-style: none;
	width: 100%;
	margin: 0 auto;

	#{$item} {
		width: 100%;

		&__wrapper {
			width: 100%;
			display: flex;
			align-items: center;
			padding: units.unit(2) units.unit();
			border-bottom: 1px solid rgb(colors.css-color(test-color-3));
			position: relative;
		}

		input {
			appearance: none;
			position: absolute;
			width: 0;
			height: 0;

			&:checked + #{$input} {
				background-color: red;

				&::after {
					opacity: 1;
					visibility: visible;
				}

				& + #{$text} {
					text-decoration: line-through;
				}
			}

			&:indeterminate + #{$input} {
				background-color: blue;

				&::after {
					content: '\267A';
					opacity: 1;
					visibility: visible;
				}
			}
		}

		#{$input} {
			@include t.transition(background-color);

			width: units.unit(3);
			height: units.unit(3);
			margin-right: units.unit(3);
			display: block;
			border: 2px solid rgb(colors.css-color(test-color-4));
			background-color: rgb(colors.css-color(test-color-3));
			position: relative;

			&::after {
				@include t.fade-with-visibility(false);

				content: '\2713';
				display: block;
				width: units.unit(2);
				height: units.unit(2);
				font-weight: 700;
				text-align: center;
				font-size: 1rem;
				line-height: 1;
				position: absolute;
				inset: 50% 0 0 50%;
				transform: translate(-50%, -50%);
			}
		}

		&:last-child {
			border-bottom: 0;
		}
	}
}
</style>
