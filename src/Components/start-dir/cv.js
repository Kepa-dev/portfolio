import React from "react";
import "./cv.css";
import me from "./photo/me.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';

let CV = () => {
    return (
        <div className=" justify-content-center mt-3 ">
            <div className="mb-5 col-11 m-auto shadow-lg">
                <div className="w-100 bg-success  ">
                    <h1 className="py-3 ps-3 m-0">Łukasz Kępa</h1>
                </div>
                <div className=" mb-3w-100 d-flex ">
                    <div className="col-8 bg-light">
                        <div className="w-100">
                            <label className="h3 fw-bold m-3"><i class="bi bi-mortarboard-fill"></i> Wykształcenie</label>
                            <p className="h6 m-2 ms-5">Aktualnie </p>
                            <p className="h5 m-3 ms-4">Piąte publiczne technikum elektryczne im.Tadeusza Kościuszki w Opolu,<br/> Profil technik Informatyk, klasa Trzecia z Czterech</p>
                        </div>
                        <div className="w-100">
                            <label className="h3 fw-bold m-3 mb-2"><i class="bi bi-person-workspace"></i> Doświadczenie</label>
                            
                            <p className="h5 m-3 ms-4">W terminie 04.10-30.10.2021 odbyłem praktyki zawodowe w RZPWE opole, nauczyłem się tam podstaw JavaScripta, pracowałem z serwerami linux ubuntu (ftp, postfix), przygotowywałem sprzęt do pracy biurowej</p>
                        
                        </div>
                        <div className="w-100">
                            <label className="h3 fw-bold m-3"><i class="bi bi-clipboard-check-fill"></i> Kursy</label>
                            <p className="h6 m-2 ms-5">Aktualnie (koniec planowany na czerwiec 2022)</p>
                            <p className="h5 m-3 ms-4">Kurs kwalifikacji zawodowych INF02 (technik Programista)</p><br/>
                            <p className="h6 m-2 ms-5">Aktualnie (koniec planowany na czerwiec 2022)</p>
                            <p className="h5 m-3 ms-4">Cisco IT Essentials: PC Hardware and Software</p><br/>
                            <p className="h6 m-2 ms-5">Aktualnie (koniec planowany na czerwiec 2022)</p>
                            <p className="h5 m-3 ms-4">Cisco CCNAv7: Introduction to Networks</p><br/>
                        
                        </div>
                        <div className="w-100">
                            <label className="h3 fw-bold m-3"><i class="bi bi-puzzle-fill"></i> Umiejętności</label>
                            <p className="h5 m-3 ms-4">Znajomość HTML, CSS, Bootstrap</p>
                            <p className="h5 m-3 ms-4">Znajomość podstaw React.js, Node.js javascript, php</p>
                            <p className="h5 m-3 ms-4">Biegła znajomość języka angielskiego na poziomie B2</p>
                            <p className="h5 m-3 ms-4">Prawo jazdy kat. B</p>
                        
                        </div>
                        <div className="w-100">
                            <label className="h3 fw-bold m-3"><i class="bi bi-compass-fill"></i> Zainteresowania</label><br/>
                            <i className=" ms-4 bi bi-dot"></i><label className="h5 m-3 ms-4">ZHR, przewodnik Harcerz Orli, prowadzę drużynę harcerzy w Glubczycach</label><br/>
                            <i className=" ms-4 bi bi-dot"></i><label className="h5 m-3 ms-4">Programowanie webowe</label><br/>
                            <i className=" ms-4 bi bi-dot"></i><label className="h5 m-3 ms-4">Wspinaczka</label><br/>
                            <i className=" ms-4 bi bi-dot"></i><label className="h5 m-3 ms-4">Jazda na rowerze</label><br/>
                            <i className=" ms-4 bi bi-dot"></i><label className="h5 m-3 ms-4">Muzyka, chóralistyka, gra na gitarze</label><br/>
                            <i className=" ms-4 bi bi-dot"></i><label className="h5 m-3 ms-4">Podróżowanie</label><br/>
                        
                        </div>
                    </div>
                    <div className="col-4 bg-secondary">
                        <div className="justify-content-center text-center">
                            <img className="w-75 p-3 mt-3" src={me} />
                        </div>
                        <div className="m-3">
                            <div>
                                <h3>Dane osobowe:</h3>
                                <div className="m-3">
                                    <i class="bi bi-telephone-fill"></i><label className="ms-3 h5">Telefon:</label><br/>
                                    <label className="ms-5 h5">669 338 493</label><br />
                                    <i class="bi bi-envelope-fill"></i><label className="ms-3 h5">Email:</label><br/>
                                    <label className="ms-5 h5">lukaszkepa<wbr/>2003@gmail.com</label><br />
                                    <i class="bi bi-geo-alt-fill"></i><label className="ms-3 h5">Adres:</label><br/>
                                    <label className="ms-5 h5">Zubrzyce, ul. Spadzista 10, 48-100 Głubczyce</label><br />
                                    <i class="bi bi-calendar-check-fill"></i><label className="ms-3 h5">Data urodzenia:</label><br/>
                                    <label className="ms-5 h5">20.07.2003 r.</label><br />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
};


export default CV;
