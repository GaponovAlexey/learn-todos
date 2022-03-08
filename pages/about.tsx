import { NextPage } from 'next'
import { MyTypes } from '../components/types'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  return {
    props: {
      data: data,
    },
  }
}

const about: NextPage<{ data: MyTypes[] }> = ({ data }) => {
  return (
    <div>
      {data ? (
        <div>
          {data.splice(0, 10).map((el) => (
            <div>{el.title}</div>
          ))}
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  )
}

export default about
