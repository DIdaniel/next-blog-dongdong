import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Editor } from "../../organisms";
import { css, styled } from "@mui/material";

const EditorButton = styled(Button)(() => {
  return css`
    font-size: 40px;
    font-family: Londrina Shadow, cursive;
    font-weight: bold;
    color: dodgerblue;
    padding: 0 20px;
    //&.MuiButton-root:active {
    //  background: none;
    //}
    // "&.css-zrzd7t-MuiButtonBase-root-MuiButton-root": {
    //   "&:active": {
    //     background: "none",
    //   },
    // },
  `;
});

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

type BasicModalProps = {
  //
};

export function BasicModal(props: BasicModalProps) {
  /** Property */
  const { ...others } = props;

  const [open, setOpen] = React.useState(false);

  /** Function */
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /** Render */
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "50px",
        "&.css-1a6jylm-MuiButtonBase-root-MuiButton-root:hover": {
          background: "none",
        },
      }}
    >
      <EditorButton onClick={handleOpen}>OPEN EDITOR</EditorButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Editor
            style={{
              width: "1000px",
              height: "100%",
              boxShadow:
                "0px 3px 3px -2px rgba(0, 0, 0, 0.05), 0px 3px 4px rgba(0, 0, 0, 0.05), 0px 1px 8px rgba(0, 0, 0, 0.05)",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}
