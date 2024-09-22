import {
  createAction,
  createReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { SchoolType } from '@/types/index';

const DataTemp: SchoolType[] = [
  {
    id: 5,
    name: 'Happy Kids Cơ Sở 1',
    address: 'Buôn Trấp Krông Ana',
    email: 'happykidscs1@gmail.com',
    phone: '0941720502',
    description: 'HappyKids Cơ Sở 1',
    headMasterId: 1,
    createdDate: '2024-09-21T01:26:39.2812272',
    createdBy: 'admin',
    isActive: true,
    modifyDate: null,
    modifyBy: null
  }
];

interface SchoolState {
  listSchool: SchoolType[];
}

const initialState: SchoolState = {
  listSchool: DataTemp
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    addSchool(state, action: PayloadAction<SchoolType>) {
      state.listSchool.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => {
      return state;
    });
  }
});

export const { addSchool } = schoolSlice.actions;
const schoolReducer = schoolSlice.reducer;
export default schoolReducer;
