import { InputFormStyled } from "./styles";
import Text from "../Text/Text"
import { forwardRef } from "react";

// const InputForm = (({text, options, helperText, register }) => {

//     return ( 
//         <InputFormStyled>
//             <Text color="orange">{text}</Text>
//             <select ref={register}>
//                 {options?.map((item) => (
//                     <option key={item.cpf} 
//                     value={item.cpf}>
//                         {/* {item.cpf ? item.cpf + ' -' : item} {item.nome ? item.nome : ''} */}
//                         {item.cpf} - {item.nome}
//                     </option>
                    
//                 ))
//                 }
//                 <option selected>sdasda</option>
//             </select>
//             {!!helperText && <span className='error'>{helperText}</span>}
//         </InputFormStyled>
//      );
// })

const InputForm = forwardRef(
    ({ labelText, helperText, inputName, data, ...props }, ref) => {
      return (
        <>
        <Text color="orange">{labelText}</Text>
          <select className="inputSelect" id={labelText} name={inputName} {...props} ref={ref}>
            <option value="">selecione</option>
            {data.map((item) => (
              <option key={item.cpf ? item.cpf + ' -' : item.assento} value={item.cpf ? parseInt(item.cpf) : item.assento}>
                {item.cpf ? `${item?.cpf} - ${item?.nome}` : item.assento}
              </option>
            ))}
          </select>
        {!!helperText && <span>Inválido</span>}
        </>          
      );
    },
  );

// const InputGroup = forwardRef(({id ,labelText, helperText, ...props}, ref) => {
//     return(
//         <InputGroupStyled>
//             {labelText &&
//             <Label htmlFor={id}>
//                 {labelText}
//             </Label>
//             }
//             <Input id={id} ref={ref} {...props} />

//             {!!helperText &&

//                 <Span>
//                     {helperText}
//                 </Span>

//             }
            
            
//         </InputGroupStyled>
//     )
// })

export default InputForm;