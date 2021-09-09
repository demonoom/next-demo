import Link from 'next/link'

const Techs = [
    {name: 'Jacks1', id: 1},
    {name: 'Jacks2', id: 2},
    {name: 'Jacks3', id: 3},
]

const Teacher = () => (
    <div>
        <h1>Teacher</h1>

        <ul>
            {
                Techs.map(item => (
                    <li key={item.id}>
                        {/*可以通过Link组件的as属性给路径取别名*/}
                        <Link
                            as={`/next-route/teacher/${item.id}`}
                            href={`/next-route/teacher/detail?id=${item.id}`}>
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default Teacher
