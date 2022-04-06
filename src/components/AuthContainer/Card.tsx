import { Container } from "@mui/material";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <Container
      sx={{
        borderRadius: "12px",
        padding: "24px",
        maxWidth: "320px",
        boxShadow: "0px 0px 20px 5px var(--cardShadow)",
        background: "var(--card)"
      }}
      maxWidth={false}
    >
      {children}
    </Container>
  );
};

export default Card;
