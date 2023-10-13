import { LeadForm } from './LeadMagnetForm';
import Discount from '../images/lead/Discount.png';

export const LeadMagnet = () => {
    return(
        <div class='lead'>
            <div class='lead-container'>
                <h1 class='lead-title'>
                    Discount for the first order
                </h1>
                <div>
                    <div>
                        <p class='lead-text'>
                            Fill in the form to get the 10% discount on your first purchase
                        </p>
                        <img class='lead-image' src={Discount} alt='discount'/>
                    </div>
                    <LeadForm />
                </div>
            </div>
        </div>
    )
}