import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            // onClick 이벤트가 발생했을때,
                            // props를 통해 전달된 직접만든 onChangePage 함수가 호출된다.
                            this.props.onChangePage();
                        }}
                    >
                        {this.props.title}
                    </a>
                </h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;
