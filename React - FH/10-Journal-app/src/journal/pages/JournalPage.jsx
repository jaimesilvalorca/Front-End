
import { AddOutlined } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'
import {IconButton} from '@mui/material'

export const JournalPage = () => {
  return (


    <JournalLayout>
      {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fugiat aliquam, quaerat eius natus harum omnis voluptatum consequuntur repellendus corrupti! Laboriosam, suscipit. Accusantium in enim optio ratione eum ad odio.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fugiat aliquam, quaerat eius natus harum omnis voluptatum consequuntur repellendus corrupti! Laboriosam, suscipit. Accusantium in enim optio ratione eum ad odio.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fugiat aliquam, quaerat eius natus harum omnis voluptatum consequuntur repellendus corrupti! Laboriosam, suscipit. Accusantium in enim optio ratione eum ad odio.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fugiat aliquam, quaerat eius natus harum omnis voluptatum consequuntur repellendus corrupti! Laboriosam, suscipit. Accusantium in enim optio ratione eum ad odio.
      </Typography> */}
      {/* <MailOutline /> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
      size='large'
      sx={{
        color:'white',
        backgroundColor:'error.main',
        ':hover':{backgroundColor:'error.main',opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50
      }}
      >
        <AddOutlined sx={{fontSize:30}}/>

      </IconButton>
    </JournalLayout>


  )
}
