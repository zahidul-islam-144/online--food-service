import React from 'react';
import faqImg from '../../images/faq-people.png'

const FAQ = () => {
    return (
        <div>
            <section className="container my-5">
            <h1 className="text-center font-margin heading">Frequently Asked <span className="orange-color">Questions</span></h1>
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <img src={faqImg} className="img-fluid p-4" alt=""/>
                </div>
                <div className="col-lg-6">
                    <div className="row gy-2">

                        {/* <!-- accordian 1 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingZero">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseZero" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseZero">
                                            <h5 className="text-dark">How does Ana-delivery differ from other meal delivery services?</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseZero" className="accordion-collapse collapse show"
                                        aria-labelledby="panelsStayOpen-headingZero">
                                        <div className="accordion-body">
                                        We are a custom meal delivery service featuring a French trained Personal Chef and Nutritionist preparing all of your meals. We specialize in Keto, Paleo and Healthy Diet meal plans that we will customize to help you achieve you health and fitness goals whether it’s weight loss, health issues, sports training etc.

 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 1 --> */}


                        {/* <!-- accordian 2 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            <h5 className="text-dark">Where do you deliver?</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            <p>We currently deliver to the greater Los Angeles area and Orange county.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 2 --> */}


                        {/* <!-- accordian 3 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            <h5 className="text-dark">What is the delivery schedule?</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>We deliver to your door 3 times per week with deliveries on Sunday-Tuesday-Thursday late afternoon, early evening. The meals are packed in a thermal bag with ice packs that keep the meals fresh for 4 hours.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 3 --> */}


                        {/* <!-- accordian 4 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                            <h5 className="text-dark">How do I choose the meal plan that’s right for me? </h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <p>Our  meals are all-natural and hand prepared from scratch in our 100% gluten-free kitchen:Keto Diet
Low carb and high saturated fat diet designed for rapid weight loss, greater mental clarity and increased energy and stamina.
Paleo Diet:Low carb, dairy and grain free diet designed for weight loss, increased energy and lean muscle.
Healthy Diet:Low carb and lean protein diet designed for weight loss and overall health and vitality</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 4 --> */}

                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default FAQ;