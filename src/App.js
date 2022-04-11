import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import addArticle from "./components/addArticles"
// import addArticle2 from "./components/addArticles2"

// Components
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className='max-w-screen-md mx-auto pt-20'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/articles-list' component={ArticlesList} />
          <Route exact path='/about' component={About} />
          <Route exact path='/article/:name' component={Article} />
          <Route exact path='/addArticles' component={addArticle} />
          {/* <Route exact path='/addArticles2' component={addArticle2} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
