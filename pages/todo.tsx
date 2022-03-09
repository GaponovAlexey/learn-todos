import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useActions } from '../components/hooks/useActions'
import { useTypedSelector } from '../components/hooks/useTypedSelector'
import Pagination from '../components/Pagination'
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
  const [cardDataState, setcardDataState] = React.useState('')

  const [currentPage, setCurrentPage] = React.useState(1)
  const [countryPerPage, setCountryPerPage] = React.useState(10)

  const { card } = useTypedSelector((state) => state)
  const foolCard = card[0] || []
  const { getItem, addTodo, removeItem } = useActions()

  const LastCountryIndex = currentPage * countryPerPage
  const FirstCountryIndex = LastCountryIndex - countryPerPage
  const currentCountry = foolCard.slice(FirstCountryIndex, LastCountryIndex)

  const sendCard = (e: any) => {
    e.preventDefault()
    if (cardDataState.length > 1) {
      addTodo(cardDataState)
      setcardDataState('')
    }
  }

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }
  React.useEffect(() => {
    getItem(data)
  }, [])
  return (
    <>
      <Head>
        <title>todo</title>
      </Head>
      <div>
        <h2>add</h2>
        <form>
          <input
            type='text'
            placeholder='title'
            value={cardDataState}
            onChange={(e) => setcardDataState(e.target.value)}
          />
          <button onClick={sendCard}>send</button>
        </form>

        <br />
      </div>
      {card ? (
        <div>
          {currentCountry?.map((el: any) => (
            <li
              key={el.id}
              className='
              hover:text-amber-500
              flex justify-between py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600'
            >
              {el.title}
              <div
                onClick={() => removeItem({ id: el.id })}
                className='hover:text-red-500 cursor-pointer '
              >
                del
              </div>
            </li>
          ))}
        </div>
      ) : (
        <div>no data</div>
      )}
      <Pagination
        totalCountries={data.length}
        countryPerPage={countryPerPage}
        paginate={paginate}
      />
    </>
  )
}

export default todo
