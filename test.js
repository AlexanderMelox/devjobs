function getMillisecondsBetweenTwoDates(date1, date2) {
  return (date2 - date1) / 1000;
}

function isEmailValid(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    email
  );
}

// check if boolean is true
function isTrue(bool) {
  return bool === true;
}

// create a div and add a class through parameters
function createDiv(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

// create a react functional component
function createReactComponent(componentName, props) {
  return React.createElement(componentName, props);
}
