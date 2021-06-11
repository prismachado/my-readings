import {
  Container,
  Content,
  Header,
  Title,
  Banner,
  LinkMenu,
  Menu,
} from "./styles";

import ShelfBooks from "../components/shelf";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchBooks from "../fetchBooks";

const Home = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title>Minhas Leituras</Title>
        </Header>
        <Banner />
        <Router>
          <Menu>
            <LinkMenu to="/">Home</LinkMenu>
            <LinkMenu to="/fetchbooks">Buscar</LinkMenu>
          </Menu>
          <Switch>
            <Route exact path="/">
              <ShelfBooks />
            </Route>
            <Route exact path="/fetchbooks">
              <FetchBooks />
            </Route>
          </Switch>
        </Router>
      </Content>
    </Container>
  );
};

export default Home;
