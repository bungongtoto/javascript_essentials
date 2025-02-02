const number = 67789930.324


const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
}

console.log(formatNumber(number));