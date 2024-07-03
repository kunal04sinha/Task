// src/components/ModalForm.js
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { CreateTodoProps } from "./type";

const statusOptions = [
  { value: "Todo", label: "Todo" },
  { value: "Pending", label: "Pending" },
  { value: "Completed", label: "Completed" },
];

const ModalForm = ({
  open,
  onClose,
  onSubmit,
  initialData,
  isUpdate,
}: CreateTodoProps) => {
  const { handleSubmit, control, reset } = useForm();

  useEffect(() => {
    if (open && initialData) {
      reset(initialData);
    } else if (!open) {
      reset();
    }
  }, [open, initialData, reset]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {isUpdate ? "Update Todo" : "Create Todo"}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "white" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: "Title is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error ? error.message : ""}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: "Description is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                error={!!error}
                helperText={error ? error.message : ""}
              />
            )}
          />
          <Controller
            name="status"
            control={control}
            defaultValue=""
            rules={{ required: "Status is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                select
                label="Status"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error ? error.message : ""}
              >
                {statusOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <DialogActions>
            <Button onClick={onClose} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="contained">
              {isUpdate ? "Update" : "Create"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalForm;
