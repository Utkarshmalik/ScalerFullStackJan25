import useFetch from "../hooks/useFetch";

function Movies(){

    const {data,error,loading} = useFetch("https://jsonplaceholder.typicode.com/todos/10");


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
          <h1>Data:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );


}

export default Movies;