import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Counter from './components/Counter';
import Subject from './components/Subject';
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
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={() => {
                        this.setState({ mode: 'read' });
                    }}
                ></Subject>
                <TOC data={this.state.contents}></TOC>
                {/* Counter Component에서 .bind 없이 this를 사용할 수 있는 방법으로 구현해보았다. */}
                <Counter />
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
