import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './App.css';

class App extends Component {
    // component 가 실행될 때 constructor가 제일 먼저 실행되면서 초기화를 담당한다.
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode: 'welcome',
            selected_content_id: 1,
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
            _desc,
            _article = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
        } else if (this.state.mode === 'read') {
            let i = 0;
            while (i < this.state.contents.length) {
                let data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
        } else if (this.state.mode === 'create') {
            _article = (
                <CreateContent
                    onSubmit={function (_title, _desc) {
                        // add content to this.state.contents
                        this.max_content_id = this.max_content_id + 1;
                        /* [push 함수와 concat 함수의 차이]
                        push 는 배열을 모두 바꾸면서 원소를 추가한다.
                        let arr = [1, 2];
                        arr.push(3);
                        console.log(arr) -> [1, 2, 3];
                        concat 은 배열을 바꾸지 않고, 원소를 추가한다.
                        let arr2 = [1, 2];
                        let result = arr2.concat(3);
                        console.log(arr2) -> [1, 2];
                        console.log(result) -> [1, 2, 3]; */
                        // this.state.contents.push({
                        //     id: this.max_content_id,
                        //     title: _title,
                        //     desc: _desc,
                        // });
                        let _contents = this.state.contents.concat({
                            id: this.max_content_id,
                            title: _title,
                            desc: _desc,
                        });
                        this.setState({
                            contents: _contents,
                        });
                        console.log(_title, _desc);
                    }.bind(this)}
                ></CreateContent>
            );
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={() => {
                        this.setState({ mode: 'welcome' });
                    }}
                ></Subject>
                <TOC
                    onChangePage={(id) => {
                        this.setState({
                            mode: 'read',
                            selected_content_id: Number(id),
                        });
                    }}
                    data={this.state.contents}
                ></TOC>
                <Control
                    onChangeMode={function (_mode) {
                        this.setState({
                            mode: _mode,
                        });
                    }.bind(this)}
                ></Control>
                {_article}
            </div>
        );
    }
}

export default App;
