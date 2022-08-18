import { GetShopAction } from "actions/shopAction";

export type ShopState = {
	shops: any;
	loading: boolean
}


export const shopReducer = (state: ShopState = { shops: [], loading: true }, action: GetShopAction) : ShopState  => {
	switch (action.type) {
		case "GET_SHOPS":
			return { ...state };
		case "GET_SHOPS_SUCCESS":
			return { ...state, shops: action.payload, loading: false };
		case "GET_SHOPS_FAIL":
			return { ...state, shops: action.payload, loading: false };
		default:
			return state;
	}
};
