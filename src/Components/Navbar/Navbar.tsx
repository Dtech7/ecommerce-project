import React, { useContext } from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Badge } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/ProductContext'
import { Product, ProductContextState } from '../../Types/Product'

const Container = styled.div`
    height: 100px;
    background-color: white;
    position: sticky;
    z-index: 2;
    width: 100vw;
    top: 0;
    border-bottom: 2px solid #ddd;
`
const Wrapper = styled.div`
    height: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
`
const Input = styled.input`
    border: none;
    &:focus {
        outline: none;
    }
`
const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100%;
`
const Logo = styled.p`
    align-self: space-between;
    cursor: pointer;
    letter-spacing: 6px;
    font-size: 2.2em;
`
const LogoMirror = styled.p`
    position: absolute;
    cursor: pointer;
    letter-spacing: 6px;
    transform: scale(1, -1) translateY(-67%);
    font-size: 2.2em;
    background: -webkit-linear-gradient(#fff, #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 24px;
`


const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
        window.scrollTo(0, 0);
    }

    const navigateToLogin = () => {
        navigate('/login');
        window.scrollTo(0, 0);
    }

    const navigateToCart = () => {
        navigate('/cart');
        window.scrollTo(0, 0);
    }

    const navigateToShop = () => {
        navigate('/shop');
        window.scrollTo(0, 0);
    }

    const { products } = useContext(Context) as ProductContextState;

    const updateCartAmount = (): number => {
        let itemsInCart = 0;
        for (let i: number = 0; i < products.length; i++) {
            itemsInCart += products[i].amount;
        }
        return itemsInCart;
    }


    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: "gray", fontSize: 16, cursor: 'pointer' }} />
                    </SearchContainer>
                </Left>
                <Center onClick={navigateToHome}>
                    <Logo>NAJ</Logo>
                    <LogoMirror>NAJ</LogoMirror>
                </Center>
                <Right>
                    <MenuItem onClick={navigateToShop}><StorefrontIcon style={{ opacity: '0.6', fontSize: '2em' }} /></MenuItem>
                    <MenuItem onClick={navigateToLogin}><AccountCircleIcon style={{ opacity: '0.6', fontSize: '2em' }} /></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={updateCartAmount()} color="primary" onClick={navigateToCart}>
                            <ShoppingCartOutlined style={{ opacity: '0.6', fontSize: '2em' }} />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
