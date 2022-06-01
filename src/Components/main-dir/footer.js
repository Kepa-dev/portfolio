
import React from "react";
import { Link } from 'react-router-dom';

let Footer = () => {
  return (
    <footer class="bg-light text-center text-lg-start mt-5">

      <div class="container p-4">

        <div class="row">

          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">O Stronie</h5>

            <p>
             Aplikacja powstała jako własne pole treningowe do nauki React.js i Node.js, dlatego moim zdaniem jest najlepszym pokazem moich umiejętności.
             
            </p>
          </div>

          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Linki</h5>
              <Link to="/"><button type="button" className=" m-1 btn btn-secondary btn-sm">Home</button></Link>
              
              <Link to="/tictac"><button type="button" className=" m-1 btn btn-secondary btn-sm">Kółko-krzyżyk</button></Link>

              <Link to="/tasks"><button type="button" className="m-1 btn btn-secondary btn-sm">Lista zadań</button></Link>
              
              <Link to="/gallery"><button type="button" className="m-1 btn btn-secondary btn-sm">Galleria</button></Link>
              
            <p>
              
            </p>
          </div>

        </div>

      </div>

      

    </footer>
  )
};

export default Footer; 