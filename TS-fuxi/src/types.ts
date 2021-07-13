import { Color, Mark } from "./enums";

export type Deck = NormalCard[];

type NormalCard = {
    color:Color,
    mark:Mark
}