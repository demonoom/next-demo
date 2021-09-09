import Son from '../../components/Son'

const TestStyle = () => (
    <>
        <h1>styled-jsx演示</h1>
        <Son/>
        <style jsx>
            {`
                h1 {
                    color: red
                }
            `}
        </style>
    </>
)

export default TestStyle
