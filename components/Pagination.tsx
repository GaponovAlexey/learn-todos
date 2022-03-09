let Pagination = ({ countryPerPage, totalCountries, paginate }: any) => {
  const pageNumbers = []

  for (let i = 1; i <= totalCountries / countryPerPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <span>
      {pageNumbers.map((el) => (
        <a href="#!" onClick={() => paginate(el)} key={el}>{el}</a>
      ))}
    </span>
  )
}

export default Pagination
