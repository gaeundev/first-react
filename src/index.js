import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 여기 쓰인 App 이라는 글자와 render 안에 있는 <App /> 이라는 글자가 같아야 함
// ./App 은 파일명! .js가 생략된 것
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
