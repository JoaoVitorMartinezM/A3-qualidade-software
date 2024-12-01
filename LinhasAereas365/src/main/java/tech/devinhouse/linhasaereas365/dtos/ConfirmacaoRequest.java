package tech.devinhouse.linhasaereas365.dtos;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;



@Data
@AllArgsConstructor
public class ConfirmacaoRequest {
    @NotNull(message = "{campo.obrigatorio}")
    @Digits(integer = 11, fraction = 0, message = "{campo.invalido}")
    private Long cpf;

    @NotEmpty(message = "{campo.obrigatorio}")
    @Pattern(regexp = "^\\d[a-fA-F]$", message = "{campo.invalido}")
    private String assento;

    @NotNull(message = "{campo.obrigatorio}")
    private Boolean malasDespachadas;
}
