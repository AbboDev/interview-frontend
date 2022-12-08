const ENTRY_POINT = 'http://localhost:3001'

export async function get(
	url: RequestInfo | URL,
	data: RequestInit = {}
): Promise<any> {
	const response = await fetch(ENTRY_POINT + url, {
		...data,
		headers: {
			'Content-Type': 'application/json',
			...data.headers
		},
		method: 'GET'
	})

	return response.json()
}
