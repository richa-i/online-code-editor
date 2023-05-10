

import {AppBar,Toolbar ,styled} from '@mui/material';

const Container = styled(AppBar)`
    background : #060606;
    height:9vh;
    `

const Header = () => {
    const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6W1Tds4WbW2_s8_lGfWLPZolfshfMHFSOnlNCiLy2dw&usqp=CAU&ec=48665698';
    return (
        <Container position="static">
            <Toolbar>
             <img src={logo} alt="logo" style={{width:65}} />
            </Toolbar>
        </Container>
    )
}
export default Header;