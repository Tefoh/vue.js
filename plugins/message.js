export default function(context, inject) {
  inject('message', (message) => console.log({message}))
}