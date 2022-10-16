import { ChangeEvent, useState, useContext } from "react";
import { AddCircleOutline, SaveOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { EntriesContext } from "../../context/entries/EntriesContext";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const { AddNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const OnSave = () => {
    if (inputValue.length === 0) return;
    AddNewEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            placeholder="Nueva Entrada"
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
            sx={{ marginTop: 2, marginBottom: 1 }}
            value={inputValue}
            onChange={onTextFieldChanges}
            onBlur={() => setTouched(true)}
            error={inputValue.length <= 0 && touched}
          />

          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlined />}
              onClick={OnSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          fullWidth
          startIcon={<AddCircleOutline />}
          variant="outlined"
          onClick={() => setIsAddingEntry(!isAddingEntry)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
