import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { itemsSlice } from './itemsSlice'

export const Catagory = () => {
  const selectedCatagory = useAppSelector((state) => state.items.selectedCatagory)
  const dispatch = useAppDispatch();
  return (
    <>
      Mana cost:
      <select onChange={(e) => {
        const catagory: number | undefined = e.target.value === '0' ? 0 : parseInt(e.target.value) || undefined
        dispatch(itemsSlice.actions.selectedCatagory(catagory));
      }}>
        <option value={undefined} selected={selectedCatagory === undefined}>All</option>
        <option value={0} selected={selectedCatagory === 0}>0</option>
        <option value={1} selected={selectedCatagory === 1}>1</option>
        <option value={2} selected={selectedCatagory === 2}>2</option>
        <option value={3} selected={selectedCatagory === 3}>3</option>
        <option value={4} selected={selectedCatagory === 4}>4</option>
        <option value={5} selected={selectedCatagory === 5}>5</option>
        <option value={6} selected={selectedCatagory === 6}>6+</option>
      </select>
    </>
  )
}