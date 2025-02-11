import {render, screen} from "@testing-library/react";
import Greeting from "../Components/Greeting";

test("Test when prop is not passed",()=>{

    //render a greeting component 
    render(<Greeting/>);

    const greetingElement = screen.getByText('Hello World ! How are you doing ?');

    expect(greetingElement).toBeInTheDocument();

})


test("Test when John is provided",()=>{

    //render 
    render(<Greeting name="John" />);

    const greetingElement = screen.getByText("Hello , John ! How are you doing ?");


    expect(greetingElement).toBeInTheDocument();



})





// The render() function takes a React component as an argument and renders it into a virtual DOM.

// The screen.getByText() function is a query function provided by React Testing Library that is used to find an element in the rendered component based on its text content. 
