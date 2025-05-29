import React, { useState } from 'react';
   import Login from './Login';
   import Product from './Product';

   function App() {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     const handleLogin = (username, password) => {
       // Perform login logic here
       if (username === 'user' && password === 'password') {
         setIsLoggedIn(true);
       } else {
         alert('Invalid credentials');
       }
     };

     return (
       <div>
         {isLoggedIn ? <Product /> : <Login onLogin={handleLogin} />}
       </div>
     );
   }

   export default App;