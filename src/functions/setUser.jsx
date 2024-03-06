import {getProfile} from "../api/AAE_api";
import * as SecureStore from "expo-secure-store";

export const setUser = async () => {
    const data = await getProfile();
    await SecureStore.setItemAsync('username',data.Data.informations.first_name + ' ' + data.Data.informations.last_name);
    await SecureStore.setItemAsync('userImg',data.Data.informations.img);
}