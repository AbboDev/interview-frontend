import './assets/scss/app.scss'
import { get } from './utilities/fetch'
import { node } from './utilities/node'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
	app.appendChild(
		node('h1', {
			id: 'title',
			text: 'TODO List'
		})
	)

	const todos: Array<HTMLElement> = await get('/todo').then((response) => {
		const nodes: Array<HTMLElement> = []
		console.debug(response)

		for (const data of response) {
			nodes.push(
				node('li', {
					className: ['c-list__item'],
					attributes: {
						'data-id': data.id
					},
					children: [
						node('label', {
							className: ['c-list__item__wrapper'],
							children: [
								node('input', {
									attributes: {
										type: 'checkbox'
									},
									props: {
										disabled: true,
										checked: data.state === 'done',
										indeterminate: data.state === 'doing'
									}
								}),
								node('span', {
									className: ['c-list__item__input']
								}),
								node('span', {
									className: ['c-list__item__text'],
									text: data.title
								})
							]
						})
					]
				})
			)
		}

		return nodes
	})

	app.appendChild(
		node('section', {
			className: ['o-card'],
			id: 'todo',
			children: [
				node('nav', {
					text: 'TODO: qui andranno i filtri'
				}),
				node('ul', {
					className: ['c-list'],
					id: 'list',
					children: todos
				})
			]
		})
	)
}
