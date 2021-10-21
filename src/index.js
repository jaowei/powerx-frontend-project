import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import './index.css';

import { AppShell } from 'app-shell';
import { PageNotFound } from 'pages/404';
import { Home } from 'pages/home';
import { GameDetailsPage } from 'pages/game-details-page';
import { GamesListingPage } from 'pages/games-listing-page';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <AppShell>
            <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/games" exact><GamesListingPage /></Route>
              <Route path="/game/:gameId" exact><GameDetailsPage /></Route>
              <Route path="/games/:genre" exact><GamesListingPage /></Route>
              <Route path="*"><PageNotFound /></Route>
            </Switch>
          </AppShell>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root')
);