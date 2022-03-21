import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Emitter from "services/emitter"

const ModalEmitter = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    Emitter.on("openModal", handleClickOpen)
    return () => {
      Emitter.off("openModal", handleClose)
    }
  })

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>This is a modal with eventemitter </DialogTitle>
        <DialogContent>
          <DialogContentText>It was done with EventEmitter3 </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            understood
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalEmitter
