import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../../theme.css"

export default function Contribute() {
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
          Open Source
        </Typography>

        <Typography sx={{ mb: 4, color: "#555"}}>
          Block IDLE is proudly open-source and powered by a open source passionate developer(s).
          <br /><br />
          Explore the source code on GitHub, contribute new ideas, report issues,
          improve documentation, or help shape the future of the project.
          <br /><br />
          Together, we can build a powerful, flexible, and developer-friendly
          platform that makes app creation smarter and more accessible for everyone.
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
              window.open("https://github.com/Innovative-CST/BlockIDLE", "_blank")
            }
          >
            View on GitHub
          </Button>
        </Container>
      </Box>
    </Container>
  );
}
