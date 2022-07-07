import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineFoodBank } from "react-icons/md";

function App() {
  return (
    <Mydiv>
      <BrowserRouter>
        <Nav>
          <MdOutlineFoodBank />
          <Logo to={"/"}>food-wayz</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </Mydiv>
  );
}

const Mydiv = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
