import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// вывод из этого урока: (работали с app.js и employees-list)
// 1) реакт обновляет только те интерфейсы которые дейстивительно изменились
// 2) в этом ему помогает алгоримт согласования и сравнивать старые компиии dom-дерева
// 3) при работе со списком одинаковых сущностей используйте атрибут key (правильная работа алгоритма и ускорение
// вашего приложения), чаще всего перебор в виде map

