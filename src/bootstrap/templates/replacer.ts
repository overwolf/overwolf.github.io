export default (
  template: string,
  operations: [key: string | RegExp, value: string][],
) =>
  operations.reduce(
    (lastTemplate, operation) => lastTemplate.replaceAll(...operation),
    template,
  );
