import Nav from './components/Nav/Nav';
import Houses from './components/Houses/Houses';
import HouseDetail from './components/HouseDetail/HouseDetail';
import CreateHouse from './components/CreateHouse/CreateHouse';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route
        path='/'
        component={Nav}
      />

      <Route
        exact path='/'
        component={Houses}
      />

      <Route
        exact path='/house/create'
        component={CreateHouse}
      />

      {/* <Route
        exact
        path='/houses/:houseId'
        render={({ match }) => <HouseDetail />}
      /> */}

      <Route path="/houses/:houseId"
        render={(match) => (
          <HouseDetail {...match} />
        )}
      />
    </div>
  );
}

export default App;

