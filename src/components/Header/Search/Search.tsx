import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../../Button/Button";
import { GridComponent, Input } from "./search.style";

export default function Search() {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const [t] = useTranslation();
  const changeValue = (e: any) => {
    const val = e.currentTarget.value.trim();
    return setValue(val);
  };
  const intoNavigate = () => {
    if (value === "") {
      return navigate("allProducts");
    } else {
      navigate(`search/${value}`);
      setValue("");
    }
  };
  return (
    <GridComponent container>
      <Grid item flexGrow={4}>
        <Input
          value={value}
          onChange={changeValue}
          onKeyDown={(e: any) => (e.key === "Enter" ? intoNavigate() : null)}
          placeholder={t("search") + "..."}
        />
      </Grid>
      <Grid item xs={5} lg={4} xl={3}>
        <Button
          onClick={intoNavigate}
          fontSize="1rem"
          fontWeight="700"
          borderRadius="6px"
          minWidth="100px"
          // loading
        >
          <SearchIcon />
          {value === "" ? t("allProducts") : t("search")}
        </Button>
      </Grid>
    </GridComponent>
  );
}
