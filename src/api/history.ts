export default async () => {
  const response = await fetch('https://dummyjson.com/users')
  return response.json()
}