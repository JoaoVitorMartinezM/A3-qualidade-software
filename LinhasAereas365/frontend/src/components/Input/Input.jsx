import { forwardRef } from "react";
import Text from "../Text/Text";

const Input = forwardRef(
  ({ labelText, helperText, inputName, data, ...props }, ref) => {
    return (
      <>  
          <Text color='orange'>{labelText}</Text>
          <input name={inputName} value={data} ref={ref} {...props}/>
          {!!helperText && <span>Propriedade inválida</span>}
      </>          
    );
  },
);

export default Input;