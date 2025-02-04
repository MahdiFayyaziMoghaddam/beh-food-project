"use client";

import { Modal, Box, Typography } from "@mui/material";

export default function ErrorModal({ open, setOpen, msg }: any) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          width: "280px",
          height: "130px",
          backgroundColor: "#FFF",
          top: "calc(50vh - 250px)",
          left: "calc(50vw - 140px)",
          padding: "10px",
          outline: "none",
          border: "3px solid #F6510B",
          direction: "rtl",
          borderRadius: "8px",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <p className="text-primary font-vazir-500 text-[24px]">پیام</p>
        </Typography>
        <Typography id="modal-modal-description" sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',mt:4,width: '100%',lineHeight: '15px' }}>
          <p className="text-black font-vazir-300 text-[15px]">
            {msg}
          </p>
        </Typography>
      </Box>
    </Modal>
  );
}
