
import {render, screen, fireEvent} from "@testing-library/react";
import Counter from "../Components/Counter";

//when you render your page : count value should be 0 

test("render intital count to be 0",()=>{
    render(<Counter/>);

    const counterText = screen.getByText("Count: 0");

    expect(counterText).toBeInTheDocument();
})




//when you click increment : count value should be 1 


test("Increment Clicked : Counter Value should be changed to 1",()=>{
   
    render(<Counter/>);
    const counterText = screen.getByText("Count: 0");
    expect(counterText).toBeInTheDocument();

    //get a button from the screen 
    const incrementButton = screen.getByText("Increment");

    //click a element/button
    fireEvent.click(incrementButton);


    const updatedCounterText = screen.getByText("Count: 1");
    expect(updatedCounterText).toBeInTheDocument();

})

test("Increment Clicked : Counter Value should be changed to 1",()=>{
   
    render(<Counter/>);
    const counterText = screen.getByText("Count: 0");
    expect(counterText).toBeInTheDocument();

    //get a button from the screen 
    const incrementButton = screen.getByText("Increment");

    //click a element/button
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);


    const updatedCounterText = screen.getByText("Count: 2");
    expect(updatedCounterText).toBeInTheDocument();

})


//when you click decrement : count value should be 0


test("when you click decrement : count value should be 0",()=>{
   
    render(<Counter/>);
    const counterText = screen.getByText("Count: 0");
    expect(counterText).toBeInTheDocument();

    //get a button from the screen 
    const decrementButton = screen.getByText("Decrement");

    //click a element/button
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);


    const updatedCounterText = screen.getByText("Count: 0");
    expect(updatedCounterText).toBeInTheDocument();

})


// When i chilck increment 3 times and then click Reset : Count : 0 



test("Reset Functionality",()=>{
   
    render(<Counter/>);
    const counterText = screen.getByText("Count: 0");
    expect(counterText).toBeInTheDocument();


    //get a button from the screen 
        const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");
    const resetButton = screen.getByText("Reset");


    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    
    var updatedCounterText = screen.getByText("Count: 3");
    expect(updatedCounterText).toBeInTheDocument();

    //click a element/button
    fireEvent.click(decrementButton);


    updatedCounterText = screen.getByText("Count: 2");
    expect(updatedCounterText).toBeInTheDocument();



    fireEvent.click(resetButton);
    

    updatedCounterText = screen.getByText("Count: 0");
    expect(updatedCounterText).toBeInTheDocument();



})
