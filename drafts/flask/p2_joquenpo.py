# ======= Limpa o terminal (somente Windows) =======

import os
os.system('cls' if os.name == 'nt' else 'clear')

# ======= importa random.choice() e time.sleep() =======

from random import choice
from time import sleep

# ======= título do jogo =======

titulo = '=+=+=+=+=+=+=+=+=+= JOQUENPÔ! =+=+=+=+=+=+=+=+=+='
print(titulo.center(80,"="))
print()
sleep(1)
subtit = '===== Você v. Computador ====='
print(subtit.center(80,"="))
print()
sleep(1)

# ======= o jogo =======

while True:

    a = 0
    r = 0
    c = 0
    j = 0
    i = 0
    
    r = int(input('Quantas rodadas você quer jogar? '))
    
    print()
    sleep(1)

    print('Vamos lá!')

    print()
    sleep(1)

    for a in range(r):

        i += 1
        elementos = ["PEDRA", "PAPEL", "TESOURA"]
        computador = choice(elementos)
        
        print(f'===== {i}ᵃ rodada: escolha sua jogada =====')
        print()
        sleep(1)
        jogador = input(f'Digite 1 para PEDRA, 2 para PAPEL, 3 para TESOURA: ')

        if int(jogador) == 1:
            jogador = 'PEDRA'
        elif int(jogador) == 2:
            jogador = 'PAPEL'
        else:
            jogador = 'TESOURA'

        print()
        sleep(1)
        
        print('+ JÓ +'.center(80,"="))

        print()
        sleep(1)
        
        print(f'+ QUEN +'.center(80,"="))
        print()
        sleep(1)

        print(f'+ PÔ! +'.center(80,"="))

        print()
        sleep(1)

        print(f"Você: {jogador}")
        print(f"Computador: {computador}")

        print()
        sleep(1)

        if jogador == computador:
            print(f"Ambos escolheram {jogador}. Empatou!")
            print()
            sleep(1)

        elif jogador == "PEDRA":
            if computador == "TESOURA":
                print("PEDRA quebra TESOURA! Você ganhou!")
                j += 1
                print()
                sleep(1)

            else:
                print("PAPEL cobre a PEDRA! Você perdeu.")
                c += 1
                print()
                sleep(1)

        elif jogador == "PAPEL":
            if computador == "PEDRA":
                print("PAPEL cobre a PEDRA! Você ganhou!")
                j += 1
                print()
                sleep(1)
            else:
                print("TESOURA corta o PAPEL! Você perdeu.")
                c += 1
                print()
                sleep(1)

        elif jogador == "TESOURA":
            if computador == "PAPEL":
                print("TESOURA corta o PAPEL! Você ganhou!")
                j += 1
                print()
                sleep(1)
            else:
                print("PEDRA quebra TESOURA! Você perdeu.")
                c += 1
                print()
                sleep(1)

    print(f'Nessas {r} rodadas:')
    print()
    sleep(1)

    print(f'Você ganhou {j} vezes.')
    print()
    sleep(1)

    print(f'O computador ganhou {c} vezes.')
    print()
    sleep(1)

    if j > c:
        print('Você é o grande campeão!')
        print()
        sleep(1)

    elif j == c:
        print('Grande empate!')
        print()
        sleep(1)

    else:
        print('O computador é o grande campeão!')
        print()
        sleep(1)

    p = input('Gostaria de jogar novamente (s/n)?')
    print()
    sleep(1)
    
    if p != 's':
        break