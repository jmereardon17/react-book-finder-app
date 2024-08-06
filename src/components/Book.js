import React from 'react';

const Book = (props) => {
  return (
    <div className="col-md-6 col-lg-4 mb-3">

      <div className="card">
        <div className="row no-gutters">

          <div className="col-3 col-md-4 pr-1 p-2 align-self-center perspective">
            <a className="book-link" href={props.previewLink} target="_blank" rel="noopener noreferrer">
              <div className="cover" style={{ background: `url("${props.thumbnail}") 0% 0% / 100% 100%` }}>
                <span className="glasses-icon"></span>
              </div>
            </a>
          </div>

          <div className="col-9 col-md-8 pt-3 pb-2">
            <div className="card-body py-0 px-2 pr-2 d-flex flex-column h-100">
              <h5 className="card-title text-dark mb-2" title={props.title}>{props.title}</h5>
              <h6 className="authors text-black-50 mb-2" style={Array.isArray(props.authors) && props.authors.length > 1 ? { fontSize: '.8rem' } : null}>
                {Array.isArray(props.authors) && props.authors.length > 1 ? props.authors.join(', ') : props.authors}
              </h6>
              <a className="book-details text-info mt-auto align-self-end mr-2" href={props.infoLink} target="_blank" rel="noopener noreferrer">Details</a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Book;