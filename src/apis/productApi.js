import axios from "axios";

const productURL = "https://dummyjson.com/products";

const getProducts = async () => {
  try {
    const res = await axios.get(productURL);
    return res.data;
  } catch (error) {
    console.log(error);
    return { products: [] };
  }
};

const getProduct = async id => {
  try {
    const res = await axios.get(`${productURL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

const postProduct = async data => {
  try {
    const res = await axios.post(productURL, data);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async id => {
  try {
    const res = await axios.delete(`${productURL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

const putProduct = async (id, data) => {
  try {
    const res = await axios.put(`${productURL}/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};

export { getProducts, getProduct, postProduct, deleteProduct, putProduct };
