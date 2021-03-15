export function validarCPF(inputCPF: string){
  var soma = 0;
  var resto;

  if(inputCPF == '00000000000') return false;
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);

  resto = (soma * 10) % 11;

  if((resto == 10) || (resto == 11)) resto = 0;
  if(resto != parseInt(inputCPF.substring(9, 10))) return false;

  soma = 0;
  for(let i = 1; i <= 10; i++)
    soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
  resto = (soma * 10) % 11;

  if((resto == 10) || (resto == 11)) resto = 0;
  if(resto != parseInt(inputCPF.substring(10, 11))) return false;
  return true;
}
