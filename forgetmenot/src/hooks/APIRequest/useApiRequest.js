import { useReducer, useCallback } from "react";
import axios from "axios";

import reducer, { initialState } from "./reducer";
import { fetching, success, error } from "./actions";

axios.interceptors.request.use(
  (options) => {
    options.headers.authorization = localStorage.getItem("jwt");
    return options;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useApiRequest = (endpoint, options = {}) => {
  const { verb = "get", params = {} } = options;
  const [state, dispatch] = useReducer(reducer, initialState);
  const makeRequest = useCallback(async () => {
    dispatch(fetching());
    try {
      const response = await axios[verb](endpoint, params);
      dispatch(success(response));
    } catch (e) {
      dispatch(error(e));
    }
  }, [endpoint, verb, params]);
  return [state, makeRequest];
};

export default useApiRequest;
