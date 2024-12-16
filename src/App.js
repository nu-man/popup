import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, Grid, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

      <Dialog open={open} fullWidth maxWidth="xs" >
        <h2 style={styles.header}>Explore</h2>

        <Box sx={styles.buttonsContainer}>
          {buttons.map((button, index) => (
            <h5 key={index} style={styles.buttonText}>
              {button.text}
            </h5>
          ))}
        </Box>

        <Grid container spacing={1} sx={styles.gridContainer}>
      {/* First Grid Item */}
      <Grid item xs={6} sx={styles.gridItem}>
        <h4 style={styles.sectionHeader}>Top Disciplines</h4>
        <Box>
          {data.map((ele, index) => (
            <h5 key={index} style={styles.itemText}>
              {ele}
              <ArrowForwardIcon style={styles.icon} />
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
    marginLeft: "20px"
  },
  buttonsContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginLeft: "20px"
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
    marginLeft: "20px",
    marginTop: "20px",
    textAlign: "left",
    padding: "10px",
    boxShadow: "none",
    alignItems: 'stretch', // Ensures both grid items stretch to equal height
  },
  gridItem: {
    padding: "10px",
    display: 'flex',
    flexDirection: 'column', // Ensures items inside are stacked vertically
  },
  sectionHeader: {
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "15px",
    color: "rgba(106, 106, 106, 1)",
    marginBottom: "10px", // Add some spacing below the header
  },
  itemText: {
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "15px",
    display: "flex",
    alignItems: "center", // Aligns text and icon vertically
    gap: "8px", // Adds space between text and icon
    marginBottom: "5px", // Adds spacing between items
  },
  icon: {
    background: "#FF7043",
    color: 'white',
    borderRadius: "50px",
    width: "10px",
    height: "10px",
    padding: "2px", // Optional: adds padding for a neat circle
  },
};

export default App;
