const initialState = {
  status: 'All',
  colors: [],
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      }
    }
    default:
      console.log('filter default action is called')
      return state
  }
}
