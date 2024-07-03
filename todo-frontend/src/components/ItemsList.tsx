import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { formatDate } from "date-fns";

const ItemList = ({ items, title, handleDelete, handleUpdate }: any) => {
  return (
    <div className="mb-8 w-full md:w-1/3 px-4">
      <Typography
        variant="h5"
        gutterBottom
        className="font-bold mb-4 text-gray-800"
      >
        {title}
      </Typography>
      {items.map((item: any, index: number) => (
        <Card
          key={index}
          className="mb-4 p-4 bg-white shadow-lg rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <CardContent className="flex flex-col">
            <div className="flex justify-between items-start">
              <div>
                <Typography
                  variant="h6"
                  className="font-semibold text-gray-900"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-2">
                  {item.description}
                </Typography>
              </div>
              <div className="flex items-center space-x-2">
                <IconButton
                  aria-label="update"
                  onClick={() => handleUpdate(item._id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(item._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex justify-between items-end text-gray-500 mt-2">
              <Typography variant="caption">
                Created At: {formatDate(item.createdAt, "dd/MM/yyyy")}
              </Typography>
              <Typography variant="caption">
                Updated At: {formatDate(item.updatedAt, "dd/MM/yyyy")}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ItemList;
