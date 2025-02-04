export default function useSpreadNumber(value:number) {

  const RegExp = /\B(?=(\d{3})+(?!\d))/g

  return (value?.toString().replace(RegExp, ','))
  
}
