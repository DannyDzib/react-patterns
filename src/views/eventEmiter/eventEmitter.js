import { Box, Button, Typography } from "@mui/material"
import Emitter from "services/emitter"

const EventEmitter = () => {
    const handleShowModal = () => {
      Emitter.emit("openModal")
  }
  return (
    <Box>
      <Typography variant="h4" component="h1">
        Event Emitter
      </Typography>
      <Button onClick={handleShowModal} variant="outlined">
        Hola mundo
      </Button>
    </Box>
  )
}

export default EventEmitter
