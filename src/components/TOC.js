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
                    {/* 첫번째 방법. data- 라는 접두사로 시작하는 속성을 사용한다. */}
                    {/* <a
                        href={'/content/' + data[i].id}
                        data-id={data[i].id}
                        onClick={(e) => {
                            e.preventDefault();
                            // e.target 은 e가 속한 태그를 찾아준다.
                            // data- 접두사로 시작되는 속성은 이벤트.target.dataset으로 접근이 가능하다.
                            // 즉 data-id={data[i].id} 로 id 값을 넣어주고, target.dataset으로 그 값을 가져와 사용하는 것
                            this.props.onChangePage(e.target.dataset.id);
                        }}
                    > */}
                    {/* 두번째 방법. bind의 인자값을 사용한다. */}
                    <a
                        href={'/content/' + data[i].id}
                        onClick={function (id, e) {
                            // 2. 즉 id = data[i].id 인 것...
                            e.preventDefault();
                            this.props.onChangePage(id);
                        }.bind(this, data[i].id)} // 1. 여기서 쓰인 this 다음의 인자값들은 function의 첫번째 인자값으로 들어간다.
                        // 3. 만약 .bind(this, data[i].id, data[i].content) 이런식으로 인자값이 늘어난다면
                        // function (id, content, e) {} 이렇게 순서대로 나열하면 해당 인자값을 사용할 수 있다.
                    >
                        {data[i].title}
                    </a>
                </li>
            );
            i++;
        }
        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}

// 이 파일을 가져다 쓰는 곳에서 TOC class를 사용하도록 만든 것
export default TOC;
