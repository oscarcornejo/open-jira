import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesActionType =
  | { type: "SET_ADD_ENTRY"; payload: Entry }
  | { type: "UPDATE_ENTRY"; payload: Entry }
  | { type: "DELETE_ENTRY"; payload: Entry }
  | { type: "INITIAL_DATA_ENTRIES"; payload: Entry[] };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "INITIAL_DATA_ENTRIES":
      return {
        ...state,
        entries: [...action.payload],
      };
    case "SET_ADD_ENTRY":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "UPDATE_ENTRY":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            // return action.payload;
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }

          return entry;
        }),
      };

    case "DELETE_ENTRY":
      return {
        ...state,
        entries: state.entries.filter(
          (entry) => entry._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
