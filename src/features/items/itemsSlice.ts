import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
//import data from './data';
import magic from './SOM.json';
//const name = magic.data.cards[0].name
const cards = magic.data.cards

export interface CardInterface {
  name: string;
  manaValue: number;
  text?: string;
  colors: any;
  image_url?: string;
}
export interface CardState {
  selectedCatagory: number | undefined;
  cards: CardInterface[];
}
const initialState: CardState = {
  selectedCatagory: undefined,
  cards,
}
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    selectedCatagory(state, action: PayloadAction<number | undefined>) {
      state.selectedCatagory = action.payload;
      state.cards =
        state.selectedCatagory === undefined
          ? cards
          : cards.filter((card) => {
            if(state.selectedCatagory! < 6) {
              return card.manaValue === state.selectedCatagory!
            } else {
              return card.manaValue >= state.selectedCatagory!
            }
          })
    },
  },
})
export const { selectedCatagory } = itemsSlice.actions;
export const selectedItems = (state: RootState): CardInterface[] => state.items.cards;