import { READ_REPO_BLOB, READ_REPO_BLOB_SUCCESS, READ_REPO_BLOB_FAIL, CLEAR_REPO_BLOB, UPDATE_REPO_BLOB, UPDATE_REPO_BLOB_SUCCESS, UPDATE_REPO_BLOB_FAIL } from '../constants/LeafActionTypes';
import assign from 'object-assign';

const initialState = {
  loaded: false,
  data: {}
};

export default function blob(state = initialState, action) {
  switch (action.type) {
    case READ_REPO_BLOB:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case READ_REPO_BLOB_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: action.error,
      };
    case READ_REPO_BLOB_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      }
    case CLEAR_REPO_BLOB:
      return {
        loaded: false,
        data: {},
        loading: false,
        error: action.error,
      }
    case UPDATE_REPO_BLOB:
      return {
        ...state,
        data: assign({}, state.data, {
          content: action.data.content,
        }),
        updating: true,
      }
    case UPDATE_REPO_BLOB_SUCCESS:
      return {
        ...state,
        updating: false,
        updated: true,
      }
    case UPDATE_REPO_BLOB_FAIL:
      return {
        ...state,
        updating: false,
        updated: false,
      }
    default:
      return state;
  }
}