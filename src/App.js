import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Counter from './components/Counter';
// import Subject from './components/Subject';
import './App.css';

class App extends Component {
    // component 가 실행될 때 constructor가 제일 먼저 실행되면서 초기화를 담당한다.
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            subject: { title: 'WEB', sub: 'World Wide Web!' },
            welcome: { title: 'Welcome', desc: 'Hello, React!!' },
            contents: [
                { id: 1, title: 'HTML', desc: 'HTML is for information' },
                { id: 2, title: 'CSS', desc: 'CSS is for design' },
                {
                    id: 3,
                    title: 'JavaScript',
                    desc: 'JavaScript is for interactive',
                },
            ],
        };
    }
    render() {
        let _title,
            _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                {/* <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                ></Subject> */}
                <header>
                    <h1>
                        <a
                            href="/"
                            onClick={function (e) {
                                console.log(e);

                                // e가 포함된 태그의 기본적인 동작을 막는 함수.
                                // 여기서는 href 가 동작하지 않게된다.
                                e.preventDefault();

                                // this.state.mode = 'welcome'; // 틀린 문법!
                                // 위와 같이 작성하면 값이 바뀌긴 한다.
                                // 하지만 React 입장에서는 몰래 바뀐 값이다.
                                // React가 이 값이 변경된지 모르기 때문에 render를 다시 호출하지 않는다.
                                // 그렇기 때문에 화면에 나타나지 않는 것!

                                // 이벤트 호출시 state를 변경하고 싶을 때 주의해야할 것

                                // 1. this를 사용하기 위해서는 함수.bind(this)를 해주어야한다.
                                // - 이유 : 이벤트 실행 안의 함수안에서는 this를 사용했을 때,
                                //          component의 자기자신을 가르치지 않으므로 아무값도 세팅되어있지 않다.

                                // 2. React에 맞는 문법을 사용해야 한다.
                                this.setState({ mode: 'welcome' }); // 동적으로 값을 바꾸는 방법
                            }.bind(this)}
                        >
                            {this.state.subject.title}
                        </a>
                    </h1>
                    {this.state.subject.sub}
                </header>
                <TOC data={this.state.contents}></TOC>
                {/* Counter Component에서 .bind 없이 this를 사용할 수 있는 방법으로 구현해보았다. */}
                <Counter />
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
