export function validateEmail(email) {
  /*1 checks all characters except for the set for example john john.smith
    2 checks for any characters enclosed by quotes
    3 followed by @ with either an ip address or any alpa-characters, -, or digits
    4 .followed by 2 or more alpha-characters
    */
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
