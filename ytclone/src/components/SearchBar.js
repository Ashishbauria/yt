import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      
      variant="outlined"
      component="form"
      onSubmit={handleSubmit}
      sx={{ borderRadius: "50px" }}
      
      
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        style={{ backgroundColor: "white", marginLeft: "10px" ,fontSize:"15px"}}
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
