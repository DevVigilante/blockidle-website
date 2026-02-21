import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../../theme.css"

export default function Api() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          margin: "2em 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Components API
        </Typography>

        <Typography sx={{ mb: 4, color: "#555" }}>
          API documentation containing how to build blocks, events and other components for BlockIDLE.
          More documentation comming soon.
        </Typography>
        <Container
          sx={{
            display: "grid",
            justifyContent: "right",
          }}
        >
          <Button
            variant="text"
            size="large"
            sx={{
              color: "var(--primary)"
            }}
            onClick={() => navigate("/docs")}
          >
            Components API Docs
          </Button>
        </Container>
      </Box>
    </Container>
  );
}
