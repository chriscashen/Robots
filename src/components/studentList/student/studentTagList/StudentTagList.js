import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function StudentTagList({ tags, handleDelete, student }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        listStyle: "none",
        marginLeft: "-2.5rem",
      }}
      component="ul"
    >
      {tags &&
        tags.map((tag) => (
          <ListItem key={tag}>
            <Chip
              sx={{ height: "42px", borderRadius: "8px", fontSize: "1rem" }}
              label={tag}
              // onDelete={handleDelete(tag)}
            />
          </ListItem>
        ))}
    </Box>
  );
}
