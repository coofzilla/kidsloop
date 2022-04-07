import { useContext } from "react";
import { KOREAN, ENGLISH } from "consts";
import LanguageContext from "contexts/LanguageContext";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Brightness3Icon from "@mui/icons-material/Brightness3";
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
  const isKorean = language === KOREAN;
  const handleChange = (e: SelectChangeEvent) => {
    //fixed bug f/not being defined
    if (onLanguageChange) onLanguageChange(e.target.value as string);
  };
  return (
    <div className={styles.footer}>
      <IconButton onClick={switchTheme} sx={{ paddingLeft: "0px" }}>
        {theme === "dark" ? (
          <Brightness7Icon sx={{ color: "var(--secondary)" }} />
        ) : (
          <Brightness3Icon sx={{ color: "var(--secondary)" }} />
        )}
      </IconButton>

      <FormControl
        sx={{
          width: "125px",
          "& .MuiOutlinedInput-notchedOutline": {
            // borderColor: "var(--inputBorder)",
            border: "none",
          },
        }}
        size="small"
      >
        {/* <InputLabel
          id="language"
          sx={{
            fontSize: "12px",
            color: "var(--secondary)",
            paddingTop: "2px",
          }}
        >
          {isKorean ? "언어 선택" : "Select Language"}
        </InputLabel> */}
        <Select
          IconComponent={() => null}
          labelId="language"
          value={language}
          sx={{
            color: "var(--secondary)",
            fontSize: "12px",
            "& .MuiSelect-select": {
              paddingLeft: "0px",
            },
          }}
          label="Select Language"
          onChange={handleChange}
        >
          <MenuItem value={ENGLISH}>{ENGLISH}</MenuItem>
          <MenuItem value={KOREAN}>{KOREAN}</MenuItem>
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
        {isKorean ? "도움말" : "Help"}
      </Link>
      <Link
        underline="none"
        sx={{
          fontSize: "12px",
          color: "var(--secondary)",
          cursor: "pointer",
        }}
      >
        {isKorean ? "개인정보" : "Privacy"}
      </Link>
      <Link
        underline="none"
        sx={{
          fontSize: "12px",
          color: "var(--secondary)",
          cursor: "pointer",
        }}
      >
        {isKorean ? "약관" : "Terms"}
      </Link>
    </div>
  );
};

export default Footer;
