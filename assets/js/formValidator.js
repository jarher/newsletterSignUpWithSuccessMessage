const $1ce29ab7bbbe1f7f$export$95e917307336db5f = (requiredProperties, data)=>{
    try {
        $1ce29ab7bbbe1f7f$var$validateRequiredProperties(requiredProperties, data);
    } catch (error) {
        console.error(error.message);
    }
};
const $1ce29ab7bbbe1f7f$var$validateRequiredProperties = (requiredProperties, data)=>{
    const missingProperties = requiredProperties.filter((property)=>!data.hasOwnProperty(property));
    if (missingProperties.length > 0) throw new Error(`Missing required properties: ${missingProperties.join(", ")}`);
};


const $6749e95de08415a5$export$57bd624f3f90cd8c = (key, initialValues)=>{
    document.getElementById(key).value = initialValues[key];
};
const $6749e95de08415a5$export$3e899390e3c4c13d = (errorMessage, id, rest)=>{
    const { errorOutputClass: errorOutputClass, formControlClass: formControlClass } = rest;
    const parentContainer = document.getElementById(id).parentElement;
    parentContainer.querySelector(`.${errorOutputClass}`).innerText = errorMessage;
    let isInvalidValue = errorMessage ? true : false;
    // include class attribute to input parent container in case of errors
    isInvalidValue ? parentContainer.classList.add(formControlClass) : parentContainer.classList.remove(formControlClass);
    return isInvalidValue;
};


class $0cd3d145e7442495$var$Validator {
    static validate(value, validatorSchemaValues) {
        // default regular expressions
        const stringRegExp = /^[a-zA-Z]+$/;
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const numberRegExp = /^[0-9]+$/;
        const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        const { type: type, errors: errors } = validatorSchemaValues;
        const testingErrorProperties = {
            string: {
                regExp: stringRegExp,
                error: errors.message
            },
            email: {
                regExp: emailRegExp,
                error: errors.message
            },
            password: {
                regExp: passwordRegExp,
                error: errors.message
            },
            number: {
                regExp: numberRegExp,
                error: errors.message
            },
            tel: {
                regExp: phoneRegExp,
                error: errors.message
            }
        };
        if (errors.hasOwnProperty("required") && !value) return errors.required;
        return $0cd3d145e7442495$var$Validator.testingError(testingErrorProperties[type], validatorSchemaValues, value);
    }
    static testingError({ regExp: regExp, error: error }, validatorSchemaValues, value) {
        const { type: type, errors: errors } = validatorSchemaValues;
        const patternRegExpValue = validatorSchemaValues.regExp || regExp;
        const lengthError = $0cd3d145e7442495$var$Validator.testingValueLengthError(type, errors, value);
        const customValidation = $0cd3d145e7442495$var$Validator.customValidation(errors, value);
        if (type === "password" && customValidation) return customValidation;
        if (lengthError) return lengthError;
        if (!patternRegExpValue.test(value)) return error;
        return customValidation;
    }
    static testingValueLengthError(type, errors, value) {
        const valueToEvaluate = type === "number" ? Number(value).toString().length : value.length;
        if (errors.hasOwnProperty("min")) {
            if (valueToEvaluate < errors.min.value) return errors.min.message;
        }
        if (errors.hasOwnProperty("max")) {
            if (valueToEvaluate > errors.max.value) return errors.max.message;
        }
    }
    static customValidation(errors, value) {
        if (errors.hasOwnProperty("customValidation")) return errors.customValidation(value);
    }
}
var $0cd3d145e7442495$export$2e2bcd8739ae039 = $0cd3d145e7442495$var$Validator;



const $112a2119e1f5686f$export$5656a047139a2d63 = (inputId, validatorSchema, rest)=>{
    const errorMessage = $112a2119e1f5686f$export$d33218a0cdcddb33(inputId, validatorSchema);
    return (0, $6749e95de08415a5$export$3e899390e3c4c13d)(errorMessage, inputId, rest);
};
const $112a2119e1f5686f$export$d33218a0cdcddb33 = (inputId, validatorSchema)=>{
    const value = document.getElementById(inputId).value;
    const validatorSchemaValues = validatorSchema[inputId];
    const validateResponse = (0, $0cd3d145e7442495$export$2e2bcd8739ae039).validate(value, validatorSchemaValues);
    if (validateResponse === undefined) return "";
    return validateResponse;
};


const $89b6e1f04c77ec74$export$3374cfc036197cff = (changeErrorStateProps, inputId)=>{
    changeErrorStateProps.inputId = inputId;
    $89b6e1f04c77ec74$export$c51fbfce0af598e(changeErrorStateProps);
};
const $89b6e1f04c77ec74$export$c51fbfce0af598e = ({ inputId: inputId, validatorSchema: validatorSchema, hasErrors: hasErrors, rest: rest })=>{
    let isInvalid = (0, $112a2119e1f5686f$export$5656a047139a2d63)(inputId, validatorSchema, rest);
    hasErrors.forEach((object)=>{
        if (object.inputId === inputId) object.isInvalid = isInvalid;
    });
};
const $89b6e1f04c77ec74$export$f11f335c7508d8fc = (inputFieldKeys, initialValues)=>{
    return inputFieldKeys.map((key)=>{
        (0, $6749e95de08415a5$export$57bd624f3f90cd8c)(key, initialValues);
        return {
            inputId: key,
            isInvalid: false
        };
    });
};


const $6628b07db2ea2689$var$addHandler = ({ handler: handler, eventValidatorProps: eventValidatorProps })=>{
    const handlerProps = {
        initialValuesKeys: eventValidatorProps.initialValuesKeys,
        changeErrorStateProps: {
            validatorSchema: eventValidatorProps.validatorSchema,
            hasErrors: eventValidatorProps.hasErrors,
            rest: eventValidatorProps.rest
        }
    };
    handler(handlerProps);
};
const $6628b07db2ea2689$var$submitEventHandler = ({ initialValuesKeys: initialValuesKeys, changeErrorStateProps: changeErrorStateProps })=>{
    // run validation if triggered submit event
    const { hasErrors: hasErrors, rest: rest } = changeErrorStateProps;
    document.querySelector("form").addEventListener("submit", (e)=>{
        e.preventDefault();
        initialValuesKeys.forEach((inputId)=>{
            (0, $89b6e1f04c77ec74$export$3374cfc036197cff)(changeErrorStateProps, inputId);
        });
        if (hasErrors.length > 0) {
            const hasInvalidValues = hasErrors.map((el)=>el.isInvalid).some((value)=>value === true);
            if (!hasInvalidValues) {
                const inputValues = initialValuesKeys.map((id)=>{
                    return {
                        idValue: id,
                        value: document.getElementById(id).value
                    };
                });
                if (rest.onSubmit) rest.onSubmit(inputValues);
            }
        }
    });
};
const $6628b07db2ea2689$var$blurEventHandler = ({ changeErrorStateProps: changeErrorStateProps })=>{
    //run validation if triggered blur event
    document.querySelectorAll("input").forEach((input)=>{
        input.addEventListener("blur", (e)=>{
            const inputId = e.target.id;
            (0, $89b6e1f04c77ec74$export$3374cfc036197cff)(changeErrorStateProps, inputId);
        });
    });
};
const $6628b07db2ea2689$export$d8cf0e8d53b53b90 = ({ validatorSchema: validatorSchema, formEvents: formEvents, ...rest }, initialValuesKeys, hasErrors)=>{
    formEvents.map((event)=>({
            handler: event === "blur" ? $6628b07db2ea2689$var$blurEventHandler : $6628b07db2ea2689$var$submitEventHandler,
            eventValidatorProps: {
                initialValuesKeys: initialValuesKeys,
                validatorSchema: validatorSchema,
                hasErrors: hasErrors,
                rest: rest
            }
        })).forEach((formEventsObject)=>$6628b07db2ea2689$var$addHandler(formEventsObject));
};



class $152896b9ac2eb424$var$ValidatorInitialize {
    constructor(formValidationData, runFormEvents, setInitialInputStates){
        // this.validateRequiredProperties(formValidationData);
        this.inputFieldKeys = Object.keys(formValidationData.initialValues);
        this.validationErrors = setInitialInputStates(this.inputFieldKeys, formValidationData.initialValues);
        runFormEvents(formValidationData, this.inputFieldKeys, this.validationErrors);
    }
    static resetValues() {
        Array.from(document.querySelectorAll("input")).forEach((input)=>input.value = "");
    }
}
var $152896b9ac2eb424$export$2e2bcd8739ae039 = $152896b9ac2eb424$var$ValidatorInitialize;


//initialize new form validator
//optionally return a resetValues function for restart input values.
//that function is invoke inside onSubmit called in formValidation object
const $cf838c15c8b009ba$var$validate = function() {
    const formValidation = (data)=>{
        const requiredProperties = [
            "initialValues",
            "validatorSchema",
            "formEvents",
            "errorOutputClass",
            "formControlClass"
        ];
        // throw error if any formValidation property is missing
        (0, $1ce29ab7bbbe1f7f$export$95e917307336db5f)(requiredProperties, data);
        // throw error if any validatorSchema property is missing
        for (let validatorKey of Object.keys(data.validatorSchema)){
            const requiredProperties = [
                "type",
                "errors"
            ];
            (0, $1ce29ab7bbbe1f7f$export$95e917307336db5f)(requiredProperties, data.validatorSchema[validatorKey]);
        }
        new (0, $152896b9ac2eb424$export$2e2bcd8739ae039)(data, (0, $6628b07db2ea2689$export$d8cf0e8d53b53b90), (0, $89b6e1f04c77ec74$export$f11f335c7508d8fc));
    };
    const resetValues = (0, $152896b9ac2eb424$export$2e2bcd8739ae039).resetValues;
    return {
        formValidation: formValidation,
        resetValues: resetValues
    };
}();
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$validate;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=formValidator.js.map
