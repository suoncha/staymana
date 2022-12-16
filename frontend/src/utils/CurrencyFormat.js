export function currencyFormat(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ" + "";
}
