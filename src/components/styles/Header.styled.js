import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;

`

// since the nav and header components are only used in the header component, we put those components in this header style component 

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    // currently flex is row, with media query when size is reduced, direction is set to column 

    @media(max-width: ${( {theme }) => theme.mobile}) {
        flex-direction: column
    }
    `


export const Logo = styled.img`
	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-bottom: 40px;
	}
`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        margin: 40px 0 30px

`