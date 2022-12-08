export interface NodeConfig {
	className?: Array<string>
	id?: string
	text?: string
	children?: Array<HTMLElement | string>
	attributes?: {
		[key: string]: string | number
	}
	props?: {
		[key: string]: string | number | boolean
	}
}

export function node(tagName: string, config: NodeConfig = {}): HTMLElement {
	const element: HTMLElement = document.createElement(tagName)

	const { className, id, text, children, attributes, props } = config

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

	if (props && typeof props === 'object') {
		for (const [prop, value] of Object.entries(props)) {
			element[prop] = value
		}
	}

	if (children && children.length > 0) {
		for (const child of children) {
			let content: HTMLElement | string | Text = child
			if (typeof child === 'string') {
				content = document.createTextNode(child)
			}
			element.appendChild(content as HTMLElement | Text)
		}
	}

	return element
}
