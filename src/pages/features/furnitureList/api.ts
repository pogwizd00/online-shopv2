import ky from "ky";
import {API_URL} from "../../../config";
import {SimpleFurniture} from "../../types/simpleFurniture";
import {CreateUserDto} from "../../types/createUserDto";


export const getUser = async (id: number) => {
    return ky.get(`${API_URL}/user/${id}`).json<CreateUserDto>()
}

export const listFurniture = async () => {
    return ky.get(`${API_URL}/furnitures`).json<SimpleFurniture[]>();
}
