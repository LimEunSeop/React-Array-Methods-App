const filterCurrencyKR = (amount) =>
  `${amount}원`.replace(/\d(?=(\d{3})+원)/g, '$&,')

export default filterCurrencyKR