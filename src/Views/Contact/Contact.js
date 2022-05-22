import React from 'react';
import ContactLogo from "../../assets/ContactLogo.svg";

const Contact=()=>{
    return(
        <>
        <div className="container">
             <div className="py-5 text-center">
                <img className="mb-4 d-block mx-auto" src={ContactLogo} alt="checkout logo" width={72} height={72}/>
                <h2>Contact</h2>
                <p className="lead">
                Contact form where customers can communicate with our vendors and advisors.
                </p>
             </div>
        </div>
        <address>
            One Microsoft Way<br />
            Redmond, WA 98052-6399<br />
            <abbr title="Phone">P:</abbr>
            425.555.0100
        </address>

        <address>
            <strong>Support:</strong>   <a href="mailto:Support@example.com">Support@example.com</a><br />
            <strong>Marketing:</strong> <a href="mailto:Marketing@example.com">Marketing@example.com</a>
        </address>
        
        </>
    )

}

export default Contact;
