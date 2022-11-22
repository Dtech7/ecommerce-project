import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #77cedd;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

const Announcement = () => {
    return (
        <Container>
            Deal going on now! Buy now to get Free Shipping on Orders over $952.38!
        </Container>
    )
}

export default Announcement
