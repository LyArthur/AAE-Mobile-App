import {getProfile} from "../api/AAE_api";
import * as SecureStore from "expo-secure-store";

export const setUser = async () => {
    const data = await getProfile();
    if (data !== false){
        await SecureStore.setItemAsync('username',data.Data.first_name + ' ' + data.Data.last_name);
        await SecureStore.setItemAsync('userImg',data.Data.img);
    }
}