import ky from "ky";
import {API_URL} from "../../../config";
import {SimpleFurniture} from "../../types/simpleFurniture";


export const listFurniture = async () => {
    return ky.get(`${API_URL}/furnitures`).json<SimpleFurniture[]>();
}
