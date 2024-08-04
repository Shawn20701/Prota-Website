import './error-page.css'
import { useRouteError } from "react-router-dom";
import  MyDog from '../assets/my-dog.JPG';
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <div id='error-page'>
            <h1 id='error-page-header'>Oops an error occurred!</h1>
            <h2 className='error-page-subheader'>404 Not Found</h2>
            <h2 className='error-page-subheader'>Here&#39;s a picture of a dog while you wait for the issue to be resolved</h2>
            <div id='img-error-page'><img src={MyDog}/></div>

        </div>
    )
}
