import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, Grid, Box } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  // Data and button configurations
  const data = [
    "Business & Management",
    "Business & Management",
    "Business & Management",
    "Business & Management",
    "Business & Management",
    "Business & Management",
  ];

  const buttons = [
    { text: "Programs" },
    { text: "University" },
  ];

  // Open and close dialog handlers
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <div style={{ margin: "10px", background: "rgba(255, 255, 255, 1)" }}>
      <Button onClick={openPopup} variant="contained">
        Explore
      </Button>

      <Dialog open={open} fullWidth maxWidth="md" sx={{ margin: "10px" }}>
        <h2 style={styles.header}>Explore</h2>

        <Box sx={styles.buttonsContainer}>
          {buttons.map((button, index) => (
            <h5 key={index} style={styles.buttonText}>
              {button.text}
            </h5>
          ))}
        </Box>

        <Grid container spacing={2} sx={styles.gridContainer}>
          {/* First Grid Item */}
          <Grid item xs={6} sx={styles.gridItem}>
            <h4 style={styles.sectionHeader}>Top Disciplines</h4>
            <Box>
              {data.map((ele, index) => (
                <h5 key={index} style={styles.itemText}>
                  {ele}
                </h5>
              ))}
            </Box>
          </Grid>

          {/* Second Grid Item */}
          <Grid item xs={6} sx={styles.gridItem}>
            <h4 style={styles.sectionHeader}>Top Sub-Disciplines</h4>
            <Box>
              {data.map((ele, index) => (
                <h5 key={index} style={styles.itemText}>
                  {ele}
                </h5>
              ))}
            </Box>
          </Grid>
        </Grid>

        <DialogActions>
          <Button onClick={closePopup} variant="contained" color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// Styles object for better maintainability
const styles = {
  header: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "21px",
    color: "rgba(59, 63, 118, 1)",
  },
  buttonsContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  buttonText: {
    background: "rgba(59, 63, 118, 1)",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center",
  },
  gridContainer: {
    display: "flex",
    flexWrap: "nowrap",
    border: "1px solid grey",
    borderRadius: "10px",
    margin: "20px",
    textAlign: "left",
    padding: "10px",
    boxShadow: "none",
  },
  gridItem: {
    padding: "10px",
  },
  sectionHeader: {
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "15px",
    color: "rgba(106, 106, 106, 1)",
  },
  itemText: {
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "15px",
  },
};

export default App;
