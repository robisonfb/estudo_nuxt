export default ({redirect}) => {
  const loggedIn = false
  if(!loggedIn){
    return redirect('/');
  }
}
