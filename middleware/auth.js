export default (context) => {
  if (context.store.state.user.name !== 'mohammad') {
    return context.redirect('/')
  }
}