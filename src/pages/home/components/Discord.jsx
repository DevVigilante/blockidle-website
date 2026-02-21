import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../../theme.css"

export default function Discord() {
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
          Join us on Discord
        </Typography>

        <Typography sx={{ mb: 4, color: "#555" }}>
          Want to connect with other developers and contributors?
          <br /><br />
          Join our Discord community to discuss ideas, get help, share feedback,
          and collaborate on new features. Whether you're a beginner or an
          experienced developer, you're welcome to be part of the conversation.
          <br /><br />
          Let’s build your first app or help us build Block IDLE by reporting bugs and crashes — one feature at a time.
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
              color: "var(--primary)",
              fontWeight: 600,
            }}
            onClick={() =>
              window.open("https://discord.gg/RM5qaZs4kd", "_blank")
            }
          >
            Discord
          </Button>
        </Container>
      </Box>
    </Container>
  );
}
