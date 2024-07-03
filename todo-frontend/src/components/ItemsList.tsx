// src/components/ItemList.js
import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { formatDistanceToNow } from "date-fns";

const ItemList = ({ items, title }) => {
  const handleDelete = (index) => {
    // Handle delete action
    console.log(`Delete item at index ${index}`);
  };

  const handleUpdate = (index) => {
    // Handle update action
    console.log(`Update item at index ${index}`);
  };

  return (
    <div className="mb-8 w-full md:w-1/3 px-4">
      <Typography
        variant="h5"
        gutterBottom
        className="font-bold mb-4 text-gray-800"
      >
        {title}
      </Typography>
      {items.map((item, index) => (
        <Card
          key={index}
          className="mb-4 p-2 flex items-center bg-white shadow-lg rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <div className="flex-grow">
            <Typography variant="h6" className="font-semibold text-gray-900">
              {item.title}
            </Typography>
            <Typography variant="body2" className="text-gray-600 mb-2">
              {item.description}
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              {formatDistanceToNow(item.createdAt, { addSuffix: true })}
            </Typography>
          </div>
          <div className="flex items-center space-x-2">
            <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="update" onClick={() => handleUpdate(index)}>
              <EditIcon />
            </IconButton>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ItemList;
