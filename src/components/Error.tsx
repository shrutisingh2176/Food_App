 import {useRouteError,isRouteErrorResponse} from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err); 
    if (isRouteErrorResponse(err)){  
    return (
        <div>
            <h1>Oops!!!!</h1>
            <h2> Something went wrong!!! </h2>
            <h3>
                {err.status}: {err.statusText}
            </h3>
        </div>
    )
}};
export default Error;