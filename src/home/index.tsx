import {
  Container,
  Content,
  Header,
  Title,
  Menu,
  LinkMenu,
  Banner,
} from "./styles";

import ShelfBooks from "../components/shelf";

const Home = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title>Minhas Leituras</Title>
          <Menu>
            <LinkMenu>Home</LinkMenu>
            <LinkMenu>Buscar</LinkMenu>
          </Menu>
        </Header>
        <Banner />
        <ShelfBooks />
      </Content>
    </Container>
  );
};

export default Home;
