import React from 'react';

function Footer() {
    return ( 
    <footer className='footer mt-5' style={{backgroundColor:"rgb(250, 250, 250)"}}>
        <div className='container border-top mt-8'>
            <div className="row mt-5">
                <div className="col">
                    <img src="media/images/logo.svg" alt="" style={{width:"50%"}} />
                    <p> &copy; 2010 - 2025, Stoxera Broking Ltd. All rights reserved.</p>
                </div>

                <div className="col mb-2">
                    <p style={{fontSize: "1.125rem", fontWeight:"500" }}>Account</p>
                    <div className='mb-2 d-flex flex-column '>
                        <a href="" className="footer-a" >Open demat account</a><br />
                        <a href="" className="footer-a">Minor demat account</a><br />
                        <a href="" className="footer-a">NRI demat account</a><br />
                        <a href="" className="footer-a">Commodity</a><br />
                        <a href="" className="footer-a">Dematerialisation</a><br />
                        <a href="" className="footer-a">Fund transfer</a><br />
                        <a href="" className="footer-a">MTF</a><br />
                        <a href="" className="footer-a">Referral program</a>
                    </div>    
                </div>

                <div className="col">
                    <p style={{fontSize: "1.125rem", fontWeight:"500"}}>Support</p>
                    <div className= 'mb-2 d-flex flex-column'>
                        <a href="" className="footer-a">Contact us</a><br />
                        <a href="" className="footer-a">Support portal</a><br />
                        <a href="" className="footer-a">How to file a complaint?</a><br />
                        <a href="" className="footer-a">Status of your complaints</a><br />
                        <a href="" className="footer-a">Bulletin</a><br />
                        <a href="" className="footer-a">Circular</a><br />
                        <a href="" className="footer-a">Z-Connect blog</a><br />
                        <a href="" className="footer-a">Downloads</a>
                    </div>
                </div>

                < div className="col">
                    <p style={{fontSize: "1.125rem", fontWeight:"500"}}>Company</p>
                    <div className= 'mb-2 d-flex flex-column'>
                        <a href="" className="footer-a">About</a> <br />
                        <a href="" className="footer-a">Philosophy</a> <br />
                        <a href="" className="footer-a">Press & media</a> <br />
                        <a href="" className="footer-a">Careers</a> <br />
                        <a href="" className="footer-a">Stoxera Cares (CSR)</a> <br />
                        <a href="" className="footer-a">Stoxera.tech</a> <br />
                        <a href="" className="footer-a">Open source</a> <br />
                    </div>
                </div>

                <div className="col">
                    <p style={{fontSize: "1.125rem", fontWeight:"500"}}>Quick Links</p>
                    <div className= 'mb-2 d-flex flex-column'>
                        <a href="" className="footer-a">Upcoming IPOs</a> <br />
                        <a href="" className="footer-a">Brokerage charges</a> <br />
                        <a href="" className="footer-a">Market holidays</a> <br />
                        <a href="" className="footer-a">Economic calendar</a> <br />
                        <a href="" className="footer-a">Calculators</a> <br />
                        <a href="" className="footer-a">Markets</a> <br />
                        <a href="" className="footer-a">Sectors</a> 
                    </div>
                </div>
            </div>

            <div className='mt-5 text-small text-muted'  style={{fontSize:"14px"}}>
            <p> stoxera Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Stoxera Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Stoxera Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Stoxera Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@Stoxera.com, for DP related to dp@Stoxera.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p> Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p> Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

            <p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p> Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p> "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Stoxera and offering such services, please create a ticket here.</p>
            </div>
        </div>
    </footer>
     );
}

export default Footer;