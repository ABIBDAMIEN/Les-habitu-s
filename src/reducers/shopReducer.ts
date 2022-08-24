import { GetShopAction } from "actions/shopAction";
import { getPageCount } from "utils/helper";

export type ShopState = {
	shops: any;
	loading: boolean;
	requestSuccess: boolean;
	pageCount: number
}


export const shopReducer = (state: ShopState = { shops: [], loading: true, requestSuccess: false, pageCount: 0 }, action: GetShopAction) : ShopState  => {
	switch (action.type) {
		case "GET_SHOPS":
			return { ...state };
		case "GET_SHOPS_SUCCESS":
			return { ...state, shops: action.payload, loading: false, requestSuccess: true, pageCount: getPageCount(action.payload) };
		case "GET_SHOPS_FAIL":
			return { ...state, shops: action.payload, loading: false, requestSuccess: false, pageCount: 0 };
		default:
			return state;
	}
};
