import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import LoginForm from "./LoginForm";

function LoginComp() {
  const [open, setOpen] = useState(false);
  return (
    <Navbar>
      <Navbar.Collapse className="justify-content-end">
        <Button
          variant="neutral"
          onClick={() => {
            setOpen(true);
          }}
        >
          Login
        </Button>
        <Dialog open={open}>
          <DialogContent>
            <LoginForm></LoginForm>
          </DialogContent>
          <DialogActions>
            <Button
              fullWidth
              variant="neutral"
              onClick={() => {
                setOpen(false);
              }}
            >
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default LoginComp;
