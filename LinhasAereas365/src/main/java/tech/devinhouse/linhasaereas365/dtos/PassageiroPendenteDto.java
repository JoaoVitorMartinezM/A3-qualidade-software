package tech.devinhouse.linhasaereas365.dtos;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;


@Data
public class PassageiroPendenteDto {

    @NotNull(message = "{campo.obrigatorio}")
    @Digits(integer = 11, fraction = 0, message = "{campo.invalido}")
    private Long cpf;

    @NotBlank(message = "{campo.obrigatorio}")
    private String nome;
}
