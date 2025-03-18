import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetShowDetails } from "../../api/shows";
import Navbar from "../../components/Navbar";
import { Button, Card, Col, message, Row } from "antd";
import { all } from "axios";
import StripeCheckout from 'react-stripe-checkout';
import { createBooking, makePayment } from "../../api/bookings";

function BookShow(){

    const params = useParams();
    const showId = params.showId;

    const [showDetails, setShowDetails] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        fetchShowData();
    },[])

    const fetchShowData = async ()=>{
        try{

            const showResponse = await GetShowDetails(showId);

            if(showResponse.success){
                setShowDetails(showResponse.data);
            }

        }catch(err){

        }
    }


    const onToken = async (token)=>{
        
        console.log("Token generated ", token.id);

        try{

            const paymentsResponse = await makePayment({token:token.id,amount:selectedSeats.length * showDetails.ticketPrice});


            if(paymentsResponse.success){

                message.success(paymentsResponse.message);

                const bookingResponse = await createBooking({show:showId,transactionId:paymentsResponse.data,seats:selectedSeats});

                if(bookingResponse.success){
                    message.success(bookingResponse.message);

                    setTimeout(()=>{
                        navigate("/");
                    },1000)
                }

                

            }

        }catch(err){


        }


    }

    const getSeats = ()=>{

        const totalSeats = showDetails.totalSeats;
        const columns = 12;

        const rows = Math.ceil(totalSeats/columns);


        //0 to rows-1 

        let allRows = [];

        for(let i=0;i<rows;i++){
            allRows.push(i);
        }


        let allColumns = [];

        for(let j=0;j<columns;j++){
            allColumns.push(j);
        }

        console.log(allRows);
        console.log(allColumns);

        const handleSeatSelect = (seatNumber)=>{

            
            if(!selectedSeats.includes(seatNumber)){
                setSelectedSeats([...selectedSeats, seatNumber]);
                return;
            }

            const updatedSeats = selectedSeats.filter((seat)=>seat!=seatNumber);
            setSelectedSeats(updatedSeats);

        }

        return <div>

            <div className="seat-ul">
                {
                    allRows.map((row)=>{

                        return <div className="seat-ul" >
                               {


                                allColumns.map((col)=>{
                                    let seatNumber = row*columns + col + 1;
                                    let seatClass = "seat-btn";

                                    if(showDetails.bookedSeats.includes(seatNumber)){
                                        seatClass+= " booked";
                                    }

                                    if(selectedSeats.includes(seatNumber)){
                                        seatClass+= " selected"
                                    }

                                    if(seatNumber<=totalSeats){
                                    return <button onClick={()=>handleSeatSelect(seatNumber)}  className={seatClass}> {seatNumber} </button>
                                    }
                                })
                               }

                            </div>
                     
                    })
                }

            </div>

            <div className="bottom-card mt-3 max-width-600 mx-auto" >

                <div> Selected Seats : <span> {selectedSeats.join(", ")} </span>  </div>
                <div> Total Price : <span> {selectedSeats.length * showDetails.ticketPrice}</span>   </div>
            </div>


        </div>




    }
    

    return <>

    <Navbar/> 

    {
       !showDetails &&  <div className="ms-3 pt-3">
       <h2> 
           Loading Seat View......
       </h2>
   </div>
    }


    {
        showDetails && <div>

            <Row>

                <Col>

                    <Card
        title= {

            <div>
                <h1> {showDetails.movie.movieName} </h1>
                <p> 
                   {showDetails.theatre.name}, {showDetails.theatre.address}
                </p>
            </div>

        }
        extra={
            <div>

                <div>

                    <h4>  Date : {showDetails.showDate}</h4>

                </div>

                <div>

                <h4>   Time : {showDetails.showTime}</h4>

                </div>


                <div>

                <h4>  Ticket Price : Rs.{showDetails.ticketPrice}</h4>

                </div>


                <div>

                <h4>  Total Seats: {showDetails.totalSeats} | Available Seats: 

                   {showDetails.totalSeats - showDetails.bookedSeats.length}  
                      
                </h4>

                </div>


            </div>



        }
        style={{
            width: "100vw",
        }}
        >
            
            {getSeats()}

        </Card>
                
                </Col>


            </Row>

            {

                selectedSeats.length >0 && 
                <StripeCheckout 
                className="ms-3"
            token={onToken}
            stripeKey="pk_test_51R3pTx2XhG8Zyja1v8IF4hAfqxkQzaMRAx7e9qgGerT89sUC6uDtGw0AGNQRGqNl0N51UYqzpyzn62VuyIluiDin00xHInuBQv"
            
        />

            }


        </div> 
    }
    
    
    </>

}

export default BookShow;



/*

 row=3 col=5 
 
 row * 12 + col + 1

 Seat Number = currentRow * TotalCol + currentCol + 1



*/