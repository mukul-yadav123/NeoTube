import { Box,Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => (
  <Stack direction='row' alignItems='center' p={2}
   sx={{position: 'sticky', background: '#000', top: 0,
  justifyContent: 'space-between'}} className="navbar">
    <Link to='/' style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
      <img src={logo} alt="logo" height={45}/>
    <Typography variant={{xs: 'h1',sm: 'subtitle1', md: 'h6'}} color='#fff' fontFamily='sans-serif' fontSize='20px'>
      NeoTube
    </Typography>
    </Link>
    <SearchBar/>
  </Stack>
)
    
export default Navbar