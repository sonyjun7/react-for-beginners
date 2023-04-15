import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App2(){
    return <Router>
        <Switch>
            <Route path="/movie/:id"> {/* 받을 파라미터 명 :id 라고 명시했기 때문에 id라는 파라미터명으로 받음 */}
                <Detail/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
}

export default App2;