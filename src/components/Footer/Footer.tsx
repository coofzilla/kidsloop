import { useContext } from "react";
import LanguageContext from "contexts/LanguageContext";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "components/Footer/Footer.module.css";

interface FooterProps {
  switchTheme: () => void;
  theme: string;
}

const Footer = ({ switchTheme, theme }: FooterProps) => {
  const { language, onLanguageChange } = useContext(LanguageContext);

  const handleChange = (e: SelectChangeEvent) => {
    //fixed bug f/not being defined
    if (onLanguageChange) onLanguageChange(e.target.value as string);
  };
  return (
    <div className={styles.footer}>
      <IconButton onClick={switchTheme}>
        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      <FormControl
        sx={{
          width: "125px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--inputBorder)",
          },
        }}
        size="small"
      >
        <InputLabel
          id="language"
          sx={{
            fontSize: "12px",
            color: "var(--secondary)",
          }}
        >
          {language === "한국어" ? "언어 선택" : "Select Language"}
        </InputLabel>
        <Select
          IconComponent={() => null}
          labelId="language"
          value={language}
          sx={{ color: "var(--text)" }}
          label="Select Language"
          onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="한국어">한국어</MenuItem>
          <MenuItem value=""></MenuItem>
        </Select>
      </FormControl>
      <Link
        sx={{
          fontSize: "12px",
          color: "var(--secondary)",
          cursor: "pointer",
        }}
        underline="none"
      >
        {language === "한국어" ? "도움말" : "Help"}
      </Link>
      <Link
        underline="none"
        sx={{
          fontSize: "12px",
          color: "var(--secondary)",
          cursor: "pointer",
        }}
      >
        {language === "한국어" ? "개인정보" : "Privacy"}
      </Link>
      <Link
        underline="none"
        sx={{
          fontSize: "12px",
          color: "var(--secondary)",
          cursor: "pointer",
        }}
      >
        {language === "한국어" ? "약관" : "Terms"}
      </Link>
    </div>
  );
};

export default Footer;
