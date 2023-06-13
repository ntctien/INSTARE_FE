import { useState } from "react";

const objectMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

const useForm = (fieldValues) => {
  const [values, setValues] = useState(objectMap(fieldValues, (v) => ""));
  const [errors, setErrors] = useState(objectMap(fieldValues, (v) => null));

  const validate = (name, value) => {
    if (value === "" && fieldValues[name].require) {
      return "This field is required";
    }
    if (fieldValues[name].validator) return fieldValues[name].validator(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (errors[name] != null) {
      setErrors((prev) => {
        return { ...prev, [name]: validate(name, value) };
      });
    }
  };

  const validateForm = () => {
    let errorObj = {};
    let valid = true;
    for (const inputField in values) {
      const error = validate(`${inputField}`, values[inputField]);
      if (error != null) valid = false;
      Object.assign(errorObj, {
        [inputField]: error,
      });
    }
    return { errorObj, valid };
  };

  const handleSubmit = async (e, onSubmitValid) => {
    e.preventDefault();
    const { errorObj, valid } = validateForm();
    if (valid) {
      await onSubmitValid();
    } else {
      setErrors(errorObj);
    }
  };

  const getInputProps = (name) => {
    return {
      name,
      value: values[name],
      onChange: handleInputChange,
      error: errors[name],
    };
  };

  const setFieldError = (name, value) => {
    setErrors((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const clearForm = () => {
    setValues(objectMap(fieldValues, (v) => ""));
  };

  return {
    values,
    errors,
    setValues,
    setFieldError,
    handleSubmit,
    getInputProps,
    clearForm,
  };
};

export default useForm;
