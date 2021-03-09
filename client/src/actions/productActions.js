import axios from 'axios';
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios
        .get('/api/products')
        .then(res => 
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
export const deleteProduct = id => (dispatch, getState) => {
    axios
        .delete(`/api/products/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
export const addProduct = product => (dispatch, getState) => {
    console.log(product);
    const body = JSON.stringify(product);
    console.log(body);
    axios
        .post(`/api/products`, body, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setProductsLoading = () => {
    return{
        type: PRODUCTS_LOADING
    };
}
