import React from 'react';

import platziconfLogoImage from '../images/platziconf-logo.svg';
import error404 from '../images/404Error.png';


 function NotFound() {
    return (
        <div className="">
        <div className="">
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>¡Oops!Algo ha salido mal</h1>
            </div>

            <div className="d-none d-md-block col-md-8">
              <img
                src={error404}
                alt="Error 404"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
    }

export default NotFound;

