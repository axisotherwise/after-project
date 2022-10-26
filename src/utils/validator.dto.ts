import { validate } from "class-validator";

export const validatorDto = async (...dtos: object[]) => {
    for (const dto of dtos) {
        const errors = await validate(dto);

        if (errors.length > 0) {
            return errors.map(error => console.log(error.constraints));
        }  
    }
};