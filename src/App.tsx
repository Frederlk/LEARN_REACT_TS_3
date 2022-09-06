import { FC } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UserPage from "./components/UserPage";

const App: FC = () => {
    return (
        <Router>
            <header>
                <Link to="/users">Users</Link>
                <Link to="/todos">Todos</Link>
            </header>
            <Routes>
                <Route path="/users" element={<UserPage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/users/:id" element={<UserItemPage />} />
            </Routes>
        </Router>
    );
};

export default App;
