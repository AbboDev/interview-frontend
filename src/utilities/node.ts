export interface NodeConfig {
	className?: Array<string>
	id?: string
	text?: string
	children?: Array<HTMLElement>
	attributes?: {
		[key: string]: string | number
	}
}

export function node(tagName: string, config: NodeConfig): HTMLElement {
	const element: HTMLElement = document.createElement(tagName)

	const { className, id, text, children, attributes } = config

	if (className) element.className = className.join(' ')
	if (id) element.id = id

	if (text) {
		const content = document.createTextNode(text)
		element.appendChild(content)
	}

	if (attributes && typeof attributes === 'object') {
		for (const [attribute, value] of Object.entries(attributes)) {
			element.setAttribute(attribute, value.toString())
		}
	}

	if (children && children.length > 0) {
		for (const child of children) {
			element.appendChild(child)
		}
	}

	return element
}
