import React, { Component } from 'react';

class TOC extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
        console.log(data);
        let i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a href={'/content/' + data[i].id}>{data[i].title}</a>
                </li>
            );
            i++;
        }
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

// 이 파일을 가져다 쓰는 곳에서 TOC class를 사용하도록 만든 것
export default TOC;
