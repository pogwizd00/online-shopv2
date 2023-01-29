import ky from "ky";
import {API_URL} from "../../../config";
import {FurnituresList} from "../../types/furnituresList";

export const getAllFurnituresForUser = (id: number) => {
    return ky.get(`${API_URL}/furnitures/find/${id}`).json<FurnituresList[]>()
}
