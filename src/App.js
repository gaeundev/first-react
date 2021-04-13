import React, { Component } from 'react';
import './App.css';

// public/pure.html 로 작성된 파일을 컴포넌트로 만드는 과정
// 컴포넌트를 바라보는 첫번째 시각으로는 '정리정돈'으로 바라보면 좋겠다. - 이고잉

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="1.html">HTML</a>
                    </li>
                    <li>
                        <a href="2.css">CSS</a>
                    </li>
                    <li>
                        <a href="3.javascript">JavaScript</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="world wide web!"></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC></TOC>
                <Content
                    title="HTML"
                    desc="HTML is HyperText Markup Language."
                ></Content>
            </div>
        );
    }
}

export default App;
