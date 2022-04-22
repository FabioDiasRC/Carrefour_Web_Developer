require('file-loader?name=[name].[ext]!./index.html')
import React from "react";
import { createRoot } from 'react-dom/client';
import {App} from './App'
import "./App.scss"

const appElemnt = document.getElementById('root')
const root = createRoot(appElemnt)

root.render( <App/>)