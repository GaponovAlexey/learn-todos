import { NextPage } from 'next'
import Head from 'next/head'
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

const todo: NextPage<{ data: MyTypes[] }> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>about</title>
      </Head>
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

export default todo
