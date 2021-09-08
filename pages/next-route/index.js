// 1.1 从next/link中引入Link组件
import Link from 'next/link'
// 2.1 从next/router中引入Router对象
import Router from 'next/router'

const NextRoute = () => (
    <div>
        {/*
            1.2使用Link组件，给它添加href属性，它的值表示需要跳转的路径
            注意：
                1 不能直接在Link组件中写字符串，应该用一个标签包裹起来。这个标签可以是任意
                  一个标签。但是Link组件中只能有一个子元素，不能包含多个
                2 不能直接给Link组件设置样式，因为它是一个HOC（高阶组件），给它设置样式无效，
                  可以给Link组件的子元素设置样式
        */}
        <Link href='/next-route/teacher'>
            <button style={{color: 'red'}}>teacher</button>
        </Link>
        <Link href={{
            pathname: '/next-route/teacher',
            query: {
                id: 1
            }
        }}>
            <button style={{color: 'red'}}>teacherObj</button>
        </Link>
        <br/>
        <span onClick={() => Router.push('/next-route/student')}>student</span>
        <span onClick={() => Router.push({
            pathname: '/next-route/student',
            query: {
                id: 3
            }
        })}>student</span>
        <h1>next 路由学习</h1>
    </div>
)

export default NextRoute
