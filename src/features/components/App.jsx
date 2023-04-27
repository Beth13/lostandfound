import React, { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MainPage from "./main/mainPage/MainPage";
import RegisterForm from "./registerForm/RegisterForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UnloginPage from "./main/unloginPage/UnloginPage";
import Contacts from "./contacts/Contacts";
import Form from "./main/form/Form";
import { cards } from "../utils/cards";
import { fetchEvents } from "../gateway/gateway";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem("isLogin")));
    setUserData(JSON.parse(localStorage.getItem("userData")));
    // localStorage.clear();
  }, []);

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
    localStorage.setItem("userData", JSON.stringify(userData));
    // localStorage.clear();
  }, [isLogin]);

  useEffect(() => {
    fetchEvents()
      .then((res) => res.reverse())
      .then((res) => setPosts(res));
  }, []);

  return (
    <div className="page">
      <Router>
        <Header
          isLogin={isLogin}
          userName={userData.name}
          setIsLogin={setIsLogin}
          setUserData={setUserData}
          userData={userData}
        />
        <Switch>
          <Route exact path="/">
            {isLogin ? (
              <MainPage
                userName={userData.name}
                setPosts={setPosts}
                posts={posts}
              />
            ) : (
              <UnloginPage />
            )}
          </Route>
          <Route path="/login">
            <RegisterForm
              setIsLogin={setIsLogin}
              userData={userData}
              setUserData={setUserData}
            />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/create">
            <Form setPosts={setPosts} posts={posts} userName={userData.name} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
