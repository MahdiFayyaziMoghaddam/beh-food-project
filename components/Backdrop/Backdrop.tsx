import { Backdrop as BD, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function Backdrop() {
  return (
    <BD sx={{ zIndex: 999 }} open={true}>
      <CircularProgress sx={{ color: "#F6510B" }} />
    </BD>
  );
}
