import React from 'react'

const Contact = () => {
    return (
        <div id="main" className="site-main">
            <div id="main-content" className="single-page-content">
                <div id="primary" className="content-area">
                    <div className="page-title">
                        <h1>Contact</h1>
                        <div className="page-subtitle">
                            <h4>Get in Touch</h4>
                        </div>
                    </div>

                    <div
                        id="content"
                        className="page-content site-content single-post"
                        role="main"
                    >
                        <div className="row">
                            <div className=" col-xs-12 col-sm-4 ">
                                <div id="info_list_1" className="info-list-w-icon">
                                    <div className="info-block-w-icon">
                                        <div className="ci-icon">
                                            <i className="linecons linecons-phone"></i>
                                        </div>
                                        <div className="ci-text">
                                            <h4>415-832-2000</h4>
                                            <p>
                                                Duis erat leo, aliquam laoreet fringilla quis,
                                                pretium vitae dui.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="info-block-w-icon">
                                        <div className="ci-icon">
                                            <i className="linecons linecons-location"></i>
                                        </div>
                                        <div className="ci-text">
                                            <h4>San Francisco</h4>
                                            <p>
                                                Duis erat leo, aliquam laoreet fringilla quis,
                                                pretium vitae dui.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="info-block-w-icon">
                                        <div className="ci-icon">
                                            <i className="linecons linecons-mail"></i>
                                        </div>
                                        <div className="ci-text">
                                            <h4>hello@example.com</h4>
                                            <p>
                                                Duis erat leo, aliquam laoreet fringilla quis,
                                                pretium vitae dui.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-xs-12 col-sm-8 ">
                                <div className="block-title">
                                    <h2>How Can I Help You?</h2>
                                </div>

                                <form
                                    id="contact_form"
                                    className="contact-form"
                                    action="https://lmpixels.com/demo/leven-html-new/full-width-light/contact_form/contact_form.php"
                                    method="post"
                                    novalidate="true"
                                >
                                    <div className="messages"></div>

                                    <div className="controls two-columns">
                                        <div className="fields clearfix">
                                            <div className="left-column">
                                                <div className="form-group form-group-with-icon">
                                                    <input
                                                        id="form_name"
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Full Name"
                                                        required="required"
                                                        data-error="Name is required."
                                                    />
                                                    <div className="form-control-border"></div>
                                                    <div className="help-block with-errors"></div>
                                                </div>

                                                <div className="form-group form-group-with-icon">
                                                    <input
                                                        id="form_email"
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                        required="required"
                                                        data-error="Valid email is required."
                                                    />
                                                    <div className="form-control-border"></div>
                                                    <div className="help-block with-errors"></div>
                                                </div>

                                                <div className="form-group form-group-with-icon">
                                                    <input
                                                        id="form_name"
                                                        type="text"
                                                        name="subject"
                                                        className="form-control"
                                                        placeholder="Subject"
                                                        required="required"
                                                        data-error="Subject is required."
                                                    />
                                                    <div className="form-control-border"></div>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="right-column">
                                                <div className="form-group form-group-with-icon">
                                                    <textarea
                                                        id="form_message"
                                                        name="message"
                                                        className="form-control"
                                                        placeholder="Message"
                                                        rows="7"
                                                        required="required"
                                                        data-error="Please, leave me a message."
                                                    ></textarea>
                                                    <div className="form-control-border"></div>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            type="submit"
                                            className="button btn-send disabled"
                                            value="Send message"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact