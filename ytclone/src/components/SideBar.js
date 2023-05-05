import React from "react";
import { Stack } from "@mui/system";
import { categories } from "./utils/constants";

import { Category } from "@mui/icons-material";

const selectedCategory = "New";

const SideBar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" },
        overflowY: "auto",
      }}
    >
      {categories.map((item, index) => (
        <button
          className="category-btn"
          key={index}
          style={{ color: "white", marginRight: "20px", marginLeft: "5px" }}
          onClick={() => setselectedCategory(item.name)}
        >
          <span style={{ marginRight: "20px", color: "red" }}>{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
