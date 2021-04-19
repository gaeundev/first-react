import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc,
        };
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e) {
        // [] 대괄호 문법은 js 의 새로운 문법
        // e.target.name 은 태그의 name 값을 가지고 오는 것
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        console.log('UpdateContent Render');
        console.log(this.props.data);
        return (
            <article>
                <h2>update</h2>
                <form
                    action="/create_process"
                    method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                        alert('Submit!!!!');
                    }.bind(this)}
                >
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            // Warning: You provided a `value` prop to a form field without an `onChange` handler.
                            // This will render a read-only field.
                            // If the field should be mutable use `defaultValue`.
                            // Otherwise, set either `onChange` or `readOnly`.
                            // value 옵션에 this.props.data.title 을 때려박으면 읽기모드가 되어 수정할 수 없게 된다.
                            // value={this.props.data.title}
                            value={this.state.title}
                            onChange={this.inputFormHandler}
                        ></input>
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="description"
                            value={this.state.desc}
                            onChange={this.inputFormHandler}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;
