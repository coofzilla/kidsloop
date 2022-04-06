import { Container } from "@mui/material";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <Container
      sx={{
        borderRadius: "12px",
        boxShadow: 10,
        padding: "24px",
        maxWidth: "320px",
      }}
      maxWidth={false}
    >
      {children}
    </Container>
  );
};

export default Card;
