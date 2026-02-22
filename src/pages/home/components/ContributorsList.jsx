import React, { useState, useEffect } from "react";
import { Typography, Container, Box } from "@mui/material";
import Contributor from "./Contributor";
import "./css/Contributor.css"

export default function ContributorsList({ owner, repo }) {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributors() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contributors`
        );
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContributors();
  }, [owner, repo]);

  if (loading) return <p>Loading contributors...</p>;
  if (!contributors || contributors.length === 0)
    return <p>No contributors found.</p>;
  return (
    
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItem: "center",
          padding: "40px 20px",
          margin: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          Contributors
        </Typography>
    
        <div className="contributors-grid">
          {contributors.map((contrib) => (
            <Contributor
              key={contrib.id}
              avatar={contrib.avatar_url}
              name={contrib.login}
              profileUrl={contrib.html_url}
              contributions={contrib.contributions}
            />
          ))}
        </div>
      </Box>
    
  );
  
}