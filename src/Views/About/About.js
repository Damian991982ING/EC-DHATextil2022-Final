import React from "react";
import img1 from "../../assets/Hiladora.jpg";
import img2 from "../../assets/Bobinas.jpg";
import img3 from "../../assets/Estrusora.jpg";
import AboutLogo from "../../assets/AboutLogo.png";


const About=()=>{
    return(
        <>
        <div className="container">
             <div className="py-5 text-center">
                <img className="mb-4 d-block mx-auto" src={AboutLogo} alt="checkout logo" width={72} height={72}/>
                <h2>About us</h2>
                <p className="lead">
                DHATextil is a company dedicated to the manufacture of polyamide, polyester and acrylic industrial textile thread spools. The manufacture is carried out through two conventional polymerization and plasma polymerization manufacturing systems.
                </p>
             </div>
        </div>
        <div className="card-group">
            <div className="card">
                <img src={img1} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Spinning</h5>
                    <p className="card-text">
                    A spinning machine is equipment used to spin fibers such as wool, linen, or cotton into yarn, yarn, and related materials. Spinning machines come in a wide variety of shapes and sizes. Spinning machines are behind many industrial processes involving fiber as they are used to process fiber so it can be used to make things like cloth. A spinning machine for industrial use can be quite large and very expensive, while smaller hobby machines operate on a much smaller scale.
                    </p>
                </div>
            </div>

            <div className="card">
                <img src={img2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Coil</h5>
                    <p className="card-text">
                    the objective of textile winding is to gather the threads that have been previously formed in the spinning process, depending on the type of thread, it will be made with some tensions or others, always taking into account the resistance capacity of the threads so as not to end up breaking it. or unraveling it.
                    Once the created thread has been obtained, it must be conditioned and for this 4 types of conditioning are carried out, winding being one of them favoring the subsequent process, the phases prior to weaving.
                    Yarn winding is usually done for yarns that are used as filler yarns or weft yarns (the yarns that run across the fabric).
                   
                    </p>


                </div>
            </div>

            <div className="card">
                <img src={img3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Extruder</h5>
                    <p className="card-text">
                    The process of melting plastic in an extruder, passing the molten plastic through a melt pump, and then forcing it into a die block that has several very small holes. This matrix block is called spinnerets. The plastic flows down the die, where it quickly tempers, forming a continuous filament. Small diameter fibers cool in air, but larger diameter monofilament requires cooling in water. The fiber is then drawn several times (according to the original fiber length) in order to increase molecular orientation and tensile strength. Additional downstream processes may include cutting, pressing, and applying process chemicals. Typical plastics used for wiring are PE, PP, nylon and polyester.
                    </p>
                </div>
            </div>
        </div>
        <br/>

        <div className="card border-dark mb-3">
            <div className="card-header">Mission</div>
            <div className="card-body text-dark">
                 <h5 className="card-title">the company's mission</h5>
                 <p className="card-text">
                 Develop high-quality textile and innovative products that meet the needs of our customers, always providing an excellent service, training and developing the skills of our work team, guiding continuous improvement in our processes in order to achieve profitability that allows the growth of our company as well as that of our collaborators.

                 </p>
            </div>
        </div>

        <div className="card border-dark mb-3">
            <div className="card-header">View</div>
            <div className="card-body text-dark">
                <h5 className="card-title">the company's view</h5>
                <p className="card-text">
                To be a leading textile company recognized for its innovation, quality and service at a national level, always promoting itself as an opportunity to partner with any industry and describing itself as an extraordinary place to work.
                 
                </p>
            </div>
        </div>



        <br/>
        
        
        
            


        

        </>

    )
}
export default About;