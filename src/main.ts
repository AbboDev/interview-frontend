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
					attributes: {
						'data-id': data.id
					},
					children: [
						node('input', {
							attributes: {
								type: 'checkbox'
							},
							props: {
								checked: data.state === 'done',
								indeterminate: data.state === 'doing'
							}
						}),
						data.title
					]
				})
			)
		}

		return nodes
	})

	app.appendChild(
		node('section', {
			id: 'todo',
			children: [
				node('nav', {
					text: 'TODO: qui andranno i filtri'
				}),
				node('ul', {
					id: 'list',
					children: todos
				})
			]
		})
	)
}
