import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
//import data from './data';
import magic from './SOM.json';
//const name = magic.data.cards[0].identifiers.multiverseId
const cards = magic.data.cards

export interface CardInterface {
  name: string;
  manaValue: number;
  text?: string;
  colors: any;
  image_url?: string;
  identifiers: any;
}
export interface CardState {
  status: 'loading' | 'idle',
  error: null | 'Rejected',
  selectedCatagory: number | undefined;
  cards: CardInterface[];
  images: any[];
}
const initialState: CardState = {
  selectedCatagory: undefined,
  cards,
  images: [],
  status: "loading",
  error: null
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
            if (state.selectedCatagory! < 6) {
              return card.manaValue === state.selectedCatagory!
            } else {
              return card.manaValue >= state.selectedCatagory!
            }
          })
    },
    addImageLink(state, action: PayloadAction<string | undefined>) {

    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchCards.pending, (state) => {
  //     state.status = 'loading';
  //     state.error = null;
  //   });

  //   builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
  //     console.log('adding to state')
  //     state.images = [...payload];
  //     state.status = 'idle';
  //   });

  //   builder.addCase(fetchCards.rejected, (state, { payload }) => {
  //     if (payload) state.error = 'Rejected';
  //     state.status = 'idle';
  //   })
  // }
})
export const { selectedCatagory } = itemsSlice.actions;
export const selectedItems = (state: RootState): CardInterface[] => state.items.cards;
export const imageList = (state: RootState): any[] => state.items.images;

export const fetchCards =
  (): AppThunk =>
    (dispatch, getState) => {
      selectedItems(getState()).forEach(async (item: any) => {
        const response = await fetch(`https://api.magicthegathering.io/v1/cards/${item.identifiers.multiverseId}`, { method: 'GET' });
        console.log(response);
      });
    };