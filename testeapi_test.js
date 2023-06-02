import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Isabelli', 'Roberto', 'Kevin']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "José") //Verifica se dentro da variável aluno possui 'José'
})