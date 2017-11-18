# React-Redux Blog

[reduxblog API](http://reduxblog.herokuapp.com/)
  First route fetches a list of all the different blog posts a user has created
  the next one will accept a POST type request to create a brand new blog post and save it to server
  the first one fetches a particular post based on ID
  last one can DELETE post based on ID

## react-router-dom

`import { BrowserRouter, Route, Link } from 'react-router-dom'`
  BrowswerRouter: interacts with the history library and decides what to do based on url change. 
  Route: react component that can be rendered inside any other component inside application. The purpose is to provide the configuration of which component to show based on url
  Link: 