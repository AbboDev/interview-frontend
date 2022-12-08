import './assets/scss/app.scss'
import { node, NodeConfig } from './utilities/node'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
	const h1Config: NodeConfig = {
		id: 'title',
		text: 'Hello 24/Consulting'
	}
	const h1 = node('h1', h1Config)

	const a = node('a', {
		text: 'Github Repository',
		attributes: {
			href: 'https://github.com/24Consulting/interview-frontend',
			target: '_blank'
		}
	})

	app.appendChild(h1)
	app.appendChild(a)
}
