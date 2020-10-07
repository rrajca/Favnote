import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes/index';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path="/" render={() => <Redirect to={routes.notes} />} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.twitters} component={Twitters} />
            <Route path={routes.twitter} component={DetailsPage} />
            <Route exact path={routes.articles} component={Articles} />
            <Route path={routes.article} component={DetailsPage} />
          </Switch>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default Root;
