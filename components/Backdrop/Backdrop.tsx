import { Backdrop as BD, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function Backdrop() {
  const [isShowProgress, setIsShowProgress] = useState(true);

  return (
    <BD
      sx={{ zIndex: 999 }}
      open={isShowProgress}
      onClick={() => setIsShowProgress(false)}
    >
      <CircularProgress sx={{ color: "#F6510B" }} />
    </BD>
  );
}
