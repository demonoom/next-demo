import fetch from 'isomorphic-unfetch'

const FetchTest = (props) => (
    <div>
        <h1>获取页面数据</h1>
        {
            props.movieLis.map(item => (
                <li key={item.id}>{item.title}</li>
            ))
        }
    </div>
)

// 使用异步静态方法getInitialProps获取数据，此静态方法能够获取所有的数据，并将其解析成一个javascript
// 对象，然后将其作为属性附加到props对象上

// 当页面初次加载时，`getInitialProps`只会在服务端执行一次。`getInitialProps`只有在路由切换的时候（如`Link`组件跳转或命名式路由跳转）时，客户端的才会被执行。

// 注意：getInitialProps **不能** 在子组件上使用，只能使用在`pages`页面中。
FetchTest.getInitialProps = async function (context) {
    console.log(context);
    let res = await fetch('http://localhost:3301/in_theaters')
    let data = await res.json()
    console.log(data);
    // getInitialProps方法必须返回一个对象
    return {
        movieLis: data
    }
}

export default FetchTest
