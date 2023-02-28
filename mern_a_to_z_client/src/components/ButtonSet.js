import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Stack from '@mui/material/Stack';


export default function ButtonSet() {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="outlined"  style={{backgroundColor:'white'}} startIcon={<DeleteIcon />}>
                    </Button>
                    <Button style={{backgroundColor:'white'}}variant="outlined" startIcon={<FavoriteOutlinedIcon />}>
                    </Button>
                    <Button style={{backgroundColor:'white'}} variant="outlined" startIcon={<BookmarkBorderIcon />}>
                    </Button>
      </Stack>
    );
  }
