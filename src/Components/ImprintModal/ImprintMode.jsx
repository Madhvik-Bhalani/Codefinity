import React from 'react';

function ImprintModal({ imprintRef }) {
    return (
        <>
            {/* Button to Open the Modal */}
            <button
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#imprintModal"
                ref={imprintRef}
            >
                Imprint
            </button>

            {/* Modal Structure */}
            <div
                className="modal fade"
                id="imprintModal"
                tabIndex="-1"
                aria-labelledby="imprintModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div
                            className="modal-header"
                        >
                            <h5 className="modal-title" id="imprintModalLabel">
                                Imprint
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body" style={{ padding: '20px' }}>
                            <h4>Administration</h4>
                            <p className='m-0 p-0'>Team Codefinity</p>
                            <p className='m-0 p-0'>Str. der Nationen 62<br />09111, Chemnitz, Germany</p>
                            
                            <p className='m-0 p-0'>
                                Mobile:{' '}
                                <a href="tel:+4917657616606" style={{ color: 'black', textDecoration: 'none' }}>
                                    +49 185966 57797
                                </a>
                            </p>
                            <p className='m-0 p-0'>
                                <a
                                    href="mailto:info.codefinity@gmail.com"
                                    style={{ color: 'black', textDecoration: 'none' }}
                                >
                                    info.codefinity@gmail.com
                                </a>
                            </p>


                            <h4 className='mt-4'>Responsible person</h4>
                            <p>Madhvik Bhalani</p>

                            <h4>Disclaimer</h4>
                            <p>
                                This website does not belong to a real company. It is a{' '}
                                <em>Planspiel Web Engineering</em> project at the Technical University of Chemnitz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImprintModal;
