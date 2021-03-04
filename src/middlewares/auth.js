function auth(to, from) {
  console.log({ to, from })
  return { name: "login" }
}

export default auth