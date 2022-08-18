import { api_routes, BASE_URL } from "../environment/env.config";
import { http } from "../utils/http";

export type GetShopAction = {
  type: 'GET_SHOPS' | 'GET_SHOPS_SUCCESS'| 'GET_SHOPS_FAIL'
  payload: object
};

// export const getShops = (): GetShopAction => ({
//   type: "GET_SHOPS",
// });

export const getShops = () => async (dispatch: (arg0: { type: any, payload: any }) => void) => {
  // dispatch({ type: "GET_SHOPS" });
  // return await http.get(BASE_URL + api_routes.shops);

  try {
    dispatch({type: "GET_SHOPS", payload: null})
    const {data} = await http.get(BASE_URL + api_routes.shops);
    dispatch({type: "GET_SHOPS_SUCCESS", payload: data.data})
  } catch (e: any){
    dispatch({
      type: "GET_SHOPS_FAIL",
      payload: e.response && e.response.data.message
        ? e.response.data.message
        : e.message
    })

}};
