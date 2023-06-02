import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts"

let aluno = 'Marcelo'
let professores = ['João', 'Janette', 'Matilde', 'Cleide']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "José") //Verifica se dentro da variável aluno possui 'José'
})
