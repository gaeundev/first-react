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
                        this.max_content_id = this.max_content_id + 1;
                        // Array.from : 배열을 복제한다. ( 단, 복제한 배열과 복제된 배열은 다르다.)
                        // Object.assign : 객체를 복제한다. ( 단, 복제한 객체과 복제된 객체은 다르다.)
                        let newContents = Array.from(this.state.contents);

                        // 나중에 immutable-js 라는 라이브러리를 찾아보기!
                        // immutable-js 라는 라이브러리는 무조건 원본을 바꾸지 않고 새로 만들어 복제한다.
                        // 그렇기 때문에 위 라이브러리를 사용하면 코드의 일관성을 줄 수 있는 편리함이 있다.

                        newContents.push({
                            id: this.max_content_id,
                            title: _title,
                            desc: _desc,
                        });
                        this.setState({
                            contents: newContents,
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
