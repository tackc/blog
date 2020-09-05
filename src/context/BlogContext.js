import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch(action.type) {
    case 'add_blogpost':
      return [...state, { id:Math.floor(Math.random() * 99999), title: `Blog Post #${state.length + 1}`}];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'add_blogpost' })
  }
};

const deleteBlogPost = dispatch => {
  dispatch({ type: 'delete_blogpost', payload: id })
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);