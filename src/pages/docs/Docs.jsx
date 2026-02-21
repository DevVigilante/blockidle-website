import { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../theme.css"
import DocsWelcome from "./DocsWelcome"

const drawerWidth = 260;

export default function Docs() {
  const [content, setContent] = useState("");
  const [pages, setPages] = useState([]);
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    fetch("/pages.json")
      .then((res) => res.json())
      .then((data) => setPages(data));
  }, []);

  const loadPage = async (pagePath) => {
    try {
      const res = await fetch("/fragments/" + pagePath);
      const html = await res.text();
      setContent(html);
      if (isMobile) setOpen(false);
    } catch {
      setContent("<p style='color:red'>Failed to load content</p>");
    }
  };

  const drawer = (
    <Box sx={{ width: drawerWidth, height: "100%" }}>
      <Toolbar />
      <List>
        {pages.map((page, index) => (
          <ListItemButton
            sx={{
              color: "var(--on-surface)",
              "&:hover": {
                backgroundColor: "var(--surface-container)",
                color: "var(--on-surface)",
              },

            }}
            key={index}
            onClick={() => loadPage(page)}
          >
            <ListItemText primary={page.split("/").pop()} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (

      <Box 
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8f9ff, #ffffff)"
      }} 
      className="light">
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "var(--surface-container-lowest)",
            color: "var(--scrim)",
            left: isMobile ? 0 : `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap>
              API Documentation
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? open : true}
          onClose={() => setOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
          }}
        >
          <Toolbar />


          
          {content ? (
  <Box
    sx={{
      maxWidth: "100%",
      overflowX: "auto",
      "& pre": {
        overflowX: "auto",
        maxWidth: "100%",
      },
      "& img": {
        maxWidth: "100%",
      },
    }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
) : (
  <DocsWelcome />
)}
          
          
        </Box>
      </Box>
  );
}