import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useActions } from '../components/hooks/useActions'
import { useTypedSelector } from '../components/hooks/useTypedSelector'
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
const todo: NextPage<{ data: MyTypes }> = ({ data }) => {
  // const [statetitle, setstatetitle] = useState('')

  const { addItem } = useActions()
  const { card } = useTypedSelector((state) => state)

  useEffect(() => {
    addItem(data)
  }, [])

  return (
    <div>
      <Head>
        <title>about</title>
      </Head>
      <div>
        <h2>add</h2>
        <form>
          <input
            type='text'
            placeholder='title'
            // value={statetitle}
            // onChange={(e) => setstatetitle(e.target.value)}
          />
          <button onClick={() => addItem(data)}>send</button>
        </form>
        <br />
      </div>
      {data ? (
        <div>
          {data?.map((el: any) => (
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
