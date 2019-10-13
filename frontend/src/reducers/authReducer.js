const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    // We don't change or mutate the state - we make a copy of it
    // Want to take the initial state (state) and add to it
    default:
      return state;
  }
}
