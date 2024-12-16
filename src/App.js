import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, Grid, Box } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const data = [
    "Business & Management",
    "Business & Management",
    "Business & Management",
    "Business & Management",
    "Business & Management",
    "Business & Management",
  ];

  const buttons = [{ text: "Programs",}, { text: "University" }];

  return (
    <div style={{ margin: "10px", background: "rgba(255, 255, 255, 1)" }}>
      <Button onClick={openPopup} variant="contained">
        Explore
      </Button>
      <Dialog open={open} fullWidth maxWidth="md" sx={{ margin: "10px" }}>
        <h2
          style={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "21px",
            color: "rgba(59, 63, 118, 1)",
          }}
        >
          Explore
        </h2>

        <Box
          sx={{
            display: "flex",
            gap: "10px", // Adds space between items
            flexWrap: "wrap", // Ensures wrapping if items overflow
          }}
        >
          {buttons.map((button, index) => (
            <h5
              key={index}
              style={{
                background: "rgba(59, 63, 118, 1)",
                color: "white",
                width: "fit-content",
                padding: "10px",
                borderRadius: "10px",
                fontWeight:500,
                fontSize:"14px",
                textAlign:"center"
              }}
            >
              {button.text}
            </h5>
          ))}
        </Box>

        <Grid
          container
          spacing={2}
          padding={2}
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            border: "1px solid grey",
            borderRadius: "10px",
            margin: "20px",
            textAlign: "left",
            padding: "10px",
            boxShadow: "initial",
          }}
        >
          {/* First Grid Item */}
          <Grid
            item
            xs={6}
            sx={{
              textAlign: "left",
              padding: "10px",
            }}
          >
            <h4
              style={{
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "15px",
                color: "rgba(106, 106, 106, 1)",
              }}
            >
              Top Disciplines
            </h4>
            <Box>
              {data.map((ele, index) => (
                <h5
                  key={index}
                  style={{
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "15px",
                  }}
                >
                  {ele}
                </h5> // Use key for unique identification
              ))}
            </Box>
          </Grid>

          {/* Second Grid Item */}
          <Grid item xs={6}>
            <h4
              style={{
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "15px",
                color: "rgba(106, 106, 106, 1)",
              }}
            >
              Top Sub-Disciplines
            </h4>
            <Box>
              {data.map((ele, index) => (
                <h5
                  key={index}
                  style={{
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "15px",
                  }}
                >
                  {ele}
                </h5> // Use key for unique identification
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

export default App;
