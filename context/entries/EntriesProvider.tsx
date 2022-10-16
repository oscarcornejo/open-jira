import { FC, ReactNode, useEffect, useReducer } from "react";
import { useSnackbar } from "notistack";

import { entriesApi } from "../../apis";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

interface ProviderProps {
  children: ReactNode;
}

export const EntriesProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState);
  const { enqueueSnackbar } = useSnackbar();

  const AddNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        description,
      });
      dispatch({ type: "SET_ADD_ENTRY", payload: data });
    } catch (error) {
      enqueueSnackbar(`Entrada No pudo se Creada. Error: ${error}`, {
        variant: "error",
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description: description,
        status: status,
      });

      dispatch({ type: "UPDATE_ENTRY", payload: data });

      if (showSnackbar) {
        enqueueSnackbar("Entrada Actualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      enqueueSnackbar(`Entrada No pudo se Actualizada. Error: ${error}`, {
        variant: "error",
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  };

  const deleteEntry = async (id: string, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.delete<Entry>(`/entries/${id}`);
      dispatch({ type: "DELETE_ENTRY", payload: data });

      if (showSnackbar) {
        enqueueSnackbar("Entrada Eliminada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      enqueueSnackbar(`Entrada No pudo se Eliminada. Error: ${error}`, {
        variant: "error",
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "INITIAL_DATA_ENTRIES", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{ ...state, AddNewEntry, updateEntry, deleteEntry }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
