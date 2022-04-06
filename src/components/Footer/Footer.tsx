import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "components/Footer/Footer.module.css";

interface FooterProps {
  switchTheme: any;
  theme: any;
}

const Footer = ({ switchTheme, theme }: FooterProps) => {
  const [language, setLanguage] = useState("");

  const handleChange = (e: SelectChangeEvent) => {
    setLanguage(e.target.value as string);
    console.log(language);
  };
  return (
    <div className={styles.footer}>
      <IconButton onClick={switchTheme}>
        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <FormControl
        sx={{
          width: "125px",
        }}
        size="small"
      >
        <InputLabel
          id="language"
          sx={{
            fontSize: "12px",
          }}
        >
          Select Language
        </InputLabel>
        <Select
          IconComponent={() => null}
          labelId="language"
          value={language}
          label="Select Language"
          onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="한국어">한국어</MenuItem>
          <MenuItem value=""></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Footer;
