export const getErrorMessagesByPropertyName = (
  errorObject: Record<any, string>,
  propertyPath: string
) => {
  // errorObject = error, propertyPath = "admin.name.firstName"
  const properties = propertyPath.split(".");
  // property = ["admin", "name", "firstName"]
  let error = errorObject;
  for (let prop of properties) {
    if (error[prop]) {
      error[prop] = error[prop];
    } else {
      return undefined;
    }
  }
  return error.message;
};
