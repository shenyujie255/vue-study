import { getUser } from "../service/getDate";
import { GET_USERINFO } from "./mutation-type";


export default{
  async getUserInfo({
		commit,
		state
	}) {
		let res = await getUser();
		commit(GET_USERINFO, res)
	},
}