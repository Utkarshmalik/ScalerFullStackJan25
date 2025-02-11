import UnAuthenticated from "../Pages/UnAuthenticated";

// A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. It is a function that takes a component as input and returns a new enhanced component.


function AuthHoc(props){

       const isLoggedIn = JSON.parse(localStorage.getItem("token"));
    
        if(!isLoggedIn){
            return <UnAuthenticated/>
        }
        

    return <div>

        {props.children}

    </div>

}

export default AuthHoc;


// Why Use HOCs?
// HOCs are primarily used for:

// Code Reusability – Share logic across multiple components.
// Cross-Cutting Concerns – Logging, analytics, authentication, etc.
// Conditional Rendering – Show or hide components based on props or state.
// Props Manipulation – Modify, add, or filter props before passing them to a component.