
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom';

//componenten!
import Users from './Users';
import HomePage from './HomePage';
import hello from './images/hello.jpg';
import User from './User';
import PostForm from './PostForm.js';

//user.location
//user.uuid ; unique id
//user.picture.medium ; med quality ie
//user.name -> user.first+user.last
//user.email (for login functionality)
//user.posts >> stretch --> likes

  let admin = {
    location: {state:'Colorado'},
    login: {uuid: '2501'},
    picture: {medium: hello},
    name: {first:'Claire Harmon'},
    email: 'dg@dgisonline.com',
    posts: 'too many luv log off'
  }

  let post ={
    title:'',
    content:''
  }

function App() {
  //first, we need state!

  let [users, setUsers] = useState([admin]);
  let [formValues,setFormValues] = useState(post);
  let [posts, setPosts] = useState([post]);

  let change =(evt)=>{
    setFormValues({...formValues, [evt.target.name]: evt.target.value})
  }

  let submit=(e)=>{
    e.preventDefault();
    setPosts([...posts, formValues]);
  }

  useEffect(()=>{
    axios.get('https://randomuser.me/api/?results=5')
      .then( res => {
        console.log(res.data.results);
        setUsers([...users, ...res.data.results]);
      }).catch(err=>{
        console.error(err);
      })
  },[]) //eslint-disable-line 
  // --> empty dependancy array, 'only do this on first load of component'. Eslint is a liar, removing this breaks the component, adding users obj to it causes infinite loop of calls.

  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/'>Homepage</Link>
          <Link to='/users'>Friends Page</Link>
          <Link to='/post'>Post some Nonsense!</Link>
        </nav>
      </header>
      <Route path='/post'>
        <PostForm change={change} submit={submit} post={formValues} posts={posts}/>
        </Route>
      <Route path='/users/:id'>
        <User users={users}/>
        </Route>
      <Route exact path='/users'>
        <Users users={users}/>
        {/*Users is from the component name, users= is from the variable; users in curlies is from state */}
      </Route>
     
      <Route exact path='/'>
        <HomePage />
      </Route>
      
    </div>
  );
}

export default App;
