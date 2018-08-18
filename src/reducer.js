const action_types = require('./action-types');
const api = require('./api');

var currentLocation = window.location.href;

if (
  currentLocation === 'http://localhost:3000/ar' ||
  currentLocation === 'http://localhost:3000/ar/projects'
) {
  var initialState = {
    content: api.getContent('ar') // Loads default language content (en) as an initial state
  };
} else {
  var initialState = {
    content: api.getContent() // Loads default language content (en) as an initial state
  };
}

let reducer = function(state = initialState, action) {
  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language)
      };
    default:
      return state;
  }
};

module.exports = reducer;
