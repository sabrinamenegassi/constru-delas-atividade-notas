nome1= prompt("Digite o nome do aluno 1: ")
n1= prompt("Digite as notas do aluno 1, separadas por virgula: ")
    
nome2= prompt("Digite o nome do aluno 2: ")
n2= prompt("Digite as notas do aluno 2, separadas por virgula: ")
    
nome3= prompt("Digite o nome do aluno 3: ")
n3= prompt("Digite as notas do aluno 3, separadas por virgula: ")

nome4= prompt("Digite o nome do aluno 4: ")
n4= prompt("Digite as notas do aluno 4, separadas por virgula: ")

nome5= prompt("Digite o nome do aluno 5: ")
n5= prompt("Digite as notas do aluno 5, separadas por virgula: ")
   
notaTotal1 = n1.split(',').map(nota => Number(nota)).reduce((acumulador, valor) => acumulador + valor)

notaTotal2 = n2.split(',').map(nota => Number(nota)).reduce((acumulador, valor) => acumulador + valor)

notaTotal3 = n3.split(',').map(nota => Number(nota)).reduce((acumulador, valor) => acumulador + valor)

notaTotal4 = n4.split(',').map(nota => Number(nota)).reduce((acumulador, valor) => acumulador + valor)

notaTotal5 = n5.split(',').map(nota => Number(nota)).reduce((acumulador, valor) => acumulador + valor)

media1= notaTotal1/3
media2= notaTotal2/3
media3= notaTotal3/3
media4= notaTotal4/3
media5= notaTotal5/3

alert(`Aluno ${nome1} foi ${media1 >= 5 ? 'aprovado' : 'reprovado'}`)
alert(`Aluno ${nome2} foi ${media2 >= 5 ? 'aprovado' : 'reprovado'}`)
alert(`Aluno ${nome3} foi ${media3 >= 5 ? 'aprovado' : 'reprovado'}`)
alert(`Aluno ${nome4} foi ${media4 >= 5 ? 'aprovado' : 'reprovado'}`)
alert(`Aluno ${nome5} foi ${media5 >= 5 ? 'aprovado' : 'reprovado'}`)