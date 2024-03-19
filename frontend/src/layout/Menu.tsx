import { useState } from 'react';
import Box from '@mui/material/Box';
import {
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';
import SubMenu from './SubMenu';
import VisitorIcon from '@mui/icons-material/People';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCadastros: true,
        menuEventos: true,
    });
    const [open] = useSidebarState();

    const handleToggle = (menu: string) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuCadastros')}
                isOpen={state.menuCadastros}
                name="pos.menu.cadastros"
                icon={<VisitorIcon />}
                dense={dense}>
                <MenuItemLink
                    to="/users"
                    state={{ _scrollToTop: true }}
                    primaryText={`pos.menu.users`}
                    leftIcon={<VisitorIcon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/musics"
                    primaryText={`musicas`}
                    state={{ _scrollToTop: true }}
                    leftIcon={<VisitorIcon />}
                    dense={dense}
                />
            </SubMenu>
        </Box>
    );
};

export default Menu;
