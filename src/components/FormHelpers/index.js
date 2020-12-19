// Helpers for gridded forms with bootstrap styling
// to avoid overloading jsx with col specifiers

export default {
  Row: ({
    children
  }) => (
    <div className="form-row justify-content-center">{children}</div>
  ),
  Group: ({
    children,
    width
  }) => {
    const cols = (width => {
      switch(width) {
        case "half": 
          return "col-10 col-sm-10 col-md-5 col-lg-4 col-xl-3";
        case "full": default:
          return "col-10 col-sm-10 col-md-10 col-lg-8 col-xl-6";
      }
    })(width);
    return <div className={"form-group "+cols}>{children}</div>
  }
}
