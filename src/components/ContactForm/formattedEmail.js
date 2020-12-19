export const formattedEmail = (
  formFields,
  useHtml
) => (
  (useHtml ? (
    '<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN” “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>' +
    '<html xmlns=“https://www.w3.org/1999/xhtml”>' +
      '<head>' +
        '<title>CTitle</title>' +
        '<meta http–equiv=“Content-Type” content=“text/html; charset=UTF-8” />' +
        '<meta http–equiv=“X-UA-Compatible” content=“IE=edge” />' +
        '<meta name=“viewport” content=“width=device-width, initial-scale=1.0 “ />' +
      '</head>' +
      '<body>'
  ):'') +
        formattedBody(formFields, useHtml) +
  (useHtml ? (
      '</body>' +
    '</html>'
  ):'')
);

const formattedBody = (
  formFields,
  useHtml
) => {
  formFields.message = formFields.message.replace('\n', '<br/>');
  const br = useHtml ? '<br/>' : '\r\n';
  const hr = useHtml ? '<hr/>' : '';
  // Email Intro
  var emailBody = (
  // HTML header
    "Hi " + formFields.firstName + "," +
    br +
    br +
    "TODO: Form Submission Email Message" +
    br +
    br +
    "TODO: Signature" +
    hr +
    "Submitted Inquiry:" +
    br
  );
  // Email form submission info entered
  for (const key in formFields) {
    const value = (key === 'message') ? formFields[key].replace('\n', '<br/>')
                  : formFields[key];
    emailBody += (
      (useHtml ? '<b>' : '') +
        key
          // insert space before upper case chars
          .replace(/([A-Z])/g, ' $1')
          // uppercase first char
          .replace(/^./, (str) => str.toUpperCase()) +
          ":" +
      (useHtml ? '</b>' : '') +
      br +
      value +
      br +
      br
    );
  }

  return emailBody;
}
