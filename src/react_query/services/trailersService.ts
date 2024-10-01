import { Trailer } from "../../entities/Trailer";
import httpService from "./httpService";

const trailersService = (gameId: number) => new httpService<Trailer>(`/games/${gameId}/movies`)

export default trailersService