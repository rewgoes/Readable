import {
  fetchPostsApi,
  fetchCategoryPostsApi,
  deletePostApi
} from '../utils/api'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function fetchPosts(category) {
  return function (dispatch) {
    dispatch(requestPosts())

    if (!category || category === "all") {
      fetchPostsApi().then(
        result => {
          dispatch(receivePosts(result))
        }
      )
    } else {
      fetchCategoryPostsApi(category).then(
        result => {
          dispatch(receivePosts(result))
        }
      )
    }
  }
}

export const REQUEST_DELETE_POST = 'REQUEST_DELETE_POST'
function requestDeletePost() {
  return {
    type: REQUEST_DELETE_POST
  }
}

export const RECEIVE_DELETE_POST = 'RECEIVE_DELETE_POST'
function receiveDeletePost(posts) {
  return {
    type: RECEIVE_DELETE_POST,
    posts
  }
}

export function deletePost(id) {
  return function (dispatch) {
    dispatch(requestDeletePost())

    deletePostApi(id).then(
      result => {
        dispatch(receiveDeletePost(result))
      }
    )
  }
}