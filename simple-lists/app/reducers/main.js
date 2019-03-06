export const ADD_TOPIC = 'ADD_TOPIC'

export const addTopic = topic_name => ({
	type: ADD_TOPIC,
	topic_name
})


const initial_state = {
	lists : []
}

export const rootReducer = (state=initial_state, action) => {
	switch(action.type) {
		case ADD_TOPIC:
			console.log(action)
			return {
				lists: [...state.lists, action.topic_name],
			}

		case 'ADD_SUBTOPIC':
			return state

		case 'ADD_ITEM':
			return state

		case 'REMOVE_TOPIC':
			return state

		case 'REMOVE_SUBTOPIC':
			return state

		case 'REMOVE_ITEM':
			return state

		default:
			return state
	}
}